"""Audit selected Canvas courses for Generative-AI-related content.

Reads CANVAS_API_URL and CANVAS_API_TOKEN from .env, discovers courses by SIS ID,
and saves metadata plus matching page/announcement/file content for reporting.
Secrets are never written to the output.
"""
from __future__ import annotations

import html
import json
import re
import sys
from pathlib import Path
from urllib.parse import urljoin

import requests


ROOT = Path(__file__).resolve().parent
OUT = ROOT / "canvas_gai_audit"
KEYWORDS = re.compile(
    r"(?i)(generative\s+(?:artificial\s+intelligence|AI)|GenAI|GAI\b|ChatGPT|"
    r"Microsoft\s+Copilot|Copilot\b|large\s+language\s+model|\bLLM(?:s)?\b|"
    r"artificial\s+intelligence|\bAI\s+(?:policy|use|tools?|generated|assisted)|"
    r"academic\s+integrity)"
)


def load_env(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    for raw in path.read_text(encoding="utf-8-sig").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def strip_html(value: str | None) -> str:
    if not value:
        return ""
    value = re.sub(r"(?is)<(?:script|style).*?>.*?</(?:script|style)>", " ", value)
    value = re.sub(r"(?s)<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


class Canvas:
    def __init__(self, base: str, token: str):
        base = base.rstrip("/") + "/"
        self.api = base if base.rstrip("/").endswith("/api/v1") else urljoin(base, "api/v1/")
        self.session = requests.Session()
        self.session.headers.update({"Authorization": f"Bearer {token}"})

    def get(self, endpoint: str, params=None, allow_404: bool = False):
        url = urljoin(self.api, endpoint.lstrip("/"))
        response = self.session.get(url, params=params, timeout=60)
        if allow_404 and response.status_code in (401, 403, 404):
            return None
        response.raise_for_status()
        return response.json()

    def all(self, endpoint: str, params=None):
        url = urljoin(self.api, endpoint.lstrip("/"))
        params = dict(params or {})
        params.setdefault("per_page", 100)
        rows = []
        while url:
            response = self.session.get(url, params=params, timeout=60)
            response.raise_for_status()
            payload = response.json()
            rows.extend(payload if isinstance(payload, list) else [payload])
            url = response.links.get("next", {}).get("url")
            params = None
        return rows


def relevant(*values) -> bool:
    return bool(KEYWORDS.search(" ".join(strip_html(str(v)) for v in values if v)))


def main() -> int:
    env = load_env(ROOT / ".env")
    canvas = Canvas(env["CANVAS_API_URL"], env["CANVAS_API_TOKEN"])
    OUT.mkdir(exist_ok=True)
    audit = {"query": "BIOSX0Y-202627; X=1..2, Y=1..9", "courses": [], "unresolved": []}

    for x in range(1, 3):
        for y in range(1, 10):
            sis = f"BIOS{x}0{y}-202627"
            try:
                course = canvas.get(f"courses/sis_course_id:{sis}", allow_404=True)
            except requests.RequestException as exc:
                audit["unresolved"].append({"sis_course_id": sis, "reason": str(exc)})
                continue
            if not course:
                audit["unresolved"].append({"sis_course_id": sis, "reason": "not found or not authorised"})
                continue

            cid = course["id"]
            record = {
                "id": cid,
                "sis_course_id": sis,
                "name": course.get("name"),
                "course_code": course.get("course_code"),
                "workflow_state": course.get("workflow_state"),
                "start_at": course.get("start_at"),
                "end_at": course.get("end_at"),
                "pages": [], "announcements": [], "files": [], "errors": [],
            }

            try:
                for page in canvas.all(f"courses/{cid}/pages"):
                    full = canvas.get(f"courses/{cid}/pages/{page['url']}")
                    body = strip_html(full.get("body"))
                    if relevant(full.get("title"), body):
                        record["pages"].append({
                            "title": full.get("title"), "url": full.get("html_url"),
                            "updated_at": full.get("updated_at"), "published": full.get("published"),
                            "body_text": body,
                        })
            except requests.RequestException as exc:
                record["errors"].append({"area": "pages", "reason": str(exc)})

            try:
                for ann in canvas.all("announcements", {"context_codes[]": f"course_{cid}", "active_only": "false"}):
                    message = strip_html(ann.get("message"))
                    if relevant(ann.get("title"), message):
                        record["announcements"].append({
                            "title": ann.get("title"), "url": ann.get("html_url"),
                            "posted_at": ann.get("posted_at"), "message_text": message,
                        })
            except requests.RequestException as exc:
                record["errors"].append({"area": "announcements", "reason": str(exc)})

            try:
                for file in canvas.all(f"courses/{cid}/files"):
                    if relevant(file.get("display_name"), file.get("filename"), file.get("description")):
                        record["files"].append({
                            "id": file.get("id"), "display_name": file.get("display_name"),
                            "filename": file.get("filename"), "content_type": file.get("content-type"),
                            "updated_at": file.get("updated_at"), "size": file.get("size"),
                            "url": file.get("url"),
                        })
            except requests.RequestException as exc:
                record["errors"].append({"area": "files", "reason": str(exc)})

            audit["courses"].append(record)
            print(f"{sis}: {len(record['pages'])} pages, {len(record['announcements'])} announcements, {len(record['files'])} files")

    (OUT / "audit.json").write_text(json.dumps(audit, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Saved {OUT / 'audit.json'}; {len(audit['courses'])} courses found, {len(audit['unresolved'])} unresolved")
    return 0


if __name__ == "__main__":
    sys.exit(main())
