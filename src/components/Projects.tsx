import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Zenvas',
    imageUrl: 'projects/zenvas.png',
    description: 'Canva-style design platform with drag-and-drop interface and real-time collaboration.',
    link: 'https://zenvas.vercel.app/',
    tags: ['Next.js', 'React', 'Canvas API', 'Real-time'],
    category: 'web',
  },
  {
    title: 'AI Detection Tower',
    imageUrl: 'projects/ai-detection.png',
    description: 'AI-powered real-time detection system with comprehensive dashboard and analytics.',
    link: 'https://ai-detection-system.vercel.app/',
    tags: ['AI/ML', 'Dashboard', 'Real-time', 'Analytics'],
    category: 'ai',
  },
  {
    title: 'NIMS University Live Scoring',
    imageUrl: 'projects/spardha.png',
    description: 'Live scoring system for university sports and events with real-time updates.',
    link: 'https://spardha.nimsuniversity.org/',
    tags: ['Live Updates', 'Sports', 'Dashboard', 'Real-time'],
    category: 'web',
  },
  {
    title: 'Apple iPhone 15 Pro Clone',
    imageUrl: 'projects/apple-website.png',
    description: 'Pixel-perfect recreation of Apple\'s iPhone 15 Pro website with smooth animations.',
    link: 'https://apple-website-micheal.vercel.app/',
    tags: ['Animation', 'UI/UX', 'Responsive', 'Performance'],
    category: 'web',
  },
  {
    title: 'Indus Star',
    imageUrl: 'projects/indis-star.png',
    description: 'Official website for music production house with portfolio and booking system.',
    link: 'https://indusstar.co.in/',
    tags: ['Music', 'Portfolio', 'Booking', 'Creative'],
    category: 'business',
  },
  {
    title: 'Pricewise',
    imageUrl: 'projects/price-wise.png',
    description: 'Web scraping solution for price comparison across multiple e-commerce platforms.',
    link: 'https://pricewise-by-micheal.vercel.app/',
    tags: ['Web Scraping', 'E-commerce', 'Automation', 'APIs'],
    category: 'tools',
  },
  {
    title: 'VIGOR E-bikes',
    imageUrl: 'projects/vigore.png',
    description: 'Product information and showcase website for electric bike manufacturer.',
    link: 'https://vigorebike.in/',
    tags: ['Product Showcase', 'E-commerce', 'Green Tech'],
    category: 'business',
  },
  {
    title: 'Revolt Track',
    imageUrl: 'projects/revolt.png',
    description: 'Business and location listing platform with search and filtering capabilities.',
    link: 'https://www.revolttrack.com/',
    tags: ['Business Listings', 'Search', 'Location', 'Directory'],
    category: 'web',
  },
  {
    title: 'Rajasthan Bhumi Travels',
    imageUrl: 'projects/rajasthanbuhmi.png',
    description: 'Tour package booking platform with payment integration and itinerary management.',
    link: 'https://www.rajasthanbhumitours.com/',
    tags: ['Travel', 'Booking', 'Payment', 'Tourism'],
    category: 'business',
  },
  {
    title: 'RENIT Classifieds',
    imageUrl: 'placeholder.svg',
    description: 'Local classifieds and ad listing application with user management.',
    link: 'https://renit.co.in/',
    tags: ['Classifieds', 'User Management', 'Local', 'Community'],
    category: 'web',
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'ai', label: 'AI/ML' },
  { key: 'business', label: 'Business' },
  { key: 'tools', label: 'Tools' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of applications and websites built with modern technologies, 
            focusing on performance, user experience, and scalability.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Preview */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent z-10" />
                        <img src={project.imageUrl} />
                      <motion.div
                        className="absolute top-4 right-4 z-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {index === 0 && (
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center">
                            <div className="w-8 h-8 bg-primary/50 rounded-full animate-pulse" />
                          </div>
                        )}
                      </motion.div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Project
                        <ExternalLink className="h-3 w-3" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}