(function () {
  const root = document.getElementById('promptLibrary');
  const workflows = slides.filter(slide => slide.prompt);
  workflows.forEach(slide => {
    const card = document.createElement('article');
    card.className = 'library-card';
    const title = document.createElement('h2'); title.textContent = slide.k;
    const lead = document.createElement('p'); lead.textContent = slide.lead;
    const prompt = document.createElement('pre'); prompt.textContent = slide.prompt;
    const copy = document.createElement('button'); copy.className = 'copy-prompt'; copy.type = 'button'; copy.textContent = 'Copy prompt';
    copy.addEventListener('click', () => {
      const done = () => { copy.textContent = 'Copied'; setTimeout(() => { copy.textContent = 'Copy prompt'; }, 1600); };
      const fallback = () => { const area = document.createElement('textarea'); area.value = slide.prompt; area.style.cssText = 'position:fixed;opacity:0'; document.body.append(area); area.select(); try { document.execCommand('copy'); done(); } finally { area.remove(); } };
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(slide.prompt).then(done).catch(fallback);
      else fallback();
    });
    card.append(title, lead, prompt);
    if (slide.links) {
      const links = document.createElement('div'); links.className = 'resource-links';
      slide.links.forEach(([label, href]) => { const link = document.createElement('a'); link.href = href; link.target = '_blank'; link.rel = 'noopener'; link.textContent = `${label} ↗`; links.append(link); });
      card.append(links);
    }
    card.append(copy); root.append(card);
  });
})();
