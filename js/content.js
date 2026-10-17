const slides = [
  {
    "k": "START HERE",
    "time": "0–2 min",
    "title": "AI as a<br><span class=\"accent\">Bioscience Superpower</span>",
    "lead": "A patient tutor. A faster way through routine work. A partner for exploring new ideas.",
    "poll": "What would you most like AI to help you do?",
    "meta": "Word cloud or call out one idea",
    "source": "Dr. Robert Treharne · R.Treharne@liverpool.ac.uk",
    "image": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2200&q=85"
  },
  {
    "k": "HOW WE GOT HERE",
    "time": "2–4 min",
    "title": "How did we get from rules<br>to <span class=\"cyan\">conversation?</span>",
    "lead": "Earlier systems followed rules written by people. Modern models learn patterns from examples, then generate new text, images or sequences.",
    "timeline": [
      [
        "1950–60s",
        "Turing, Dartmouth, ELIZA",
        "Questions, rules and early dialogue"
      ],
      [
        "1970–90s",
        "Expert systems + AI winters",
        "Progress meets hard limits"
      ],
      [
        "2010s",
        "Deep learning",
        "More data and computing"
      ],
      [
        "2017",
        "Transformers",
        "Learning context in sequences"
      ],
      [
        "2020s",
        "Multimodal + scientific AI",
        "Words, images, molecules and tools"
      ]
    ]
  },
  {
    "k": "UNDER THE HOOD",
    "time": "4–6 min",
    "title": "A convincing answer<br>still needs <span class=\"amber\">checking.</span>",
    "diagram": [
      "Your question + context",
      "Learned patterns",
      "A generated response"
    ],
    "grid": [
      [
        "Why it helps",
        "It can connect ideas, change the level of an explanation and offer useful starting points."
      ],
      [
        "Why it can fail",
        "It can produce a plausible answer even when a fact, source or assumption is wrong."
      ]
    ],
    "poll": "An AI gives you a reference. What would you check first?",
    "meta": "Find the original source, then check whether it supports the claim."
  },
  {
    "k": "SCIENCE FICTION",
    "time": "6–8 min",
    "title": "We imagined the possibilities.<br>Now we get to <span class=\"accent\">make choices.</span>",
    "grid": [
      [
        "A tutor for everyone?",
        "The Diamond Age — personalised teaching, with human relationships still central."
      ],
      [
        "A system we can trust?",
        "I, Robot and 2001 — helpful rules, conflicting goals and unexpected consequences."
      ],
      [
        "What makes us human?",
        "Philip K. Dick — empathy and authenticity. Ender’s Game — learning through simulation."
      ]
    ],
    "lead": "Read these as questions about our future, rather than predictions of how models work."
  },
  {
    "k": "DISCOVERY / MOLECULES",
    "time": "8–11 min",
    "title": "Which molecule should<br>we <span class=\"cyan\">test next?</span>",
    "lead": "AI helps narrow a huge search to a smaller set of promising experiments.",
    "grid": [
      [
        "Predict a structure",
        "AlphaFold 3 models complexes involving proteins, DNA, RNA and small molecules. A predicted interaction gives researchers something to investigate."
      ],
      [
        "Design a candidate",
        "Generative protein models propose new sequences. Researchers still need to make them and test binding, activity and safety."
      ]
    ],
    "diagram": [
      "Suggest",
      "Prioritise",
      "Make + measure",
      "Revise"
    ],
    "source": "AlphaFold 3: Nature (2024), doi:10.1038/s41586-024-07487-w · Prediction is not experimental proof."
  },
  {
    "k": "DISCOVERY / GENOMES + CELLS",
    "time": "11–14 min",
    "title": "What might this change<br>do to a <span class=\"accent\">living system?</span>",
    "grid": [
      [
        "A change in DNA",
        "Evo 2 learns genomic patterns to help predict effects of sequence changes and propose sequences for testing."
      ],
      [
        "A change in a cell",
        "Single-cell models learn from gene-expression profiles. Researchers explore how those patterns help identify cell states and responses."
      ],
      [
        "A new way to see",
        "Generative microscopy can create virtual stains. AI co-scientists suggest hypotheses; experiments establish which ideas hold up."
      ]
    ],
    "lead": "A simulated cell, generated image or promising hypothesis is a model output. Compare it with real measurements.",
    "source": "Examples: Evo 2 manuscript; scFoundation, Nature Methods (2024); virtual staining, Nature Communications (2025)."
  },
  {
    "k": "FROM RESEARCH TO YOUR STUDIES",
    "time": "14–16 min",
    "title": "Let AI help you<br><span class=\"cyan\">work things out.</span>",
    "grid": [
      [
        "When you’re stuck",
        "Ask for a simpler explanation, then an example and a question to check your understanding."
      ],
      [
        "When you’re revising",
        "Ask for one question at a time. Try an answer before seeing feedback."
      ],
      [
        "When work is repetitive",
        "Ask for a table, a timetable draft or help understanding a code error. Check the result."
      ]
    ],
    "poll": "Which would help you most this week: explanations, practice or organisation?",
    "meta": "Quick vote · patient repetition and different explanation styles can improve access."
  },
  {
    "k": "BEFORE YOU TRY IT",
    "time": "16–18 min",
    "title": "Three habits for<br><span class=\"accent\">responsible use.</span>",
    "grid": [
      [
        "Check the instructions",
        "For assessments, read the brief and ask if you are unsure. For applications, check the employer’s rules."
      ],
      [
        "Choose what you share",
        "Use approved University tools. Keep personal, confidential and protected teaching material out of prompts."
      ],
      [
        "Be open about your use",
        "Follow declaration requirements. Keep enough detail to explain what the tool did and what you checked."
      ]
    ],
    "lead": "Practising with an AI tutor does not automatically give permission to use it in an assessment."
  },
  {
    "k": "LIVE DEMO / LEARNING",
    "time": "18–22 min",
    "title": "“Help me understand it.<br><span class=\"cyan\">Then test me.”</span>",
    "prompt": "Quiz me on competitive enzyme inhibition. Ask one question at a time and wait for my attempt. Give a hint if I’m stuck. After feedback, ask a new question that tests the same idea.",
    "diagram": [
      "Try an answer",
      "Get a hint",
      "Explain the correction",
      "Try without AI"
    ],
    "lead": "Example misconception: “Adding more substrate cannot help if an inhibitor is present.”",
    "poll": "What would you change in that explanation?",
    "meta": "Answer together · verify the correction against a trusted textbook."
  },
  {
    "k": "SAVE TIME, KEEP THE LEARNING",
    "time": "22–24 min",
    "title": "Automate the routine.<br><span class=\"amber\">Keep the practice.</span>",
    "grid": [
      [
        "Let it help",
        "Reformat a table, generate quiz variants or explain an error message. Verify the output."
      ],
      [
        "Do the thinking",
        "Interpret an unexpected result, choose a control or explain why your conclusion follows."
      ]
    ],
    "poll": "Your experiment gives an unexpected result. Should AI decide the explanation, suggest possibilities, or be avoided entirely?",
    "answer": "Use it to suggest possibilities. You choose what fits the evidence and which experiment could distinguish the explanations."
  },
  {
    "k": "THE WALL-E MOMENT",
    "time": "24–26 min",
    "title": "Could you still do it<br><span class=\"accent\">without the screen?</span>",
    "lead": "In WALL-E, convenience has made people dependent on systems they barely understand. That is a useful warning for learning.",
    "grid": [
      [
        "The trap",
        "A clear explanation feels familiar, so you assume you could reproduce it. Confidence grows faster than understanding."
      ],
      [
        "The habit",
        "Close the chat. Explain the idea aloud, sketch the mechanism or solve a fresh problem. Revisit the gap you find."
      ]
    ],
    "poll": "What is one skill you want to keep practising yourself?",
    "meta": "30 seconds with the person next to you."
  },
  {
    "k": "YOUR FUTURE WORK",
    "time": "26–28 min",
    "title": "Build skills that<br><span class=\"cyan\">work together.</span>",
    "circles": true,
    "lead": "Understand the biology. Use tools thoughtfully. Explain your decisions.",
    "source": "WEF Future of Jobs 2025 and ILO occupational-exposure research: task changes vary; forecasts are not guarantees."
  },
  {
    "k": "FINDING OPPORTUNITIES",
    "time": "28–30 min",
    "title": "Turn “I like biology”<br>into <span class=\"accent\">a next step.</span>",
    "diagram": [
      "Explore roles",
      "Read a real advert",
      "Map your evidence",
      "Choose one gap",
      "Prepare + rehearse"
    ],
    "grid": [
      [
        "Start with a question",
        "“I enjoy microbiology and explaining science. What kinds of roles could I explore, and where can I verify them?”"
      ],
      [
        "Follow up with people",
        "Use real vacancies, Handshake, the Career Studio and conversations with working scientists."
      ]
    ],
    "poll": "Which skill would you like evidence of by the end of this year?",
    "meta": "Lab skills · data analysis · communication · teamwork · AI literacy"
  },
  {
    "k": "LIVE DEMO / CAREERS",
    "time": "30–34 min",
    "title": "A better application<br>starts with <span class=\"cyan\">real evidence.</span>",
    "grid": [
      [
        "The vacancy",
        "Research assistant: accurate records, basic data analysis, clear communication. PCR or coding desirable."
      ],
      [
        "The student",
        "Practical work in pairs, graphs, a group poster and a weekend café job. No coding experience yet."
      ]
    ],
    "prompt": "Match only my real experience to this advert. Show evidence, partial evidence and gaps. Suggest three achievable first-year actions. Ask questions to help me prepare an honest interview example.",
    "lead": "Improve the explanation of your experience. Never invent the experience."
  },
  {
    "k": "LEAVE WITH SOMETHING TO SHOW",
    "time": "34–36 min",
    "title": "Make a small project.<br><span class=\"accent\">Explain your choices.</span>",
    "grid": [
      [
        "Pick a manageable task",
        "Use a public biology dataset, or create a revision resource from your own notes."
      ],
      [
        "Keep a clear record",
        "Save your question, method, AI contribution and checks. Show a useful result and one limitation."
      ],
      [
        "Tell the story",
        "What did you do? Why did you choose it? How did you check it? What would you improve?"
      ]
    ],
    "lead": "A small, honest example gives you something concrete to discuss with an employer."
  },
  {
    "k": "THE COST BEHIND THE CHAT",
    "time": "36–38 min",
    "title": "Useful tools have<br><span class=\"amber\">real-world costs.</span>",
    "grid": [
      [
        "Electricity + water",
        "Computing uses power; cooling can use water. Impacts depend on the model, location and infrastructure."
      ],
      [
        "People + access",
        "People label data and moderate content. Costs, language coverage and biased outputs affect who benefits."
      ],
      [
        "Use with purpose",
        "Match the tool to the task, reuse useful results and ask providers for better evidence about their impacts."
      ]
    ],
    "lead": "AI can also support medicine, energy optimisation and access to expertise. Benefits and costs need to be assessed together.",
    "source": "Evidence base: IEA Energy and AI; FTC/CMA reports. Avoid universal “water per prompt” claims."
  },
  {
    "k": "WHO GETS A SAY?",
    "time": "38–40 min",
    "title": "Who benefits?<br><span class=\"cyan\">Who gets to decide?</span>",
    "lead": "A small group of companies controls much of the computing, investment and access. Their incentives help shape which problems get solved.",
    "poll": "What matters most to you: sustainability, fair access, privacy, transparency, or human accountability?",
    "meta": "Rank or vote · explain one trade-off",
    "source": "FTC AI partnerships report; UK CMA AI foundation-models analysis."
  },
  {
    "k": "CHECK YOUR JUDGEMENT",
    "time": "40–42 min",
    "title": "Two situations.<br><span class=\"accent\">What would you do?</span>",
    "grid": [
      [
        "A reference looks convincing",
        "A: cite it immediately. B: find the original and check the claim. C: ask the same model if it is sure."
      ],
      [
        "A job asks for a skill you lack",
        "A: let AI invent an example. B: hide the gap with polished wording. C: identify an honest example or plan how to develop the skill."
      ]
    ],
    "answer": "Reference: B. Career: C. Verify the evidence, be honest about what you can do, and check the task or employer’s instructions."
  },
  {
    "k": "YOUR NEXT STEP",
    "time": "42–44 min",
    "title": "Choose one useful thing<br>to <span class=\"cyan\">try this week.</span>",
    "grid": [
      [
        "Learn",
        "Try the answer–feedback–retry loop on a topic you find difficult."
      ],
      [
        "Save time",
        "Automate one repetitive task and check the result."
      ],
      [
        "Explore",
        "Find one real vacancy and identify a skill you could start building."
      ]
    ],
    "poll": "Which will you try, and when?",
    "meta": "Write down one action · make it small enough to start."
  },
  {
    "k": "CONTINUE WITH BIOBOOST",
    "time": "44–45 min",
    "title": "More possibilities.<br><span class=\"accent\">Your judgement.</span>",
    "lead": "Want guided practice using AI for study, problem-solving and future opportunities? Continue with BioBoost | GAI Foundations.",
    "prompt": "[BIOBOOST_URL]",
    "source": "Dr. Robert Treharne · R.Treharne@liverpool.ac.uk"
  }
];
