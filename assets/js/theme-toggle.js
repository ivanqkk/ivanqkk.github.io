/* ==========================================================================
   Theme toggle
   The inline script in _includes/head.html sets data-theme before first
   paint. This file wires the masthead button: it switches theme with a
   circular reveal from the button (View Transitions API), remembers the
   choice, and follows the system theme until the visitor picks one.
   Without the API, or with reduced motion, the theme switches instantly.
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

  function setTheme(theme, remember) {
    root.dataset.theme = theme;
    if (remember) {
      try { localStorage.setItem('theme', theme); } catch (e) {}
    }
    syncBtn();
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

  /* Exposed for later scripts (e.g. a search palette action). */
  window.toggleTheme = toggleTheme;
})();
