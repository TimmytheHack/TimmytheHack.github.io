# Personal Academic Blog

This repository contains a static personal academic website designed for GitHub Pages. The site is intentionally minimal, readable, and easy to expand over time.

## Current Structure

```text
.
├── index.html
├── math.html
├── cs.html
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
- one real subsection: `Invariant`
- a long-form note connecting analysis, fixed points, and constrained learning dynamics
- raw TeX blocks ready for future MathJax or KaTeX support

### `cs.html`
Computer science section page with:
- a minimal placeholder state
- room for future real subsections once they exist

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
Duplicate the `article.long-note` block or add a new section beneath it in [math.html](/Users/tz/Desktop/TimmytheHack.github.io/math.html).

### Add new CS entries
Replace the placeholder content in [cs.html](/Users/tz/Desktop/TimmytheHack.github.io/cs.html) once a real subsection emerges.

### Adjust styling
Edit shared colors, typography, spacing, and layout in [style.css](/Users/tz/Desktop/TimmytheHack.github.io/style.css).

### Add LaTeX later
Each HTML page includes a comment in the `<head>` showing where MathJax or KaTeX can be inserted.

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
