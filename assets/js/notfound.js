/* ==========================================================================
   404: "This page has misfolded" (_pages/404.md)
   "Refold" pulls the tangled chain into a helix seen side on (100 degrees
   and 22 px per residue; residues on the near face drawn larger), then goes
   to the home page. The button is a link to the home page, so without
   JavaScript, or with reduced motion, it simply goes there.
   ========================================================================== */
(function () {
  var btn = document.querySelector('[data-refold]');
  var svg = document.querySelector('.misfold-chain');
  if (!btn || !svg || !window.requestAnimationFrame) return;

  var bond = svg.querySelector('.misfold-bond');
  var res = [].slice.call(svg.querySelectorAll('.misfold-res'));
  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var FOLD_MS = 1200, PAUSE_MS = 700, R = 8;

  var from = res.map(function (c) { return { x: +c.getAttribute('cx'), y: +c.getAttribute('cy'), r: R }; });
  var x0 = 160 - (res.length - 1) * 11;
  var to = res.map(function (c, i) {
    var a = i * 100 * Math.PI / 180;
    return { x: x0 + i * 22, y: 85 + 38 * Math.sin(a), r: 6.5 + 2.5 * Math.cos(a) };
  });

  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function render(k) {
    var pts = from.map(function (p, i) {
      var q = to[i], x = p.x + (q.x - p.x) * k, y = p.y + (q.y - p.y) * k;
      res[i].setAttribute('cx', x.toFixed(1));
      res[i].setAttribute('cy', y.toFixed(1));
      res[i].setAttribute('r', (p.r + (q.r - p.r) * k).toFixed(2));
      return x.toFixed(1) + ',' + y.toFixed(1);
    });
    bond.setAttribute('points', pts.join(' '));
  }

  var busy = false;
  btn.addEventListener('click', function (e) {
    if (reducedMQ.matches || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    if (busy) return;
    busy = true;
    var href = btn.href, t0 = performance.now();
    svg.classList.add('is-folding');
    svg.setAttribute('aria-label', 'A protein chain folding into a helix');
    btn.textContent = 'Refolding…';
    (function frame(now) {
      var t = Math.min(1, (now - t0) / FOLD_MS);
      render(ease(t));
      if (t < 1) { requestAnimationFrame(frame); return; }
      svg.classList.add('is-folded');
      btn.textContent = 'Folded. Going home…';
      setTimeout(function () { location.href = href; }, PAUSE_MS);
    })(t0);
  });

  // Back from the home page, a cached copy of this page would still be
  // folded and busy: tangle it again.
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted || !busy) return;
    busy = false;
    render(0);
    svg.classList.remove('is-folding', 'is-folded');
    svg.setAttribute('aria-label', 'A tangled protein chain');
    btn.textContent = 'Refold';
  });
})();
