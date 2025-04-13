// JavaScript Document

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.hamburger-toggle');
  const sidebar = document.querySelector('.sidebar-nav');
  const links = sidebar.querySelectorAll('a');

  function trapFocus(container, returnFocusEl) {
    const focusableSelectors = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableEls = container.querySelectorAll(focusableSelectors);
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    container.addEventListener('keydown', (e) => {
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
      }

      if (e.key === 'Escape') {
        document.body.classList.remove('nav-open');
        container.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        returnFocusEl.focus(); // Return focus to hamburger icon
      }
    });
  }

  toggleBtn.addEventListener('click', () => {
    const navIsOpen = document.body.classList.toggle('nav-open');
    sidebar.classList.toggle('active');

    // ✅ Update aria-expanded state
    toggleBtn.setAttribute('aria-expanded', navIsOpen ? 'true' : 'false');

    if (navIsOpen) {
      trapFocus(sidebar, toggleBtn);

      const firstLink = sidebar.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      document.body.classList.remove('nav-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    });
  });
});
