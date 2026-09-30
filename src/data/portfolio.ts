// All content below is taken from michealkhan.com. Edit here to update the site.

export const siteUrl = "https://michealkhan.com";

export const profile = {
  name: "Micheal Khan",
  handle: "michealkhan",
  firstName: "Micheal",
  title: "Software Developer",
  roles: ["Software Developer", "AI Automation Developer", "Full-Stack Developer"],
  tagline: "I build clean, scalable apps fast—Flutter, Next.js, PHP, SQL.",
  location: "Jaipur, India",
  locationLong: "Based in Jaipur, Rajasthan",
  availability: ["Open to collabs", "Remote-friendly"],
  email: "khanzaidan786@gmail.com",
  phone: "+91-7727084375",
  phoneHref: "tel:+917727084375",
  github: "https://github.com/micheal-khan",
  githubLabel: "@igniteking",
  linkedin: "https://www.linkedin.com/in/micheal-khan/",
  resume: "/micheal-khan-resume.pdf",
  headshot: "/images/micheal-khan-headshot.jpg",
  about:
    "Versatile Software Developer with hands-on experience across CRMs, LMSs, e-commerce, and full-stack web apps. Known for clean, scalable code and rapid delivery. Currently building tools at BIMQP while continuing freelance dev work.",
  highlights: [
    { title: "5+ years building for web & mobile", sub: "freelance since 2019" },
    { title: "Stack: Flutter • Next.js • PHP • SQL", sub: "Full-stack expertise" },
    { title: "Based in Jaipur, Rajasthan", sub: "Remote & on-site ready" },
  ],
  cta: {
    title: "Let's Work Together",
    body: "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.",
    getInTouch:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out through any of the following channels.",
  },
};

export type SkillGroup = {
  name: string;
  color: string; // tailwind text color class
  icon: "frontend" | "backend" | "mobile" | "database" | "tooling" | "shopify" | "soft";
  items: string[];
};

export const skillsIntro =
  "A comprehensive toolkit for building modern, scalable applications across web, mobile, and desktop platforms.";

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    color: "text-accentv",
    icon: "frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind", "Material UI", "Bootstrap", "HTMX", "Cupertino UI"],
  },
  {
    name: "Backend",
    color: "text-accenty",
    icon: "backend",
    items: ["PHP 8", "Node.js", "Express", "REST APIs", "Auth", "Database integration"],
  },
  {
    name: "Mobile & Cross-Platform",
    color: "text-accentc",
    icon: "mobile",
    items: ["Flutter", "Dart", "Electron.js", "Tauri 2.0"],
  },
  {
    name: "Databases",
    color: "text-accentb",
    icon: "database",
    items: ["MySQL", "SQL", "MongoDB", "PostgreSQL", "Supabase", "Convex", "phpMyAdmin"],
  },
  {
    name: "Tooling",
    color: "text-accentp",
    icon: "tooling",
    items: ["Git/GitHub", "Netlify", "Vercel", "Firebase", "Linux CLI", "Postman", "Figma", "Web scraping", "Automation scripting", "TypeScript", "Prisma"],
  },
  {
    name: "Shopify",
    color: "text-[#95bf47]",
    icon: "shopify",
    items: ["Shopify", "Shopify Dev Dashboard", "Store Collaborations"],
  },
  {
    name: "Soft Skills",
    color: "text-accentg",
    icon: "soft",
    items: ["Communication", "Design Thinking", "Problem-Solving", "Project Management"],
  },
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stat?: { value: string; label: string };
};

export const experienceIntro =
  "A track record of delivering high-quality software solutions across diverse industries and technology stacks.";

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "BIMQP",
    companyUrl: "https://bimqp.com/",
    period: "Dec 2024 – Present",
    location: "Jaipur",
    summary: "Internal tools & client web apps using Next.js, Flutter, SQL.",
    achievements: [
      "Refactored legacy codebases for improved maintainability",
      "Built features from scratch with modern frameworks",
      "Optimized load times & deployments",
      "Handled production bugs and system stability",
      "Aligned UI with business goals and user requirements",
    ],
  },
  {
    role: "Software Developer",
    company: "Freelance",
    period: "Jan 2019 – Present",
    location: "Remote",
    summary:
      "Full-stack apps across e-commerce, AI tools; handled frontend, backend, deployment using Flutter, Next.js, PHP, SQL.",
    achievements: [
      "Built 15+ production applications across various industries",
      "Managed complete project lifecycle from planning to deployment",
      "Specialized in rapid prototyping and MVP development",
      "Maintained long-term client relationships with quality delivery",
    ],
    stat: { value: "15+", label: "Production Applications" },
  },
  {
    role: "App Dev / Consultant",
    company: "RENIT Pvt. Ltd.",
    companyUrl: "https://renit.co.in/",
    period: "Mar 2023 – Sep 2023",
    location: "Remote",
    summary: "Modernized legacy code, improved perf, shipped client-ready solutions across backend + frontend.",
    achievements: [
      "Migrated legacy PHP systems to modern frameworks",
      "Improved application performance by 40%",
      "Implemented new security protocols and best practices",
      "Delivered solutions ahead of schedule consistently",
    ],
    stat: { value: "40%", label: "Performance Improvement" },
  },
  {
    role: "Web Dev Consultant",
    company: "Glowworm Renewable Energy",
    period: "Mar 2021 – Dec 2022",
    location: "Remote",
    summary: "Built an LMS from scratch; responsive dashboards, course modules, security features.",
    achievements: [
      "Architected complete Learning Management System",
      "Implemented secure user authentication and role management",
      "Built responsive admin dashboards with analytics",
      "Delivered comprehensive course management features",
    ],
  },
];

// Filter categories for the Projects section. Each project can be in several.
// Categories were assigned from each project's own tags/description — edit freely.
export const projectCategories = [
  { id: "shopify", label: "Shopify Stores" },
  { id: "web-apps", label: "Web Apps" },
  { id: "websites", label: "Websites" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "ecommerce-booking", label: "E-commerce & Booking" },
  { id: "realtime", label: "Real-time & Dashboards" },
  { id: "ui-animation", label: "UI & Animation" },
  { id: "desktop", label: "Desktop" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  url: string;
  image?: string;
};

export const projectsIntro =
  "A collection of applications and websites built with modern technologies, focusing on performance, user experience, and scalability.";

export const projects: Project[] = [
  {
    name: "Meevyy",
    description:
      "Shopify store for jewellery and accessories — bangles, jhumkas, mangalsutras and jewellery organizers — with new-arrival and best-seller collections, wishlist and cart.",
    tags: ["Shopify", "E-commerce", "Jewellery", "Custom Theme"],
    categories: ["shopify", "ecommerce-booking", "websites"],
    url: "https://meevyy.com/",
    image: "/projects/meevyy.jpg",
  },
  {
    name: "Vishvay",
    description:
      "Shopify store for spiritual jewellery — bracelets, anklets, karungali, pendants and malas — with best-seller, new-arrival and collection sections, FAQs and customer reviews.",
    tags: ["Shopify", "E-commerce", "Spiritual Jewellery", "Dawn Theme"],
    categories: ["shopify", "ecommerce-booking", "websites"],
    url: "https://vishvay.com/",
    image: "/projects/vishvay.jpg",
  },
  {
    name: "Zee's Taskbar Cat",
    description:
      "A fun desktop app built with React and Electron where a cute pixel cat runs across your taskbar whenever you move your mouse — bringing chaos and charm to your workspace.",
    tags: ["React", "Electron", "Desktop App", "Animation", "Fun Project"],
    categories: ["desktop", "ui-animation"],
    url: "https://cat.michealkhan.com/",
    image: "/projects/zees-cat.png",
  },
  {
    name: "Zenvas",
    description: "Canva-style design platform with drag-and-drop interface and real-time collaboration.",
    tags: ["Next.js", "React", "Canvas API", "Real-time"],
    categories: ["web-apps", "realtime"],
    url: "https://zenvas.vercel.app/",
    image: "/projects/zenvas.png",
  },
  {
    name: "AI Detection Tower",
    description: "AI-powered real-time detection system with comprehensive dashboard and analytics.",
    tags: ["AI/ML", "Dashboard", "Real-time", "Analytics"],
    categories: ["web-apps", "ai-automation", "realtime"],
    url: "https://ai-detection-system.vercel.app/",
    image: "/projects/ai-detection.png",
  },
  {
    name: "NIMS University Live Scoring",
    description: "Live scoring system for university sports and events with real-time updates.",
    tags: ["Live Updates", "Sports", "Dashboard", "Real-time"],
    categories: ["web-apps", "realtime"],
    url: "https://spardha.nimsuniversity.org/",
    image: "/projects/spardha.png",
  },
  {
    name: "Apple iPhone 15 Pro Clone",
    description: "Pixel-perfect recreation of Apple's iPhone 15 Pro website with smooth animations.",
    tags: ["Animation", "UI/UX", "Responsive", "Performance"],
    categories: ["websites", "ui-animation"],
    url: "https://apple-website-micheal.vercel.app/",
    image: "/projects/apple-website.png",
  },
  {
    name: "Indus Star",
    description: "Official website for music production house with portfolio and booking system.",
    tags: ["Music", "Portfolio", "Booking", "Creative"],
    categories: ["websites", "ecommerce-booking"],
    url: "https://indusstar.co.in/",
    image: "/projects/indis-star.png",
  },
  {
    name: "Pricewise",
    description: "Web scraping solution for price comparison across multiple e-commerce platforms.",
    tags: ["Web Scraping", "E-commerce", "Automation", "APIs"],
    categories: ["web-apps", "ai-automation", "ecommerce-booking"],
    url: "https://pricewise-by-micheal.vercel.app/",
    image: "/projects/price-wise.png",
  },
  {
    name: "VIGOR E-bikes",
    description: "Product information and showcase website for electric bike manufacturer.",
    tags: ["Product Showcase", "E-commerce", "Green Tech"],
    categories: ["websites", "ecommerce-booking"],
    url: "https://vigorebike.in/",
    image: "/projects/vigore.png",
  },
  {
    name: "Revolt Track",
    description: "Business and location listing platform with search and filtering capabilities.",
    tags: ["Business Listings", "Search", "Location", "Directory"],
    categories: ["web-apps"],
    url: "https://www.revolttrack.com/",
    image: "/projects/revolt.png",
  },
  {
    name: "Rajasthan Bhumi Travels",
    description: "Tour package booking platform with payment integration and itinerary management.",
    tags: ["Travel", "Booking", "Payment", "Tourism"],
    categories: ["web-apps", "ecommerce-booking"],
    url: "https://www.rajasthanbhumitours.com/",
    image: "/projects/rajasthanbuhmi.png",
  },
  {
    name: "RENIT Classifieds",
    description: "Local classifieds and ad listing application with user management.",
    tags: ["Classifieds", "User Management", "Local", "Community"],
    categories: ["web-apps"],
    url: "https://renit.co.in/",
  },
];

// Shopify work, counted from the Shopify Dev Dashboard → Stores → Collaborations list
// (4 pages × 20 stores, Nov 5 2025 – Aug 18 2026). Status "Active" = Basic + Frozen plans; 6 are "Expired".
// Client store names are intentionally not published. Update these numbers as you add stores.
export const shopify = {
  intro:
    "Collaborator access to client Shopify stores through the Shopify Dev Dashboard, Nov 2025 – Aug 2026.",
  stats: [
    { value: 80, suffix: "", label: "Shopify stores collaborated on" },
    { value: 74, suffix: "", label: "Active collaborations" },
    { value: 46, suffix: "", label: "Stores on the Shopify Basic plan" },
    { value: 32, suffix: "", label: "New stores added in 2026" },
  ],
};

// Tech stack logos — self-hosted SVGs in /public/tech (fast, no third-party requests).
export const techStack: { name: string; icon: string; url: string }[] = [
  { name: "Shopify", icon: "shopify", url: "https://www.shopify.com/" },
  { name: "Flutter", icon: "flutter", url: "https://flutter.dev/" },
  { name: "Dart", icon: "dart", url: "https://dart.dev/" },
  { name: "React", icon: "react", url: "https://react.dev/" },
  { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
  { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org/" },
  { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "HTML5", icon: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: "css3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Tailwind CSS", icon: "tailwind", url: "https://tailwindcss.com/" },
  { name: "shadcn/ui", icon: "shadcn", url: "https://ui.shadcn.com/" },
  { name: "Material UI", icon: "materialui", url: "https://mui.com/" },
  { name: "Bootstrap", icon: "bootstrap", url: "https://getbootstrap.com/" },
  { name: "HTMX", icon: "htmx", url: "https://htmx.org/" },
  { name: "PHP", icon: "php", url: "https://www.php.net/" },
  { name: "Node.js", icon: "nodejs", url: "https://nodejs.org/" },
  { name: "Express", icon: "express", url: "https://expressjs.com/" },
  { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
  { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
  { name: "Supabase", icon: "supabase", url: "https://supabase.com/" },
  { name: "Firebase", icon: "firebase", url: "https://firebase.google.com/" },
  { name: "Appwrite", icon: "appwrite", url: "https://appwrite.io/" },
  { name: "Prisma", icon: "prisma", url: "https://www.prisma.io/" },
  { name: "Electron", icon: "electron", url: "https://www.electronjs.org/" },
  { name: "Tauri", icon: "tauri", url: "https://tauri.app/" },
  { name: "Figma", icon: "figma", url: "https://www.figma.com/" },
  { name: "WordPress", icon: "wordpress", url: "https://wordpress.org/" },
  { name: "Blender", icon: "blender", url: "https://www.blender.org/" },
  { name: "Git", icon: "git", url: "https://git-scm.com/" },
  { name: "GitHub", icon: "github", url: "https://github.com/" },
  { name: "Vercel", icon: "vercel", url: "https://vercel.com/" },
  { name: "Netlify", icon: "netlify", url: "https://www.netlify.com/" },
  { name: "Postman", icon: "postman", url: "https://www.postman.com/" },
  { name: "n8n", icon: "n8n", url: "https://n8n.io/" },
  { name: "Linux", icon: "linux", url: "https://www.kernel.org/" },
];
