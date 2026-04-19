# Air Astana Spectrum

Interactive prototype for an Air Astana ESG passenger journey concept. The project adds a Fly Green option into the "Before You Fly" booking flow, lets passengers choose an offset tier, updates the booking total, awards Nomad Points, and visualizes the impact through a rotatable Nomad Forest.

Live demo: https://air-astana-spectrum.vercel.app

## What It Shows

- Fly Green card inside the ancillary booking flow.
- Three contribution tiers: Light, Balance, and Green+.
- Dynamic booking total, CO2 impact, receipt text, and Nomad Points.
- Mini Nomad Forest preview inside the card.
- Full Nomad Forest page with smooth drag rotation.
- Mobile-first layout with fixed top profile header and fixed checkout footer.

## Project Structure

```text
.
|-- index.html           # Booking flow and Fly Green card
|-- forest.html          # Full Nomad Forest screen
|-- styles.css           # Layout, responsive UI, forest styling
|-- script.js            # Tier logic, totals, localStorage, forest rendering
|-- solution-notes.md    # Product, MVP, metrics, and implementation notes
`-- README.md
```

## How To Run Locally

This is a static HTML/CSS/JS prototype. You can open `index.html` directly in a browser.

For a local server:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Main User Flow

1. Passenger opens the Before You Fly step.
2. Passenger sees Fly Green alongside other ancillary services.
3. Passenger selects Light, Balance, or Green+.
4. The prototype updates the total, offset amount, points, and receipt.
5. A seed/tree is added to the Nomad Forest.
6. Passenger can open the full forest and rotate it by dragging.

## ESG Logic

ESG means Environmental, Social, and Governance. In this concept:

- Environmental: CO2 offset and SAF-linked contribution options.
- Social: visible participation in a sustainability program.
- Governance: clear receipt, selected impact, partner/project label, and measurable offset amount.

## Deployment

The current production version is deployed on Vercel:

https://air-astana-spectrum.vercel.app

The project can also be connected to this GitHub repository through Vercel Git Integration for automatic deployments after each push.
