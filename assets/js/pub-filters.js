/* ==========================================================================
   Publication topic filters
   The chips in _pages/publications.html ship hidden; this script shows them.
   A chip keeps the cards whose data-topics (pipe-separated) contain its
   topic, hides year groups left empty and updates the live count line.
   The reflow animates with a view transition unless reduced motion is on.
   ========================================================================== */
(function () {
  var bar = document.querySelector('[data-pub-filters]');
  if (!bar) return;

  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var chips = [].slice.call(bar.querySelectorAll('[data-filter]'));
  var cards = [].slice.call(document.querySelectorAll('.pub[data-topics]'));
  var groups = [].slice.call(document.querySelectorAll('.year-group'));
  var countEl = document.getElementById('pub-count');

  bar.hidden = false;

  function apply(topic) {
    var shown = 0;
    chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.filter === topic)); });
    cards.forEach(function (card) {
      var ok = !topic || card.dataset.topics.split('|').indexOf(topic) > -1;
      card.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector('.pub:not([hidden])'); });
    if (countEl) countEl.textContent = shown + (shown === 1 ? ' publication' : ' publications') + (topic ? ' on ' + topic.toLowerCase() : '');
  }

  bar.addEventListener('click', function (e) {
    var chip = e.target.closest('[data-filter]');
    if (!chip || chip.getAttribute('aria-pressed') === 'true') return;
    var topic = chip.dataset.filter;
    if (document.startViewTransition && !reducedMQ.matches) document.startViewTransition(function () { apply(topic); });
    else apply(topic);
  });
})();
