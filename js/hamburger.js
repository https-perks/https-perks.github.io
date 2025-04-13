// JavaScript Document

// hamburger.js - Improved version with functional focus trap and accessibility

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.hamburger-toggle');
  const sidebar = document.querySelector('.sidebar-nav');
  const overlay = document.querySelector('.overlay');
  const links = sidebar.querySelectorAll('a');

  let trapCleanup = null;

  function trapFocus(container, returnFocusEl) {
    const focusableSelectors = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableEls = container.querySelectorAll(focusableSelectors);
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    function keyHandler(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      } else if (e.key === 'Escape') {
        closeMenu();
        returnFocusEl.focus();
      }
    }

    container.addEventListener('keydown', keyHandler);
    return () => container.removeEventListener('keydown', keyHandler);
  }

  function openMenu() {
    document.body.classList.add('nav-open');
    sidebar.classList.add('active');
    overlay.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');

    const firstLink = sidebar.querySelector('a, button');
    if (firstLink) firstLink.focus();

    trapCleanup = trapFocus(sidebar, toggleBtn);
  }

  function closeMenu() {
    document.body.classList.remove('nav-open');
    sidebar.classList.remove('active');
    overlay.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');

    if (typeof trapCleanup === 'function') {
      trapCleanup();
      trapCleanup = null;
    }
  }

  toggleBtn.addEventListener('click', () => {
    const navIsOpen = document.body.classList.contains('nav-open');
    if (navIsOpen) {
      closeMenu();
      toggleBtn.focus();
    } else {
      openMenu();
    }
  });

  toggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleBtn.click();
    }
  });

  overlay.addEventListener('click', () => {
    closeMenu();
    toggleBtn.focus();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      toggleBtn.focus();
    });
  });
});