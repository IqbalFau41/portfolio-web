# Iqbal Fauzan — Portfolio Website

A static, multi-language portfolio site for an IoT & Automation Engineer, styled as an
engineering "blueprint / technical schematic". No build step required — plain HTML, CSS,
and vanilla JavaScript.

## Structure

```
portfolio-web/
│
├── index.html              Home page (hero, about, skills, experience, featured projects, contact)
├── cv.html                 Print-friendly CV (button triggers browser print → PDF)
├── projects.html           Full project listing
├── project.html            Single project detail (reads ?id= from the URL)
├── README.md                This file
│
├── assets/
│   ├── css/
│   │   └── style.css       All site styling (design tokens, components, print rules)
│   │
│   ├── js/
│   │   └── script.js       Content data (CV/projects), i18n dictionary, and render logic
│   │
│   ├── images/
│   │   └── profile/
│   │       └── profile.webp   Circular profile photo used in the hero and CV header
│   │
│   └── documents/
│       ├── CV-Iqbal-Fauzan.pdf   (optional) static PDF export of the CV
│       └── Portfolio.pdf         (optional) static PDF portfolio brochure
│
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

## Languages

Content is fully translated and switchable at runtime (no page reload) via the language
buttons in the navbar. Priority / default order:

1. **English (EN)** — default
2. **Deutsch (DE)**
3. **Indonesia (ID)**

The active language is remembered in `localStorage`. All translated strings live in
`assets/js/script.js`:
- `UI` — static interface labels (nav, buttons, section headings)
- `PROFILE`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `EDUCATION`, `CERTIFICATIONS`, `LANGUAGES`
  — CV/portfolio content, each translatable field keyed by `en` / `de` / `id`

To add a new field, add it under all three language keys, then reference it with
`t("path.to.key")` (static UI) or `field[currentLang]` (content data).

## Profile photo

The hero section and CV header display a circular photo (`.photo-frame` component in
`style.css`), framed with a dashed blueprint-style ring to match the site's drafting
aesthetic. Replace `assets/images/profile/profile.webp` with a real photo (square image,
at least 512×512px recommended) — it will automatically be cropped into a circle.
If the file is missing or fails to load, the layout gracefully falls back to a circular
"IF" initials badge, so the page never shows a broken image icon.

## Documents

`assets/documents/` is a place to host static PDF exports (e.g. a downloadable CV or a
portfolio brochure) if you want direct download links instead of, or in addition to, the
in-browser "Print / save PDF" button on `cv.html`. Add files there and link to them with
`assets/documents/<filename>.pdf`.

## Local preview

No build tools are needed. Open `index.html` directly in a browser, or serve the folder
with any static server, e.g.:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
