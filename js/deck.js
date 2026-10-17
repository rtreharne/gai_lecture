(function () {
  const root = document.getElementById('deck');
  const counter = document.getElementById('counter');
  const overviewPanel = document.getElementById('overviewPanel');
  const overviewGrid = document.getElementById('overviewGrid');
  let current = Math.max(0, Math.min(slides.length - 1, (Number(location.hash.slice(1)) || 1) - 1));
  function slideHTML(s, i) {
    const cards = s.grid ? `<div class="grid ${s.grid.length > 3 ? 'three' : ''}">${s.grid.map(c => `<div class="card"><strong>${c[0]}</strong><p>${c[1]}</p>${c[2] ? `<span class="pill">${c[2]}</span>` : ''}</div>`).join('')}</div>` : '';
    const timeline = s.timeline ? `<div class="timeline">${s.timeline.map(t => `<div><b>${t[0]}</b>${t[1]}<br>${t[2]}</div>`).join('')}</div>` : '';
    const diagram = s.diagram ? `<div class="diagram">${s.diagram.map((x, j) => `<span class="node">${x}</span>${j < s.diagram.length-1 ? '<span class="arrow">→</span>' : ''}`).join('')}</div>` : '';
    const circles = s.circles ? `<div class="circle-wrap"><div class="circle one">BIOSCIENCE<br><small>knowledge · experiments · data</small></div><div class="circle two">AI CAPABILITY<br><small>tools · workflows · verification</small></div><div class="circle three">HUMAN SKILLS<br><small>judgement · creativity · communication</small></div><div class="center-label">TRUSTED<br>BIOSCIENTIST</div></div>` : '';
    const poll = s.poll ? `<div class="poll"><div class="q">${s.poll}</div><div class="meta">${s.meta || 'Poll Everywhere'}</div></div>` : '';
    const prompt = s.prompt ? `<blockquote class="demo-prompt">${s.prompt}</blockquote>` : '';
    const answer = s.answer ? `<details class="answer"><summary>Discuss, then reveal</summary><p>${s.answer}</p></details>` : '';
    return `<section class="slide ${i === current ? 'active' : ''}${s.circles ? ' skills-slide' : ''}" data-index="${i}" data-number="${String(i+1).padStart(2,'0')}">${s.image ? `<div class="hero-image" style="background-image:url('${s.image}')"></div>` : ''}<div class="eyebrow">BIOSCIENCES / ${s.k}</div><h2>${s.title}</h2>${s.lead ? `<p class="lead">${s.lead}</p>` : ''}${cards}${timeline}${diagram}${circles}${prompt}${poll}${answer}${s.source ? `<div class="source">${s.source}</div>` : ''}</section>`;
  }
  function render() { root.innerHTML = slides.map(slideHTML).join(''); update(); buildOverview(); }
  function update() { document.querySelectorAll('.slide').forEach((el, i) => el.classList.toggle('active', i === current)); counter.textContent = `${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`; history.replaceState(null, '', `#${current+1}`); }
  function go(n) { current = Math.max(0, Math.min(slides.length-1, n)); update(); }
  function buildOverview() { overviewGrid.innerHTML = slides.map((s,i) => `<div class="thumb" data-goto="${i}"><b>${String(i+1).padStart(2,'0')} / ${s.k}</b><span>${s.title.replace(/<[^>]+>/g,'')}</span></div>`).join(''); overviewGrid.querySelectorAll('.thumb').forEach(x => x.addEventListener('click', () => { go(Number(x.dataset.goto)); overviewPanel.hidden = true; })); }
  document.getElementById('next').onclick = () => go(current+1); document.getElementById('prev').onclick = () => go(current-1);
  document.getElementById('overview').onclick = () => overviewPanel.hidden = false; document.getElementById('closeOverview').onclick = () => overviewPanel.hidden = true;
  document.getElementById('fullscreen').onclick = () => document.documentElement.requestFullscreen?.();
  document.addEventListener('keydown', e => { if (e.target.closest('button, summary, a, input, textarea')) return; if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(current+1); } else if (e.key === 'ArrowLeft') go(current-1); else if (e.key === 'Home') go(0); else if (e.key === 'End') go(slides.length-1); else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.(); else if (e.key.toLowerCase() === 'p') overviewPanel.hidden = !overviewPanel.hidden; else if (e.key === 'Escape') { overviewPanel.hidden = true; document.exitFullscreen?.(); } else if (e.key === '?') document.getElementById('help').hidden = !document.getElementById('help').hidden; });
  render();
})();
