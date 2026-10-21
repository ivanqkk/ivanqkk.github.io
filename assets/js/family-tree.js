/* ==========================================================================
   Academic family tree (/lineage/, _includes/family-tree.html)
   Adds .ft-js to .ft-page, which reveals the year counter, the order switch
   and the rail dots (_sass/_family.scss). Then:
   - counter: follows the card crossing 45% of the viewport height; when that
     card's side rail is scrolled onto a side card, it shows that one. The
     year counts to the new value; people with data-dial show that label.
   - Beurling's fact (.ft-decode) starts enciphered and deciphers letter by
     letter once in view. The real text is always in its .sr-only twin.
   - side rails: the dots follow the horizontal scroll.
   - links to #gen-N / #side-N (Jump to, Open the side branch, relatives)
     scroll the card below the masthead and the counter, and flash it.
   - From me / From the oldest: reorders the cards, in a view transition.
   --ft-top and --ft-dial-h hold the real masthead and counter heights.
   Without JavaScript the anchors still work and every text stays readable;
   with reduced motion nothing animates.
   ========================================================================== */
(function () {
  var page = document.querySelector('.ft-page');
  if (!page) return;

  var list = page.querySelector('.ft-gens');
  var dial = page.querySelector('.ft-dial');
  var yearEl = dial.querySelector('.ft-dial-year');
  var placeEl = dial.querySelector('.ft-dial-place');
  var genEl = dial.querySelector('.ft-dial-gen');
  var fill = dial.querySelector('.ft-dial-fill');
  var masthead = document.querySelector('.masthead');
  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  function reduced() { return reducedMQ.matches; }

  page.classList.add('ft-js');

  /* Offsets: the masthead is fixed and its height depends on its content */
  function mastheadH() { return masthead ? masthead.offsetHeight : 70; }
  function measure() {
    page.style.setProperty('--ft-top', mastheadH() + 'px');
    page.style.setProperty('--ft-dial-h', dial.offsetHeight + 'px');
  }
  /* Same sum as the scroll-margin-top of the cards in _family.scss */
  function offset() { return mastheadH() + dial.offsetHeight + 20; }

  /* Year counter */
  var last = null, shownYear = null, tween = 0;
  function showYear(y, label) {
    cancelAnimationFrame(tween);
    if (label || shownYear === null || reduced()) {
      shownYear = y;
      yearEl.textContent = label || y;
      return;
    }
    var from = shownYear, t0 = performance.now();
    shownYear = y;
    (function step(t) {
      var k = Math.min(1, (t - t0) / 420), e = 1 - Math.pow(1 - k, 3);
      yearEl.textContent = Math.round(from + (y - from) * e);
      if (k < 1) tween = requestAnimationFrame(step);
    })(t0);
  }

  function update() {
    var line = window.innerHeight * 0.45, cards = list.children, cur = cards[0];
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].getBoundingClientRect().top < line) cur = cards[i]; else break;
    }
    if (!cur) return;
    var rail = cur.querySelector('.ft-rail');
    if (rail && rail.scrollLeft > rail.clientWidth * 0.4) {
      var rr = rail.getBoundingClientRect(), scs = rail.querySelectorAll('.ft-side-card');
      [].forEach.call(scs, function (sc) {
        if (sc.getBoundingClientRect().left <= rr.left + rr.width * 0.5) cur = sc;
      });
      /* Two cards per view on wide screens: the last one never reaches the middle */
      if (atEnd(rail)) cur = scs[scs.length - 1];
    }
    if (cur === last) return;
    last = cur;
    var y = +cur.dataset.year, g = +cur.dataset.g;
    showYear(y, cur.dataset.dial);
    placeEl.textContent = cur.dataset.place;
    genEl.textContent = (g === 0 ? 'Me' : g === 1 ? '1 generation back' : g + ' generations back') +
      (cur.classList.contains('ft-side-card') ? ', side branch' : '');
    fill.style.width = ((2026 - y) / 1026 * 100).toFixed(1) + '%';
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; update(); });
  }

  /* Side rails: dots */
  function atEnd(rail) { return rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2; }
  [].forEach.call(page.querySelectorAll('.ft-rail'), function (rail) {
    var dots = rail.parentNode.querySelectorAll('.ft-dots i');
    rail.addEventListener('scroll', function () {
      var gap = parseFloat(getComputedStyle(rail).columnGap) || 12;
      var w = rail.firstElementChild.getBoundingClientRect().width + gap;
      var idx = atEnd(rail) ? dots.length - 1 : Math.round(rail.scrollLeft / w);
      [].forEach.call(dots, function (d, k) { d.classList.toggle('on', k === idx); });
      last = null;
      onScroll();
    }, { passive: true });
  });

  /* Enciphered text. Letters keep their case and digits stay digits, so the
     paragraph keeps roughly its width and height while it deciphers. */
  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', LOWER = UPPER.toLowerCase(), DIGITS = '0123456789';
  function pick(pool) { return pool.charAt(Math.floor(Math.random() * pool.length)); }
  function scramble(text, upto) {
    var out = '';
    for (var i = 0; i < text.length; i++) {
      var c = text.charAt(i);
      if (i < upto) out += c;
      else if (DIGITS.indexOf(c) > -1) out += pick(DIGITS);
      else if (c !== c.toLowerCase()) out += pick(UPPER);
      else if (c !== c.toUpperCase()) out += pick(LOWER);
      else out += c;
    }
    return out;
  }
  function decipher(el) {
    var text = el.dataset.text, t0 = performance.now();
    (function frame(t) {
      var k = Math.max(0, Math.min(1, (t - t0) / 1700));
      el.textContent = scramble(text, Math.floor(k * text.length));
      if (k < 1) requestAnimationFrame(frame); else el.classList.remove('ft-cipher');
    })(t0);
  }
  var decs = [].slice.call(page.querySelectorAll('.ft-decode'));
  if (decs.length && !reduced() && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        decipher(en.target);
      });
    }, { threshold: 0.6 });
    decs.forEach(function (el) {
      el.dataset.text = el.textContent;
      el.textContent = scramble(el.dataset.text, 0);
      el.classList.add('ft-cipher');
      io.observe(el);
    });
  }

  /* Jumps: bring a card to the top of the free area below the counter (so it
     is also the one the counter shows), then flash it */
  function flash(el) {
    el.classList.remove('ft-flash');
    void el.offsetWidth;
    el.classList.add('ft-flash');
    clearTimeout(el.ftFlash);
    el.ftFlash = setTimeout(function () { el.classList.remove('ft-flash'); }, 2400);
  }
  function goTo(el, nearest, instant) {
    var behavior = instant || reduced() ? 'auto' : 'smooth';
    var rail = el.closest('.ft-rail');
    if (rail) {
      var left = el.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft -
        parseFloat(getComputedStyle(rail).paddingLeft);
      rail.scrollTo({ left: left, behavior: behavior });
    }
    var r = el.getBoundingClientRect(), top = offset();
    if (!(nearest && r.top >= top && r.bottom <= window.innerHeight)) {
      window.scrollTo({ top: window.scrollY + r.top - top, behavior: behavior });
    }
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    if (!instant) flash(el);
  }
  /* Capture phase: the theme's jQuery smoothScroll (_main.js) is bound to
     every link and would run its own animation over this one. */
  page.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#gen-"], a[href^="#side-"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var hash = a.getAttribute('href'), el = document.getElementById(hash.slice(1));
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    history.pushState(null, '', hash);
    goTo(el, !!a.closest('.ft-side'));
  }, true);

  /* Order: From me / From the oldest */
  function setOrder(o) {
    var items = [].slice.call(list.children);
    function run() {
      items.sort(function (a, b) { return o === 'down' ? a.dataset.g - b.dataset.g : b.dataset.g - a.dataset.g; });
      items.forEach(function (li) { list.appendChild(li); });
      [].forEach.call(page.querySelectorAll('[data-order]'), function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.order === o));
      });
      last = null;
      update();
    }
    if (!document.startViewTransition || reduced()) { run(); return; }
    /* Names only for the transition, so they don't weigh on page navigation */
    items.forEach(function (li) { li.style.viewTransitionName = 'ft-gen-' + li.dataset.g; });
    document.startViewTransition(run).finished.finally(function () {
      items.forEach(function (li) { li.style.viewTransitionName = ''; });
    });
  }
  page.addEventListener('click', function (e) {
    var b = e.target.closest('[data-order]');
    if (b && b.getAttribute('aria-pressed') !== 'true') setOrder(b.dataset.order);
  });

  /* Start */
  measure();
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function () { measure(); onScroll(); });
    if (masthead) ro.observe(masthead);
    ro.observe(dial);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { measure(); onScroll(); });
  update();

  /* Arriving with #gen-N or #side-N: the counter now takes room, so land again */
  var start = /^#(gen|side)-\d+$/.test(location.hash) && document.getElementById(location.hash.slice(1));
  if (start) requestAnimationFrame(function () { goTo(start, false, true); });
})();
