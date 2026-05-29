# MASNRY Client Workflow

## Demo First

Build industry-specific prototypes before outreach. Each demo is a polished proof of what a local business could own, not a throwaway mockup.

Recommended app naming:

```txt
apps/demo-barbershop
apps/demo-cafe
apps/demo-restaurant
apps/demo-gym
apps/demo-salon
```

## Convert Demo To Client Site

When a business says yes:

1. Copy the best matching demo app into a client app folder.
2. Replace content data, imagery, services, location, booking links, and metadata.
3. Keep shared UI imports from `@masnry/ui` so improvements stay easy to reuse.
4. Create a new Vercel project that points to the client app root directory.
5. Add environment variables in Vercel for forms, analytics, CMS, and booking integrations.

Example:

```txt
apps/demo-barbershop -> apps/client-northside-cuts
```

## Domains

Domains are connected per Vercel project. Keep demos on MASNRY-owned subdomains such as:

```txt
barber-demo.masnry.com
cafe-demo.masnry.com
```

Client production sites can use their real domain:

```txt
northsidebarber.com
```

## Transfer Options

There are two practical transfer paths:

- Managed service: MASNRY keeps the repo and Vercel project, then charges ongoing care.
- Client-owned: transfer the GitHub repository and Vercel project once final payment clears.

The monorepo works well while MASNRY manages multiple demos. If a client needs ownership, the specific app can be extracted into its own repository later because each app contains its own Next.js config, metadata, routes, and deployment root.

## Content Strategy

The main site keeps project data in TypeScript content modules so new demos can be added without changing page layouts. If content grows, the same shape can be migrated to MDX, Sanity, Contentful, or another headless CMS.

Current archive categories are intentionally limited to:

```txt
Website Design
3D Printing
Python & HTML
```

Add future cards in `apps/main-site/content/projects.ts`, then route polished demos under the matching category page. If a category has no public projects yet, keep a designed Coming Soon page live instead of letting the route 404.
