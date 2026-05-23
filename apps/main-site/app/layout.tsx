import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";

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
    default: "MASNRY | Premium Websites For Modern Local Businesses",
    template: "%s | MASNRY"
  },
  description:
    "MASNRY designs and develops high-converting modern websites, demo prototypes, and digital systems for ambitious local businesses.",
  openGraph: {
    title: "MASNRY | Premium Websites For Modern Local Businesses",
    description:
      "Modern web design, development, and technical creativity for local businesses ready to stand out.",
    url: "https://masnry.com",
    siteName: "MASNRY",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MASNRY",
    description: "Modern websites for businesses that want to stand out."
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
          <div className="relative min-h-screen overflow-hidden">
            <div className="surface-line pointer-events-none absolute inset-x-0 top-0 h-[42rem] opacity-40" />
            <SiteNav />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
