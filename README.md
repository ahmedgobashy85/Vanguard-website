# Vanguard Business Solutions — Marketing Site

Landing page for Vanguard Business Solutions, a B2B corporate-training company
serving the Egyptian market. Built on the Vanguard design system (navy `#0B2545`
+ gold `#C9A227`, Exo 2 display / Inter body, 4px spacing, navy-tinted shadows).

## Highlights

- **Animated hero** — a hand-built CSS/SVG classroom scene: a trainer presenting
  in the foreground of a large room, with a glowing presentation screen (cycling
  slides), daylight beams from tall windows, floating dust, receding desk rows,
  and gentle mouse parallax. No external images or libraries.
- **Seven programs**, with **AI Integration** featured as the lead / door-opener.
- Sections: hero, programs, approach, honest stats band, slogan quote, about,
  contact form, footer.
- Fully responsive with a mobile menu; respects `prefers-reduced-motion`.
- Layouts use CSS logical properties so an Arabic (RTL) variant can mirror
  without rework.

## Structure

```
index.html            # Single-page site (hero SVG is inline for animation control)
assets/css/styles.css # Design tokens + all component styles
assets/js/main.js     # Header, mobile nav, scroll reveals, hero parallax, form
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- Fonts (Exo 2 + Inter) load from Google Fonts. Swap in self-hosted `@font-face`
  files if you have licensed copies.
- The contact form is front-end only — wire the submit handler in `main.js` to an
  email service or backend endpoint before going live.
- Copy is real per the business brief; any client names or figures added later
  should be actual values, not placeholders.
