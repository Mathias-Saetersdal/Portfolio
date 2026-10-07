/* new-project.js
   Turns the form in new-project.html into a valid object for
   data/projects.json. Validates required fields and the status enum,
   warns on a duplicate id. Writes nothing anywhere.

   Status is written either as one string for both languages or as
   {nb, en}, matching the two forms isPublished() reads in
   js/projects.js. */

(function () {
  'use strict';

  var form = document.getElementById('project-form');
  if (!form) {
    return;
  }

  var errBox = document.getElementById('form-errors');
  var out = document.getElementById('json-out');
  var copyBtn = document.getElementById('copy-json');
  var copyStatus = document.getElementById('copy-status');

  /* Existing ids, for the duplicate warning. On file:// this fetch
     fails and the check is silently skipped. */
  var existingIds = [];
  if (window.location.protocol !== 'file:') {
    fetch('data/projects.json')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        existingIds = (data.projects || []).map(function (p) { return p.id; });
      })
      .catch(function () {});
  }

  function val(name) {
    return form.elements[name].value.trim();
  }

  var STATUSES = ['draft', 'published'];

  /* The two per-language selects only exist when the author asks for
     them, so the simple case stays one control. Toggling hidden also
     takes them out of the tab order, which is why nothing here
     touches tabindex. */
  var modeSelect = document.getElementById('f-status-mode');
  var sharedField = document.getElementById('status-shared-field');
  var perLangFields = document.getElementById('status-per-language-fields');

  function syncStatusMode() {
    var perLanguage = modeSelect.value === 'per-language';
    sharedField.hidden = perLanguage;
    perLangFields.hidden = !perLanguage;
  }

  modeSelect.addEventListener('change', syncStatusMode);
  syncStatusMode();

  /* Returns the status value for the project object: a plain string in
     shared mode, {nb, en} when the two languages are set apart. Both
     branches validate against the same enum. */
  function readStatus(errors) {
    if (modeSelect.value !== 'per-language') {
      var shared = val('status');
      if (STATUSES.indexOf(shared) === -1) {
        errors.push('Status må være draft eller published.');
      }
      return shared;
    }

    var nb = val('status_nb');
    var en = val('status_en');
    if (STATUSES.indexOf(nb) === -1) {
      errors.push('Norsk status må være draft eller published.');
    }
    if (STATUSES.indexOf(en) === -1) {
      errors.push('Engelsk status må være draft eller published.');
    }
    return { nb: nb, en: en };
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var errors = [];
    var warnings = [];

    var id = val('id');
    if (!id) {
      errors.push('id mangler.');
    } else if (!/^[a-z0-9-]+$/.test(id)) {
      errors.push('id kan bare ha små bokstaver a til z, tall og bindestrek.');
    } else if (existingIds.indexOf(id) !== -1) {
      warnings.push('Advarsel: id "' + id + '" finnes allerede i projects.json.');
    }

    var year = val('year');
    if (!year) {
      errors.push('År mangler.');
    } else if (!/^\d{4}$/.test(year)) {
      errors.push('År må være fire sifre.');
    }

    var status = readStatus(errors);

    if (!val('title_nb')) { errors.push('Norsk tittel mangler.'); }
    if (!val('title_en')) { errors.push('Engelsk tittel mangler.'); }
    if (!val('summary_nb')) { errors.push('Norsk sammendrag mangler.'); }
    if (!val('summary_en')) { errors.push('Engelsk sammendrag mangler.'); }
    if (!val('href')) { errors.push('Sti til kasusstudien mangler.'); }

    if (val('thumb') && !val('alt_nb')) {
      errors.push('Bilde er satt, men norsk alt-tekst mangler.');
    }
    if (val('thumb') && !val('alt_en')) {
      errors.push('Bilde er satt, men engelsk alt-tekst mangler.');
    }

    errBox.textContent = '';
    copyStatus.textContent = '';

    if (errors.length || warnings.length) {
      var ul = document.createElement('ul');
      errors.concat(warnings).forEach(function (msg) {
        var li = document.createElement('li');
        li.textContent = msg;
        ul.appendChild(li);
      });
      errBox.appendChild(ul);
    }

    if (errors.length) {
      out.hidden = true;
      copyBtn.hidden = true;
      return;
    }

    var tags = val('tags')
      .split(',')
      .map(function (t) { return t.trim(); })
      .filter(function (t) { return t.length > 0; });

    var project = {
      id: id,
      title: { nb: val('title_nb'), en: val('title_en') },
      year: parseInt(year, 10),
      role: { nb: val('role_nb'), en: val('role_en') },
      summary: { nb: val('summary_nb'), en: val('summary_en') },
      tags: tags,
      thumb: val('thumb'),
      alt: { nb: val('alt_nb'), en: val('alt_en') },
      href: val('href'),
      liveUrl: val('live'),
      repoUrl: val('repo'),
      status: status
    };

    out.textContent = JSON.stringify(project, null, 2);
    out.hidden = false;
    copyBtn.hidden = false;
  });

  copyBtn.addEventListener('click', function () {
    var text = out.textContent;

    function done(ok) {
      copyStatus.textContent = ok
        ? 'Kopiert. Lim inn i data/projects.json.'
        : 'Kunne ikke kopiere. Merk teksten og kopier selv.';
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { done(true); },
        function () { done(false); }
      );
    } else {
      done(false);
    }
  });
})();
