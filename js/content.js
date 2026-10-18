const assessmentNotice = "";

const slides = [
  {
    k: "BIOSCIENCES",
    title: "A Practical Guide to Using<br><span class=\"accent\">GAI For Your Studies.</span>",
    lead: "Dr. Robert Treharne"
  },
  {
    k: "DISCLAIMER",
    title: "Using GAI in<br><span class=\"coral\">assessments.</span>",
    lead: "The demo GAI use in this lecture is for illustration and learning. It is not permission to use GAI in assessment work.<br><br>You must refer to the guidance provided with each assessment and follow its instructions carefully if you use GAI."
  },
  {
    k: "GEMINI",
    title: "Consolidating Knowledge<br>and Testing <span class=\"cyan\">Understanding</span>",
    resourceNote: "Open the lecture recording in Google Chrome before using the Gemini prompt.",
    resources: [["BIOS101 · DNA and RNA · K. Hammond", "https://liverpool.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=eb239077-385b-41fa-997f-b4e50095d5e2", "Open Panopto recording"]],
    promptModal: {
      title: "Gemini Panopto Study-Guide Prompt",
      actionLabel: "Open Gemini Panopto Study-Guide Prompt",
      prompt: "Act as an expert subject-matter professor and study-notes designer. Using the context and content of the lecture titled \"[Insert Lecture Title & Date / Topic Here]\" (focusing on: [Briefly list core topics, key experiments, or concepts covered in the lecture]), generate a comprehensive study guide formatted in clean Markdown.\n\n### Title & Header Requirement\n\n- The very top of the output MUST display a formal title and date matching the lecture: **Lecture Study Guide: [Insert Lecture Title] — [Insert Date]**.\n\n### Part 1: Detailed Revision Notes\n\n- Structure this as a high-yield study sheet with clear headings and bullet points.\n- Cover the foundational background, core principles, and key mechanisms presented in the lecture.\n- Explain structural details, experimental evidence, classifications, and functional significance where applicable.\n- Detail advanced implications, theoretical contexts, or concluding takeaways from the material.\n\n### Part 2: Assessment & Practice Questions\n\n- **Multiple-Choice Questions (MCQs):** Provide 5 rigorous multiple-choice questions testing key concepts. Each must have a single correct option among 4 choices (A, B, C, D).\n- **Multiple-Answer Questions (MAQs):** Provide several multiple-answer questions where more than one option can be correct (clearly indicate that multiple selections apply).\n  - *Strict MAQ Constraints:*\n    - Each MAQ must have **6 to 7 total options** (labeled A through F or G).\n    - Vary the number of correct answers between **2 and 3 correct options** per question.\n    - **Vary the position of correct answers across questions** (e.g., do not cluster correct answers at the top; mix up positions such as A, C, E in one question, B, D, F in another, etc.).\n- **Short Written Answer Questions:** Provide 2 targeted short-answer questions requiring conceptual explanation, mechanism breakdown, or application.\n\n### Part 3: Solutions, Answer Keys, and Model Answers\n\n- Provide clear answer keys for all MCQs and MAQs along with brief, high-yield explanations (explicitly listing all correct options for the MAQs).\n- Provide comprehensive, expert-level model answers for the short written answer questions."
    }
  },
  {
    k: "GEMINI",
    title: "Preparing<br><span class=\"accent\">Revision Materials</span>",
    promptModal: {
      title: "Gemini revision-materials prompt",
      actionLabel: "Open Gemini revision-materials prompt",
      prompt: "Act as an expert subject-matter professor and study-notes designer. Using the context of the lecture on [Insert Topic / Paste Lecture Transcript or Summary Here], generate a comprehensive study guide formatted in clean Markdown.\n\n### Part 1: Detailed Revision Notes\n\n- Structure this as a high-yield study sheet with clear headings and bullet points.\n- Cover the foundational background, core principles, and key mechanisms presented in the lecture.\n- Explain structural details, experimental evidence, classifications, and functional significance where applicable.\n- Detail advanced implications, theoretical contexts, or concluding takeaways from the material.\n\n### Part 2: Multiple-Choice Questions (MCQs)\n\n- Provide 5 rigorous multiple-choice questions testing key concepts from the lecture.\n- Each question must include 4 distinct distractors (options A, B, C, D).\n- At the very bottom of Part 2, include a clear, dedicated section for the correct answer keys and brief explanations."
    }
  },
  {
    k: "CLAUDE",
    title: "Organising My<br><span class=\"cyan\">Revision Timetable</span>",
    resourceNote: "Ask Claude to build a self-contained planner artifact, then print or export from the finished planner.",
    resourcesAfterPrompt: true,
    resources: [
      ["Claude.ai", "https://claude.ai/", "Open Claude.ai"],
      ["January 2027 Revision Planner", "January 2027 Revision Planner.html", "Open January 2027 Revision Planner"],
      ["Microsoft Copilot Revision Planner — Epic Fail", "January_2027_Revision_Planner CoPilot.html", "Open Microsoft Copilot Revision Planner"]
    ],
    promptModal: {
      label: "CLAUDE / PLANNER ARTIFACT",
      intro: "Copy this prompt, then paste it into Claude to create the revision-planner artifact.",
      title: "Claude Artifact: January 2027 Revision Planner",
      actionLabel: "Open Claude Artifact planner prompt",
      prompt: "Do not ask questions. Create a single self-contained HTML Artifact titled \"January 2027 Revision Planner\". Make sensible assumptions for anything missing.\n\nInclude:\n\n- a detailed, colour-coded daily timetable from Friday 18 December 2026 to Monday 11 January 2027;\n- a separate one-page weekly overview;\n- buttons to print/save the detailed timetable as PDF and the one-page overview as PDF;\n- a \"Download Google Calendar (.ics)\" button that creates a valid Europe/London iCalendar file;\n- no external libraries, accounts, APIs or internet connection.\n\nCalendar events must include all study blocks, deadlines, work shifts, holiday time and rest days. Add reminders: study 15 minutes before; work 30 minutes before; deadlines 7 days, 2 days and 2 hours before. Use category prefixes in event names: [BIOS101], [BIOS103], [DEADLINE], [WORK], [REST].\n\nColour key:\n\n- Blue: BIOS101 revision\n- Green: BIOS103 work\n- Red: deadlines/exam/competency\n- Grey: work shifts\n- Yellow: holiday/rest days\n- Purple: breaks/catch-up\n\nRules:\n\n- Maximum four hours of revision/coursework per day.\n- Use 50-minute study blocks maximum, followed by at least 10-minute breaks.\n- Include catch-up time each week.\n- Include at least one complete no-revision day per week.\n- No study on 25–26 December 2026 or 31 December 2026–1 January 2027.\n- Work: Saturdays 09:00–17:00; Tuesdays and Thursdays 16:00–19:00.\n- Prioritise upcoming deadlines and avoid scheduling final exam revision on 11 January.\n\nAssessments:\n\n- BIOS103 Methods and Results Report: due Monday 11 January 2027, 11:00 GMT; coursework worth 18% overall.\n- BIOS103 QS Data Tasks: Weeks 1, 2, 3, 4, 6, 8, 9, 10 and 11; due Monday 11 January 2027, 11:00 GMT.\n- BIOS103 BioBoost | Quantitative Skills: covers the same weeks and is due Monday 11 January 2027, 11:00 GMT.\n- About half of the QS Data Tasks and BioBoost activities are already complete. Each remaining task/activity takes approximately one hour.\n- BIOS103 Microscopy competency: Tuesday 12 January 2027, 16:00 GMT. Show this deadline in the overview and calendar even though it is after the timetable end date.\n- BIOS101 exam: assume Monday 11 January 2027, time unknown and provisional. Create an all-day provisional exam event.\n- BIOS101 requires revision of 30 taught sessions: 15 sessions in Weeks 8–12 are the main priority; 15 sessions from Weeks 1–5 must also be revisited because some exam questions cover them.\n\nBuild the schedule now. Make it practical, balanced and visually clear."
    }
  },
  {
    k: "MICROSOFT COPILOT",
    title: "Finding Job<br><span class=\"accent\">Opportunities</span>",
    promptModal: {
      label: "MICROSOFT COPILOT / CAREERS PROMPT",
      intro: "Attach your CV, then paste this prompt into Microsoft Copilot.",
      title: "Microsoft Copilot work-experience prompt",
      actionLabel: "Open Microsoft Copilot work-experience prompt",
      prompt: "Using my attached CV, search the internet for **Summer 2027 work experience opportunities** suitable for a first-year Biosciences undergraduate at the University of Liverpool.\n\n1. **Location:** Prioritise Liverpool, Merseyside and the wider North West of England.\n2. **Opportunities:** Find paid or unpaid internships, laboratory placements, research experience, conservation work and volunteering opportunities, ideally lasting 1–8 weeks.\n3. **Advertised placements:** Identify at least 15 genuine opportunities suitable for first-year students. Include organisation, location, duration, eligibility, application deadline and a verified application link.\n4. **Speculative opportunities:** Identify at least 10 additional organisations (universities, research laboratories, biotechnology companies, NHS departments, conservation organisations, etc.) that might offer work experience even if they don't advertise placements. Include websites and publicly available contact emails.\n\n**Present results in two clear tables.** Prioritise realistic opportunities, verify links, and distinguish confirmed Summer 2027 placements from potential opportunities. Do not invent information."
    }
  },
  {
    k: "MICROSOFT COPILOT",
    title: "Creating an Amazing CV<br><span class=\"coral\">Tailored to a Job Application</span>"
  },
  {
    k: "GITHUB CODESPACES + COPILOT",
    title: "The Future:<br><span class=\"accent\">Agentic AI</span>"
  }
];
