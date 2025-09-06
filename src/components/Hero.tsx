import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    },
  },
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/igniteking', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/micheal-khan/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:khanzaidan786@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+917727084375', label: 'Phone' },
];

const scrollToProjects = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <span className="gradient-text">Micheal Khan</span>
                <br />
                <span className="text-foreground">Software Developer</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                I build clean, scalable apps fast—Flutter, Next.js, PHP, SQL.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Jaipur, India
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Open to collabs
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Remote-friendly
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(65, 209, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.a
                href="/micheal-khan-resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl border border-border bg-card/50 text-foreground transition-all duration-300 hover:bg-card"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number] }}
            className="relative"
          >
           
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src="/images/micheal-khan-headshot.jpg"
                  alt="Micheal Khan - Software Developer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
              
              {/* 3D Accent - Ready for your Spline scene */}
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 opacity-80"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 0.8, rotate: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full animate-float" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}