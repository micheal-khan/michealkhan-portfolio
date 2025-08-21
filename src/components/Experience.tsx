import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'BIMQP',
    role: 'Software Developer',
    period: 'Dec 2024 – Present',
    location: 'Jaipur',
    description: 'Internal tools & client web apps using Next.js, Flutter, SQL.',
    achievements: [
      'Refactored legacy codebases for improved maintainability',
      'Built features from scratch with modern frameworks',
      'Optimized load times & deployments',
      'Handled production bugs and system stability',
      'Aligned UI with business goals and user requirements'
    ],
    link: 'https://bimqp.com/',
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    period: 'Jan 2019 – Present',
    location: 'Remote',
    description: 'Full-stack apps across e-commerce, AI tools; handled frontend, backend, deployment using Flutter, Next.js, PHP, SQL.',
    achievements: [
      'Built 15+ production applications across various industries',
      'Managed complete project lifecycle from planning to deployment',
      'Specialized in rapid prototyping and MVP development',
      'Maintained long-term client relationships with quality delivery'
    ],
  },
  {
    company: 'RENIT Pvt. Ltd.',
    role: 'App Dev / Consultant',
    period: 'Mar 2023 – Sep 2023',
    location: 'Remote',
    description: 'Modernized legacy code, improved perf, shipped client-ready solutions across backend + frontend.',
    achievements: [
      'Migrated legacy PHP systems to modern frameworks',
      'Improved application performance by 40%',
      'Implemented new security protocols and best practices',
      'Delivered solutions ahead of schedule consistently'
    ],
    link: 'https://renit.co.in/',
  },
  {
    company: 'Glowworm Renewable Energy',
    role: 'Web Dev Consultant',
    period: 'Mar 2021 – Dec 2022',
    location: 'Remote',
    description: 'Built an LMS from scratch; responsive dashboards, course modules, security features.',
    achievements: [
      'Architected complete Learning Management System',
      'Implemented secure user authentication and role management',
      'Built responsive admin dashboards with analytics',
      'Delivered comprehensive course management features'
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering high-quality software solutions across 
            diverse industries and technology stacks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border group-hover:bg-primary/50 transition-colors duration-300" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300" />

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="ml-20"
              >
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          {exp.link && (
                            <motion.a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.a>
                          )}
                        </div>
                        <h4 className="text-lg font-medium text-primary">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}