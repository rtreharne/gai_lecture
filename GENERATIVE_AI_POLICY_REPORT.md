# Generative AI policy in the School of Biosciences

**University of Liverpool, academic year 2026–27**  
**Audit date:** 15 October 2026  
**Scope:** Canvas courses with SIS codes `BIOSX0Y-202627`, where `X = 1–2` and `Y = 1–9`, cross-referenced against current University policy.

## Executive summary

The School of Biosciences follows the University of Liverpool's four-tier GenAI assessment framework and adds a stricter, operational disclosure regime. The practical rule for students is:

1. Check the GenAI tier and task-specific instructions for every assessment.
2. Do not let GenAI replace the student's own thinking or produce the main assessed content unless the stated tier and brief expressly require or permit that use.
3. Declare GenAI use for every School coursework submission in the required format, including what tool was used and how it was used. The School materials say the declaration goes before the answer and is excluded from the word count; for MCQs it is built into the question bank.
4. Keep a record of use for Tier 2–4 work. The School's current lecture advises disclosure even for brainstorming, planning and grammar checking.
5. Do not upload School teaching materials—including slides or rubrics—or personal, confidential, unpublished or restricted material to public/consumer AI tools.
6. Verify all outputs and references. Fabricated references/data, use beyond the permitted tier, false authorship, or a false declaration can become academic misconduct.

The School's 2026–27 lecture states the following local mark deductions for the GAI declaration:

- complete declaration: no deduction;
- declaration says “yes” but gives inadequate details: **2% deduction**;
- no declaration: **5% deduction**;
- declaring no use where use is later proven: referral for investigation as a false declaration.

These administrative deductions are separate from, and do not replace, the University's academic-integrity penalties for misuse. Under Appendix L, poor academic practice can cap an assessment at the minimum pass mark; a first Category 2 offence involving an unacceptable but acknowledged AI-generated task normally receives zero for the assessment; repeated Category 2 conduct normally results in zero for the module; and extensive, unacknowledged, deliberately deceptive use can reach Category 4, for which the normal consequences include zero for the module plus suspension or termination.

## Evidence and coverage

The Canvas API audit tested all 18 requested SIS codes. Fifteen courses were accessible; `BIOS107-202627`, `BIOS108-202627` and `BIOS109-202627` returned “not found or not authorised,” so no conclusion can be drawn about those three.

For the 15 accessible courses, the audit searched:

- page titles and full page bodies;
- announcement titles and full messages;
- file names and descriptions;
- the full text of 587 document-like files (PDF, DOCX, PPTX, XLSX, text, RTF, HTML and CSV, up to 20 MiB each).

The initial Canvas search found 8 relevant pages, 4 relevant announcements and 7 files with relevant names. The deeper file-content pass produced 48 keyword matches, which were manually separated into policy evidence, duplicate versions, teaching examples and false positives. All 587 eligible documents completed extraction without a hard failure. Another 287 files were excluded from full-text extraction because they were images, video/audio, archives, unsupported formats or over 20 MiB; filename/description matching was still applied to them. Two `GAI.jpg` resources were identified by filename but were not OCRed.

“No relevant item found” below therefore means no relevant searchable Canvas text or metadata in the audited scope on the audit date; it does not prove that no oral, unpublished, image-only, inaccessible or subsequently added guidance exists.

## School-wide Biosciences requirements

### Two different declarations

The School materials use “AI” for academic integrity in some places and “GAI” for generative artificial intelligence. They impose two distinct requirements:

- **Annual academic-integrity declaration/training.** The 2026–27 declaration covers all assessments submitted during the year. Students confirm that they have watched/listened to the School lecture, will follow Appendix L, and will familiarise themselves with GenAI guidance and make honest declarations where required. The BIOS105/205 materials set 23 October 2026 as the deadline for the annual declaration and the Academic Integrity and GenAI tutorial/quiz tasks; the School lecture says the Academic Integrity quiz threshold is 80% (12/15).
- **Per-assessment GAI declaration.** For each coursework submission, the School requires a statement of whether GenAI was used and, if so, the tools and manner of use. It must precede the answer, is not a separate document and is not included in the word count. MCQ assessments incorporate the declaration as a question.

Principal Canvas evidence: [2026–27 School declaration](https://canvas.liverpool.ac.uk/courses/94722/files/14501419), [2026–27 School AI lecture](https://canvas.liverpool.ac.uk/courses/94722/files/14501458), [BIOS205 Academic Integrity announcement](https://canvas.liverpool.ac.uk/courses/93225/discussion_topics/607615), and the [BIOS207 assessment brief](https://canvas.liverpool.ac.uk/courses/94546/files/14516643).

### Permitted and prohibited behaviour

The School material aligns with the University baseline but makes several points concrete:

- GenAI may support preparation only to the extent allowed by the assessment tier and brief.
- A student remains responsible for the accuracy and quality of the work and must not present AI output as their own.
- Extensive rewriting or paraphrasing can create false authorship even when the output is not copied verbatim.
- References, data or evidence must not be fabricated.
- GenAI use should be cited/declaratively documented, including indirect uses such as planning or grammar checking when local instructions require this.
- School teaching material may not be uploaded to public/consumer AI systems. This is more concrete than the general University copyright/confidentiality rule and should be treated as a local restriction.
- The current lecture points students to the University-endorsed Copilot and nebulaONE environments. This is consistent with the current [University approved-tools page](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/approved-tools/), but tool approval does not override copyright, confidentiality or assessment-tier restrictions.

## Course-by-course findings

| SIS code | Finding as at 15 October 2026 |
|---|---|
| `BIOS101-202627` | Current [Assessment information](https://canvas.liverpool.ac.uk/courses/93523/pages/assessment-information) and the later handbook make the 10% online test **Tier 2** and the 90% on-campus exam **Tier 1**. A disclosure is required where GenAI is used/permitted. A disclosed AI-generated glossary also models transparent staff use. **Conflict:** an older handbook (`...26 27-1`, updated 15 September) says both assessments are Tier 1; the later handbook (`...-2`, updated 19 September) and page (updated 27 September) supersede it in practice, but the obsolete contradictory file remains visible. |
| `BIOS102-202627` | No relevant page, announcement, file metadata or searchable document found; the audited shell contained no eligible documents. |
| `BIOS103-202627` | No policy statement found. The only full-text hit was “Copilot Search Branding” in a teaching handout, not GenAI policy. |
| `BIOS104-202627` | No relevant searchable item found; no eligible documents were present. |
| `BIOS105-202627` | The current semester-1 handbook says **all BIOS105 assessments are Tier 2**: restricted planning/editing/support use only, not replacement of thinking or main content, with declaration. This course also hosts the School declaration, current School lecture, Appendix L, KnowHow support and an announcement about the changed 2026–27 policy. The [KnowHow page](https://canvas.liverpool.ac.uk/courses/94722/pages/knowhow-academic-integrity-support) links the AI tutorial and University guidance. **Hygiene issue:** a 2025–26 declaration, older School lecture and 2025–26 semester-2 handbook remain present alongside current versions. |
| `BIOS106-202627` | No relevant searchable item found; no eligible documents were present. |
| `BIOS107-202627` | Not found or not authorised via the supplied Canvas credentials. |
| `BIOS108-202627` | Not found or not authorised via the supplied Canvas credentials. |
| `BIOS109-202627` | Not found or not authorised via the supplied Canvas credentials. |
| `BIOS201-202627` | [Assessment Information](https://canvas.liverpool.ac.uk/courses/92987/pages/assessment-information) explicitly assigns the 10% online mid-semester test **Tier 2** and the 90% on-campus exam **Tier 1**, with declaration where use is permitted. |
| `BIOS202-202627` | No relevant searchable item found; no eligible documents were present. |
| `BIOS203-202627` | No explicit tier number was found in the accessible searchable material. The School-wide rules still apply. Under the University default, a non-invigilated scientific-report assessment would be Tier 2 unless its brief states otherwise, while an invigilated exam defaults to Tier 1. Teaching material warns against outsourcing scientific writing to LLMs. An [announcement](https://canvas.liverpool.ac.uk/courses/94440/discussion_topics/609234) also says students must not write up a laboratory method they did not perform, treating that as a possible academic-integrity issue. Because no explicit tier was located, students should check the final brief rather than rely only on the default. |
| `BIOS204-202627` | No relevant searchable item found; no eligible documents were present. |
| `BIOS205-202627` | Both the Scientific Challenge Poster/Reflection (50%) and Group Digital Pitch/Individual Summary Report (50%) are **Tier 2**, confirmed by the [assessment page](https://canvas.liverpool.ac.uk/courses/93225/pages/general-bios205-assessment-information) and current handbook. The course hosts the same declaration/lecture/training infrastructure as BIOS105 and schedules a Science Communication, GAI and Assessment workshop. |
| `BIOS206-202627` | One eligible document was scanned; no relevant policy text was found. |
| `BIOS207-202627` | The [Assessment FAQ](https://canvas.liverpool.ac.uk/courses/94546/pages/assessment-faqs) confirms the GenAI declaration is outside the word count. The current brief applies the annual declaration and all four academic-integrity categories, requires the per-assessment GAI declaration, and states the 2%/5% disclosure deductions and false-declaration referral. It does not explicitly name a tier in the searchable text, so the University default is Tier 2 for this non-invigilated coursework unless another final task instruction states otherwise. |
| `BIOS208-202627` | No relevant searchable item found; no eligible documents were present. |
| `BIOS209-202627` | The current [Assessment page](https://canvas.liverpool.ac.uk/courses/94852/pages/assessment) assigns the 10% open-book online test **Tier 2** and the 90% closed-book in-person exam **Tier 1**, and reproduces all four tier definitions. An older “Assessment Copy” says there are two Cycle-1 tests rather than one, but its tier assignments are the same. The current page should control; the duplicate should be archived or clearly labelled. |

## Cross-reference with University policy

The controlling University document is **Appendix L Annexe 1, Use of Generative Artificial Intelligence in Learning, Teaching and Assessment**, version 1.1, effective August 2026, together with Appendix L Academic Integrity Policy. It is an institutional baseline, and it expressly allows Schools and programmes to set stricter requirements. The School's declaration format, teaching-material restriction and 2%/5% disclosure deductions operate as those local requirements. See the [formal 2026 policy](https://www.liverpool.ac.uk/media/livacuk/tqsd/code-of-practice-on-assessment/appendix_L_annex1_cop_assess.pdf) and [policy overview](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/policy-learning-teaching-and-assessment/purpose-scope-and-principles/).

| University baseline | Biosciences implementation | Assessment |
|---|---|---|
| Every assessment must state the permitted extent of GenAI use. If no tier is stated, Tier 2 applies; an invigilated exam defaults to Tier 1. | Explicit Tier 1/2 labelling is present in BIOS101, 105, 201, 205 and 209. BIOS203 and BIOS207 searchable evidence does not clearly state a tier. | Broadly aligned, but BIOS203/207 would benefit from explicit tier labels in the final briefs rather than reliance on defaults. |
| Tier 1 prohibits GenAI, including basic grammar checkers, except approved support-plan technology. | Used for closed/on-campus exams in BIOS101, 201 and 209. | Aligned. |
| Tier 2 permits only specified planning/editing/support uses; AI must not be central to the learning outcomes or produce the main work. | Used for open-book online tests and BIOS105/205 coursework; the same wording is reproduced locally. | Aligned. “Tier 2” is not blanket permission: the task brief must specify the allowed support. |
| Tier 3 encourages bounded generate/critique/iterate activity; Tier 4 makes GenAI integral to achieving the outcomes. | Tier definitions appear in BIOS209 and the School lecture, but no audited assessment was explicitly assigned Tier 3 or 4. BIOS105 contains AI-literacy learning activities, but its current semester-1 assessments remain Tier 2. | No conflict; current assessment use is conservative. |
| Students must declare/acknowledge use where required by assessment, local or University instructions. | School requires a declaration for every coursework assignment and imposes 2%/5% deductions for deficient/absent disclosure. | Stricter local implementation, permitted by the University policy. |
| AI must not replace the student's own thinking; use beyond stated requirements normally constitutes misconduct. | Repeated throughout School lecture, handbooks and BIOS207 brief; false declarations are referred for investigation. | Aligned. |
| Personal, sensitive, confidential, unpublished or restricted data must not go into public/consumer tools; copyrighted/licensed teaching material requires permission. Only approved environments may be used for University data. | School expressly withholds permission to upload teaching materials, including slides and rubrics, and directs students to Copilot/nebulaONE. | Aligned and locally more explicit. See [legal, security and data-protection guidance](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/legal-security-and-data-protection/) and [approved tools](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/approved-tools/). |
| Academic misconduct must be evidenced and investigated; stylistic “AI indicators” are not definitive proof. | School lecture explains referral through the Academic Integrity Officer/Committee. | Aligned. The University's [misuse process](https://www.liverpool.ac.uk/media/livacuk/centre-for-innovation-in-education/digital-education/generative-ai-teach-learn-assess/academic-integrity-process-for-the-misuse-of-gai.pdf) says indicators are guidance only and suspected misuse must be documented. |

### University tier definitions in brief

- **Tier 1 — prohibited:** no GenAI, including grammar checkers, unless part of an approved support plan; normally controlled/supervised.
- **Tier 2 — contextual support:** only restricted, specified assistance such as planning or editing; the student supplies the substantive thinking and main content.
- **Tier 3 — structural scaffold:** bounded, encouraged use at specified stages, normally with records of interactions and critical evaluation.
- **Tier 4 — integrated:** AI use is required/core, with full transparency, ethical/bias/accuracy reflection and demonstration of human added value.

The full definitions and defaults are on the University's [Assessment requirements page](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/policy-learning-teaching-and-assessment/assessment-requirements/).

## Risks, inconsistencies and recommended actions

1. **Remove or label obsolete/conflicting files.** BIOS101 contains two 2026–27 handbooks with contradictory Tier 1/Tier 2 treatment of Assessment 1. BIOS105 retains 2025–26 declaration/lecture/handbook material. BIOS209 retains an outdated assessment copy. Students should not have to infer which duplicate is authoritative.
2. **Put an explicit tier on every assessment brief.** BIOS203 and BIOS207 did not expose an explicit tier in the searchable material. Although the University default resolves the legal position, an explicit label is clearer and is what the policy expects Canvas to communicate.
3. **Publish one canonical School page.** It should separate the annual academic-integrity declaration from the per-assessment GAI declaration, state the 2%/5% deductions, link the current templates and policy, list endorsed tools, and record a version/date.
4. **Clarify Tier 2 permitted uses per task.** “Planning, editing or support” should be translated into task-specific examples, especially whether grammar/style tools, translation, code assistants, image generation, summarisation of sources and feedback on drafts are permitted.
5. **Reconcile terminology.** School slides use “AI” for academic integrity and “GAI” for generative AI, while University pages generally use “GenAI.” A short definitions box would reduce avoidable confusion.
6. **Keep the investigation standard visible.** Turnitin similarity or stylistic indicators should trigger human review, not be treated as proof of GenAI use. The University process requires evidence and gives the student an opportunity to respond.
7. **Close the coverage gap.** Confirm whether BIOS107–109 do not exist, are unpublished, or require additional Canvas permissions, then re-run the audit if access becomes available.

## Authoritative University sources

- [Appendix L Annexe 1: formal GenAI policy (effective August 2026)](https://www.liverpool.ac.uk/media/livacuk/tqsd/code-of-practice-on-assessment/appendix_L_annex1_cop_assess.pdf)
- [Appendix L: Academic Integrity Policy](https://www.liverpool.ac.uk/media/livacuk/tqsd/code-of-practice-on-assessment/appendix_L_cop_assess.pdf)
- [Assessment requirements and four-tier framework](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/policy-learning-teaching-and-assessment/assessment-requirements/)
- [Approved tools and responsibilities](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/policy-learning-teaching-and-assessment/approved-tools-and-responsibilities/)
- [Golden rules](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/golden-rules/)
- [Legal, security and data protection](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/legal-security-and-data-protection/)
- [Current University-approved AI tools](https://www.liverpool.ac.uk/about/the-university/reports-policies-and-governance/ai-at-liverpool/policies-and-guidance/approved-tools/)

## Audit artefacts

The local evidence files contain no Canvas API token:

- `canvas_gai_audit/audit.json` — course, page, announcement and filename/description results;
- `canvas_gai_audit/file_content_scan.json` — full-text file scan results and excerpts;
- `canvas_gai_audit.py` and `canvas_file_content_scan.py` — reproducible read-only audit scripts.

Canvas signed download URLs embedded in the JSON may expire. Stable Canvas links in this report require the reader's normal University authentication.
