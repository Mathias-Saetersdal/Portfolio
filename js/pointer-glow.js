/* pointer-glow.js
   Drives the radial glow behind project cards, case-study action
   buttons, and the memory test's own buttons (#memory-test). Delegated:
   one listener per container (.projects, .button-group or
   #memory-test), not one per card or button, so cards added later by
   js/projects.js are covered without rebinding - and so is
   #memory-test, whose buttons js/memory-test.js replaces wholesale on
   every phase change.
   Desktop only, and off under reduced motion: a pointer-tracked glow
   is exactly the motion prefers-reduced-motion exists to remove.

   Two things a future edit will otherwise break:
   - Both gates (the desktop media query and the reduced-motion check,
     see enabled() below) run before attach() ever adds a listener.
     Neither is a CSS-only gate; the listener itself must not exist
     when either is false, or reduced-motion users get the tracking
     even if the paint stays invisible.
   - The resize handler's sync()/detach() path must clear residual
     --glow-strength, --glow-x and --glow-y from every .project and
     .button, not just stop listening. A window dragged narrow mid-hover
     would otherwise leave a card or button stuck glowing forever, with
     no listener left to ever write --glow-strength back to 0. */

(function () {
  'use strict';

  var MEDIA = '(hover: hover) and (pointer: fine) and (min-width: 64rem)';
  var desktop = window.matchMedia(MEDIA);
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  var containers = document.querySelectorAll('.projects, .button-group, #memory-test');
  if (!containers.length) {
    return;
  }

  function enabled() {
    return desktop.matches && !reduceMotion.matches;
  }

  var rafId = null;
  var pending = null; /* { el, clientX, clientY } */
  var active = null; /* element currently holding the glow */
  var bindings = []; /* { container, move, out } */

  function closestTarget(el) {
    return el.closest('.project, .button');
  }

  function flush() {
    rafId = null;
    if (!pending) {
      return;
    }
    var el = pending.el;
    var rect = el.getBoundingClientRect();
    el.style.setProperty('--glow-x', (pending.clientX - rect.left) + 'px');
    el.style.setProperty('--glow-y', (pending.clientY - rect.top) + 'px');
    el.style.setProperty('--glow-strength', '1');
    pending = null;
  }

  function schedule(el, clientX, clientY) {
    pending = { el: el, clientX: clientX, clientY: clientY };
    if (rafId === null) {
      rafId = requestAnimationFrame(flush);
    }
  }

  function clear(el) {
    el.style.setProperty('--glow-strength', '0');
  }

  function onPointerMove(container, evt) {
    var el = closestTarget(evt.target);
    if (!el || !container.contains(el)) {
      return;
    }
    if (active && active !== el) {
      clear(active);
    }
    active = el;
    schedule(el, evt.clientX, evt.clientY);
  }

  function onPointerOut(container, evt) {
    var el = closestTarget(evt.target);
    if (!el || !container.contains(el)) {
      return;
    }
    var to = evt.relatedTarget;
    if (to && el.contains(to)) {
      return; /* still inside the same card or button */
    }
    clear(el);
    if (active === el) {
      active = null;
    }
  }

  function attach() {
    if (bindings.length) {
      return;
    }
    containers.forEach(function (container) {
      var move = function (evt) { onPointerMove(container, evt); };
      var out = function (evt) { onPointerOut(container, evt); };
      container.addEventListener('pointermove', move);
      container.addEventListener('pointerout', out);
      bindings.push({ container: container, move: move, out: out });
    });
  }

  function detach() {
    if (!bindings.length) {
      return;
    }
    bindings.forEach(function (b) {
      b.container.removeEventListener('pointermove', b.move);
      b.container.removeEventListener('pointerout', b.out);
    });
    bindings = [];
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    pending = null;
    active = null;
    /* A window dragged narrow mid-hover must not leave a card or
       button stuck glowing with no listener left to clear it. */
    document.querySelectorAll('.project, .button').forEach(function (el) {
      el.style.removeProperty('--glow-strength');
      el.style.removeProperty('--glow-x');
      el.style.removeProperty('--glow-y');
    });
  }

  function sync() {
    if (enabled()) {
      attach();
    } else {
      detach();
    }
  }

  sync();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sync, 150);
  });
})();
