# Kahil Barber Studio Demo

This is an independent Next.js demo app for a premium barber shop website. It is intentionally separate from the MASNRY main site so it can be deployed, duplicated, themed, and transferred without inheriting MASNRY layout or navigation.

## Local Preview

```bash
npm run dev:barber
```

Open:

```txt
http://localhost:3001
```

## Change Barber Shop Name And Details

Edit `apps/demo-barbershop/app/page.tsx`.

Update the `shop` object:

```ts
const shop = {
  name: "Kahil",
  fullName: "Kahil Barber Studio",
  location: "28 James Street, Fortitude Valley",
  city: "Brisbane",
  phone: "+61 400 000 000",
  hours: "Tue-Sat / 10am-8pm",
  rating: "4.9",
  reviews: "186 reviews"
};
```

## Edit Services, Pricing, And Barbers

Update `services`:

```ts
["Signature cut", "Precision consultation, tailored cut, hot towel finish.", "$55", "45 min"]
```

Update `barbers`:

```ts
["Marcus Vale", "Founder barber", "Classic cuts, fades, beard architecture"]
```

Prices and durations are intentionally large in the UI so customers can scan quickly.

## Update Images And Gallery

Change `heroImage` for the hero. Change the `gallery` array for the gallery section.

For production client builds, prefer local optimized assets in `public/` and reference them from the page.

## Update Location And Map

Change the visible address in the `shop` object. Change the iframe `src` query in the Location section:

```txt
https://www.google.com/maps?q=YOUR%20ADDRESS&output=embed
```

## Social Links

The social icons live in the Location section. Replace `href="#"` with the real Instagram, Facebook, and YouTube links.

## MASNRY Preview Back Button

The header includes a small `MASNRY` button so someone previewing the demo can return to the main portfolio site.

For MASNRY-owned previews, set this environment variable in Vercel:

```txt
NEXT_PUBLIC_MASNRY_HOME_URL=https://your-masnry-domain.com
```

For a real client export, remove that button from `apps/demo-barbershop/app/page.tsx` before launch so the site feels fully client-owned.

## Change Color Theme

Edit `apps/demo-barbershop/app/globals.css`.

Keep the same CSS variable names and change the HSL values:

```css
--background
--foreground
--card
--primary
--secondary
--muted
--border
```

This keeps the demo visually isolated while still allowing shared `@masnry/ui` components to work.

## Duplicate Safely

Copy:

```txt
apps/demo-barbershop
```

To:

```txt
apps/client-business-name
```

Then update `package.json`, metadata in `app/layout.tsx`, content in `app/page.tsx`, colors in `app/globals.css`, and deployment settings in Vercel.

## Deploy Independently

Push to GitHub, then create a Vercel project with root directory:

```txt
apps/demo-barbershop
```

For a client copy, use that copied app folder as the Vercel root directory. Connect the client domain in Vercel after the production version is approved.
