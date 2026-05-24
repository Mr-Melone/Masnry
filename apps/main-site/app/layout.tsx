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
    default: "MASNRY | Projects, Experiments, Design And Code",
    template: "%s | MASNRY"
  },
  description:
    "MASNRY is a personal creative development portfolio for projects, experiments, design, code, 3D printing, and digital ideas.",
  openGraph: {
    title: "MASNRY | Projects, Experiments, Design And Code",
    description:
      "A cinematic archive of digital projects, experiments, design systems, code, and things made for the internet.",
    url: "https://masnry.com",
    siteName: "MASNRY",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MASNRY",
    description: "Projects, experiments, design, code, and digital work."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070b"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable}`}>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
