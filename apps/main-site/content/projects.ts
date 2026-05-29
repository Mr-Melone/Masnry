export type Project = {
  slug: string;
  title: string;
  status: "Live demo" | "Experiment" | "Concept" | "Personal build";
  category: "Website Design" | "3D Printing" | "Python & HTML";
  categorySlug: "website-design" | "3d-printing" | "python-html";
  businessType: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  href: string;
  liveDemoUrl: string;
  image: string;
  accent: string;
};

// Project content is intentionally data-driven. Future demos or client launches can
// be added here first, then migrated to MDX or a headless CMS once the portfolio grows.
export const projects: Project[] = [
  {
    slug: "barber-shop-demo",
    title: "Barber Shop Demo",
    status: "Live demo",
    category: "Website Design",
    categorySlug: "website-design",
    businessType: "Barber shop demo",
    year: "2026",
    role: "Design, direction, Next.js build",
    summary:
      "A cinematic barber shop concept with booking, services, gallery, and a mobile-first flow.",
    description:
      "Barbershop is the first MASNRY demo: a polished one-page barber shop site built as a real prototype, not a throwaway mockup. It explores how atmosphere, strong imagery, and simple booking paths can make a local business feel sharper online.",
    problem:
      "A lot of local businesses have presence, but not atmosphere. This concept looks at how a small service business can feel memorable before someone walks through the door.",
    solution:
      "A dark, booking-focused prototype with clear services, barber profiles, gallery moments, testimonials, and a direct path into a future booking tool.",
    features: [
      "Mobile-first booking path",
      "Service and pricing system",
      "Barber profile showcase",
      "Gallery-led visual trust",
      "Location and contact section",
      "High-performance Next.js build"
    ],
    tags: ["Barber", "Booking", "Local business", "Demo"],
    href: "/projects/website-design/barber-shop-demo",
    liveDemoUrl: "/projects/website-design/barber-shop-demo",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80",
    accent: "Electric blue"
  },
  {
    slug: "nxt-demo",
    title: "NXT Demo",
    status: "Live demo",
    category: "Website Design",
    categorySlug: "website-design",
    businessType: "Sports-tech product demo",
    year: "2026",
    role: "Product direction, visual system, Next.js build",
    summary:
      "A clean product-focused concept for modern football mini shinpads with a white, black, and subtle cosmic sports-tech feel.",
    description:
      "NXT is a second MASNRY website demo: a fast product landing experience for sleek football mini shinpads. It explores how a simple accessory can feel premium through motion, restraint, sharp hierarchy, and product-first storytelling.",
    problem:
      "Small athletic products often get sold through generic ecommerce pages that flatten the product and make the brand feel forgettable.",
    solution:
      "A focused demo with a cinematic product hero, benefit-led sections, tactile product cards, mobile-first buying cues, and a restrained galaxy atmosphere.",
    features: [
      "Product-led landing page",
      "Sports-tech visual language",
      "Mobile-first product cards",
      "Feature and fit highlights",
      "Subtle cosmic motion system",
      "Vercel-ready demo route"
    ],
    tags: ["NXT", "Sports-tech", "Product", "Website demo"],
    href: "/projects/website-design/nxt",
    liveDemoUrl: "/projects/website-design/nxt",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=80",
    accent: "Cosmic white"
  },
  {
    slug: "masnry-website-design",
    title: "MASNRY website design",
    status: "Personal build",
    category: "Website Design",
    categorySlug: "website-design",
    businessType: "Brand and interface system",
    year: "2026",
    role: "Creative direction, UI system",
    summary:
      "The living design language behind this site: dark surfaces, blue light, restrained motion, and reusable components.",
    description:
      "A personal internet identity needs room to grow. This system keeps MASNRY flexible enough for portfolio pieces, service pages, experiments, and future client work without turning into a generic agency shell.",
    problem:
      "A portfolio can get messy fast when every project wants its own visual language.",
    solution:
      "Reusable UI primitives, shared content shapes, and a restrained visual direction that can hold web work, print experiments, and notes in one place.",
    features: [
      "Reusable component library",
      "Dark and light theme support",
      "Data-driven project archive",
      "Responsive layout patterns",
      "Vercel-ready app structure"
    ],
    tags: ["Identity", "Design system", "Interface", "Portfolio"],
    href: "/projects/masnry-website-design",
    liveDemoUrl: "/",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
    accent: "Blue glass"
  },
  {
    slug: "3d-printing",
    title: "3D Printing Service",
    status: "Experiment",
    category: "3D Printing",
    categorySlug: "3d-printing",
    businessType: "3D printing archive",
    year: "2026",
    role: "Product experiments, documentation",
    summary:
      "A future archive for prints, prototypes, functional parts, material tests, and small physical objects.",
    description:
      "Print Lab Notes is a placeholder for the physical side of MASNRY: experiments with 3D printing, object studies, small tools, and practical builds that deserve a clean digital home.",
    problem:
      "Physical experiments often disappear into camera rolls and folders before they become useful references.",
    solution:
      "A calm archive format for documenting objects, materials, failures, iterations, and finished pieces.",
    features: [
      "Prototype gallery structure",
      "Material and printer notes",
      "Before and after iteration logs",
      "Quote-ready project format",
      "Future product showcase path"
    ],
    tags: ["3D printing", "Objects", "Archive", "Prototype"],
    href: "/projects/3d-printing",
    liveDemoUrl: "/projects/3d-printing",
    image:
      "https://images.unsplash.com/photo-1631744591853-998c4308bbb0?auto=format&fit=crop&w=1600&q=80",
    accent: "Graphite"
  },
  {
    slug: "interface-sketches",
    title: "Interface Sketches",
    status: "Concept",
    category: "Python & HTML",
    categorySlug: "python-html",
    businessType: "UI and motion studies",
    year: "2026",
    role: "Interaction design, frontend experiments",
    summary:
      "Small UI studies for menus, cards, filters, motion, transitions, and atmospheric web surfaces.",
    description:
      "Interface Sketches is where unfinished ideas can still have a home. It is a place for small interactions, layout studies, and visual systems that may later become full projects.",
    problem:
      "Not every good idea is big enough to become a full website, but small experiments compound into better taste.",
    solution:
      "A project slot for short studies, interface fragments, and technical sketches that show the process behind the finished work.",
    features: [
      "Motion experiments",
      "Hover and gallery studies",
      "Responsive interface fragments",
      "Component sketches",
      "Atmospheric layout tests"
    ],
    tags: ["UI", "Motion", "Experiments", "Code"],
    href: "/projects/python-html",
    liveDemoUrl: "/projects/python-html",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    accent: "Soft neon"
  }
];

export const projectCategories = [
  "All",
  "Website Design",
  "3D Printing",
  "Python & HTML"
] as const;

export const projectCategoryPages = [
  {
    title: "Website Design",
    slug: "website-design",
    href: "/projects/website-design",
    summary: "Demo websites, product concepts, and polished web builds."
  },
  {
    title: "3D Printing",
    slug: "3d-printing",
    href: "/projects/3d-printing",
    summary: "Physical objects, print studies, useful parts, and product experiments."
  },
  {
    title: "Python & HTML",
    slug: "python-html",
    href: "/projects/python-html",
    summary: "Small code projects, interface sketches, tools, and experiments."
  }
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
