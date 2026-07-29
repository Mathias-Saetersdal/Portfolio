/* memory-test.js
   Browser version of the colour and memory experiment, mounted in
   work/color.html. Objects, accepted answers, recall figures and
   timings all come from data/memory-test.json. Norwegian only. */

(function () {
  'use strict';

  var root = document.getElementById('memory-test');
  if (!root) {
    return;
  }

  var SRC = root.getAttribute('data-source');
  var BASE = root.getAttribute('data-base') || '';
  var STORE_KEY = 'mathias-portfolio-memory-test';

  var COPY = {
    intro: [
      'Denne testen er en forenklet versjon av studien. Du får se et bilde i 15 sekunder, teller baklengs i 10 sekunder, og skriver deretter ned det du husker i 90 sekunder.',
      'Deltakerne i studien snakket i 60 sekunder. Her skriver du i 90, fordi skriving tar lengre tid. Sammenligningen er veiledende, ikke lik.',
      'Testen er ikke overvåket, og fargesynet ditt er ikke kontrollert.',
      'Testen bygger på bilder og kan ikke gjennomføres uten syn.'
    ],
    resultCaveat: 'Ett resultat sier ingenting om farge og hukommelse. Studien fant ingen sammenheng mellom fargeegenskaper og gjenkalling. Relativ størrelse var den eneste egenskapen som hang sammen med hvor ofte et objekt ble husket.',
    repeatNote: 'Andre forsøk kan ikke sammenlignes med det første.'
  };

  var LABELS = { colour: 'Farge, snitt', greyscale: 'Gråtoner, snitt' };

  var data = null;
  var run = null;
  var timerInterval = null;
  var memStore = { completed: [] };

  function reduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ---------- storage: one namespaced key, nothing else ---------- */

  function readStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.completed)) {
          return parsed;
        }
      }
    } catch (err) { /* storage blocked: fall back to this page view */ }
    return memStore;
  }

  function writeStore(store) {
    memStore = store;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (err) { /* fine, alternation then only lasts this page view */ }
  }

  /* ---------- small DOM helper ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === 'text') {
        node.textContent = attrs[key];
      } else {
        node.setAttribute(key, attrs[key]);
      }
    });
    (children || []).forEach(function (child) {
      node.appendChild(child);
    });
    return node;
  }

  var stage = el('div', {});
  var live = el('p', { 'class': 'visually-hidden', 'aria-live': 'polite' });
  root.appendChild(stage);
  root.appendChild(live);

  function announce(message) {
    live.textContent = '';
    window.setTimeout(function () {
      live.textContent = message;
    }, 50);
  }

  var firstRender = true;

  function setPanel(headingText, children) {
    stopTimer();
    stage.textContent = '';
    var heading = el('h3', { tabindex: '-1', text: headingText });
    var panel = el('div', { 'class': 'mt-panel' }, [heading].concat(children));
    stage.appendChild(panel);
    if (firstRender) {
      firstRender = false; /* never steal focus on page load */
    } else {
      heading.focus();
    }
  }

  /* ---------- timer ---------- */

  /* Wall clock, not a decrementing counter. Browsers throttle timers
     in hidden tabs, and a stretched countdown would hand out extra
     memorization time. The deadline stands regardless of tab state. */
  var timerDeadline = 0;
  var announceBucket = 0;

  function remainingNow() {
    return Math.max(0, Math.ceil((timerDeadline - Date.now()) / 1000));
  }

  function startTimer(seconds, display, onDone) {
    timerDeadline = Date.now() + seconds * 1000;
    announceBucket = Math.ceil(seconds / 15);
    display.textContent = seconds + ' sekunder igjen';
    timerInterval = window.setInterval(function () {
      var remaining = remainingNow();
      display.textContent = remaining + ' sekunder igjen';
      if (remaining <= 0) {
        stopTimer();
        onDone();
        return;
      }
      /* announce roughly every 15 seconds, never every second */
      var bucket = Math.ceil(remaining / 15);
      if (bucket < announceBucket) {
        announceBucket = bucket;
        announce(remaining + ' sekunder igjen');
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      window.clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function timeButton() {
    var btn = el('button', { 'class': 'button mt-quiet', type: 'button', text: 'Hvor lang tid igjen?' });
    btn.addEventListener('click', function () {
      announce(remainingNow() + ' sekunder igjen');
    });
    return btn;
  }

  function abortButton() {
    var btn = el('button', { 'class': 'button mt-quiet', type: 'button', text: 'Avbryt' });
    btn.addEventListener('click', intro);
    return btn;
  }

  /* ---------- condition selection ---------- */

  function pickCondition() {
    var completed = readStore().completed;
    var ids = data.conditions.map(function (c) { return c.id; });
    var remaining = ids.filter(function (id) { return completed.indexOf(id) === -1; });
    var id;
    if (remaining.length === ids.length || remaining.length === 0) {
      id = ids[Math.floor(Math.random() * ids.length)];
    } else {
      id = remaining[0];
    }
    return {
      condition: data.conditions.filter(function (c) { return c.id === id; })[0],
      repeat: completed.indexOf(id) !== -1,
      entries: []
    };
  }

  /* ---------- scoring ---------- */

  function normalize(text) {
    return text.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  /* Levenshtein distance 0 or 1, without building the full matrix. */
  function withinOne(a, b) {
    if (a === b) {
      return true;
    }
    if (Math.abs(a.length - b.length) > 1) {
      return false;
    }
    var i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
      i += 1;
    }
    if (a.length === b.length) {
      return a.slice(i + 1) === b.slice(i + 1);
    }
    if (a.length < b.length) {
      return a.slice(i) === b.slice(i + 1);
    }
    return a.slice(i + 1) === b.slice(i);
  }

  function matchEntry(norm) {
    var items = run.condition.items;
    for (var i = 0; i < items.length; i += 1) {
      var accepts = items[i].accept_nb;
      for (var j = 0; j < accepts.length; j += 1) {
        var accepted = normalize(accepts[j]);
        if (norm === accepted) {
          return items[i];
        }
        if (norm.length >= 5 && withinOne(norm, accepted)) {
          return items[i];
        }
      }
    }
    return null;
  }

  function scoreRun() {
    var matched = {};
    var results = run.entries.map(function (entry) {
      var item = matchEntry(normalize(entry));
      if (!item) {
        return { text: entry, status: 'err' };
      }
      if (matched[item.id]) {
        return { text: entry, status: 'dup', item: item };
      }
      matched[item.id] = true;
      return { text: entry, status: 'ok', item: item };
    });
    var count = Object.keys(matched).length;
    return {
      results: results,
      matched: matched,
      count: count,
      percent: (count / run.condition.objectCount) * 100
    };
  }

  function formatPercent(value) {
    return value.toFixed(1).replace('.', ',');
  }

  /* ---------- phases ---------- */

  function intro() {
    var start = el('button', { 'class': 'button', type: 'button', text: 'Start testen' });
    start.addEventListener('click', function () {
      run = pickCondition();
      exposure();
    });
    setPanel('Før du starter', COPY.intro.map(function (text) {
      return el('p', { text: text });
    }).concat([el('p', { 'class': 'mt-controls' }, [start])]));
  }

  function exposure() {
    var cond = run.condition;
    var timerEl = el('p', { 'class': 'mt-timer', text: '' });
    var img = el('img', {
      'class': 'mt-image',
      src: BASE + cond.image,
      alt: cond.alt_nb || ''
    });
    setPanel('Se på bildet', [
      timerEl,
      img,
      el('div', { 'class': 'mt-controls' }, [timeButton(), abortButton()])
    ]);
    startTimer(data.timings.exposureSeconds, timerEl, distractor);
  }

  function distractor() {
    var from = Math.floor(Math.random() * 900) + 100;
    var timerEl = el('p', { 'class': 'mt-timer', text: '' });
    var input = el('input', { type: 'text', inputmode: 'numeric', autocomplete: 'off', 'aria-label': 'Neste tall' });
    var add = el('button', { 'class': 'button', type: 'submit', text: 'Legg til' });
    var list = el('ul', { 'class': 'mt-list' });
    var form = el('form', { 'class': 'mt-form' }, [input, add]);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();
      if (!value) {
        return;
      }
      list.appendChild(el('li', { text: value }));
      input.value = '';
      input.focus();
    });

    setPanel('Tell baklengs', [
      el('p', { text: 'Tell baklengs fra ' + from + '. Trekk fra 3 hver gang, og skriv hvert tall.' }),
      timerEl,
      form,
      list,
      el('div', { 'class': 'mt-controls' }, [timeButton(), abortButton()])
    ]);
    startTimer(data.timings.distractorSeconds, timerEl, recall);
  }

  function recall() {
    var timerEl = el('p', { 'class': 'mt-timer', text: '' });
    var input = el('input', { type: 'text', autocomplete: 'off', 'aria-label': 'Objekt du husker' });
    var add = el('button', { 'class': 'button', type: 'submit', text: 'Legg til' });
    var list = el('ul', { 'class': 'mt-list' });
    var form = el('form', { 'class': 'mt-form' }, [input, add]);
    var done = el('button', { 'class': 'button mt-quiet', type: 'button', text: 'Avslutt tidlig' });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();
      if (!value) {
        return;
      }
      run.entries.push(value);
      list.appendChild(el('li', { text: value }));
      input.value = '';
      input.focus();
    });
    done.addEventListener('click', finish);

    /* The timer sits directly above the input so both stay in view
       when a phone keyboard takes the lower half of the screen. */
    setPanel('Skriv det du husker', [
      el('p', { text: 'Skriv ett objekt om gangen.' }),
      timerEl,
      form,
      list,
      el('div', { 'class': 'mt-controls' }, [done, timeButton(), abortButton()])
    ]);
    startTimer(data.timings.recallSeconds, timerEl, finish);
  }

  function finish() {
    stopTimer();
    var store = readStore();
    if (store.completed.indexOf(run.condition.id) === -1) {
      store.completed = store.completed.concat([run.condition.id]);
      writeStore(store);
    }
    result();
  }

  /* ---------- result ---------- */

  var VERDICTS = { ok: '✓ Riktig', err: '✕ Feil', dup: 'Duplikat' };

  function buildEntryList(results) {
    var listEl = el('ol', { 'class': 'mt-entries' });
    var rows = results.map(function (res) {
      var verdict = el('span', { 'class': 'mt-verdict' });
      var row = el('li', { 'class': 'mt-pending' }, [
        el('span', { text: res.text }),
        verdict
      ]);
      listEl.appendChild(row);
      return { row: row, verdict: verdict, res: res };
    });

    function resolve(entry, animate) {
      entry.row.classList.remove('mt-pending');
      entry.row.classList.add('mt-' + entry.res.status);
      if (animate) {
        entry.row.classList.add('mt-animate');
      }
      entry.verdict.textContent = VERDICTS[entry.res.status];
    }

    if (reduceMotion()) {
      rows.forEach(function (entry) { resolve(entry, false); });
    } else {
      rows.forEach(function (entry, i) {
        window.setTimeout(function () { resolve(entry, true); }, 120 * (i + 1));
      });
    }
    return listEl;
  }

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function svgEl(tag, attrs, text) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs).forEach(function (key) {
      node.setAttribute(key, attrs[key]);
    });
    if (text) {
      node.textContent = text;
    }
    return node;
  }

  function buildChart(userPercent) {
    var bars = [{ label: 'Ditt resultat', value: userPercent, user: true }]
      .concat(data.conditions.map(function (c) {
        return { label: LABELS[c.id] || c.id, value: c.meanRecallPercent, user: false };
      }));

    var alt = 'Søylediagram. ' + bars.map(function (b) {
      return b.label + ' ' + formatPercent(b.value) + ' prosent';
    }).join('. ') + '.';

    var svg = svgEl('svg', {
      'class': 'mt-chart',
      viewBox: '0 0 420 ' + (bars.length * 34 + 6),
      role: 'img',
      'aria-label': alt
    });

    var defs = svgEl('defs', {});
    var pattern = svgEl('pattern', {
      id: 'mt-hatch', width: '6', height: '6',
      patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)'
    });
    pattern.appendChild(svgEl('line', {
      x1: '0', y1: '0', x2: '0', y2: '6',
      stroke: 'var(--signal)', 'stroke-width': '3'
    }));
    defs.appendChild(pattern);
    svg.appendChild(defs);

    bars.forEach(function (bar, i) {
      var y = i * 34 + 4;
      var width = Math.max(2, Math.min(bar.value, 100) * 2.3);
      svg.appendChild(svgEl('text', { x: '0', y: y + 16 }, bar.label));
      svg.appendChild(svgEl('rect', {
        x: '120', y: y, width: width, height: '22', rx: '3',
        fill: bar.user ? 'url(#mt-hatch)' : 'var(--muted)',
        stroke: bar.user ? 'var(--signal)' : 'none', 'stroke-width': bar.user ? '1.5' : '0'
      }));
      svg.appendChild(svgEl('text', { x: 120 + width + 8, y: y + 16 }, formatPercent(bar.value)));
    });
    return svg;
  }

  function buildObjectList(matched) {
    var listEl = el('ul', { 'class': 'mt-objects' });
    run.condition.items.forEach(function (item) {
      var status = matched[item.id] ? 'Husket' : 'Ikke husket';
      listEl.appendChild(el('li', {}, [
        el('strong', { text: item.nb }),
        el('span', { text: ' · ' + status }),
        el('span', { 'class': 'mt-accepted', text: 'Godtas: ' + item.accept_nb.join(', ') })
      ]));
    });
    return listEl;
  }

  function result() {
    var score = scoreRun();
    var retake = el('button', { 'class': 'button', type: 'button', text: 'Ta testen på nytt' });
    retake.addEventListener('click', intro);

    var children = [];
    if (run.repeat) {
      children.push(el('p', { text: COPY.repeatNote }));
    }
    children.push(buildEntryList(score.results));
    children.push(el('p', { text: COPY.resultCaveat }));
    children.push(el('p', {
      'class': 'mt-score',
      text: 'Du husket ' + score.count + ' av ' + run.condition.objectCount +
            ' objekter, ' + formatPercent(score.percent) + ' prosent.'
    }));
    children.push(buildChart(score.percent));
    children.push(el('h4', { text: 'Alle objektene' }));
    children.push(buildObjectList(score.matched));
    children.push(el('div', { 'class': 'mt-controls' }, [
      retake,
      el('a', { href: '#main', text: 'Tilbake til kasusstudien' })
    ]));

    setPanel('Resultat', children);
  }

  /* ---------- load ---------- */

  function loadFailed() {
    stage.textContent = '';
    stage.appendChild(el('p', { text: 'Testen kunne ikke lastes. Last siden på nytt.' }));
  }

  if (window.location.protocol === 'file:') {
    loadFailed();
    return;
  }

  fetch(SRC)
    .then(function (res) {
      if (!res.ok) {
        throw new Error('HTTP ' + res.status);
      }
      return res.json();
    })
    .then(function (json) {
      if (!json || !json.timings || !Array.isArray(json.conditions)) {
        throw new Error('bad data');
      }
      data = json;
      intro();
    })
    .catch(loadFailed);
})();
