/* project-links.js
   Renders a project's external links on its case study page from
   data/projects.json. The labels live on the mount element, so each
   language's page carries its own copy. An empty or missing URL field
   renders nothing rather than a dead link. */

(function () {
  'use strict';

  var mount = document.querySelector('[data-project-links]');
  if (!mount || window.location.protocol === 'file:') {
    return;
  }

  fetch(mount.getAttribute('data-source'))
    .then(function (res) {
      if (!res.ok) {
        throw new Error('HTTP ' + res.status);
      }
      return res.json();
    })
    .then(function (data) {
      var id = mount.getAttribute('data-project');
      var project = (data.projects || []).filter(function (p) {
        return p.id === id;
      })[0];
      if (!project) {
        return;
      }
      [['liveUrl', 'data-live-label'], ['repoUrl', 'data-repo-label']].forEach(function (pair) {
        var url = project[pair[0]];
        var label = mount.getAttribute(pair[1]);
        if (!url || !label) {
          return;
        }
        var link = document.createElement('a');
        link.className = 'button';
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = label;
        mount.appendChild(link);
      });
    })
    .catch(function () { /* no link beats a dead link */ });
})();
