(function () {
  const root = document.getElementById('deck');
  const counter = document.getElementById('counter');
  const overviewPanel = document.getElementById('overviewPanel');
  const overviewGrid = document.getElementById('overviewGrid');
  const promptModal = document.getElementById('promptModal');
  const promptModalLabel = document.getElementById('promptModalLabel');
  const promptModalTitle = document.getElementById('promptModalTitle');
  const promptModalIntro = document.getElementById('promptModalIntro');
  const promptModalText = document.getElementById('promptModalText');
  const copyModalPrompt = document.getElementById('copyModalPrompt');
  const closePromptModal = document.getElementById('closePromptModal');
  let modalTrigger;
  let current = Math.max(0, Math.min(slides.length - 1, (Number(location.hash.slice(1)) || 1) - 1));
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const copyButton = prompt => `<button class="copy-prompt" type="button" data-copy="${esc(prompt)}">Copy prompt</button>`;
  const linkList = links => links ? `<div class="resource-links">${links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : '';
  function slideHTML(s, i) {
    const promptAction = s.promptModal ? `<button class="resource-prompt" type="button" data-prompt-label="${esc(s.promptModal.label || `${s.k} / STUDY PROMPT`)}" data-prompt-title="${esc(s.promptModal.title)}" data-prompt-intro="${esc(s.promptModal.intro || 'Copy this prompt, then paste it into the relevant tool.')}" data-prompt="${esc(s.promptModal.prompt)}">${esc(s.promptModal.actionLabel || 'Open prompt')} <span aria-hidden="true">→</span></button>` : '';
    const cards = s.grid ? `<div class="grid ${s.grid.length > 2 ? 'three' : ''}">${s.grid.map(c => `<div class="card"><strong>${c[0]}</strong><p>${c[1]}</p></div>`).join('')}</div>` : '';
    const resourceLinks = (s.resources || []).map(([label, href, action = 'Open resource']) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="Open ${esc(label)} in a new tab"><span>${esc(label)}</span><em>${esc(action)} <b aria-hidden="true">↗</b></em></a>`).join('');
    const resources = (s.resources || s.promptModal) ? `<section class="resource-card" aria-labelledby="resources-${i}"><h3 id="resources-${i}">Resources</h3>${s.resourceNote ? `<p class="resource-note">${esc(s.resourceNote)}</p>` : ''}${s.resourcesAfterPrompt ? `${promptAction}${resourceLinks}` : `${resourceLinks}${promptAction}`}</section>` : '';
    const diagram = s.diagram ? `<div class="diagram">${s.diagram.map((x, j) => `<span class="node">${x}</span>${j < s.diagram.length - 1 ? '<span class="arrow">→</span>' : ''}`).join('')}</div>` : '';
    const prompt = s.prompt ? `<div class="prompt-wrap"><blockquote class="demo-prompt">${esc(s.prompt)}</blockquote>${copyButton(s.prompt)}</div>` : '';
    const checklist = s.checklist ? `<ol class="demo-checklist">${s.checklist.map(item => `<li>${esc(item)}</li>`).join('')}</ol>` : '';
    const check = s.check ? `<aside class="human-check"><strong>You still do this</strong><p>${esc(s.check)}</p></aside>` : '';
    const disclaimer = s.disclaimer ? `<aside class="disclaimer"><strong>IMPORTANT</strong><p>${esc(s.disclaimer)}</p></aside>` : '';
    const studyOnly = s.studyOnly ? `<div class="study-only">${assessmentNotice}</div>` : '';
    const resource = s.resource ? `<a class="library-link" href="${esc(s.resource.href)}">${esc(s.resource.label)} <span aria-hidden="true">→</span></a>` : '';
    return `<section class="slide ${i === current ? 'active' : ''}" data-index="${i}" data-number="${String(i + 1).padStart(2, '0')}"><div class="eyebrow">${s.k}${s.time ? ` <span class="time">${s.time}</span>` : ''}</div>${studyOnly}<h2>${s.title}</h2>${s.lead ? `<p class="lead">${s.lead}</p>` : ''}${disclaimer}${resources}${cards}${diagram}${prompt}${checklist}${check}${linkList(s.links)}${resource}${s.source ? `<div class="source">${s.source}</div>` : ''}</section>`;
  }
  function copyText(button) {
    const value = button.dataset.copy;
    const done = () => { button.textContent = 'Copied'; setTimeout(() => { button.textContent = 'Copy prompt'; }, 1600); };
    function fallback() { const area = document.createElement('textarea'); area.value = value; area.setAttribute('readonly', ''); area.style.cssText = 'position:fixed;opacity:0'; document.body.append(area); area.select(); try { document.execCommand('copy'); done(); } finally { area.remove(); } }
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(value).then(done).catch(fallback); else fallback();
  }
  function openPromptModal(button) {
    modalTrigger = button;
    promptModalLabel.textContent = button.dataset.promptLabel;
    promptModalTitle.textContent = button.dataset.promptTitle;
    promptModalIntro.textContent = button.dataset.promptIntro;
    promptModalText.textContent = button.dataset.prompt;
    copyModalPrompt.dataset.copy = button.dataset.prompt;
    promptModal.showModal();
    closePromptModal.focus();
  }
  function render() { root.innerHTML = slides.map(slideHTML).join(''); root.querySelectorAll('.copy-prompt').forEach(button => button.addEventListener('click', () => copyText(button))); root.querySelectorAll('.resource-prompt').forEach(button => button.addEventListener('click', () => openPromptModal(button))); update(); buildOverview(); }
  function update() { document.querySelectorAll('.slide').forEach((el, i) => el.classList.toggle('active', i === current)); counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`; history.replaceState(null, '', `#${current + 1}`); }
  function go(n) { current = Math.max(0, Math.min(slides.length - 1, n)); update(); }
  function buildOverview() { overviewGrid.innerHTML = slides.map((s, i) => `<div class="thumb" data-goto="${i}"><b>${String(i + 1).padStart(2, '0')} / ${s.k}</b><span>${s.title.replace(/<[^>]+>/g, '')}</span></div>`).join(''); overviewGrid.querySelectorAll('.thumb').forEach(x => x.addEventListener('click', () => { go(Number(x.dataset.goto)); overviewPanel.hidden = true; })); }
  document.getElementById('next').onclick = () => go(current + 1); document.getElementById('prev').onclick = () => go(current - 1); document.getElementById('overview').onclick = () => overviewPanel.hidden = false; document.getElementById('closeOverview').onclick = () => overviewPanel.hidden = true; document.getElementById('fullscreen').onclick = () => document.documentElement.requestFullscreen?.();
  copyModalPrompt.addEventListener('click', () => copyText(copyModalPrompt));
  closePromptModal.addEventListener('click', () => promptModal.close());
  promptModal.addEventListener('click', event => { if (event.target === promptModal) promptModal.close(); });
  promptModal.addEventListener('close', () => modalTrigger?.focus());
  document.addEventListener('keydown', e => { if (e.target.closest('button, summary, a, input, textarea')) return; if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(current + 1); } else if (e.key === 'ArrowLeft') go(current - 1); else if (e.key === 'Home') go(0); else if (e.key === 'End') go(slides.length - 1); else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.(); else if (e.key.toLowerCase() === 'p') overviewPanel.hidden = !overviewPanel.hidden; else if (e.key === 'Escape') { overviewPanel.hidden = true; document.exitFullscreen?.(); } else if (e.key === '?') document.getElementById('help').hidden = !document.getElementById('help').hidden; });
  render();
})();
