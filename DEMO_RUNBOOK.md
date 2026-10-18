# Practical GAI Guide — demo runbook

Prepare each live service before teaching. Keep these captures in a presenter-only folder; do not add them to the minimal eight-slide deck.

## Boundary to state first

“This is not for assessment work. We are using AI to help us learn, revise, organise, prepare for careers and understand code. You remain responsible for what you submit and what you claim.”

## Live-demo fallback captures

| Workflow | Prepare before teaching | If the service fails |
|---|---|---|
| Gemini: post-lecture consolidation | A permitted, non-assessment set of lecture notes; the first question, a deliberately incomplete student answer, feedback, and a retry | Show the saved conversation capture; ask students to identify the missing idea before revealing the feedback. |
| Gemini: revision materials | A permitted-note input and the resulting guide, flashcards and questions | Show the output capture alongside the original notes; visibly find and correct one mismatch. |
| Copilot: timetable | A fictional set of dates, availability and commitments plus a realistic weekly plan | Show the saved plan; ask which block is unrealistic and edit it verbally. |
| Copilot: opportunities | A current official bioscience advert, saved official URL and requirements | Show the advert capture, not a Copilot result; map the three requirements live. |
| Copilot: CV | The same advert and the fictional profile below | Show the saved evidence / partial evidence / gap table; stress that no claims were invented. |
| Codespaces + Copilot | A prepared Codespace with `pantheria_234.csv`, `pantheria_summary.R`, and terminal output | Open the saved script and output; trace one line at a time and independently check the answer. |

## Fictional careers profile

Use only this invented profile for the on-screen demo:

- First-year bioscience student interested in ecology and data.
- Paired practical classes: accurate records, following protocols and making graphs.
- Group poster: shared research, concise scientific communication and responding to questions.
- Weekend café role: customer communication, teamwork and reliability.
- No professional lab placement, coding job or PCR experience yet.

The Copilot CV output must label direct evidence, partial evidence and genuine gaps separately. Never convert the last bullet into an invented achievement.

## R verification output

The Codespaces agent must use base R and read the local CSV exactly as `data <- read.csv('pantheria_234.csv')`. The independent expected result is:

```text
Order: Rodentia
Count: 338
Median AdultBodyMass_g: 143.6
```

If the agent produces another value, stop and inspect the data import, the `-999` filter, the grouping variable and the sort order rather than accepting the generated answer.
