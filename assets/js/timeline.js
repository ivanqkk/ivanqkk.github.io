/* ==========================================================================
   Timeline drawn by scroll
   For every .timeline-wrap (_includes/news-timeline.html): the accent line
   grows with the scroll position (--p, 0..1) and each dot lights up once it
   passes a line at 62% of the viewport height.
   With reduced motion everything is drawn full at once. The CSS draws it full
   too until this script adds html.tl-js (layout/_timeline.scss), so without
   JavaScript, or if this file fails to load, nothing stays hidden.
   ========================================================================== */
(function () {
  var wraps = [].slice.call(document.querySelectorAll('.timeline-wrap'));
  if (!wraps.length) return;

  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.classList.add('tl-js');

  function update() {
    var line = window.innerHeight * 0.62, reduced = reducedMQ.matches;
    wraps.forEach(function (w) {
      var r = w.getBoundingClientRect();
      var p = reduced ? 1 : Math.max(0, Math.min(1, (line - r.top - 10) / Math.max(1, r.height - 20)));
      w.style.setProperty('--p', p.toFixed(4));
      [].forEach.call(w.querySelectorAll('.dot'), function (d) {
        d.classList.toggle('on', reduced || d.getBoundingClientRect().top + 8 < line);
      });
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; update(); });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  if (reducedMQ.addEventListener) reducedMQ.addEventListener('change', update);
  update();
})();
