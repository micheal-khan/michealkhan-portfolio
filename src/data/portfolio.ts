// All content below comes from Micheal's résumé (updated Oct 2026). Edit here to update the site.

export const siteUrl = "https://michealkhan.com";

// Bump when content changes. Used for sitemap <lastmod> and JSON-LD dateModified (Google ignores a lastmod that changes on every build).
export const lastUpdated = "2026-10-21";

export const profile = {
  name: "Micheal Khan",
  handle: "michealkhan",
  firstName: "Micheal",
  title: "Full Stack Software and AI Automation Developer",
  roles: ["Full Stack Software Developer", "AI Automation Developer", "Software & AI Automation Developer"],
  tagline: "I build clean, scalable software and AI-powered automation that solves real-world problems fast.",
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
  resumeFileName: "Micheal-Resume.pdf", // name the visitor's browser saves the download as
  headshot: "/images/micheal-khan-headshot.jpg",
  about:
    "Versatile Full Stack Software and AI Automation Developer with hands-on experience across CRMs, LMSs, e-commerce platforms, and full-stack web apps. Skilled in Flutter, Next.js, HTML5, JavaScript, PHP, and SQL. Known for clean, scalable code, production-ready AI-integrated tools shipped in days, and solving real-world problems fast.",
  highlights: [
    { title: "5+ years building for web & mobile", sub: "freelance since 2019" },
    { title: "Full stack + AI automation", sub: "Flutter • Next.js • PHP • SQL" },
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
  icon: "frontend" | "backend" | "ai" | "mobile" | "database" | "tooling" | "shopify" | "soft";
  items: string[];
};

export const skillsIntro =
  "A full-stack toolkit for building modern, scalable web, mobile and desktop applications — plus AI-powered automation that cuts manual work.";

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    color: "text-accentv",
    icon: "frontend",
    items: ["HTML5", "CSS3", "JavaScript", "AJAX", "React", "Next.js", "Tailwind", "Material UI", "Bootstrap 5", "HTMX", "Cupertino UI"],
  },
  {
    name: "Backend",
    color: "text-accenty",
    icon: "backend",
    items: ["PHP 8", "JavaScript", "AJAX", "Node.js", "Express", "REST APIs", "Auth systems", "Database integration"],
  },
  {
    name: "AI & Automation",
    color: "text-accentc",
    icon: "ai",
    items: ["AI-integrated software", "AI-powered internal tools", "Business process automation", "Automation scripting", "Web scraping", "n8n"],
  },
  {
    name: "Mobile & Cross-Platform",
    color: "text-accentp",
    icon: "mobile",
    items: ["Flutter", "Dart", "JavaScript", "Electron.js", "Tauri 2.0"],
  },
  {
    name: "Databases",
    color: "text-accentb",
    icon: "database",
    items: ["MySQL", "SQL", "PostgreSQL", "MongoDB", "Supabase", "Convex", "phpMyAdmin"],
  },
  {
    name: "Tooling",
    color: "text-accentp",
    icon: "tooling",
    items: ["Git/GitHub", "Netlify", "Vercel", "Firebase", "Linux CLI", "Postman", "Figma", "VS Code", "TypeScript", "Prisma"],
  },
  {
    name: "CMS & Shopify",
    color: "text-[#95bf47]",
    icon: "shopify",
    items: ["Shopify", "Shopify Dev Dashboard", "WordPress", "Wix", "Framer", "FlutterFlow"],
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
    role: "Software & AI Automation Developer",
    company: "Pixel Lab Media (Ad Peak Media)",
    companyUrl: "https://pixellab.media/",
    period: "Apr 2026 – Aug 2026",
    location: "Jaipur",
    summary:
      "Built and deployed production-ready, AI-integrated internal software within 5 days to improve operational efficiency and automate business processes.",
    achievements: [
      "Shipped production-ready, AI-integrated internal software solutions in 5 days",
      "Managed operations across 30+ Shopify stores, keeping daily workflows smooth",
      "Supervised an intern across software development, AI automation and operations",
      "Streamlined processes and cut manual work with custom software and AI-powered tools",
    ],
    stat: { value: "30+", label: "Shopify Stores Managed" },
  },
  {
    role: "Software Developer",
    company: "BIMQP",
    companyUrl: "https://bimqp.com/",
    period: "Dec 2024 – Mar 2026",
    location: "Jaipur",
    summary:
      "Developed internal tools and client-facing web applications using Next.js, Flutter and SQL across the full development cycle.",
    achievements: [
      "Refactored legacy codebases for improved maintainability",
      "Built new features from the ground up with modern frameworks",
      "Optimized load times and deployment workflows",
      "Fixed critical production bugs and kept systems stable and scalable",
      "Worked with designers and project leads to align UI and backend logic with business goals",
    ],
  },
  {
    role: "Software Developer",
    company: "Freelance",
    period: "Jan 2019 – Present",
    location: "Remote",
    summary:
      "Full-stack apps across e-commerce, CRMs, LMSs and AI tools; handled frontend, backend and deployment using Flutter, Next.js, PHP, SQL.",
    achievements: [
      "Built 15+ production applications across various industries",
      "Managed the complete project lifecycle from planning to deployment",
      "Specialized in rapid prototyping and MVP development",
      "Maintained long-term client relationships with quality delivery",
    ],
    stat: { value: "15+", label: "Production Applications" },
  },
  {
    role: "Application Developer / Consultant",
    company: "RENIT Private Limited",
    companyUrl: "https://simplyrenit.com/",
    period: "Mar 2023 – Sep 2023",
    location: "Remote",
    summary:
      "Worked on full-stack web apps as an application developer and consultant, delivering client-ready solutions in a fast-paced, deadline-driven environment.",
    achievements: [
      "Modernized legacy code and improved application performance",
      "Handled both backend logic and frontend interfaces",
      "Delivered client-ready solutions on tight deadlines",
    ],
  },
  {
    role: "Web Development Consultant / Developer",
    company: "Glowworm Renewable Energy Pvt. Ltd.",
    period: "Mar 2021 – Dec 2022",
    location: "Remote",
    summary:
      "Built a full Learning Management System from scratch for internal training with HTML5, Bootstrap and JavaScript.",
    achievements: [
      "Built a complete Learning Management System from scratch",
      "Developed responsive dashboards and course modules",
      "Integrated key security features",
      "Delivered a smooth cross-device experience aligned with business goals",
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

// URL slug for each project's own page, e.g. "Zee's Taskbar Cat" -> "zees-taskbar-cat" (/projects/zees-taskbar-cat).
export const projectSlug = (p: Pick<Project, "name">) =>
  p.name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const projectsIntro =
  "A collection of applications and websites built with modern technologies, focusing on performance, user experience, and scalability.";

export const projects: Project[] = [
  {
    name: "Zestimonial",
    description:
      "Open-source testimonial workspace to collect, review, approve, publish and export client praise, with Claude AI highlighting the best line. Embed a Wall of Love or rating badge widget live on your site.",
    tags: ["Next.js 16", "Supabase", "Claude AI", "Open Source", "Testimonials"],
    categories: ["web-apps", "ai-automation"],
    url: "https://zestimonial.vercel.app/",
    image: "/projects/zestimonial.jpg",
  },
  {
    name: "Snapbyt",
    description:
      "Online store for home essentials — kitchen, garden, cleaning, storage and lighting — with daily deals, a search-first mobile layout, Cash on Delivery and UPI, card and EMI payments, and free shipping over ₹499.",
    tags: ["Shopify", "E-commerce", "Home Essentials", "Mobile-first"],
    categories: ["shopify", "ecommerce-booking", "websites"],
    url: "https://snapbyt.com/",
    image: "/projects/snapbyt.jpg",
  },
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
    name: "BIMQP",
    description: "Company website and web platform built and maintained while working as a Software Developer at BIMQP.",
    tags: ["Web Platform", "Next.js", "Client Work", "Business"],
    categories: ["web-apps", "websites"],
    url: "https://bimqp.com/",
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

export const educationIntro = "Formal education, professional certifications and languages.";

export const education = [
  {
    school: "NIMS University, Jaipur",
    url: "https://admission.nimsuniversity.org/",
    credential: "Bachelor of Computer Applications",
    period: "Jul 2021 – May 2024",
    grade: "~8.00 CGPA",
    detail:
      "3-year undergraduate program focused on software development, web technologies and computer networks, with hands-on academic and freelance projects.",
  },
  {
    school: "National Institute of Open Schooling (NIOS)",
    url: "https://www.nios.ac.in/",
    credential: "Senior Secondary (Class 12) — Computer Science, English",
    period: "Mar 2020 – Jul 2021",
    grade: "8.38 CGPA · 478/600",
    detail: "Balanced independent study with freelance development work and real-world projects.",
  },
  {
    school: "Jankidevi Public School, Jaipur",
    url: "https://jankidevipublicschooljaipur.in/",
    credential: "High School (Class 10, IGCSE)",
    period: "Mar 2018 – Jul 2019",
    grade: "",
    detail: "IGCSE curriculum including English, Mathematics, Science and Information Technology.",
  },
];

export const certifications: { name: string; issuer: string; date: string; url?: string }[] = [
  { name: "Advanced Diploma in Ethical Hacking", issuer: "Samyak Computer Classes", date: "Apr 2025", url: "https://www.samyakinfotech.com/" },
  { name: "Data Analysis with Python", issuer: "freeCodeCamp", date: "Jun 2021", url: "https://www.freecodecamp.org/certification/igniteking/data-analysis-with-python-v7" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "Jun 2019", url: "https://www.freecodecamp.org/certification/igniteking/responsive-web-design" },
  { name: "Google Analytics for Beginners", issuer: "Google", date: "Jun 2023" },
  { name: "Basics of Computers & Code in iOS", issuer: "Alison", date: "Jun 2023" },
  { name: "Diploma in Computer Networking", issuer: "Alison", date: "Feb 2022", url: "https://alison.com/certification/check/20d0749008" },
  { name: "Google Digital Unlocked – Fundamentals of Digital Marketing", issuer: "Google", date: "Feb 2021" },
  { name: "Computer Networking – Digital Network Security", issuer: "Alison", date: "Sep 2020", url: "https://alison.com/certification/check/ba58312d35" },
  { name: "Web Page Design Using HTML5 and CSS3", issuer: "Alison", date: "Oct 2020", url: "https://alison.com/certification/check/38966f8430" },
];

export const languages = [
  { name: "English", level: "Professional", code: "en" },
  { name: "Hindi", level: "Native", code: "hi" },
  { name: "Urdu", level: "Fluent", code: "ur" },
  { name: "French", level: "Basic", code: "fr" },
];
