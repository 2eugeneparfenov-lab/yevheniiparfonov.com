# Yevhenii Parfonov — Portfolio Website

A responsive, multilingual personal portfolio website built with **HTML, CSS, and vanilla JavaScript**.

## Overview

This repository contains the source code for my personal portfolio. The website introduces my technical background, showcases selected software projects, and provides ways to get in touch. It is a lightweight, single-page website with no frontend framework or build step.

## Features

- **Multilingual interface:** English, Slovak, and Ukrainian, with the selected language saved in `localStorage`.
- **Responsive layout:** Adaptable design and a mobile-friendly navigation menu.
- **Project showcase:** Dynamically rendered project cards with descriptions, technologies, and links to source code or demos.
- **Project galleries:** Screenshot navigation for projects with multiple images.
- **Interactive navigation:** Active-section highlighting and navigation that responds to scrolling.
- **Subtle animations:** Scroll-triggered reveal effects that respect reduced-motion preferences.
- **Accessibility considerations:** Semantic HTML, a skip link, and descriptive ARIA labels.
- **Contact links:** Quick access to GitHub, LinkedIn, and email.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure and content |
| CSS3 | Layout, responsive styling, and animations |
| JavaScript (ES6+) | Localization, project rendering, galleries, and navigation |
| Browser APIs | `localStorage` and `IntersectionObserver` |

> Java, Spring Boot, PostgreSQL, and other technologies mentioned on the website are part of the showcased projects and skills, **not dependencies of this portfolio website**.

## Project Structure

```text
yevheniiparfonov.com/
├── index.html       # Page structure and content
├── style.css        # Design and responsive styles
├── main.js          # Translations, projects, and interactions
├── images/          # Profile and project images
└── README.md        # Project documentation
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/2eugeneparfenov-lab/yevheniiparfonov.com.git
cd yevheniiparfonov.com
```

Start a local web server:

```bash
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

No package installation or build process is required.

## Updating the Portfolio

- Update the main sections and profile information in `index.html`.
- Add or edit project entries in the `projects` array in `main.js`.
- Maintain translations in the `translations` object and each project's localized text in `main.js`.
- Adjust the design and responsive breakpoints in `style.css`.
- Store project screenshots and other media in `images/`.

## Contact

- **GitHub:** [2eugeneparfenov-lab](https://github.com/2eugeneparfenov-lab)
- **LinkedIn:** [Yevhenii Parfonov](https://www.linkedin.com/in/yevhenii-parfonov-6171813a0/)

---

Built and maintained by **Yevhenii Parfonov**.
