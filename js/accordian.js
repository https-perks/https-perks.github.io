// JavaScript Document

// JavaScript Document

console.log("Accordion script loaded!");

const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";

    // Close all open content
    document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");

    // Toggle the clicked one
    content.style.display = isOpen ? "none" : "block";
  });
});
