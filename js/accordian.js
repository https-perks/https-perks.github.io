// JavaScript Document

const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";

    // Close all panels and update ARIA
    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });
    toggles.forEach(btn => {
      btn.setAttribute("aria-expanded", "false");
    });

    // Toggle current panel
    if (!isOpen) {
      content.style.display = "block";
      button.setAttribute("aria-expanded", "true");
    } else {
      content.style.display = "none";
      button.setAttribute("aria-expanded", "false");
    }
  });
});
