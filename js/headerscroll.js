// JavaScript Document

// Shrink header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.body.classList.add('header-shrink');
  } else {
    document.body.classList.remove('header-shrink');
  }
});

// Scroll to top
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
