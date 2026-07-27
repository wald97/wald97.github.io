(function () {
  'use strict';

  var navLinks = document.querySelectorAll('.pf-nav a');
  var sections = document.querySelectorAll('.pf-section');
  var aside = document.querySelector('.pf-aside');
  var toggler = document.querySelector('.pf-nav-toggler');

  function showSection(id) {
    sections.forEach(function (s) { s.classList.toggle('active', s.id === id); });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  navLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      e.preventDefault();
      var id = href.slice(1);
      showSection(id);
      history.replaceState(null, '', href);
      if (window.innerWidth < 1200 && aside) {
        aside.classList.remove('open');
        if (toggler) toggler.classList.remove('open');
      }
      document.querySelector('.pf-main').scrollTo({ top: 0 });
      window.scrollTo({ top: 0 });
    });
  });

  if (toggler && aside) {
    toggler.addEventListener('click', function () {
      aside.classList.toggle('open');
      toggler.classList.toggle('open');
    });
  }

  // Deep-link on load (e.g. /#contact)
  var initial = (window.location.hash || '#home').slice(1);
  if (!document.getElementById(initial)) initial = 'home';
  showSection(initial);

  // Write-ups search filter
  var wuSearch = document.getElementById('wu-search');
  if (wuSearch) {
    var wuEmpty = document.getElementById('wu-empty');
    var wuGroups = document.querySelectorAll('.pf-cat-group');
    wuSearch.addEventListener('input', function () {
      var q = wuSearch.value.trim().toLowerCase();
      var anyVisible = false;
      wuGroups.forEach(function (group) {
        var groupHasMatch = false;
        group.querySelectorAll('.pf-post-card').forEach(function (card) {
          var match = !q || (card.getAttribute('data-search') || '').indexOf(q) !== -1;
          card.style.display = match ? '' : 'none';
          if (match) { groupHasMatch = true; anyVisible = true; }
        });
        group.style.display = groupHasMatch ? '' : 'none';
      });
      if (wuEmpty) wuEmpty.hidden = anyVisible;
    });
  }

  // Tiny dependency-free typewriter for the hero tagline
  var typedEl = document.querySelector('.pf-typed');
  if (typedEl) {
    var strings = JSON.parse(typedEl.getAttribute('data-strings') || '[]');
    var cursor = document.createElement('span');
    cursor.className = 'pf-typed-cursor';
    typedEl.after(cursor);

    var strIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      var current = strings[strIndex] || '';
      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          strIndex = (strIndex + 1) % strings.length;
        }
      }
      setTimeout(tick, deleting ? 30 : 55);
    }

    if (strings.length) tick();
  }
})();
