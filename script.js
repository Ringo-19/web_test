const reveals = document.querySelectorAll('.reveal');
const year = document.getElementById('year');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => observer.observe(item));

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', String(expanded));
  });

  navAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
