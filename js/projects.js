/* projects.js
   Reads data/projects.json and renders the project list.
   Language comes from the document, the fetch path from the list's
   data-source attribute, so the same script serves both languages. */

(function () {
  'use strict';

  var list = document.getElementById('project-list');
  if (!list) {
    return;
  }

  var lang = (document.documentElement.lang || 'nb').toLowerCase().indexOf('en') === 0 ? 'en' : 'nb';

  var STR = {
    nb: {
      empty: 'Ingen publiserte prosjekter ennå.',
      failed: 'Prosjektlisten kunne ikke lastes. Last siden på nytt.',
      file: 'Prosjektlisten kan ikke lastes rett fra en fil. Kjør en lokal server i mappen, for eksempel python3 -m http.server, og åpne siden derfra.',
      tags: 'Emneord'
    },
    en: {
      empty: 'No published projects yet.',
      failed: 'The project list could not be loaded. Reload the page.',
      file: 'The project list cannot load straight from a file. Run a local server in the folder, for example python3 -m http.server, and open the page from there.',
      tags: 'Tags'
    }
  };

  /* Replace the list with a plain paragraph, so errors and empty
     states are real page content, not an empty section. */
  function message(text) {
    var p = document.createElement('p');
    p.textContent = text;
    list.parentNode.replaceChild(p, list);
  }

  function t(field) {
    if (field && typeof field === 'object') {
      return field[lang] || field.nb || '';
    }
    return field || '';
  }

  function render(p) {
    var li = document.createElement('li');
    li.className = 'project';

    /* No thumb is the normal case for now: the entry renders as pure
       type, which is the intended look, never a broken image. */
    if (p.thumb) {
      var img = document.createElement('img');
      img.src = p.thumb;
      img.alt = t(p.alt);
      img.loading = 'lazy';
      li.appendChild(img);
    }

    var h3 = document.createElement('h3');
    var a = document.createElement('a');
    a.href = p.href;
    a.textContent = t(p.title);
    h3.appendChild(a);
    li.appendChild(h3);

    var metaParts = [];
    if (p.year) {
      metaParts.push(String(p.year));
    }
    if (t(p.role)) {
      metaParts.push(t(p.role));
    }
    if (metaParts.length) {
      var meta = document.createElement('p');
      meta.className = 'project-meta';
      meta.textContent = metaParts.join(' · ');
      li.appendChild(meta);
    }

    if (t(p.summary)) {
      var summary = document.createElement('p');
      summary.textContent = t(p.summary);
      li.appendChild(summary);
    }

    var tags = t(p.tags);
    if (tags && tags.length) {
      var tagList = document.createElement('ul');
      tagList.className = 'project-tags';
      tagList.setAttribute('role', 'list');
      tagList.setAttribute('aria-label', STR[lang].tags);
      tags.forEach(function (tag) {
        var tagItem = document.createElement('li');
        tagItem.textContent = tag;
        tagList.appendChild(tagItem);
      });
      li.appendChild(tagList);
    }

    return li;
  }

  if (window.location.protocol === 'file:') {
    message(STR[lang].file);
    return;
  }

  fetch(list.getAttribute('data-source') || 'data/projects.json')
    .then(function (res) {
      if (!res.ok) {
        throw new Error('HTTP ' + res.status);
      }
      return res.json();
    })
    .then(function (data) {
      var projects = data && Array.isArray(data.projects) ? data.projects : [];
      var published = projects.filter(function (p) {
        return p.status === 'published';
      });

      if (published.length === 0) {
        message(STR[lang].empty);
        return;
      }

      list.textContent = '';
      published.forEach(function (p) {
        list.appendChild(render(p));
      });

      /* Tells js/motion.js the cards exist now. */
      document.dispatchEvent(new CustomEvent('projects:rendered'));
    })
    .catch(function () {
      message(STR[lang].failed);
    });
})();
