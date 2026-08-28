# Coaching Institute Template (MERN, JSON-configured)

One codebase, many institutes. Every piece of client-specific content and
branding lives in **`client/src/config/institute.json`** — nothing else
needs to change.

## How to spin up a new lead's site

1. Duplicate `client/src/config/institute.json`.
2. Edit:
   - `instituteName`, `tagline`, `city`, `logoText`
   - `theme.*` — six hex colors + three font stacks. These are injected as
     CSS variables at runtime (`src/context/InstituteContext.jsx`), and
     every component uses Tailwind classes like `bg-primary` / `text-accent`
     that resolve to those variables. Change the hex codes, the whole site
     re-themes — no component edits.
   - `hero`, `courses`, `faculty`, `testimonials`, `contact` — arrays/objects
     that components `.map()` over directly.
3. Set `server/.env` → `INSTITUTE_NAME` to match `instituteName` exactly
   (this tags leads in MongoDB so you can run multiple institutes off one
   database/server if you want).
4. `npm run dev` in both `client/` and `server/` — done.

## Why this structure

- **No hardcoded copy in JSX.** Every component (`Hero.jsx`, `Courses.jsx`,
  etc.) reads from `useInstitute()` — a context populated straight from the
  JSON. Search the component files and you won't find a single institute
  name, color, or course string.
- **Colors are CSS variables, not Tailwind config edits.** `tailwind.config.js`
  points its color tokens (`primary`, `accent`, `highlight`, ...) at
  `var(--color-primary)` etc. `InstituteProvider` sets those variables on
  `document.documentElement` from `institute.theme` on load. This means you
  never touch `tailwind.config.js` or rebuild the Tailwind config per client
  — a plain JSON edit is enough, even against a built/deployed bundle if you
  later fetch the JSON at runtime instead of importing it statically.
- **One signature visual element** (the "Rank Card" admit-ticket in the hero)
  stays structurally the same across every institute but re-skins completely
  via the same variables — this is what keeps each client's site from
  looking like a generic template despite sharing 100% of the code.

## Stack

- `client/` — React 18 + Vite + Tailwind
- `server/` — Express + Mongoose, single `/api/leads` endpoint for the
  contact form (POST to save, GET to list — scoped by `INSTITUTE_NAME`)

## Local setup

```bash
# Terminal 1
cd server && cp .env.example .env && npm install && npm run dev

# Terminal 2
cd client && npm install && npm run dev
```

## Going from demo → pitch

Deploy the client to Vercel/Netlify (free tier is enough for a demo link)
and the server + MongoDB to Render/Railway + Atlas free tier. Send leads
the live link with their own JSON already swapped in — much stronger than
a screenshot or generic template pitch.
