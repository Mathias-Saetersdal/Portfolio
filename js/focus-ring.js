/* focus-ring.js
   One shared element travels between keyboard focus targets.
   The native :focus-visible outline in main.css stays intact and takes
   over whenever this script does not run. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var PAD = 4; /* distance from the target's box to the ring, px */

  var ring = document.createElement('div');
  ring.id = 'focus-ring';
  ring.className = 'focus-ring';
  ring.setAttribute('aria-hidden', 'true');
  document.body.appendChild(ring);

  /* Only now does main.css hide the native outline. */
  document.documentElement.classList.add('focus-ring-active');

  var visible = false;

  function place(el, animate) {
    var r = el.getBoundingClientRect();
    var x = r.left + window.scrollX - PAD;
    var y = r.top + window.scrollY - PAD;

    /* Jump instead of travelling when appearing from hidden, when
       re-anchoring after resize or scroll, and under reduced motion. */
    var jump = !animate || !visible || reduceMotion.matches;
    if (jump) {
      ring.style.transition = 'none';
    }

    ring.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    ring.style.width = (r.width + PAD * 2) + 'px';
    ring.style.height = (r.height + PAD * 2) + 'px';

    if (jump) {
      void ring.offsetWidth; /* commit the jump before re-enabling the transit */
      ring.style.transition = '';
    }

    ring.classList.add('is-visible');
    visible = true;
  }

  function hide() {
    ring.classList.remove('is-visible');
    visible = false;
  }

  function focusVisible(el) {
    try {
      return el.matches(':focus-visible');
    } catch (err) {
      return true; /* no :focus-visible support: show rather than hide */
    }
  }

  /* Snap the ring back onto whatever is focused, without a transit. */
  function reanchor() {
    var el = document.activeElement;
    if (el && el !== document.body && el !== document.documentElement && focusVisible(el)) {
      place(el, false);
    } else {
      hide();
    }
  }

  document.addEventListener('focusin', function (e) {
    var t = e.target;
    if (!(t instanceof Element) || !focusVisible(t)) {
      hide(); /* mouse and touch focus keep the page quiet */
      return;
    }
    place(t, true);
  });

  document.addEventListener('focusout', function (e) {
    if (!e.relatedTarget) {
      hide(); /* blur with nothing focused */
    }
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    hide();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(reanchor, 150);
  });

  /* The ring lives in document coordinates, so page scroll cannot
     detach it. Scrolling inside a nested scroller would, so hide and
     re-anchor when the scroll settles. */
  var scrollTimer;
  window.addEventListener('scroll', function (e) {
    if (e.target === document) {
      return;
    }
    hide();
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(reanchor, 100);
  }, true);

  /* The "Trykk Tab" hint. The dismiss button only exists when this
     script runs, so no dead control is ever served. */
  var hint = document.getElementById('tab-hint');
  if (hint) {
    var KEY = 'tab-hint-dismissed';
    var dismissed = false;
    try {
      dismissed = localStorage.getItem(KEY) === '1';
    } catch (err) { /* storage blocked: hint simply shows every visit */ }

    if (dismissed) {
      hint.hidden = true;
    } else {
      var lang = (document.documentElement.lang || 'nb').toLowerCase();
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = lang.indexOf('en') === 0 ? 'Hide this tip' : 'Skjul tipset';
      btn.addEventListener('click', function () {
        hint.hidden = true;
        try {
          localStorage.setItem(KEY, '1');
        } catch (err) { /* fine, it comes back next visit */ }
      });
      hint.appendChild(document.createTextNode(' '));
      hint.appendChild(btn);
    }
  }
})();
