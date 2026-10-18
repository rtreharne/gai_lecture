# BIOS105 — Practical GAI Guide

Standalone, live-demo-led practical guide to generative AI for bioscience students. It contains an eight-slide, 45-minute presentation and a copyable prompt library.

## Run locally

From this directory:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`.

## Controls

Arrow keys or Space navigate. `Home` and `End` jump. `F` enters fullscreen. `P` opens the overview. `?` shows help. The print stylesheet creates a sequential paper-friendly version.

## Placeholders to replace

- Before teaching, select a current official bioscience vacancy for the job-search and CV demonstrations. Capture its URL and key criteria in case it expires during delivery.
- Use an anonymised fictional first-year student profile for the careers demonstration.

## GitHub Pages

This is buildless static HTML/CSS/JS. The included GitHub Actions workflow publishes the public site assets whenever `main` changes; it explicitly excludes local configuration such as `.env`.

Before the first deployment, a repository owner must enable GitHub Pages once: **Settings → Pages → Build and deployment → Source → GitHub Actions**. The site will then publish at `https://rtreharne.github.io/gai_lecture/` on the next push to `main`. No credentials or runtime API keys are required by the site itself.

The presentation is published at `index.html`; the student take-away is `prompts.html`. Both are relative links, so they work automatically once the repository root is deployed.

## Teaching boundary

The session is for study, revision, organisation, careers and coding practice—not assessment work. The first slide states this prominently, every workflow slide repeats the restriction, and every study prompt begins with it. Students must use only material they are permitted to share and verify important outputs.

## Codespaces demonstration

The final workflow uses the next quantitative-skills R exercise and the GitHub backup CSV. The expected verification point is: **Rodentia**, 338 usable records, median adult body mass **143.6 g**. The demonstration should show Copilot creating and explaining base-R code, then the instructor independently checking the output.

## Presenter preparation

See `DEMO_RUNBOOK.md` for the fictional careers profile, service-failure fallbacks, and the independently verified R output.

## Attribution

See `assets/ATTRIBUTIONS.md`. Images are loaded from open Unsplash URLs for this prototype; download and store local copies before a high-stakes delivery if offline reliability is required.
