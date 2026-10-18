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
    resourceNote: "Use the fictional Susan Calvin CV as the attachment for this demonstration.",
    resources: [["Susan Calvin CV", "Susan_Calvin_CV_Final.pdf", "Open fictional CV"]],
    promptModal: {
      label: "MICROSOFT COPILOT / CAREERS PROMPT",
      intro: "Attach your CV, then paste this prompt into Microsoft Copilot.",
      title: "Microsoft Copilot work-experience prompt",
      actionLabel: "Open Microsoft Copilot work-experience prompt",
      prompt: "Using my attached CV, search the internet for **Summer 2027 work experience opportunities** suitable for a first-year Biosciences undergraduate at the University of Liverpool.\n\n1. **Location:** Prioritise Liverpool, Merseyside and the wider North West of England.\n2. **Opportunities:** Find paid or unpaid internships, laboratory placements, research experience, conservation work and volunteering opportunities, ideally lasting 1–8 weeks.\n3. **Advertised placements:** Identify at least 15 genuine opportunities suitable for first-year students. Include organisation, location, duration, eligibility, application deadline and a verified application link.\n4. **Speculative opportunities:** Identify at least 10 additional organisations (universities, research laboratories, biotechnology companies, NHS departments, conservation organisations, etc.) that might offer work experience even if they don't advertise placements. Include websites and publicly available contact emails.\n\n**Present results in two clear tables.** Prioritise realistic opportunities, verify links, and distinguish confirmed Summer 2027 placements from potential opportunities. Do not invent information."
    }
  },
  {
    k: "CLAUDE",
    title: "Creating an Amazing CV<br><span class=\"coral\">Tailored to a Job Application</span>",
    disclaimer: "Proofread every line before using an AI-assisted CV. Check that all claims are accurate, personalise the wording, and correct any errors before submitting an application.",
    resources: [
      ["AstraZeneca Pharmaceutical Development Summer Placements", "https://careers.astrazeneca.com/pharmaceutical-development-summer-placements", "Open AstraZeneca placements"],
      ["Susan Calvin CV — AstraZeneca", "Susan_Calvin_CV_AstraZeneca_QC-1.pdf", "Open tailored CV", true]
    ],
    promptModal: {
      label: "CLAUDE / CV DESIGN PROMPT",
      intro: "Attach your CV, add the job URL, then paste this prompt into Claude.",
      title: "Claude CV-redesign prompt",
      actionLabel: "Open Claude CV-redesign prompt",
      prompt: "Using my attached CV and this job-application URL:\n\n[PASTE JOB URL HERE]\n\nredesign and tailor my CV for this specific role.\n\nFirst, extract the job title, employer, essential criteria, desirable criteria, technical skills and key responsibilities from the application page. Then revise my CV so that it is clear, concise, ATS-friendly and targeted to those requirements.\n\nRequirements:\n\n- Do not invent qualifications, grades, employment, projects, software experience or achievements. If information is missing, use a clear placeholder or suggest a question for me to answer.\n- Keep the CV to a maximum of two pages.\n- Use a professional UK CV format with clear sections: Profile, Education, Relevant Experience, Technical Skills, Projects or Coursework, Additional Experience and Interests/Activities where useful.\n- Reorder and strengthen existing content to make the most relevant evidence prominent.\n- Use specific action verbs and achievement-focused bullet points.\n- Include relevant keywords from the job description naturally, without keyword stuffing.\n\nEnsure the revised CV highlights:\n\n1. Biosciences knowledge and practical/laboratory skills relevant to the role.\n2. Generative AI skills and experience gained during my degree, such as using AI responsibly for study planning, revision support, understanding complex topics, drafting and improving work, and evaluating AI outputs critically.\n3. Responsible AI practice: checking accuracy, protecting confidential information, following assessment rules and using AI as support rather than a replacement for my own work.\n4. Data skills, including R programming for statistical analysis, data cleaning, visualisation, interpreting results and communicating findings clearly.\n5. Transferable skills: problem-solving, teamwork, communication, organisation, attention to detail and independent learning.\n\nCreate the final CV as a polished, visually striking two-page PDF suitable for a competitive bioscience, research or pharmaceutical application.\n\nDesign requirements:\n\n- Modern, professional and clean—not overly decorative.\n- Strong visual hierarchy, generous white space and excellent readability.\n- Subtle science-inspired colour accents.\n- Consistent typography and spacing.\n- ATS-friendly structure with standard section headings.\n- No graphics, tables or design elements that interfere with applicant-tracking systems.\n\nOutput:\n\n1. A short summary of how the CV was tailored.\n2. The complete revised CV in editable text.\n3. A polished, downloadable PDF version of the CV.\n4. A list of any unsupported claims or missing information I should confirm before using it.\n5. Five suggested changes I could make to strengthen my application further.\n\nIf you cannot create a downloadable PDF directly, produce a print-ready HTML or Word-style document that I can save as PDF without further rewriting."
    }
  },
  {
    k: "GITHUB CODESPACES + COPILOT",
    title: "The Future:<br><span class=\"accent\">Agentic AI</span>"
  }
];
