(function () {
  'use strict';

  var btn = document.querySelector('.nav-hamburger');
  var overlay = document.getElementById('mobileNav');
  if (!btn || !overlay) return;

  var links = overlay.querySelectorAll('a');

  function toggle() {
    var isOpen = overlay.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  btn.addEventListener('click', toggle);

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (overlay.classList.contains('open')) toggle();
    });
  });
})();
