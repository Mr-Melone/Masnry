# MASNRY Web Presence

MASNRY is a creative/developer portfolio and scalable demo website system. The main site is the personal archive for projects, experiments, design, code, 3D printing, and digital work. Demo apps can be duplicated and deployed independently for future clients.

## Preview Locally

Install dependencies:

```bash
npm install
```

Run the MASNRY main site:

```bash
npm run dev:main
```

Preview it at:

```txt
http://localhost:3000
```

Run the barber shop demo as its own independent app:

```bash
npm run dev:barber
```

Preview it at:

```txt
http://localhost:3001
```

## Structure

```txt
apps/
  main-site/          MASNRY portfolio, project archive, and identity site
  demo-barbershop/    Independent premium barber shop demo app
packages/
  ui/                 Shared shadcn-style primitives and utilities
docs/
  client-workflow.md  Duplication, deployment, domain, and transfer workflow
```

The demo app is independent so it can have its own styling, metadata, Vercel project, domain, and client handoff path. The MASNRY site can still link to it from the Projects archive.

## Editing Barber Shop Content

Most barber shop content is in:

```txt
apps/demo-barbershop/app/page.tsx
```

Change the shop name, full display name, address, city, phone, hours, rating, and review count in the `shop` object near the top of the file.

Update services and pricing in the `services` array:

```ts
["Signature cut", "Description", "$55", "45 min"]
```

Update barbers in the `barbers` array:

```ts
["Marcus Vale", "Founder barber", "Classic cuts, fades, beard architecture"]
```

Update gallery images in the `gallery` array. Use local images in `public/` for production client work, or remote image URLs while prototyping.

Update reviews in the `reviews` array:

```ts
["Quote headline", "Longer review body", "Customer name"]
```

Update the embedded map by changing the Google Maps query in the iframe `src`.

## Changing Demo Colors

The independent barber app theme lives in:

```txt
apps/demo-barbershop/app/globals.css
```

Change the HSL CSS variables in `:root` to create a different client palette. Keep the same token names so shared UI components continue to work:

```css
--background
--foreground
--card
--primary
--secondary
--muted
--border
```

For the MASNRY-hosted route preview, the same barber palette is also scoped in:

```txt
apps/main-site/app/projects/barbershop/page.tsx
```

## Duplicating A Demo For A Client

Copy the demo app into a new app folder:

```txt
apps/demo-barbershop -> apps/client-business-name
```

Then update:

- `package.json` name
- `app/layout.tsx` metadata
- `app/page.tsx` content arrays and shop details
- `app/globals.css` color theme
- images, gallery, services, team, reviews, social links, map, and booking URL

Keep the copied app independent. Do not place client apps inside `apps/main-site/app`.

## Deploying With GitHub And Vercel

Push changes to GitHub first. In Vercel, create one project per app:

- MASNRY main site root directory: `apps/main-site`
- Barber demo root directory: `apps/demo-barbershop`
- Future client site root directory: `apps/client-business-name`

Each Vercel project can have its own domain, environment variables, preview deployments, production deployment, and ownership transfer path.

For client handoff, either keep the site managed under MASNRY or extract the client app into its own repository after payment and transfer the Vercel project.
