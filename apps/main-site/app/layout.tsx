import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SiteChrome } from "@/components/site-chrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masnry.com"),
  title: {
    default: "MASNRY | Brisbane Web Designer And Creative Developer",
    template: "%s | MASNRY"
  },
  description:
    "MASNRY is a Brisbane-based creative development portfolio for custom websites, small business web design, digital products, 3D printing, and experiments.",
  keywords: [
    "MASNRY",
    "website design Brisbane",
    "web designer Brisbane",
    "website developer Brisbane",
    "small business websites Brisbane",
    "custom websites Brisbane",
    "website redesign Brisbane",
    "creative developer Brisbane"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MASNRY | Brisbane Web Designer And Creative Developer",
    description:
      "A personal creative workshop for custom websites, digital products, experiments, 3D printing, and things made for the internet.",
    url: "https://masnry.com",
    siteName: "MASNRY",
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MASNRY",
    description:
      "Brisbane web design, creative development, projects, experiments, and digital work."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070b"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://masnry.com/#website",
        name: "MASNRY",
        url: "https://masnry.com",
        description:
          "A Brisbane-based creative development portfolio for websites, digital products, 3D printing, and experiments."
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": "https://masnry.com/#masnry",
        name: "MASNRY",
        url: "https://masnry.com",
        areaServed: {
          "@type": "City",
          name: "Brisbane"
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brisbane",
          addressRegion: "QLD",
          addressCountry: "AU"
        },
        serviceType: [
          "Website design",
          "Website development",
          "Small business websites",
          "Website redesign",
          "Digital product prototyping"
        ],
        sameAs: []
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
