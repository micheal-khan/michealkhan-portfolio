import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import Skills from "../components/Skills";
import ExperienceSection from "../components/Experience";
import Shopify from "../components/Shopify";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <ExperienceSection />
        <Shopify />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
