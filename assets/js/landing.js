/* ==========================================================================
   Landing (home page card, _pages/about.md)
   - Tagline: retypes itself through a few phrases, deleting back to "AI "
     each time, with a blinking caret. Screen readers get one static
     sentence (.sr-only in the markup); with reduced motion it stays still.
     A few special days (Pi Day, Mole Day…) add a phrase of their own.
   - Clock: Stockholm time and its offset from the visitor, every 30 s.
   - Email: the copy button builds the address from the "[at]" text, copies
     it and confirms with a toast.
   - Next: the first event of _data/events.yml that has not ended, with
     "in N days" or "Happening now"; the line goes when there is none.
   Without JavaScript the card shows the static text Jekyll wrote.
   ========================================================================== */
(function () {
  var card = document.querySelector('.landing-card');
  if (!card) return;

  var TZ = 'Europe/Stockholm';
  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---- Tagline -------------------------------------------------------- */
  var PHRASES = ['AI for life science', 'AI for proteins', 'AI for drug discovery', 'AI for medical data', 'AI at supercomputer scale'];

  /* Special days: on these dates (the visitor's local date) one extra
     phrase leads the rotation, and with reduced motion it is the one shown.
     Every phrase must start with "AI", which the typing never deletes.
     The rare ones win over the yearly ones. Keep them short (about 30
     characters) so the line does not wrap on a phone. Preview any date with
     ?day=YYYY-MM-DD in the address. */
  function specialPhrase(d) {
    var y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate(), yy = y % 100;
    var p2 = function (n) { return (n < 10 ? '0' : '') + n; };
    var dmy = p2(day) + p2(m) + y, mdy = p2(m) + p2(day) + y, ymd = y + p2(m) + p2(day);
    var pal = function (s) { return s === s.split('').reverse().join(''); };
    if (pal(dmy) || pal(mdy) || pal(ymd)) return 'AIbohphobIA';  // Palindrome Day: the fear of palindromes, itself one
    if (day === m && day * day === yy) return 'AI at the root: √' + p2(yy) + ' = ' + day;  // Square Root Day
    return {
      '2-7':   'AI for 2.71828… molecules',          // e-Day
      '3-14':  'AI for 3.14159… molecules',          // Pi Day
      '4-25':  'AI for the double helix',            // DNA Day
      '10-23': 'AI for 6.022 × 10²³ molecules',      // Mole Day
      '11-23': 'AI for 1, 1, 2, 3, 5, 8…',           // Fibonacci Day
      '12-10': 'AI for Nobel-winning proteins'       // Nobel Day, Stockholm (Chemistry 2024: protein structure)
    }[m + '-' + day] || null;
  }
  var today = new Date(), q = /[?&]day=(\d{4})-(\d{2})-(\d{2})/.exec(location.search);
  if (q) today = new Date(+q[1], q[2] - 1, +q[3]);
  var special = specialPhrase(today);
  if (special) PHRASES.unshift(special);

  var tag = card.querySelector('.landing-tag'), txt = card.querySelector('.rot-text');
  if (txt) txt.textContent = PHRASES[0];
  var typing = 0;
  function startTyping() {
    if (typing || !tag || !txt || reducedMQ.matches) return;
    tag.classList.add('rot-on');
    var pi = 0, ci = PHRASES[0].length, deleting = false;
    // Delete back to what this phrase and the next share, at most 3
    // characters: "AI " between ordinary phrases, "AI" around AIbohphobIA.
    function keep(a, b) {
      var n = 0;
      while (n < 3 && a.charAt(n) && a.charAt(n) === b.charAt(n)) n++;
      return n;
    }
    (function tick() {
      var p = PHRASES[pi], wait = 55;
      if (!deleting) {
        if (ci < p.length) { ci++; txt.textContent = p.slice(0, ci); }
        else { deleting = true; wait = 1500; }
      } else if (ci > keep(p, PHRASES[(pi + 1) % PHRASES.length])) { ci--; txt.textContent = p.slice(0, ci); wait = 35; }
      else { deleting = false; pi = (pi + 1) % PHRASES.length; }
      typing = setTimeout(tick, wait);
    })();
  }
  function stopTyping() {
    clearTimeout(typing); typing = 0;
    if (tag) tag.classList.remove('rot-on');
    if (txt) txt.textContent = PHRASES[0];
  }
  function onMotionPref() { if (reducedMQ.matches) stopTyping(); else startTyping(); }
  if (reducedMQ.addEventListener) reducedMQ.addEventListener('change', onMotionPref);
  else if (reducedMQ.addListener) reducedMQ.addListener(onMotionPref);
  startTyping();

  /* ---- Clock ---------------------------------------------------------- */
  var clock = card.querySelector('[data-clock]');
  if (clock && window.Intl) {
    var timeEl = clock.querySelector('time'), diffEl = clock.querySelector('[data-tz-diff]');
    var hm = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
    var tickClock = function () {
      var now = new Date(), sto = 0;
      hm.formatToParts(now).forEach(function (p) {
        if (p.type === 'hour') sto += (+p.value % 24) * 60;
        if (p.type === 'minute') sto += +p.value;
      });
      timeEl.textContent = hm.format(now);
      var d = sto - (now.getHours() * 60 + now.getMinutes());
      if (d > 720) d -= 1440;
      if (d < -720) d += 1440;
      diffEl.textContent = d === 0 ? 'same time as you' : (Math.abs(d) / 60) + ' h ' + (d > 0 ? 'ahead of you' : 'behind you');
    };
    tickClock();
    clock.hidden = false;
    setInterval(tickClock, 30000);
  }

  /* ---- Email ---------------------------------------------------------- */
  var toastEl = document.getElementById('toast'), toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.querySelector('span').textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }
  function legacyCopy(t) {
    try {
      var ta = document.createElement('textarea');
      ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) { return false; }
  }
  var copyBtn = card.querySelector('[data-copy-email]'), mailEl = card.querySelector('[data-email]');
  if (copyBtn && mailEl) {
    var address = mailEl.textContent.replace(/\s*\[at\]\s*/, '@').trim();
    copyBtn.hidden = false;
    copyBtn.addEventListener('click', function () {
      var done = function (ok) { toast(ok ? 'Email address copied' : 'Couldn’t copy. The address is ' + address); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(address).then(function () { done(true); }, function () { done(legacyCopy(address)); });
      } else done(legacyCopy(address));
    });
  }

  /* ---- Next ----------------------------------------------------------- */
  var nexts = [].slice.call(card.querySelectorAll('[data-next]'));
  function dayDiff(d, now) {
    var a = new Date(now); a.setHours(0, 0, 0, 0);
    var b = new Date(d); b.setHours(0, 0, 0, 0);
    return Math.round((b - a) / 86400000);
  }
  function rel(n) { return n <= 0 ? 'today' : n === 1 ? 'tomorrow' : 'in ' + n + ' days'; }
  function refreshNext() {
    var now = new Date(), found = false;
    nexts.forEach(function (a) {
      var s = new Date(a.dataset.start), e = new Date(a.dataset.end);
      var show = !found && now < e;
      a.hidden = !show;
      if (!show) return;
      found = true;
      a.querySelector('[data-next-label]').textContent = now >= s ? 'Happening now' : 'Next, ' + rel(dayDiff(s, now));
    });
  }
  if (nexts.length) {
    refreshNext();
    document.addEventListener('visibilitychange', function () { if (!document.hidden) refreshNext(); });
  }
})();
