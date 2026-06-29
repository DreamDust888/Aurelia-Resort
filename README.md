# Aurelia Resort & Spa

A premium resort website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## How to run it on your computer

You only need [Node.js](https://nodejs.org) installed (version 18 or newer).

Open a terminal **in this folder** and run these commands one at a time.

### 1. Install (only needed the first time)

```bash
npm install
```

### 2. Start the website (development mode)

```bash
npm run dev
```

Then open your browser to **http://localhost:3000**

Press `Ctrl + C` in the terminal to stop it.

### 3. Build the finished version (for going live)

```bash
npm run build
npm run start
```

---

## Pages

| Page | Address |
|------|---------|
| Home | `/` |
| Rooms & Suites | `/rooms` |
| Dining | `/dining` |
| Experiences & Spa | `/experiences` |
| Gallery | `/gallery` |
| Contact & Reservations | `/contact` |

---

## Where things live

```
app/                 → the pages (one folder per page)
components/ui/        → reusable building blocks (Navbar, Footer, Button…)
components/sections/  → larger page sections (Hero, forms, gallery grid…)
lib/data.ts           → ALL the text and images in one place — edit here
tailwind.config.ts    → the colours and fonts
```

### Want to change the text, prices, or photos?

Almost everything — room names, prices, menu items, testimonials, the
resort address — lives in **`lib/data.ts`**. Open it in any text editor,
change the words, save, and the site updates.

To swap a photo, replace the Unsplash photo id inside `img("...")`.

---

## Design system

- **Colours:** white / off-white (backgrounds), charcoal / taupe (text),
  gold / rose (accents) — defined in `tailwind.config.ts`.
- **Fonts:** Cormorant Garamond (headings) + Inter (body), loaded
  automatically from Google Fonts.
- **Motion:** gentle fade-up on scroll, hero parallax, hover transitions —
  all of which automatically turn off for visitors who prefer reduced motion.

The contact form is front-end only (it shows a confirmation message but does
not send an email yet) — wiring it to a real inbox can be added later.
