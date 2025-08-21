import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = {
  all: 'All Skills',
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile & Cross-Platform',
  database: 'Databases',
  tools: 'Tooling',
  soft: 'Soft Skills',
};

const skills = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'HTMX', category: 'frontend' },
  { name: 'Cupertino UI', category: 'frontend' },
  
  // Backend
  { name: 'PHP 8', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Auth', category: 'backend' },
  { name: 'Database integration', category: 'backend' },
  
  // Mobile & Cross-Platform
  { name: 'Flutter', category: 'mobile' },
  { name: 'Dart', category: 'mobile' },
  { name: 'Electron.js', category: 'mobile' },
  { name: 'Tauri 2.0', category: 'mobile' },
  
  // Databases
  { name: 'MySQL', category: 'database' },
  { name: 'SQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Supabase', category: 'database' },
  { name: 'Convex', category: 'database' },
  { name: 'phpMyAdmin', category: 'database' },
  
  // Tooling
  { name: 'Git/GitHub', category: 'tools' },
  { name: 'Netlify', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Firebase', category: 'tools' },
  { name: 'Linux CLI', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Web scraping', category: 'tools' },
  { name: 'Automation scripting', category: 'tools' },
  { name: 'TypeScript', category: 'tools' },
  { name: 'Prisma', category: 'tools' },
  
  // Soft Skills
  { name: 'Communication', category: 'soft' },
  { name: 'Design Thinking', category: 'soft' },
  { name: 'Problem-Solving', category: 'soft' },
  { name: 'Project Management', category: 'soft' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<keyof typeof skillCategories>('all');

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications across 
              web, mobile, and desktop platforms.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(skillCategories).map(([key, label]) => (
              <motion.button
                key={key}
                onClick={() => setActiveFilter(key as keyof typeof skillCategories)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card'
                }`}
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${activeFilter}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-card/70 border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}