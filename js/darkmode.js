// JavaScript Document

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedPreference = localStorage.getItem('darkMode');

  if (storedPreference === 'true' || (storedPreference === null && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
});

