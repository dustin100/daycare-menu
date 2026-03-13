# 🍽️ Meal Calendar

A lightweight, mobile-first calendar for viewing rotating weekly meal plans. Built with vanilla HTML, CSS, and JavaScript — no dependencies, no build step.

## Features

- **Three views** — Month, Week, and Day with click-to-drill-down navigation
- **4-week menu rotation** — Menus cycle automatically based on a configurable reference date
- **Mobile-first** — Defaults to day view on small screens, month view on desktop
- **Color-coded meals** — Morning, Lunch, Snack, and Late Snack each have a distinct color
- **Menu badges** — Quickly see which menu (1–4) applies to any given week

## Files

| File | Purpose |
|------|---------|
| `index.html` | Markup shell — imports CSS and JS |
| `styles.css` | Mobile-first styles with breakpoints at 600px and 900px |
| `app.js` | All application logic, menu data, and rendering |

## Usage

Open `index.html` in a browser. No server required.

## Customization

- **Meal data** — Edit the `MENUS` object in `app.js` (menus 1–4, Monday–Friday)
- **Rotation anchor** — Change `REFERENCE_DATE` and `REFERENCE_MENU` in `app.js` to shift which week maps to which menu
- **Mobile breakpoint** — Adjust `MOBILE_BREAKPOINT` in `app.js` (default: 600px)
