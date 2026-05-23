# Atlas Barber Studio Demo

This app is the first MASNRY demo website. It is intentionally isolated as its own Next.js application so it can be deployed independently on Vercel and later duplicated for a real barber client.

Duplication path:

```txt
apps/demo-barbershop -> apps/client-business-name
```

After copying, update:

- Business name, services, pricing, team, address, and booking URL
- Metadata in `app/layout.tsx`
- Images and gallery
- Vercel root directory and domain settings

The app still imports shared primitives from `@masnry/ui`, which keeps future client builds fast while allowing each site to have its own brand layer.
