(function () {
  const root = document.getElementById('deck');
  const counter = document.getElementById('counter');
  const openInNewTab = document.getElementById('openInNewTab');
  const overviewPanel = document.getElementById('overviewPanel');
  const overviewGrid = document.getElementById('overviewGrid');
  const promptModal = document.getElementById('promptModal');
  const promptModalLabel = document.getElementById('promptModalLabel');
  const promptModalTitle = document.getElementById('promptModalTitle');
  const promptModalIntro = document.getElementById('promptModalIntro');
  const promptModalText = document.getElementById('promptModalText');
  const copyModalPrompt = document.getElementById('copyModalPrompt');
  const closePromptModal = document.getElementById('closePromptModal');
  const snapshotModal = document.getElementById('snapshotModal');
  const snapshotModalTitle = document.getElementById('snapshotModalTitle');
  const snapshotModalIntro = document.getElementById('snapshotModalIntro');
  const snapshotModalImage = document.getElementById('snapshotModalImage');
  const closeSnapshotModal = document.getElementById('closeSnapshotModal');
  let modalTrigger;
  let attendanceCode = sessionStorage.getItem('gai-attendance-code') || '';
  let current = Math.max(0, Math.min(slides.length - 1, (Number(location.hash.slice(1)) || 1) - 1));
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const copyButton = prompt => `<button class="copy-prompt" type="button" data-copy="${esc(prompt)}">Copy prompt</button>`;
  const linkList = links => links ? `<div class="resource-links">${links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : '';
  function slideHTML(s, i) {
    const promptAction = s.promptModal ? `<button class="resource-prompt" type="button" data-prompt-label="${esc(s.promptModal.label || `${s.k} / STUDY PROMPT`)}" data-prompt-title="${esc(s.promptModal.title)}" data-prompt-intro="${esc(s.promptModal.intro || 'Copy this prompt, then paste it into the relevant tool.')}" data-prompt="${esc(s.promptModal.prompt)}">${esc(s.promptModal.actionLabel || 'Open prompt')} <span aria-hidden="true">→</span></button>` : '';
    const snapshotAction = s.snapshotModal ? `<button class="resource-prompt" type="button" data-snapshot-title="${esc(s.snapshotModal.title)}" data-snapshot-intro="${esc(s.snapshotModal.intro || '')}" data-snapshot-src="${esc(s.snapshotModal.src)}" data-snapshot-alt="${esc(s.snapshotModal.alt)}">${esc(s.snapshotModal.actionLabel)} <span aria-hidden="true">→</span></button>` : '';
    const cards = s.grid ? `<div class="grid ${s.grid.length > 2 ? 'three' : ''}">${s.grid.map(c => c[2] === undefined ? `<div class="card"><strong>${c[0]}</strong><p>${c[1]}</p></div>` : `<button class="card card-link" type="button" data-goto="${c[2]}" aria-label="Go to ${esc(c[0])}"><strong>${c[0]}</strong><p>${c[1]}</p><span aria-hidden="true">→</span></button>`).join('')}</div>` : '';
    const renderResourceLink = ([label, href, action = 'Open resource']) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="Open ${esc(label)} in a new tab"><span>${esc(label)}</span><em>${esc(action)} <b aria-hidden="true">↗</b></em></a>`;
    const resourceLinks = (s.resources || []).filter(link => !s.resourcesAfterPrompt && !link[3]).map(renderResourceLink).join('');
    const postPromptResourceLinks = (s.resources || []).filter(link => s.resourcesAfterPrompt || link[3]).map(renderResourceLink).join('');
    const resources = (s.resources || s.promptModal || s.snapshotModal) ? `<section class="resource-card" aria-labelledby="resources-${i}"><h3 id="resources-${i}">Resources</h3>${s.resourceNote ? `<p class="resource-note">${esc(s.resourceNote)}</p>` : ''}${resourceLinks}${promptAction}${snapshotAction}${postPromptResourceLinks}</section>` : '';
    const diagram = s.diagram ? `<div class="diagram">${s.diagram.map((x, j) => `<span class="node">${x}</span>${j < s.diagram.length - 1 ? '<span class="arrow">→</span>' : ''}`).join('')}</div>` : '';
    const prompt = s.prompt ? `<div class="prompt-wrap"><blockquote class="demo-prompt">${esc(s.prompt)}</blockquote>${copyButton(s.prompt)}</div>` : '';
    const checklist = s.checklist ? `<ol class="demo-checklist">${s.checklist.map(item => `<li>${esc(item)}</li>`).join('')}</ol>` : '';
    const check = s.check ? `<aside class="human-check"><strong>You still do this</strong><p>${esc(s.check)}</p></aside>` : '';
    const disclaimer = s.disclaimer ? `<aside class="disclaimer"><strong>IMPORTANT</strong><p>${esc(s.disclaimer)}</p></aside>` : '';
    const studyOnly = s.studyOnly ? `<div class="study-only">${assessmentNotice}</div>` : '';
    const resource = s.resource ? `<a class="library-link" href="${esc(s.resource.href)}">${esc(s.resource.label)} <span aria-hidden="true">→</span></a>` : '';
    const attendanceForm = i === 0 ? `<form class="attendance-form" data-attendance-form><label for="attendanceCode">Attendance code</label><input id="attendanceCode" name="attendanceCode" value="${esc(attendanceCode)}" autocomplete="off" required placeholder="Enter code, then press Enter" /><p class="attendance-status" data-attendance-status aria-live="polite"></p></form>` : '';
    const attendanceMarker = i > 0 && i < slides.length - 1 ? `<div class="attendance-marker${attendanceCode ? ' is-visible' : ''}" data-attendance-marker>Attendance code: <strong>${esc(attendanceCode)}</strong></div>` : '';
    const feedback = s.feedback ? `<form class="feedback-form" data-feedback-form action="${esc(s.feedback.endpoint)}" method="post" target="feedback-target-${i}"><fieldset><legend>Overall, how would you rate this session?</legend><div class="likert-scale"><label><input type="radio" name="rating" value="1" required><span>1</span><small>Very poor</small></label><label><input type="radio" name="rating" value="2"><span>2</span><small>Poor</small></label><label><input type="radio" name="rating" value="3"><span>3</span><small>Okay</small></label><label><input type="radio" name="rating" value="4"><span>4</span><small>Good</small></label><label><input type="radio" name="rating" value="5"><span>5</span><small>Excellent</small></label></div></fieldset><label class="feedback-comment" for="feedback-comment-${i}">Optional comment <span>What should we keep, change or explore next?</span></label><textarea id="feedback-comment-${i}" name="comment" maxlength="2000" placeholder="Share a thought…"></textarea><div class="feedback-honeypot" aria-hidden="true"><label for="website-${i}">Website</label><input id="website-${i}" name="website" type="text" tabindex="-1" autocomplete="off"></div><button class="feedback-submit" type="submit">Send anonymous feedback <span aria-hidden="true">→</span></button><p class="feedback-status" data-feedback-status aria-live="polite"></p></form><iframe name="feedback-target-${i}" title="Feedback submission" class="feedback-target" tabindex="-1"></iframe>` : '';
    const eventRegistration = s.eventRegistration ? `<form class="event-registration" data-event-registration action="${esc(s.eventRegistration.endpoint)}" method="post" target="event-registration-target-${i}"><input type="hidden" name="formType" value="event-registration"><input type="hidden" name="rating" value="5"><input type="hidden" name="comment" data-registration-comment><fieldset><legend>Choose your session(s)</legend><label class="event-choice"><input type="checkbox" name="event" value="Making a personal website with AI — Monday 9 November, 11:00–13:00"><span><strong>Making a personal website with AI</strong><small>11:00–13:00 · Location to be confirmed</small><em>Turn your ideas and experience into a clear personal website with AI support.</em></span></label><label class="event-choice"><input type="checkbox" name="event" value="Analyse your data using AI — Monday 9 November, 14:00–16:00"><span><strong>Analyse your data using AI</strong><small>14:00–16:00 · Location to be confirmed</small><em>Explore how AI can help you examine, visualise and communicate data responsibly.</em></span></label></fieldset><div class="registration-details"><label for="registration-name-${i}">Your name<input id="registration-name-${i}" name="name" autocomplete="name" required></label><label for="registration-email-${i}">University email<input id="registration-email-${i}" name="email" type="email" autocomplete="email" required></label></div><p class="registration-note">Your details will be used only to organise these events.</p><div class="feedback-honeypot" aria-hidden="true"><label for="registration-website-${i}">Website</label><input id="registration-website-${i}" name="website" type="text" tabindex="-1" autocomplete="off"></div><button class="feedback-submit" type="submit">Register for selected event(s) <span aria-hidden="true">→</span></button><p class="feedback-status" data-event-registration-status aria-live="polite"></p></form><iframe name="event-registration-target-${i}" title="Event registration submission" class="feedback-target" tabindex="-1"></iframe>` : '';
    return `<section class="slide ${i === 0 ? 'title-slide' : ''} ${s.className || ''} ${i === current ? 'active' : ''}" data-index="${i}" data-number="${String(i + 1).padStart(2, '0')}"><div class="eyebrow">${s.k}${s.time ? ` <span class="time">${s.time}</span>` : ''}</div>${studyOnly}<h2>${s.title}</h2>${s.lead ? `<p class="lead">${s.lead}</p>` : ''}${disclaimer}${resources}${cards}${diagram}${prompt}${checklist}${check}${linkList(s.links)}${resource}${eventRegistration}${feedback}${attendanceForm}${attendanceMarker}${s.source ? `<div class="source">${s.source}</div>` : ''}</section>`;
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
  function openSnapshotModal(button) {
    modalTrigger = button;
    snapshotModalTitle.textContent = button.dataset.snapshotTitle;
    snapshotModalIntro.textContent = button.dataset.snapshotIntro;
    snapshotModalIntro.hidden = !button.dataset.snapshotIntro;
    snapshotModalImage.src = button.dataset.snapshotSrc;
    snapshotModalImage.alt = button.dataset.snapshotAlt;
    snapshotModal.showModal();
    closeSnapshotModal.focus();
  }
  function saveAttendanceCode(value) {
    attendanceCode = value.trim();
    sessionStorage.setItem('gai-attendance-code', attendanceCode);
    root.querySelectorAll('[data-attendance-marker]').forEach(marker => {
      marker.classList.toggle('is-visible', Boolean(attendanceCode));
      marker.querySelector('strong').textContent = attendanceCode;
    });
  }
  function setupAttendanceForm() {
    const form = root.querySelector('[data-attendance-form]');
    if (!form) return;
    const input = form.elements.attendanceCode;
    const status = form.querySelector('[data-attendance-status]');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!input.checkValidity()) return input.reportValidity();
      saveAttendanceCode(input.value);
      status.textContent = 'Attendance code saved — it will appear on the remaining slides.';
    });
  }
  function setupFeedbackForms() {
    root.querySelectorAll('[data-feedback-form]').forEach(form => {
      const status = form.querySelector('[data-feedback-status]');
      const submit = form.querySelector('button[type="submit"]');
      const target = document.querySelector(`iframe[name="${form.target}"]`);
      let submitting = false;
      target?.addEventListener('load', () => {
        if (!submitting) return;
        submitting = false;
        submit.disabled = false;
        form.reset();
        status.textContent = 'Thank you — your anonymous feedback has been sent.';
      });
      form.addEventListener('submit', () => {
        submitting = true;
        submit.disabled = true;
        status.textContent = 'Sending your feedback…';
      });
    });
  }
  function setupEventRegistrationForms() {
    root.querySelectorAll('[data-event-registration]').forEach(form => {
      const status = form.querySelector('[data-event-registration-status]');
      const submit = form.querySelector('button[type="submit"]');
      const choices = [...form.querySelectorAll('input[name="event"]')];
      const target = document.querySelector(`iframe[name="${form.target}"]`);
      let submitting = false;
      target?.addEventListener('load', () => {
        if (!submitting) return;
        submitting = false;
        submit.disabled = false;
        form.reset();
        status.textContent = 'Thanks — your event registration has been sent.';
      });
      form.addEventListener('submit', event => {
        const selected = choices.filter(choice => choice.checked).map(choice => choice.value);
        if (!selected.length) {
          event.preventDefault();
          status.textContent = 'Please choose at least one event.';
          choices[0].focus();
          return;
        }
        form.querySelector('[data-registration-comment]').value = `[EMPLOYABILITY WEEK REGISTRATION]\nName: ${form.elements['name'].value.trim()}\nEmail: ${form.elements['email'].value.trim()}\nEvents: ${selected.join('; ')}`;
        submitting = true;
        submit.disabled = true;
        status.textContent = 'Sending your registration…';
      });
    });
  }
  function render() { root.innerHTML = slides.map(slideHTML).join(''); root.querySelectorAll('.copy-prompt').forEach(button => button.addEventListener('click', () => copyText(button))); root.querySelectorAll('[data-prompt-title]').forEach(button => button.addEventListener('click', () => openPromptModal(button))); root.querySelectorAll('[data-snapshot-title]').forEach(button => button.addEventListener('click', () => openSnapshotModal(button))); root.querySelectorAll('.card-link').forEach(card => card.addEventListener('click', () => go(Number(card.dataset.goto)))); setupAttendanceForm(); setupFeedbackForms(); setupEventRegistrationForms(); update(); buildOverview(); }
  function update() { document.querySelectorAll('.slide').forEach((el, i) => el.classList.toggle('active', i === current)); counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`; history.replaceState(null, '', `#${current + 1}`); openInNewTab.href = `${location.origin}${location.pathname}#${current + 1}`; }
  function go(n) { current = Math.max(0, Math.min(slides.length - 1, n)); update(); }
  function buildOverview() { overviewGrid.innerHTML = slides.map((s, i) => `<div class="thumb" data-goto="${i}"><b>${String(i + 1).padStart(2, '0')} / ${s.k}</b><span>${s.title.replace(/<[^>]+>/g, '')}</span></div>`).join(''); overviewGrid.querySelectorAll('.thumb').forEach(x => x.addEventListener('click', () => { go(Number(x.dataset.goto)); overviewPanel.hidden = true; })); }
  document.getElementById('next').onclick = () => go(current + 1); document.getElementById('prev').onclick = () => go(current - 1); document.getElementById('overview').onclick = () => overviewPanel.hidden = false; document.getElementById('closeOverview').onclick = () => overviewPanel.hidden = true; document.getElementById('fullscreen').onclick = () => document.documentElement.requestFullscreen?.();
  copyModalPrompt.addEventListener('click', () => copyText(copyModalPrompt));
  closePromptModal.addEventListener('click', () => promptModal.close());
  promptModal.addEventListener('click', event => { if (event.target === promptModal) promptModal.close(); });
  promptModal.addEventListener('close', () => modalTrigger?.focus());
  closeSnapshotModal.addEventListener('click', () => snapshotModal.close());
  snapshotModal.addEventListener('click', event => { if (event.target === snapshotModal) snapshotModal.close(); });
  snapshotModal.addEventListener('close', () => modalTrigger?.focus());
  document.addEventListener('keydown', e => { if (e.target.closest('button, summary, a, input, textarea')) return; if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(current + 1); } else if (e.key === 'ArrowLeft') go(current - 1); else if (e.key === 'Home') go(0); else if (e.key === 'End') go(slides.length - 1); else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.(); else if (e.key.toLowerCase() === 'p') overviewPanel.hidden = !overviewPanel.hidden; else if (e.key === 'Escape') { overviewPanel.hidden = true; document.exitFullscreen?.(); } else if (e.key === '?') document.getElementById('help').hidden = !document.getElementById('help').hidden; });
  render();
})();
