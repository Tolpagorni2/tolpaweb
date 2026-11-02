/* Shared behaviour for the mockup pages: the typewriter menu, the example forms and the subject filters. */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* typewriter menu: types in on the first page of a visit, re-types an item on hover */
  const links = [...document.querySelectorAll('#menu a')];
  function render(a, n, caret) {
    a.textContent = a.dataset.t.slice(0, n);
    if (caret) { const c = document.createElement('span'); c.className = 'caret'; a.append(c); }
  }
  function type(a, speed, done) {
    if (a._timer) clearInterval(a._timer);
    let i = 0;
    render(a, 0, true);
    a._timer = setInterval(() => {
      i++;
      render(a, i, true);
      if (i >= a.dataset.t.length) { clearInterval(a._timer); a._timer = null; done && done(); }
    }, speed);
  }
  links.forEach(a => {
    a.style.setProperty('--len', a.dataset.t.length + 'ch');
    a.addEventListener('mouseenter', () => { if (!reduce) type(a, 35, () => render(a, a.dataset.t.length, true)); });
    a.addEventListener('mouseleave', () => { if (a._timer) { clearInterval(a._timer); a._timer = null; } render(a, a.dataset.t.length, false); });
  });
  let typed = false;
  try { typed = sessionStorage.getItem('tp-typed') === '1'; sessionStorage.setItem('tp-typed', '1'); } catch (e) {}
  if (!reduce && !typed) {
    let k = 0;
    const next = () => { if (k < links.length) type(links[k++], 50, () => { render(links[k - 1], links[k - 1].dataset.t.length, false); next(); }); };
    links.forEach(a => render(a, 0, false));
    setTimeout(next, 300);
  }

  /* example forms: nothing is sent in the mockup */
  document.querySelectorAll('form.contrib').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const ok = f.querySelector('.ok');
      if (ok) ok.hidden = false;
    });
  });

  /* subject filters on lists */
  document.querySelectorAll('.chips[data-for]').forEach(group => {
    const list = document.getElementById(group.dataset.for);
    const buttons = [...group.querySelectorAll('button')];
    buttons.forEach(b => b.addEventListener('click', () => {
      buttons.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      const s = b.dataset.s;
      list.querySelectorAll('[data-s]').forEach(li => { li.hidden = s !== 'all' && !li.dataset.s.split(' ').includes(s); });
    }));
  });
})();
