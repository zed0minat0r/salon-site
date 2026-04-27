/* ============================================
   ATELIER — main.js
   Scroll-lock services, nav, reveals, form
   ============================================ */

'use strict';

/* ---- Nav: transparent → solid on scroll ---- */
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---- Mobile hamburger menu ---- */
(function () {
  var hamburger = document.getElementById('navHamburger');
  var links     = document.getElementById('navLinks');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', function () {
    var open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', open ? 'false' : 'true');
    links.classList.toggle('is-open', !open);
  });

  // Close on any link tap (mobile UX)
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      hamburger.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
    }
  });

  var nav = document.getElementById('nav');
})();

/* ---- Smooth anchor scroll ---- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
      var y = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

/* ---- Services: sticky pin + horizontal slide ----
   Vertical scroll through .services-runway maps to
   translateX on .services-track, locking the viewport
   and sliding 5 panels sideways through it.
   On mobile the runway height is auto so this IIFE
   exits gracefully (runway height ~ inner height). */
(function () {
  var runway  = document.getElementById('services-runway');
  var track   = document.getElementById('services-track');
  var panels  = document.querySelectorAll('.service-fp');
  var dots    = document.querySelectorAll('.services-dot');

  if (!runway || !track || !panels.length) return;

  var numPanels   = panels.length;
  var currentIdx  = -1;

  function setActiveDot(idx) {
    if (idx === currentIdx) return;
    currentIdx = idx;
    dots.forEach(function (d, i) {
      d.classList.toggle('is-active', i === idx);
      d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
  }

  function onScroll() {
    var rect     = runway.getBoundingClientRect();
    var runwayH  = runway.offsetHeight;
    var vh       = window.innerHeight;

    var budget = runwayH - vh;
    if (budget <= 0) {
      track.style.transform = 'translate3d(0,0,0)';
      setActiveDot(0);
      return;
    }

    var scrolled = -rect.top;
    if (scrolled < 0) scrolled = 0;

    var progress = scrolled / budget; // 0 → 1
    if (progress > 1) progress = 1;

    // SLIDE_FRAC < 1.0 means panel 5 arrives before the runway budget is exhausted,
    // giving the user dwell time on the last panel before the section unpins.
    // 0.85 = slight dwell (5 panels needs less than craft-site's 0.75 for 4 panels).
    var SLIDE_FRAC   = 0.85;
    var slideProgress = progress / SLIDE_FRAC;
    if (slideProgress > 1) slideProgress = 1;

    var translatePct = -slideProgress * (numPanels - 1) * 100;
    track.style.transform = 'translate3d(' + translatePct + 'vw, 0, 0)';

    var idx = Math.round(slideProgress * (numPanels - 1));
    if (idx >= numPanels) idx = numPanels - 1;
    setActiveDot(idx);
  }

  // Dot clicks: jump to the scroll position for that panel.
  // Uses SLIDE_FRAC so target positions match the actual slide mapping
  // (panel i arrives at budget * SLIDE_FRAC * (i / segments)).
  var SLIDE_FRAC = 0.85;
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      var runwayTop = runway.getBoundingClientRect().top + window.scrollY;
      var budget    = runway.offsetHeight - window.innerHeight;
      var segments  = numPanels - 1;
      var target = segments > 0
        ? runwayTop + (budget * SLIDE_FRAC / segments) * i + 2
        : runwayTop + 2;
      window.scrollTo({ top: target, behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();

/* ---- Scroll reveal: .reveal-up → .is-visible ---- */
(function () {
  var items = document.querySelectorAll('.reveal-up');
  if (!items.length) return;

  // Respect prefers-reduced-motion: mark all visible immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (el) { observer.observe(el); });
})();

/* ---- Contact form: loading state + success message ---- */
(function () {
  var form    = document.getElementById('contact-form');
  var btn     = document.getElementById('submit-btn');
  var success = document.getElementById('form-success');
  if (!form || !btn || !success) return;

  // Show success if redirected back with ?submitted=1
  if (window.location.search.includes('submitted=1')) {
    success.hidden = false;
    form.hidden = true;
  }

  form.addEventListener('submit', function (e) {
    // Basic client-side validation
    var name    = form.querySelector('#f-name');
    var email   = form.querySelector('#f-email');
    var service = form.querySelector('#f-service');
    var valid   = true;

    [name, email, service].forEach(function (field) {
      if (!field) return;
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      e.preventDefault();
      return;
    }

    // Until a real Formspree (or other) endpoint is wired in, intercept the POST
    // and open a mailto draft with the inquiry pre-filled. Then show the success
    // state inline so the user gets affirmative feedback. Replace the action
    // attribute with the real endpoint to switch back to a normal POST flow.
    var action = form.getAttribute('action') || '';
    if (action.indexOf('PLACEHOLDER') !== -1 || action === '' || action === '#') {
      e.preventDefault();
      var phone = form.querySelector('#f-phone');
      var date  = form.querySelector('#f-date');
      var window_ = form.querySelector('#f-window');
      var notes = form.querySelector('#f-notes');
      var subject = encodeURIComponent('Booking inquiry — ' + (service && service.value ? service.value : 'general'));
      var body = [
        'Name: '    + (name ? name.value : ''),
        'Email: '   + (email ? email.value : ''),
        'Phone: '   + (phone ? phone.value : ''),
        'Service: ' + (service ? service.value : ''),
        'Date: '    + (date ? date.value : ''),
        'Window: '  + (window_ ? window_.value : ''),
        '',
        'Notes:',
        (notes ? notes.value : '')
      ].join('\n');
      var mailto = 'mailto:hello@atelier.studio?subject=' + subject + '&body=' + encodeURIComponent(body);

      btn.classList.add('loading');
      btn.disabled = true;

      // Show success state inline (don't redirect away)
      success.hidden = false;
      form.hidden = true;

      // Open the user's mail client in a new window/tab
      window.open(mailto, '_blank');
      return;
    }

    // Real endpoint wired — let the form post normally
    btn.classList.add('loading');
    btn.disabled = true;
  });
})();
