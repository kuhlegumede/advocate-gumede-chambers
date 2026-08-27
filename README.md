# Gumede Chambers — Website

A three-page professional website for Advocate Nhlanhla Gumede, built with **React + Vite**.

Pages: **Home**, **Practice Areas** (Services), **Contact & Enquiries**, plus a shared navbar and footer.

## Running it locally

You need [Node.js](https://nodejs.org) 18+ installed. Then, from this folder:

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot-reload.

To build the production version:

```bash
npm run build
```

This outputs a static site into `dist/`, which you can deploy to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc).

## Structure

```
src/
  assets/            your two photos, used on the Home page
  components/
    Navbar.jsx        fixed top navigation with mobile menu
    Footer.jsx        chambers details + site links
  pages/
    Home.jsx           hero, credentials, practice-area preview, about, CTA
    Services.jsx        full list of practice areas
    Contact.jsx         chambers info card, embedded map, enquiry form
  index.css           global design tokens (colours, type, spacing)
```

## A couple of things worth checking before you publish

- **Reception email**: you gave `reception@adv.com.nhlanhla gumede`, which isn't a valid
  email address (it has a space in it and an odd domain). I've used `reception@adv.com`
  as a placeholder on the Contact page — please send the correct address and I'll swap it
  in, or edit `src/pages/Contact.jsx` yourself and search for `reception@adv.com`.
- **The enquiry form** currently opens the visitor's own email app with the message
  pre-filled, addressed to `advgumede26@gmail.com` (a "mailto:" form). This works with
  zero setup, but if you'd like enquiries to submit silently and land straight in your
  inbox instead, that needs a small form-backend service (e.g. Formspree) — happy to
  wire that up if you'd like it.
- **The embedded map** points at "3 Leeds Street, Mthatha" using Google's free embed
  (no API key needed). Worth double-checking it centres on the right building once you
  view the live site.

## Colour & type system

- **Ink** `#16161A` — near-black, echoing the silk gown
- **Parchment** `#F5F0E4` — warm ivory, echoing the jabot / court papers
- **Oxblood** `#7A1626` — the deep red seen on the courtroom bench trim
- **Brass** `#A8823C` — the tone of a chambers door plate, used for accents and calls to action
- **Display type**: Fraunces (serif) · **Body type**: Inter (sans)
