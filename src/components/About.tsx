import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Globe, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Code,
    title: '5+ years building for web & mobile',
    subtitle: 'freelance since 2019',
  },
  {
    icon: Globe,
    title: 'Stack: Flutter • Next.js • PHP • SQL',
    subtitle: 'Full-stack expertise',
  },
  {
    icon: MapPin,
    title: 'Based in Jaipur, Rajasthan',
    subtitle: 'Remote & on-site ready',
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

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Versatile Software Developer with hands-on experience across CRMs, LMSs, 
              e-commerce, and full-stack web apps. Known for clean, scalable code and 
              rapid delivery. Currently building tools at BIMQP while continuing 
              freelance dev work.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {stat.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {stat.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}