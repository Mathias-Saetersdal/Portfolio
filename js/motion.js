/* motion.js
   Motion moment 3: project cards fade and rise once on scroll.
   The hero stagger (moment 2) is pure CSS in main.css.
   Cards are only hidden by this script, never by default CSS, so
   nothing disappears when JavaScript is off. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target); /* once per element */
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  function arm() {
    document.querySelectorAll('.project:not(.will-reveal)').forEach(function (card) {
      /* Cards already on screen render as they are. Only cards the
         reader has to scroll to get the reveal. */
      if (card.getBoundingClientRect().top >= window.innerHeight) {
        card.classList.add('will-reveal');
        observer.observe(card);
      }
    });
  }

  arm();
  document.addEventListener('projects:rendered', arm);
})();
