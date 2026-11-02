const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let frame: number | undefined;

function cancelScroll() {
  if (frame !== undefined) cancelAnimationFrame(frame);
  frame = undefined;
}

// Manual input always takes priority over an automatic scroll.
window.addEventListener('wheel', cancelScroll, { passive: true });
window.addEventListener('touchstart', cancelScroll, { passive: true });
window.addEventListener('pointerdown', cancelScroll, { passive: true });
window.addEventListener('keydown', (event) => {
  if (['Escape', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) cancelScroll();
});
reducedMotion.addEventListener('change', cancelScroll);
window.addEventListener('popstate', cancelScroll);
window.addEventListener('hashchange', cancelScroll);

document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
  if (!link || link.target || link.hasAttribute('download') || link.classList.contains('skip-link')) return;

  const url = new URL(link.href);
  const samePath = url.pathname.replace(/\/$/, '') === location.pathname.replace(/\/$/, '');
  if (url.origin !== location.origin || !samePath || url.search !== location.search || !url.hash || reducedMotion.matches) return;
  let id: string;
  try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  cancelScroll();
  const start = window.scrollY;
  const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const destination = Math.max(0, Math.min(maximum, start + target.getBoundingClientRect().top - padding - margin));
  const distance = destination - start;
  // Short hops take 0.8 seconds; long journeys settle within 1.4 seconds.
  const duration = Math.min(1400, Math.max(800, Math.sqrt(Math.abs(distance)) * 20));
  const started = performance.now();

  if (location.hash !== url.hash) {
    const oldURL = location.href;
    history.pushState(null, '', url.hash);
    window.dispatchEvent(new HashChangeEvent('hashchange', { oldURL, newURL: location.href }));
  }

  const finish = () => {
    frame = undefined;
    const focusTarget = target.querySelector<HTMLElement>('h1, h2') ?? target;
    const temporary = !focusTarget.hasAttribute('tabindex') && !focusTarget.matches('a, button, input, select, textarea, summary');
    if (temporary) {
      focusTarget.setAttribute('tabindex', '-1');
      focusTarget.addEventListener('blur', () => focusTarget.removeAttribute('tabindex'), { once: true });
    }
    focusTarget.focus({ preventScroll: true });
  };

  if (Math.abs(distance) < 2) { finish(); return; }
  const step = (now: number) => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    // Instant per-frame positioning avoids a second browser-native animation.
    window.scrollTo({ top: start + distance * eased, behavior: 'instant' });
    if (progress < 1) frame = requestAnimationFrame(step);
    else finish();
  };
  frame = requestAnimationFrame(step);
});
