// The v0.8 aurora/draw mathematics are preserved; lifecycle handles motion and visibility.
function entrance() {
  const c = document.querySelector<HTMLCanvasElement>('#sky');
  if (!c) return;
  const context = c.getContext('2d');
  if (!context) return;
  const ctx: CanvasRenderingContext2D = context;
  const sky = document.createElement('canvas');
  const buffer = sky.getContext('2d');
  if (!buffer) return;
  const sctx: CanvasRenderingContext2D = buffer;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Fit below the actual menu and optional review banner, including wrapping and font loading.
  const hero = c.closest<HTMLElement>('.entrance')!;
  const chrome = [document.querySelector('.site-header'), document.querySelector('.preview-banner')].filter((element): element is Element => Boolean(element));
  const fitViewport = () => hero.style.setProperty('--entrance-chrome-height', `${chrome.reduce((height, element) => height + element.getBoundingClientRect().height, 0)}px`);
  const chromeObserver = new ResizeObserver(fitViewport);
  chrome.forEach(element => chromeObserver.observe(element));
  fitViewport();

  let w = 0, h = 0, dpr = 1;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = c!.clientWidth; h = c!.clientHeight;
    c!.width = w * dpr; c!.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sky.width = Math.max(32, Math.round(w / 10)); sky.height = Math.max(20, Math.round(h / 10));
  }
  function aurora(t: number) {
    const sw = sky.width, sh = sky.height;
    sctx.fillStyle = '#141A40';
    sctx.fillRect(0, 0, sw, sh);
    const bands = [
      { col: '166,214,107', y: 0.16, a: 0.08, sp: 0.22, ph: 0, wdt: 0.10, al: 0.7 },
      { col: '61,132,51', y: 0.24, a: 0.06, sp: 0.15, ph: 2, wdt: 0.12, al: 0.8 },
      { col: '169,200,216', y: 0.10, a: 0.06, sp: 0.26, ph: 4, wdt: 0.08, al: 0.7 }
    ];
    sctx.globalCompositeOperation = 'lighter';
    for (const b of bands) {
      for (let x = 0; x < sw; x++) {
        const u = x / sw;
        const yy = sh * (b.y + b.a * Math.sin(u * 5 + t * b.sp + b.ph) + 0.03 * Math.sin(u * 13 - t * b.sp * 1.7));
        const inten = 0.5 + 0.5 * Math.sin(u * 7 - t * b.sp * 1.3 + b.ph);
        const g = sctx.createLinearGradient(0, yy - sh * b.wdt, 0, yy + sh * b.wdt * 2.5);
        g.addColorStop(0, `rgba(${b.col},0)`);
        g.addColorStop(0.3, `rgba(${b.col},${(b.al * inten).toFixed(2)})`);
        g.addColorStop(1, `rgba(${b.col},0)`);
        sctx.fillStyle = g;
        sctx.fillRect(x, yy - sh * b.wdt, 1, sh * b.wdt * 3.5);
      }
    }
    sctx.globalCompositeOperation = 'source-over';
  }

  function draw(t: number) {
    aurora(t);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(sky, 0, 0, w, h);
  }

  const t0 = performance.now();
  let last = 0, frame = 0, visible = true;
  function loop(now: number) {
    frame = 0;
    if (motion.matches || document.hidden || !visible) return;
    if (now - last > 40) { draw((now - t0) / 1000); last = now; }
    frame = requestAnimationFrame(loop);
  }
  function sync() {
    cancelAnimationFrame(frame); frame = 0;
    if (motion.matches) draw(0);
    else if (visible && !document.hidden) frame = requestAnimationFrame(loop);
  }
  size(); draw(0); sync();
  new ResizeObserver(() => { size(); draw(motion.matches ? 0 : (performance.now() - t0) / 1000); }).observe(c);
  new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? false; sync(); }).observe(c.closest('.entrance')!);
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', sync);
}
entrance();
