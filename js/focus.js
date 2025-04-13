// JavaScript Document

// Only show focus outlines when using keyboard
function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('show-focus');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('show-focus');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);
