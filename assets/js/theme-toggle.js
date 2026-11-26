/* ==========================================================================
   Theme toggle
   The inline script in _includes/head.html sets data-theme before first
   paint. This file wires the masthead button: it switches theme with a
   circular reveal from the button (View Transitions API), remembers the
   choice, and follows the system theme until the visitor picks one.
   Without the API, or with reduced motion, the theme switches instantly.
   At the end, a hello for visitors who open the browser console (it rides
   along here because this is the one small script every page loads).
   ========================================================================== */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('#theme-toggle .theme-btn');
  if (!btn) return;

  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var darkMQ = window.matchMedia('(prefers-color-scheme: dark)');

  function saved() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function syncBtn() {
    btn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  /* Browser UI colour: the <meta name="theme-color"> tags in head/custom.html
     follow the system theme; set them to the page background of the theme
     actually shown, which differs when the visitor picked one. */
  function syncMeta() {
    var bg = getComputedStyle(root).getPropertyValue('--bg').trim();
    if (!bg) return;
    [].forEach.call(document.querySelectorAll('meta[name="theme-color"]'), function (m) {
      m.setAttribute('content', bg);
    });
  }

  function setTheme(theme, remember) {
    root.dataset.theme = theme;
    if (remember) {
      try { localStorage.setItem('theme', theme); } catch (e) {}
    }
    syncBtn();
    syncMeta();
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  function toggleTheme() {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    function apply() { setTheme(next, true); }

    if (!document.startViewTransition || reducedMQ.matches) { apply(); return; }

    var b = btn.getBoundingClientRect();
    var x = b.left + b.width / 2, y = b.top + b.height / 2;
    var rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add('theme-anim');
    var vt = document.startViewTransition(apply);
    vt.ready.then(function () {
      root.animate(
        { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + rad + 'px at ' + x + 'px ' + y + 'px)'] },
        { duration: 560, easing: 'cubic-bezier(.2,.7,.2,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(function () {});
    vt.finished.finally(function () { root.classList.remove('theme-anim'); });
  }

  /* Follow the system theme until the visitor makes a choice. */
  function onSystemChange(e) {
    var s = saved();
    if (s !== 'dark' && s !== 'light') setTheme(e.matches ? 'dark' : 'light', false);
  }
  if (darkMQ.addEventListener) darkMQ.addEventListener('change', onSystemChange);
  else if (darkMQ.addListener) darkMQ.addListener(onSystemChange);

  btn.addEventListener('click', toggleTheme);
  syncBtn();
  syncMeta();

  /* Exposed for later scripts (e.g. a search palette action). */
  window.toggleTheme = toggleTheme;
})();

/* Console hello, and a pointer to the source. The molecule depends on when:
   - DNA Day (25 April, the visitor's date): a double helix with a message.
     Strand 1 (lower case below, printed bold in colour) runs 5'->3' from top
     left and swaps sides at every crossing: ATG CAT ATT TAA, which a
     ribosome reads as M-H-I-stop, i.e. start + "HI".
   - fika (15:00 to 16:00 in Stockholm): caffeine.
   - otherwise: a peptide bond.
   ?day=YYYY-MM-DD in the address previews a date, as on the home page. */
(function () {
  if (!window.console || !console.log) return;
  var now = new Date(), q = /[?&]day=(\d{4})-(\d{2})-(\d{2})/.exec(location.search);
  var dnaDay = q ? q[2] === '04' && q[3] === '25' : now.getMonth() === 3 && now.getDate() === 25;
  var fika = false;
  try {
    fika = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Stockholm', hour: '2-digit', hourCycle: 'h23' })
      .format(now) === '15';
  } catch (e) {}

  var art, caption;
  if (dnaDay) {
    art = [
      " 5'  │       │ 3'",
      '      a═════T',
      '       ╲   ╱',
      '        t═A',
      '         ╳',
      '        C≡g',
      '       ╱   ╲',
      '      G≡≡≡≡≡c',
      '     │       │',
      '      T═════a',
      '       ╲   ╱',
      '        A═t',
      '         ╳',
      '        a═T',
      '       ╱   ╲',
      '      t═════A',
      '     │       │',
      '      t═════A',
      '       ╲   ╱',
      '        t═A',
      '         ╳',
      '        T═a',
      '       ╱   ╲',
      '      T═════a',
      " 5'  │       │ 3'"
    ];
    caption = 'Happy DNA Day! Follow the coloured strand from top left (it swaps\n' +
              'sides at every ╳) from 5′ to 3′, then translate it.';
  } else if (fika) {
    art = [
      '           O         CH₃',
      '           ║         │',
      '   H₃C─N───C───C─────N',
      '       │       ║      ╲',
      '       │       ║       CH',
      '       │       ║      ╱╱',
      '   O═══C───N───C─────N',
      '           │',
      '           CH₃'
    ];
    caption = 'It is fika time in Stockholm. Fuelled by 1,3,7-trimethylxanthine.';
  } else {
    art = [
      '        R       O       R       O',
      '        │       ║       │       ║',
      '  ···─N─Cα──────C───N───Cα──────C─···',
      '      │             │',
      '      H             H'
    ];
    caption = 'Every protein starts with a peptide bond.';
  }

  // Lower-case letters mark strand 1: print them upper case, bold and coloured.
  var styles = [];
  var text = art.join('\n').replace(/[acgt]/g, function (b) {
    styles.push('color:#1aa391;font-weight:bold', '');
    return '%c' + b.toUpperCase() + '%c';
  });
  console.log.apply(console, [
    '\n' + text + '\n\n' + caption + '\n\n' +
    '%cHello, curious mind.%c\n' +
    'This site is plain Jekyll, no trackers, and its source is open:\n' +
    'https://github.com/ivanqkk/ivanqkk.github.io\n' +
    'Spotted something off? Open an issue, or just say hi.\n'
  ].concat(styles, ['font-weight:bold;font-size:1.2em', '']));
})();
