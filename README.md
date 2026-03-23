# Personal Academic Blog

This repository contains a static personal academic website designed for GitHub Pages. The site is intentionally minimal, readable, and easy to expand over time.

## Current Structure

```text
.
├── index.html
├── math.html
├── cs.html
├── posts/
│   └── math/
│       └── invariant-regions-instead-of-zero-error.html
├── style.css
├── script.js
└── README.md
```

## Page Overview

### `index.html`
Homepage with:
- introduction
- about section
- featured areas
- site structure / knowledge map

### `math.html`
Mathematics section page with:
- an archive index for the Math section
- subsection directory, search, and filtering controls
- cards that link out to dedicated post pages

### `cs.html`
Computer science section page with:
- a minimal placeholder state
- room for future real subsections once they exist

### `posts/math/invariant-regions-instead-of-zero-error.html`
Dedicated post page for the current invariant essay, with live MathJax rendering.

### `style.css`
Shared visual system for the entire site:
- typography
- spacing
- navigation
- cards
- responsive layout
- knowledge map styling

### `script.js`
Lightweight enhancements:
- active navigation highlighting
- homepage footer date display

## Editing Guide

### Update the homepage introduction
Edit the hero section in [index.html](/Users/tz/Desktop/TimmytheHack.github.io/index.html).

### Add new Math entries
1. Add a new `article.archive-entry` card in [math.html](/Users/tz/Desktop/TimmytheHack.github.io/math.html).
2. Create a new post page under `posts/math/`.
3. Link the card to the new post page.

### Add new CS entries
Replace the placeholder content in [cs.html](/Users/tz/Desktop/TimmytheHack.github.io/cs.html) once a real subsection emerges.

### Adjust styling
Edit shared colors, typography, spacing, and layout in [style.css](/Users/tz/Desktop/TimmytheHack.github.io/style.css).

### Add LaTeX later
MathJax is already enabled in the HTML pages. If you later want KaTeX instead, replace the MathJax script tags in the page `<head>` blocks.

## Current Archive Taxonomy

```text
Math
└── Invariant

CS
└── No subsection fixed yet
```

## Suggested Future Blog Shape

The site is currently organized as a clean academic homepage with two broad knowledge areas. A natural next step is to evolve it into a deeper note archive while keeping the same restrained structure.

Possible future direction:

```text
Home
├── Introduction
├── About
├── Featured Areas
│   ├── Math
│   │   ├── Invariant
│   │   └── Essays / Reading Notes
│   └── CS
│       └── First real subsection
└── Knowledge Map
```

## Future Vibe Coding Notes

The intended long-term feel of the blog:
- academically serious
- minimal and elegant
- personal but professional
- more like a modern research notebook than a product site
- easy to browse, easy to maintain, and easy to extend

When adding future content, prefer:
- short precise titles
- dates on entries
- concise excerpts
- one archive card per idea
- one dedicated post page per developed piece
- restrained styling
- semantic HTML
- notes that can later grow into full essays

Avoid drifting toward:
- startup landing page aesthetics
- heavy animation
- bright gradients
- overly dense layouts
- decorative UI that competes with the writing

## GitHub Pages

This project is compatible with GitHub Pages as a plain static site. If this repository is published with Pages enabled, `index.html` will serve as the main entry point.
