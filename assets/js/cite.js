/* ==========================================================================
   Citation dialog
   Every [data-cite-title] button (_includes/cite-button.html) opens the
   dialog in _includes/cite-dialog.html with the work's BibTeX and APA text.
   - BibTeX comes from data-bibtex (JSON string) or is fetched from
     data-bib-url (same origin, cached). If neither works, APA is shown.
   - "Copy citation" copies the visible text and confirms in the button and
     in a polite live-region toast.
   - The dialog animates in and out unless reduced motion is requested.
   The buttons ship hidden; this script reveals them.
   ========================================================================== */
(function () {
  var dlg = document.getElementById('cite-dialog');
  if (!dlg || typeof dlg.showModal !== 'function') return;

  var reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var forEl = document.getElementById('cite-for');
  var textEl = document.getElementById('cite-text');
  var copyBtn = document.getElementById('cite-copy');
  var copyLabel = copyBtn.querySelector('span');
  var toastEl = document.getElementById('toast');
  var fmtBtns = [].slice.call(dlg.querySelectorAll('[data-fmt]'));
  var cache = {};
  var cur = { fmt: 'bib', bib: null, apa: '', opener: null, token: 0 };

  [].forEach.call(document.querySelectorAll('[data-cite-title]'), function (b) { b.hidden = false; });

  /* ---- Toast ---------------------------------------------------------- */
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.querySelector('span').textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }
  window.siteToast = toast;

  /* ---- Clipboard ------------------------------------------------------ */
  function legacyCopy(t) {
    try {
      var ta = document.createElement('textarea');
      ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      (document.querySelector('dialog[open]') || document.body).appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) { return false; }
  }
  function copyText(t) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(t).then(function () { return true; }, function () { return legacyCopy(t); });
    }
    return Promise.resolve(legacyCopy(t));
  }

  /* ---- Dialog open / close with motion -------------------------------- */
  var closeTimer = null;
  function openSheet() {
    clearTimeout(closeTimer);
    dlg.classList.remove('closing');
    if (!dlg.open) dlg.showModal();
  }
  function closeSheet() {
    if (!dlg.open) return;
    if (reducedMQ.matches) { dlg.close(); return; }
    dlg.classList.add('closing');
    dlg.addEventListener('animationend', function done(e) {
      if (e.target !== dlg || !dlg.classList.contains('closing')) return;
      dlg.removeEventListener('animationend', done);
      dlg.classList.remove('closing');
      dlg.close();
    });
    /* Safety net if no animation runs (e.g. CSS not loaded). */
    closeTimer = setTimeout(function () { if (dlg.open && dlg.classList.contains('closing')) { dlg.classList.remove('closing'); dlg.close(); } }, 400);
  }
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeSheet(); });
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.closest('[data-close]')) closeSheet();
  });
  dlg.addEventListener('close', function () {
    if (cur.opener && document.contains(cur.opener)) cur.opener.focus();
  });

  /* ---- Content -------------------------------------------------------- */
  function resetCopy() { copyBtn.classList.remove('is-done'); copyLabel.textContent = 'Copy citation'; }

  function setFmt(f) {
    if (f === 'bib' && !cur.bib) f = 'apa';
    cur.fmt = f;
    fmtBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.fmt === f)); });
    textEl.textContent = f === 'bib' ? cur.bib : cur.apa;
    resetCopy();
  }

  function loadBib(btn) {
    if (btn.dataset.bibtex) {
      try { return Promise.resolve(JSON.parse(btn.dataset.bibtex).trim()); } catch (e) { return Promise.resolve(null); }
    }
    var url = btn.dataset.bibUrl;
    if (!url) return Promise.resolve(null);
    if (!cache[url]) {
      cache[url] = fetch(url, { credentials: 'same-origin' })
        .then(function (r) { return r.ok ? r.text() : null; })
        .then(function (t) { return t ? t.trim() : null; })
        .catch(function () { return null; });
    }
    return cache[url];
  }

  function openCite(btn) {
    var token = ++cur.token;
    cur.opener = btn;
    cur.apa = btn.dataset.apa || '';
    cur.bib = null;
    forEl.textContent = btn.dataset.citeTitle;
    var hasBib = !!(btn.dataset.bibtex || btn.dataset.bibUrl);
    fmtBtns.forEach(function (b) { if (b.dataset.fmt === 'bib') b.disabled = !hasBib; if (b.dataset.fmt === 'apa') b.disabled = !cur.apa; });
    if (hasBib) {
      textEl.textContent = 'Loading…';
      fmtBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.fmt === 'bib')); });
    } else {
      setFmt('apa');
    }
    openSheet();
    copyBtn.focus();
    if (!hasBib) return;
    loadBib(btn).then(function (bib) {
      if (token !== cur.token) return;
      cur.bib = bib;
      if (!bib) fmtBtns.forEach(function (b) { if (b.dataset.fmt === 'bib') b.disabled = true; });
      setFmt(bib ? 'bib' : 'apa');
    });
  }

  fmtBtns.forEach(function (b) { b.addEventListener('click', function () { setFmt(b.dataset.fmt); }); });

  copyBtn.addEventListener('click', function () {
    var t = textEl.textContent;
    if (!t || t === 'Loading…') return;
    copyText(t).then(function (ok) {
      if (ok) {
        copyBtn.classList.add('is-done');
        copyLabel.textContent = 'Copied';
        toast((cur.fmt === 'bib' ? 'BibTeX' : 'APA') + ' citation copied');
        setTimeout(resetCopy, 2000);
      } else {
        copyLabel.textContent = 'Select the text above to copy';
      }
    });
  });

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cite-title]');
    if (b) { e.preventDefault(); openCite(b); }
  });

  /* Exposed for later scripts (e.g. a search palette "Cite …" action). */
  window.openCite = openCite;
})();
