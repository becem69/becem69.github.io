document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // typewriter role rotation
  var target = document.querySelector('.type-target');
  if (target && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var roles = ['Cybersecurity Developer', 'Reverse Engineer', 'Secure Software Builder', 'CTF Player'];
    var idx = 0, char = 0, deleting = false;

    function tick() {
      var word = roles[idx];
      if (!deleting) {
        char++;
        target.textContent = word.slice(0, char);
        if (char === word.length) { deleting = true; setTimeout(tick, 1600); return; }
      } else {
        char--;
        target.textContent = word.slice(0, char);
        if (char === 0) { deleting = false; idx = (idx + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    setTimeout(tick, 900);
  }
});
