# MASNRY Web Presence

MASNRY is structured as a small production-ready monorepo for a personal brand, service business, and growing library of demo/client websites.

## Structure

```txt
apps/
  main-site/          Primary MASNRY portfolio, landing page, lead generation site
  demo-barbershop/    First live demo/prototype website for local business outreach
packages/
  ui/                 Shared shadcn-style primitives, layout helpers, and utilities
docs/
  client-workflow.md  Duplication, deployment, domain, and transfer workflow
```

This structure is scalable because each website can ship as its own Vercel project while sharing the same design primitives. Future demos can be added under `apps/demo-cafe`, `apps/demo-restaurant`, or promoted into client-specific apps like `apps/client-atelier-barber`.

## Local Development

Install dependencies:

```bash
npm install
```

Run the main MASNRY site:

```bash
npm run dev:main
```

Run the barber demo:

```bash
npm run dev:barber
```

## Vercel Deployment

Create one Vercel project per deployable app:

- MASNRY main site: root directory `apps/main-site`
- Barber demo: root directory `apps/demo-barbershop`
- Future client builds: root directory for that client's app

Use the same GitHub repository for all projects. Vercel will detect the workspace and install from the repo root. Each project can have independent environment variables, domains, preview deployments, and production deployment settings.

## Client Transfer Model

For a client who approves a demo:

1. Duplicate the closest demo app into `apps/client-business-name`.
2. Update brand tokens, copy, images, services, contact details, and SEO metadata.
3. Connect the client domain in the Vercel project settings.
4. Transfer the Vercel project or GitHub repo later if the client needs ownership.

More detail lives in [docs/client-workflow.md](docs/client-workflow.md).
