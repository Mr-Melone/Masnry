import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  MapPin,
  Scissors,
  Star,
  UserRound
} from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { Reveal } from "@/components/reveal";

const heroImage =
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=80";

const services = [
  ["Signature cut", "Precision consultation, tailored cut, hot towel finish.", "$55"],
  ["Skin fade", "Detailed fade work with razor finish and styling.", "$65"],
  ["Beard sculpt", "Shape, line-up, towel treatment, and conditioning.", "$38"],
  ["Full service", "Cut, beard sculpt, wash, towel, and finish.", "$95"]
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

export default function BarberDemoPage() {
  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <Link href="#" className="font-display text-2xl font-semibold">
            Kahil
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link href="#services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="#barbers" className="hover:text-foreground">
              Barbers
            </Link>
            <Link href="#gallery" className="hover:text-foreground">
              Gallery
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

      <section className="relative min-h-screen pt-16">
        <Image
          src={heroImage}
          alt="Kahil Barber Studio interior and barber chair"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <Container className="relative flex min-h-[calc(100vh-4rem)] items-end pb-14 pt-20 sm:pb-20">
          <Reveal>
            <Badge className="border-white/15 bg-white/10 text-white">
              Brisbane premium barber studio
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-none tracking-normal text-white sm:text-7xl lg:text-8xl">
              Sharp cuts. Quiet luxury. Easy booking.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Kahil Barber Studio combines traditional grooming, modern style, and
              a booking experience built for customers who value precision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#book">
                  Book appointment <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#services">View services</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section className="border-y border-border bg-card/60 py-10">
        <Container className="grid gap-6 sm:grid-cols-3">
          {[
            [Clock, "Open late", "Tue-Sat until 8pm"],
            [Star, "4.9 rating", "Trusted by regulars"],
            [CalendarCheck, "Online booking", "Reserve in under a minute"]
          ].map(([Icon, title, body]) => (
            <div key={title as string} className="flex items-center gap-4">
              <Icon className="size-5 text-primary" />
              <div>
                <p className="font-medium">{title as string}</p>
                <p className="text-sm text-muted-foreground">{body as string}</p>
              </div>
            </div>
          ))}
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <Badge>Services</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                Grooming with exact standards.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Clear pricing, premium service, and a booking path that keeps
                customers moving from interest to appointment.
              </p>
            </div>
            <div className="grid gap-4">
              {services.map(([name, body, price]) => (
                <Card key={name} className="grid gap-4 bg-card/82 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <Scissors className="size-5 text-primary" />
                      <h3 className="font-display text-2xl font-semibold">{name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
                  </div>
                  <p className="font-display text-3xl font-semibold text-primary">
                    {price}
                  </p>
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
                    alt="Kahil Barber Studio gallery"
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

      <Section id="book" className="bg-card/45">
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
            <Card className="bg-background/70 p-6">
              <div className="grid gap-4">
                {["Choose service", "Select barber", "Pick time", "Confirm booking"].map(
                  (step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="font-medium">{step}</p>
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

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Best cut I have had in Brisbane. Clean, calm, and exact.",
              "The booking process is simple and the shop feels premium.",
              "Every appointment feels consistent. That is why I keep coming back."
            ].map((quote) => (
              <Card key={quote} className="bg-card/82 p-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">“{quote}”</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact" className="bg-card/45">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Badge>Visit</Badge>
              <h2 className="mt-5 font-display text-5xl font-semibold">
                Fortitude Valley, Brisbane.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                28 James Street, open Tuesday to Saturday. Walk-ins welcome when
                chairs are free, bookings preferred.
              </p>
              <div className="mt-6 flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-5 text-primary" />
                <span>Replace with real client address</span>
              </div>
            </div>
            <div className="aspect-[16/10] rounded-lg border border-border bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.22),transparent_18rem),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))]" />
          </div>
        </Container>
      </Section>

      <footer className="border-t border-border">
        <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-semibold">Kahil</p>
          <p className="text-sm text-muted-foreground">
            Demo website by MASNRY. Ready to customize for a real barber shop.
          </p>
        </Container>
      </footer>
    </main>
  );
}
