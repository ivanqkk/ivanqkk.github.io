/* ==========================================================================
   Hero network
   Drifting "molecular" network on the home page hero (_includes/hero.html).
   Nodes drift, link to their neighbours and move away from the pointer.
   - Colours come from the --node token (r, g, b), so it follows the theme;
     it redraws on the `themechange` event from theme-toggle.js.
   - Pauses while the hero is off screen.
   - With reduced motion it draws a single still frame and ignores the pointer.
   ========================================================================== */
(function () {
  var c = document.querySelector('.hero-canvas');
  if (!c || !c.getContext) return;

  var root = document.documentElement;
  var sec = c.parentElement, ctx = c.getContext('2d');
  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var st = { raf: 0, visible: true, nodes: [], w: 0, h: 0, mx: -1e4, my: -1e4 };

  function mk() {
    return { x: Math.random() * st.w, y: Math.random() * st.h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: 1.6 + Math.random() * 2.2 };
  }

  function resize() {
    var r = c.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    st.w = r.width; st.h = r.height;
    c.width = Math.round(r.width * dpr); c.height = Math.round(r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(72, Math.max(26, st.w * st.h / 8500)));
    while (st.nodes.length < n) st.nodes.push(mk());
    st.nodes.length = n;
    st.nodes.forEach(function (p) { p.x = Math.min(p.x, st.w); p.y = Math.min(p.y, st.h); });
    draw();
  }

  function step() {
    st.nodes.forEach(function (n) {
      n.vx += (Math.random() - .5) * .04; n.vy += (Math.random() - .5) * .04;
      var dx = n.x - st.mx, dy = n.y - st.my, d2 = dx * dx + dy * dy;
      if (d2 < 14400) { var d = Math.sqrt(d2) || 1, f = (1 - d / 120) * .12; n.vx += dx / d * f; n.vy += dy / d * f; }
      n.vx *= .985; n.vy *= .985;
      var sp = Math.hypot(n.vx, n.vy); if (sp > .9) { n.vx *= .9 / sp; n.vy *= .9 / sp; }
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0) { n.x = 0; n.vx *= -1; } else if (n.x > st.w) { n.x = st.w; n.vx *= -1; }
      if (n.y < 0) { n.y = 0; n.vy *= -1; } else if (n.y > st.h) { n.y = st.h; n.vy *= -1; }
    });
  }

  function draw() {
    var rgb = getComputedStyle(root).getPropertyValue('--node').trim();
    var maxD = st.w < 600 ? 92 : 124, ns = st.nodes;
    ctx.clearRect(0, 0, st.w, st.h);
    ctx.lineWidth = 1;
    for (var i = 0; i < ns.length; i++) {
      for (var j = i + 1; j < ns.length; j++) {
        var dx = ns[i].x - ns[j].x, dy = ns[i].y - ns[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < maxD) {
          ctx.strokeStyle = 'rgba(' + rgb + ',' + ((1 - d / maxD) * .45).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(ns[i].x, ns[i].y); ctx.lineTo(ns[j].x, ns[j].y); ctx.stroke();
        }
      }
    }
    ns.forEach(function (n) {
      var near = Math.hypot(n.x - st.mx, n.y - st.my) < 120;
      ctx.fillStyle = 'rgba(' + rgb + ',' + (near ? .95 : .7) + ')';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r * (near ? 1.5 : 1), 0, Math.PI * 2); ctx.fill();
    });
  }

  function loop() {
    if (st.visible) { step(); draw(); }
    st.raf = requestAnimationFrame(loop);
  }

  function onMove(e) { var r = c.getBoundingClientRect(); st.mx = e.clientX - r.left; st.my = e.clientY - r.top; }
  function onLeave() { st.mx = -1e4; st.my = -1e4; }

  function start() {
    if (st.raf) return;
    sec.addEventListener('pointermove', onMove);
    sec.addEventListener('pointerleave', onLeave);
    st.raf = requestAnimationFrame(loop);
  }
  function stop() {
    cancelAnimationFrame(st.raf); st.raf = 0;
    sec.removeEventListener('pointermove', onMove);
    sec.removeEventListener('pointerleave', onLeave);
    onLeave(); draw();
  }

  if (window.ResizeObserver) new ResizeObserver(resize).observe(sec);
  else window.addEventListener('resize', resize);
  if (window.IntersectionObserver) {
    new IntersectionObserver(function (es) { st.visible = es[0].isIntersecting; }).observe(sec);
  }
  document.addEventListener('themechange', function () { draw(); });

  function onMotionPref() { if (reducedMQ.matches) stop(); else start(); }
  if (reducedMQ.addEventListener) reducedMQ.addEventListener('change', onMotionPref);
  else if (reducedMQ.addListener) reducedMQ.addListener(onMotionPref);

  resize();
  if (!reducedMQ.matches) start();
})();
