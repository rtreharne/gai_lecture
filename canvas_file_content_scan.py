"""Full-text scan document-like Canvas files for GenAI policy references."""
from __future__ import annotations

import io
import json
import re
import zipfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from xml.etree import ElementTree

import requests

from canvas_gai_audit import Canvas, KEYWORDS, ROOT, load_env, strip_html


OUT = ROOT / "canvas_gai_audit"
MAX_BYTES = 20 * 1024 * 1024
DOCUMENT_EXTENSIONS = {".pdf", ".docx", ".pptx", ".xlsx", ".txt", ".rtf", ".html", ".htm", ".csv"}


def office_text(data: bytes) -> str:
    chunks: list[str] = []
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        for name in archive.namelist():
            if name.endswith(".xml") and (
                name.startswith("word/") or name.startswith("ppt/slides/") or name.startswith("xl/")
            ):
                try:
                    root = ElementTree.fromstring(archive.read(name))
                    chunks.extend(node.text for node in root.iter() if node.text)
                except ElementTree.ParseError:
                    pass
    return " ".join(chunks)


def extract(data: bytes, extension: str) -> str:
    if extension == ".pdf":
        from pypdf import PdfReader
        return " ".join(page.extract_text() or "" for page in PdfReader(io.BytesIO(data)).pages)
    if extension in {".docx", ".pptx", ".xlsx"}:
        return office_text(data)
    return data.decode("utf-8", errors="replace")


def excerpt(text: str, span: int = 400) -> list[str]:
    clean = re.sub(r"\s+", " ", strip_html(text)).strip()
    results = []
    for match in KEYWORDS.finditer(clean):
        start, end = max(0, match.start() - span), min(len(clean), match.end() + span)
        item = clean[start:end]
        if not any(item in existing or existing in item for existing in results):
            results.append(item)
        if len(results) == 5:
            break
    return results


def scan_one(sis: str, metadata: dict) -> tuple[str, dict | None, dict | None]:
    name = metadata.get("display_name") or metadata.get("filename") or "unnamed"
    extension = Path(name).suffix.lower()
    try:
        response = requests.get(metadata["url"], timeout=90)
        response.raise_for_status()
        snippets = excerpt(extract(response.content, extension))
        match = None
        if snippets:
            match = {
                "id": metadata.get("id"), "display_name": name,
                "updated_at": metadata.get("updated_at"), "content_type": metadata.get("content-type"),
                "size": metadata.get("size"), "url": metadata.get("url"), "excerpts": snippets,
            }
        return sis, match, None
    except Exception as exc:
        return sis, None, {"sis_course_id": sis, "file": name, "reason": str(exc)}


def main() -> None:
    env = load_env(ROOT / ".env")
    canvas = Canvas(env["CANVAS_API_URL"], env["CANVAS_API_TOKEN"])
    audit_path = OUT / "audit.json"
    audit = json.loads(audit_path.read_text(encoding="utf-8"))
    results = {"scope": "document-like files <=20 MiB", "courses": [], "errors": []}
    candidates = []
    rows = {}
    for course in audit["courses"]:
        cid = course["id"]
        sis = course["sis_course_id"]
        row = {"sis_course_id": sis, "documents_scanned": 0, "documents_skipped": 0, "matches": []}
        rows[sis] = row
        try:
            files = canvas.all(f"courses/{cid}/files")
        except requests.RequestException as exc:
            results["errors"].append({"sis_course_id": course["sis_course_id"], "reason": str(exc)})
            continue
        for metadata in files:
            name = metadata.get("display_name") or metadata.get("filename") or "unnamed"
            extension = Path(name).suffix.lower()
            size = metadata.get("size") or 0
            if extension not in DOCUMENT_EXTENSIONS or size > MAX_BYTES:
                row["documents_skipped"] += 1
                continue
            candidates.append((sis, metadata))
    print(f"Scanning {len(candidates)} document-like files with 40 workers", flush=True)
    with ThreadPoolExecutor(max_workers=40) as pool:
        futures = [pool.submit(scan_one, sis, metadata) for sis, metadata in candidates]
        for index, future in enumerate(as_completed(futures), 1):
            sis, match, error = future.result()
            rows[sis]["documents_scanned"] += 1
            if match:
                rows[sis]["matches"].append(match)
            if error:
                results["errors"].append(error)
            if index % 50 == 0:
                print(f"Processed {index}/{len(candidates)}", flush=True)
    results["courses"] = [rows[c["sis_course_id"]] for c in audit["courses"]]
    for row in results["courses"]:
        print(f"{row['sis_course_id']}: scanned {row['documents_scanned']}, matched {len(row['matches'])}, skipped {row['documents_skipped']}", flush=True)
    (OUT / "file_content_scan.json").write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()
