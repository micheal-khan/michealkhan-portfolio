import React from "react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiFlutter,
  SiShadcnui,
  SiMaterialdesign,
  SiBootstrap,
  SiHtmx,
  SiNodedotjs,
  SiTauri,
  SiElectron,
  SiFigma,
  SiWordpress,
  SiBlender,
  SiGit,
  SiAdobephotoshop,
  SiN8N,
  SiVercel,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAppwrite,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const SkillLogoLoop = () => {
  const techLogos1 = [
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiShadcnui />, title: "ShadCN UI", href: "https://ui.shadcn.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiTauri />, title: "Tauri", href: "https://tauri.app" },
    {
      node: <SiElectron />,
      title: "Electron",
      href: "https://www.electronjs.org",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiHtml5 />,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <SiCss3 />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    { node: <SiHtmx />, title: "HTMX", href: "https://htmx.org" },
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  ];

  const techLogos2 = [
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    {
      node: <SiWordpress />,
      title: "WordPress",
      href: "https://wordpress.org",
    },
    { node: <SiBlender />, title: "Blender", href: "https://www.blender.org" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    {
      node: <SiAdobephotoshop />,
      title: "Adobe Photoshop",
      href: "https://www.adobe.com/products/photoshop.html",
    },
    { node: <SiN8N />, title: "n8n", href: "https://n8n.io" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    {
      node: <SiFirebase />,
      title: "Firebase",
      href: "https://firebase.google.com",
    },
    { node: <SiAppwrite />, title: "Appwrite", href: "https://appwrite.io" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <LogoLoop
        logos={techLogos1}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
      <LogoLoop
        className="mt-10"
        logos={techLogos2}
        speed={120}
        direction="right"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </motion.div>
  );
};

export default SkillLogoLoop;
