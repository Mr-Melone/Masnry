import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Scissors,
  Star,
  UserRound,
  Youtube
} from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { Reveal } from "@/components/reveal";

const barberTheme = {
  "--background": "35 16% 6%",
  "--foreground": "42 20% 94%",
  "--card": "34 15% 10%",
  "--card-foreground": "42 20% 94%",
  "--primary": "38 86% 63%",
  "--primary-foreground": "35 18% 8%",
  "--secondary": "34 13% 15%",
  "--secondary-foreground": "42 20% 94%",
  "--muted": "34 13% 16%",
  "--muted-foreground": "38 10% 70%",
  "--border": "35 13% 20%",
  "--input": "35 13% 24%",
  "--ring": "38 86% 63%"
} as CSSProperties;

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

const heroImage =
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=80";

const services = [
  ["Signature cut", "Precision consultation, tailored cut, hot towel finish.", "$55", "45 min"],
  ["Skin fade", "Detailed fade work with razor finish and styling.", "$65", "60 min"],
  ["Beard sculpt", "Shape, line-up, towel treatment, and conditioning.", "$38", "30 min"],
  ["Full service", "Cut, beard sculpt, wash, towel, beard, and finish.", "$95", "75 min"]
];

const barbers = [
  ["Marcus Vale", "Founder barber", "Classic cuts, fades, beard architecture"],
  ["Theo King", "Senior barber", "Textured crops, sharp tapers, styling"],
  ["Jude Mercer", "Barber", "Clean fades, line-ups, modern grooming"]
];

const gallery = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=900&q=80"
];

const reviews = [
  [
    "Best cut I have had in Brisbane.",
    "Clean, calm, and exact. The fade held its shape for weeks.",
    "Luca M."
  ],
  [
    "The booking process is simple and the shop feels premium.",
    "No waiting around, no confusion, just a sharp appointment from start to finish.",
    "Noah K."
  ],
  [
    "Every appointment feels consistent.",
    "That is why I keep coming back. The detail is always there.",
    "James R."
  ]
];

export default function BarberDemoPage() {
  return (
    <main
      className="isolate min-h-screen overflow-hidden bg-background text-foreground"
      style={barberTheme}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_8%,hsl(var(--primary)/0.18),transparent_32rem),radial-gradient(ellipse_at_92%_70%,hsl(22_45%_28%/0.2),transparent_34rem),linear-gradient(180deg,hsl(var(--background)),hsl(32_18%_4%))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12] [background-image:repeating-linear-gradient(0deg,hsl(0_0%_100%/0.08)_0_1px,transparent_1px_3px)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/74 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Button asChild size="sm" variant="outline">
              <Link href="/projects/website-design">
                <ArrowLeft /> MASNRY
              </Link>
            </Button>
            <Link href="#top" className="font-display text-2xl font-semibold">
              {shop.name}
            </Link>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link href="#services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="#barbers" className="hover:text-foreground">
              Barbers
            </Link>
            <Link href="#reviews" className="hover:text-foreground">
              Reviews
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Visit
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#book">Book now</Link>
          </Button>
        </Container>
      </header>

      <section id="top" className="relative min-h-screen pt-16">
        <Image
          src={heroImage}
          alt={`${shop.fullName} interior and barber chair`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/14" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <Container className="relative flex min-h-[calc(100vh-4rem)] items-end pb-14 pt-20 sm:pb-20">
          <Reveal>
            <Badge className="border-white/15 bg-white/10 text-white">
              {shop.city} premium barber studio
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-none tracking-normal text-white sm:text-7xl lg:text-8xl">
              Sharp cuts. Quiet luxury. Easy booking.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {shop.fullName} combines traditional grooming, modern style, and a
              booking experience built for customers who value precision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#book">
                  Book appointment <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#services">View prices</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section className="relative z-10 -mt-10 bg-gradient-to-b from-transparent via-card/54 to-card/38 py-8">
        <Container className="grid gap-4 sm:grid-cols-3">
          {[
            [Clock, "Open late", shop.hours],
            [Star, `${shop.rating} rating`, shop.reviews],
            [CalendarCheck, "Online booking", "Reserve in under a minute"]
          ].map(([Icon, title, body]) => (
            <Card key={title as string} className="bg-background/54 p-5">
              <div className="flex items-center gap-4">
                <Icon className="size-5 text-primary" />
                <div>
                  <p className="text-lg font-semibold">{title as string}</p>
                  <p className="text-sm text-muted-foreground">{body as string}</p>
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <Badge>Pricing</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                Clear prices. Sharp standards.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                The essentials are easy to scan: service, result, duration, and
                price. No guessing before booking.
              </p>
            </div>
            <div className="grid gap-4">
              {services.map(([name, body, price, duration]) => (
                <Card
                  key={name}
                  className="grid gap-5 bg-card/86 p-6 shadow-2xl shadow-black/18 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Scissors className="size-5 text-primary" />
                      <h3 className="font-display text-3xl font-semibold">{name}</h3>
                    </div>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{body}</p>
                    <Badge className="mt-4 border-primary/20 bg-primary/10 text-primary">
                      {duration}
                    </Badge>
                  </div>
                  <div className="rounded-lg border border-primary/25 bg-primary/10 px-6 py-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      From
                    </p>
                    <p className="font-display text-5xl font-semibold text-primary">
                      {price}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="barbers" className="bg-card/45">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge>Barbers</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                Meet the hands behind the chair.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-muted-foreground">
              Each barber brings a defined point of view, from classic masculine
              shapes to clean modern fades.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {barbers.map(([name, role, specialty], index) => (
              <Reveal key={name} delay={index * 0.06}>
                <Card className="bg-background/60 p-6">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-border bg-secondary">
                    <UserRound className="size-12 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{name}</h3>
                  <p className="mt-1 text-sm text-primary">{role}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {specialty}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="gallery">
        <Container>
          <Badge>Gallery</Badge>
          <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold">
            A shop experience people can feel before they arrive.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {gallery.map((src, index) => (
              <Reveal key={src} delay={index * 0.06}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
                  <Image
                    src={src}
                    alt={`${shop.fullName} gallery`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="reviews" className="bg-card/45">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <Badge>Reviews</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                Trusted by regulars.
              </h2>
              <div className="mt-6 inline-flex items-end gap-3 rounded-lg border border-primary/25 bg-primary/10 px-5 py-4">
                <span className="font-display text-6xl font-semibold text-primary">
                  {shop.rating}
                </span>
                <span className="pb-2 text-sm text-muted-foreground">
                  out of 5 / {shop.reviews}
                </span>
              </div>
            </div>
            <div className="grid gap-5">
              {reviews.map(([quote, body, name], index) => (
                <Reveal key={quote} delay={index * 0.06}>
                  <Card className="bg-background/64 p-6 shadow-2xl shadow-black/16">
                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="size-5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 font-display text-3xl font-semibold">
                      &quot;{quote}&quot;
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {body}
                    </p>
                    <p className="mt-5 text-sm font-medium text-primary">{name}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="book">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <Badge>Booking</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                Reserve your chair.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                A real client version would connect this button to Fresha, Square,
                Calendly, or a custom booking form.
              </p>
            </div>
            <Card className="bg-card/86 p-6">
              <div className="grid gap-4">
                {["Choose service", "Select barber", "Pick time", "Confirm booking"].map(
                  (step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="text-lg font-medium">{step}</p>
                    </div>
                  )
                )}
              </div>
              <Button className="mt-6 w-full" size="lg">
                Book now <ArrowRight />
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="contact" className="bg-card/45">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <Badge>Visit</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                {shop.city}. {shop.location}.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Walk-ins welcome when chairs are free, bookings preferred.
              </p>
              <div className="mt-6 grid gap-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-primary" />
                  <span>{shop.location}, {shop.city}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-primary" />
                  <span>{shop.phone}</span>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                {[
                  ["Instagram", Instagram],
                  ["Facebook", Facebook],
                  ["YouTube", Youtube]
                ].map(([label, Icon]) => (
                  <Button key={label as string} asChild size="icon" variant="outline">
                    <Link href="#" aria-label={`${shop.fullName} on ${label as string}`}>
                      <Icon />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <Card className="overflow-hidden bg-background/60 p-2 shadow-2xl shadow-black/20">
              <iframe
                title={`${shop.fullName} map`}
                src="https://www.google.com/maps?q=28%20James%20Street%20Fortitude%20Valley%20Brisbane&output=embed"
                className="h-[24rem] w-full rounded-md border-0 grayscale-[0.25] invert-[0.9] saturate-[0.7]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
        </Container>
      </Section>

      <footer className="border-t border-border">
        <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-semibold">{shop.name}</p>
          <p className="text-sm text-muted-foreground">
            Premium barber demo by MASNRY. Built as a client-ready website system.
          </p>
        </Container>
      </footer>
    </main>
  );
}
