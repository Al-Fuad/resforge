const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.site-header');

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.site-header nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const modelDisplay = document.querySelector('.models');
document.querySelectorAll('.pipeline-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pipeline-tabs button').forEach((tab) => tab.classList.remove('active'));
    button.classList.add('active');
    modelDisplay.dataset.activeMode = button.dataset.mode;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
