import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Circle,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { ParallaxLayer, Reveal } from "@/components/reveal";

const nxtTheme = {
  "--background": "220 26% 98%",
  "--foreground": "222 24% 5%",
  "--card": "0 0% 100%",
  "--card-foreground": "222 24% 5%",
  "--primary": "222 88% 8%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "220 18% 92%",
  "--secondary-foreground": "222 24% 5%",
  "--muted": "220 14% 90%",
  "--muted-foreground": "222 8% 38%",
  "--border": "220 14% 82%",
  "--input": "220 14% 82%",
  "--ring": "222 88% 8%"
} as CSSProperties;

const products = [
  ["NXT Core", "Low-profile daily match pad", "$39", "82g pair"],
  ["NXT Aero", "Vent-cut shell for fast play", "$49", "74g pair"],
  ["NXT Blackout", "Matte black limited fit", "$59", "80g pair"]
];

const features = [
  ["Compact fit", "Built for players who want protection without bulky gear."],
  ["Locked feel", "Curved contact points help the pad sit cleanly inside the sock."],
  ["Match-ready shell", "A rigid lightweight form designed for weekly play."]
];

export const metadata: Metadata = {
  title: "NXT Demo",
  description:
    "A premium sports-tech demo website for modern football mini shinpads."
};

export default function NxtDemoPage() {
  return (
    <main
      className="isolate min-h-screen overflow-hidden bg-background text-foreground"
      style={nxtTheme}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_22%_0%,hsl(231_90%_70%/0.18),transparent_30rem),radial-gradient(ellipse_at_90%_18%,hsl(260_90%_70%/0.13),transparent_26rem),linear-gradient(180deg,hsl(var(--background)),hsl(220_26%_94%))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(circle_at_center,hsl(222_24%_5%/0.16)_0_1px,transparent_1px)] [background-size:34px_34px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/74 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <Link href="#top" className="font-display text-2xl font-semibold">
            NXT
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link href="#product" className="hover:text-foreground">
              Product
            </Link>
            <Link href="#fit" className="hover:text-foreground">
              Fit
            </Link>
            <Link href="#drop" className="hover:text-foreground">
              Drop
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href="/projects/website-design">
                <ArrowLeft /> MASNRY
              </Link>
            </Button>
            <Button asChild className="hidden sm:inline-flex" size="sm">
              <Link href="#drop">Shop drop</Link>
            </Button>
          </div>
        </Container>
      </header>

      <section id="top" className="relative min-h-screen pt-16">
        <Container className="grid min-h-[calc(100vh-4rem)] gap-12 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal variant="mask">
            <Badge className="border-black/10 bg-black text-white">
              Football mini shinpads
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
              Protection trimmed to the essentials.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              NXT is a modern shinpad concept for players who want a compact fit,
              a clean silhouette, and gear that disappears once the match starts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#product">
                  Explore product <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#fit">See features</Link>
              </Button>
            </div>
          </Reveal>

          <ParallaxLayer distance={38}>
            <div className="relative min-h-[32rem] overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl shadow-black/12">
              <Image
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80"
                alt="Football player wearing white kit"
                fill
                priority
                className="object-cover opacity-[0.72]"
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_45%,transparent_0_18rem,white_72%),linear-gradient(135deg,white_0%,transparent_42%,white_100%)]" />
              <div className="absolute inset-x-8 bottom-8 rounded-lg border border-black/10 bg-white/72 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Product form
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="aspect-[3/4] rounded-[2rem] border border-black/10 bg-[radial-gradient(ellipse_at_50%_20%,hsl(235_100%_74%/0.18),transparent_50%),linear-gradient(160deg,#ffffff,#dfe4ee)] shadow-inner" />
                  <div className="aspect-[3/4] rounded-[2rem] border border-black/10 bg-[radial-gradient(ellipse_at_40%_18%,hsl(260_90%_74%/0.22),transparent_48%),linear-gradient(160deg,#0b0d13,#1f2431)] shadow-inner" />
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Container>
      </section>

      <Section id="product" className="py-16">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge>Product line</Badge>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">
                Three compact match profiles.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-muted-foreground">
              Simple choices, sharp hierarchy, and pricing that is readable on a
              phone before a player reaches the checkout.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {products.map(([name, body, price, weight], index) => (
              <Reveal key={name} delay={index * 0.06} variant="scale">
                <Card className="h-full bg-white/80 p-5 shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-1">
                  <div className="aspect-[4/5] rounded-lg border border-black/10 bg-[radial-gradient(ellipse_at_50%_20%,hsl(230_100%_74%/0.18),transparent_42%),linear-gradient(160deg,#ffffff,#e8ebf2)]" />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{name}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {body}
                      </p>
                    </div>
                    <p className="rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
                      {price}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                    <Circle className="size-3 fill-current" />
                    {weight}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="fit" className="bg-black py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <Badge className="border-white/15 bg-white/10 text-white">
                Fit system
              </Badge>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">
                Built to stay out of the way.
              </h2>
            </Reveal>
            <div className="grid gap-4">
              {features.map(([title, body], index) => (
                <Reveal key={title} delay={index * 0.06}>
                  <div className="grid gap-4 rounded-lg border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    {index === 0 ? (
                      <Zap className="size-6 text-white" />
                    ) : index === 1 ? (
                      <ShieldCheck className="size-6 text-white" />
                    ) : (
                      <Sparkles className="size-6 text-white" />
                    )}
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/62">{body}</p>
                    </div>
                    <ChevronRight className="hidden size-5 text-white/42 sm:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="drop">
        <Container>
          <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl shadow-black/10">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.72fr] lg:p-10">
              <div>
                <Badge>First drop</Badge>
                <h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">
                  NXT Core starts at $39.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  A product page like this can connect to Shopify, Stripe,
                  Squarespace Commerce, or a custom order form depending on the
                  client workflow.
                </p>
              </div>
              <Card className="bg-black p-6 text-white">
                <p className="text-sm uppercase tracking-[0.22em] text-white/52">
                  Match pack
                </p>
                <p className="mt-4 font-display text-5xl font-semibold">$39</p>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  Pair of NXT Core pads, black compression sleeve, and simple
                  care card.
                </p>
                <Button className="mt-6 w-full bg-white text-black hover:bg-white/90" size="lg">
                  Join waitlist <ArrowRight />
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <footer className="border-t border-black/10">
        <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-semibold">NXT</p>
          <Link
            href="/projects/website-design"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to MASNRY website demos
          </Link>
        </Container>
      </footer>
    </main>
  );
}
