/* ==========================================================================
   Events: upcoming / past, countdown, registration deadline
   Jekyll renders every event (_includes/upcoming-events.html, event-card.html
   and the past variant in talk-card.html) and splits them at build time.
   The site is static, so this redoes the split with the visitor's clock:
   - an ended event leaves "Upcoming" and appears among the talk cards of its
     year; year groups and sections left empty are hidden;
   - a section with data-max keeps that many events and shows "All upcoming
     events" when there are more;
   - upcoming cards get a countdown ("in 4 days", "Happening now"), the
     visitor's local time when it differs from Stockholm time, and the
     registration note ("closes …, in 2 days", urgent at 3 days or less,
     "Registration closed", with Register hidden).
   No animation; times are formatted in Europe/Stockholm as on the page.
   ========================================================================== */
(function () {
  var TZ = 'Europe/Stockholm';
  var HM = { hour: '2-digit', minute: '2-digit' };

  function fmt(d, opts, tz) {
    var o = {}; for (var k in opts) o[k] = opts[k];
    if (tz !== null) o.timeZone = tz || TZ;
    return new Intl.DateTimeFormat('en-GB', o).format(d);
  }
  function dayDiff(d, now) {
    var a = new Date(now); a.setHours(0, 0, 0, 0);
    var b = new Date(d); b.setHours(0, 0, 0, 0);
    return Math.round((b - a) / 86400000);
  }
  function rel(n) { return n <= 0 ? 'today' : n === 1 ? 'tomorrow' : 'in ' + n + ' days'; }

  function updateCard(card, now) {
    var s = new Date(card.dataset.start), e = new Date(card.dataset.end);
    var ended = now >= e;
    card.hidden = ended;
    if (ended) return;

    var live = now >= s;
    var count = card.querySelector('[data-countdown]');
    if (count) {
      count.className = live ? 'ev-live' : 'ev-count';
      count.textContent = live ? 'Happening now' : rel(dayDiff(s, now));
    }

    var local = card.querySelector('[data-local]');
    if (local) {
      var here = fmt(s, HM, null), there = fmt(s, HM);
      local.textContent = here !== there ? ' (' + here + '–' + fmt(e, HM, null) + ' your time)' : '';
    }

    var note = card.querySelector('[data-reg-note]');
    var reg = card.querySelector('[data-register]');
    var regOpen = true;
    if (card.dataset.registerBy) {
      var r = new Date(card.dataset.registerBy);
      regOpen = now < r;
      if (note) {
        var rn = dayDiff(r, now);
        note.hidden = live;
        note.classList.toggle('urgent', regOpen && rn <= 3);
        note.querySelector('span').textContent = regOpen
          ? 'Registration closes ' + fmt(r, { weekday: 'long', day: 'numeric', month: 'long' }) + ', ' + rel(rn)
          : 'Registration closed';
      }
    }
    if (reg) reg.hidden = !regOpen || live;
  }

  function refresh(now) {
    now = now ? new Date(now) : new Date();

    [].forEach.call(document.querySelectorAll('[data-event]'), function (c) { updateCard(c, now); });

    [].forEach.call(document.querySelectorAll('[data-event-past]'), function (c) {
      c.hidden = now < new Date(c.dataset.end);
    });

    [].forEach.call(document.querySelectorAll('[data-upcoming]'), function (sec) {
      var max = parseInt(sec.dataset.max, 10) || Infinity;
      var open = [].filter.call(sec.querySelectorAll('[data-event]'), function (c) { return !c.hidden; });
      open.forEach(function (c, i) { if (i >= max) c.hidden = true; });
      var more = sec.querySelector('[data-more]');
      if (more) more.hidden = open.length <= max;
      sec.hidden = open.length === 0;
    });

    [].forEach.call(document.querySelectorAll('.year-group'), function (g) {
      if (!g.querySelector('[data-event-past]')) return;
      g.hidden = !g.querySelector('.talk-card-modern:not([hidden])');
    });
  }

  refresh();
  document.addEventListener('visibilitychange', function () { if (!document.hidden) refresh(); });

  /* Exposed so the split can be re-run, e.g. with another date when testing. */
  window.refreshEvents = refresh;
})();
