import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import SkillLogoLoop from "@/components/SkillLogoLoop";
import { SmoothCursor } from "@/components/ui/smoothMouse";

const Index = () => {
  console.log("Portfolio app loaded successfully");

  return (
    <div className="min-h-screen bg-background">
      <SmoothCursor />
      <Navigation />
      <main>
        <Hero />
        <section className="py-20">
          <ScrollVelocity
            texts={["Full-Stack", "Software Developer"]}
            className="custom-scroll-text"
          />
        </section>
        <About />
        <Skills />
        <SkillLogoLoop />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
