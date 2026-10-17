"""Print selected policy-bearing Canvas documents for report synthesis."""
import io
import json
import re
import sys
from pathlib import Path

import requests

from canvas_file_content_scan import extract

root = Path(__file__).resolve().parent
scan = json.loads((root / "canvas_gai_audit" / "file_content_scan.json").read_text(encoding="utf-8"))
wanted = re.compile(r"(?i)(SoBS AI lecture_2627|Academic Integrity Declaration 2026-27|Module.?Handbook|Student Version MAIN|Introductory Lecture 202627)")
focus = re.compile(r"(?i)(generative|GenAI|GAI\b|Tier\s*[1-4]|declar|mandatory|prohibited|permitted|acceptable|unacceptable|grammar checker|own words)")
if len(sys.argv) > 1:
    wanted = re.compile(re.escape(sys.argv[1]), re.I)
if len(sys.argv) > 2:
    focus = re.compile(sys.argv[2], re.I)

for course in scan["courses"]:
    for item in course["matches"]:
        if not wanted.search(item["display_name"]):
            continue
        data = requests.get(item["url"], timeout=90).content
        text = re.sub(r"\s+", " ", extract(data, Path(item["display_name"]).suffix.lower()))
        print(f"\n### {course['sis_course_id']} :: {item['display_name']}")
        seen = set()
        for match in focus.finditer(text):
            snippet = text[max(0, match.start()-220):min(len(text), match.end()+520)]
            key = snippet[:300]
            if key in seen:
                continue
            seen.add(key)
            print(snippet)
            print("---")
