# Gardiner Public Schools Website Redesign

**🌐 Live Site:** [https://perks.github.io](https://perks.github.io)  
_A modern, accessible, and responsive redesign of [gardiner.org](https://www.gardiner.org)_

---

## 📚 Overview

This repository contains the full front-end source for the redesigned website of **Gardiner Public Schools**, based in Gardiner, Montana. The new build was developed from scratch with a focus on:

- ADA and Section 508 compliance
- WCAG 2.2 Level AA accessibility standards
- Clean, semantic HTML5
- Mobile-first responsiveness
- Easy community engagement

This project is hosted on **GitHub Pages** using static HTML, CSS, and vanilla JavaScript—no CMS or server required.

---

## ✨ Features

- **Responsive Design**  
  Seamlessly adapts to desktops, tablets, and phones.

- **Dark Mode Toggle**  
  Keyboard accessible, animated SVG toggle with saved preferences.

- **Accessible Navigation & Layout**
  - Semantic HTML5 with clear reading order
  - ARIA roles and labels for screen reader support
  - Focus management (e.g., keyboard trap in mobile nav)
  - Accordion navigation for parent resources
  - Descriptive alt text and link labels

- **Styled Sitemap & Custom 404**  
  Accessible `sitemap.xml` with XSL styling, and a branded fallback error page.

- **Organized, Maintainable Codebase**  
  CSS, JavaScript, and HTML are modular and easy to expand or replace.

---

## 📁 Project Structure

```
gardiner-redesign/
├── index.html                        → Homepage
├── parents.html                      → Parent hub
├── staff.html                        → Staff directory
├── job-openings.html                 → Careers and applications
├── library.html                      → Digital research tools
├── accessibility.html                → ADA compliance and statement
├── school-board.html                 → Board minutes, agendas, policies
├── extracurriculars.html             → Sports, music, clubs
├── site-map.xml                      → Accessible, styled sitemap
├── 404.html                          → Custom error page
├── css/
│   └── style.css                     → Global styles
├── js/
│   ├── hamburger.js                  → Mobile nav & focus trap
│   ├── darkmode.js                   → Theme toggle
│   ├── focus.js                      → Custom focus-visible
│   ├── carousel.js                   → Homepage & extracurricular carousels
│   └── headerscroll.js               → Shrinks nav on scroll
├── images/
│   └── logos, favicons, carousels, icons
├── documents/, forms/, calendars/
│   └── PDFs and embedded links
```

---

## 🧩 Accessibility Commitments

This website meets the latest **WCAG 2.2 Level AA**, **Section 508**, and **ADA Title II** requirements. It includes:

✅ Proper heading hierarchy  
✅ Keyboard navigation and visible focus states  
✅ Role landmarks (`<main>`, `<nav>`, `<footer>`, etc.)  
✅ Aria labels for buttons, accordions, toggles, and skip links  
✅ Semantic HTML and alt text for images  
✅ Color contrast verification (Dark Mode also accessible)

For a full accessibility plan, visit the [Accessibility Statement page](https://perks.github.io/accessibility/).

---

## 🚀 Deploying & Previewing Locally

```bash
# Clone this repo
git clone https://github.com/https-perks/gardiner-redesign.git
cd gardiner-redesign

# Open index.html in your browser or use VS Code's Live Server extension
```

This project is auto-deployed to [GitHub Pages](https://pages.github.com) on push to `main`.

---

## 🔐 Licensing

- Website content, layout, branding, and imagery are the intellectual property of **Gardiner Public Schools**.
- Codebase is open for educational, transparency, and public service purposes. Do not republish content or branding without permission.

---

## 📬 Contact

**Gardiner Public Schools**  
510 Stone Street  
Gardiner, MT 59030

**Email:** [rperkins@gardiner.org](mailto:perks@gardiner.org)  
**Web Admin GitHub:** [@https-perks](https://github.com/https-perks)
