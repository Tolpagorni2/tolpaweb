// Stable accessible names remain present while only the visual label is typed.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const links = [...document.querySelectorAll<HTMLAnchorElement>('#menu a[data-t]')];
const timers = new Map<HTMLAnchorElement, number>();
function render(link: HTMLAnchorElement, count: number, caret = false) {
  link.textContent = (link.dataset.t ?? '').slice(0, count);
  if (caret) { const cursor = document.createElement('span'); cursor.className = 'caret'; cursor.setAttribute('aria-hidden', 'true'); link.append(cursor); }
}
function stop(link: HTMLAnchorElement) { clearInterval(timers.get(link)); timers.delete(link); }
function type(link: HTMLAnchorElement, speed: number, done?: () => void) {
  stop(link);
  let i = 0; render(link, 0, true);
  timers.set(link, window.setInterval(() => {
    if (motion.matches) { stop(link); render(link, 999); return; }
    render(link, ++i, true);
    if (i >= (link.dataset.t ?? '').length) { stop(link); done?.(); }
  }, speed));
}
for (const link of links) {
  link.addEventListener('mouseenter', () => { stop(link); render(link, 999); });
  link.addEventListener('mouseleave', () => { stop(link); render(link, 999); });
  link.addEventListener('focus', () => { stop(link); render(link, 999); });
}
let typed = false;
try { typed = sessionStorage.getItem('tp-typed') === '1'; sessionStorage.setItem('tp-typed', '1'); } catch { /* Storage is optional. */ }
let pending = 0;
if (!motion.matches && !typed) {
  let k = 0;
  const next = () => {
    if (motion.matches || k >= links.length) return;
    const link = links[k++]!;
    type(link, 50, () => { render(link, 999); next(); });
  };
  links.forEach(link => render(link, 0));
  pending = window.setTimeout(next, 300);
}
motion.addEventListener('change', () => {
  if (!motion.matches) return;
  clearTimeout(pending); links.forEach(link => { stop(link); render(link, 999); });
});
