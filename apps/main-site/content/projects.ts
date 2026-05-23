export type Project = {
  slug: string;
  title: string;
  status: "Live demo" | "Client work" | "Prototype";
  category: "Websites" | "3D Printing" | "Systems";
  businessType: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  liveDemoUrl: string;
  image: string;
  accent: string;
};

// Project content is intentionally data-driven. Future demos or client launches can
// be added here first, then migrated to MDX or a headless CMS once the portfolio grows.
export const projects: Project[] = [
  {
    slug: "atlas-barber-studio",
    title: "Atlas Barber Studio",
    status: "Live demo",
    category: "Websites",
    businessType: "Premium barber shop",
    summary:
      "A booking-focused barber shop demo built to feel modern, masculine, and high-end on mobile.",
    description:
      "Atlas Barber Studio shows how a local barber can move from a basic social profile to a polished digital storefront with clear services, strong imagery, trust signals, and a direct booking path.",
    problem:
      "Many local barber shops rely on Instagram, outdated booking links, or generic template sites that do not communicate quality before a customer walks in.",
    solution:
      "A premium one-page experience with strong positioning, service pricing, barber profiles, gallery moments, testimonials, and repeated booking opportunities.",
    features: [
      "Mobile-first booking path",
      "Service and pricing system",
      "Barber profile showcase",
      "Gallery-led visual trust",
      "Location and contact section",
      "High-performance Next.js build"
    ],
    tags: ["Barber", "Booking", "Local business", "Demo"],
    liveDemoUrl: "http://localhost:3001",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80",
    accent: "Electric blue"
  }
];

export const projectCategories = ["All", "Websites", "3D Printing", "Systems"] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
