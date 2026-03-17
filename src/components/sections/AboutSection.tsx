import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Gamepad2, Video, Crown } from 'lucide-react';

const interests = [
  { icon: Code2, label: 'Coding' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Video, label: 'Video Editing' },
  { icon: Crown, label: 'Chess' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="section-title"
            >
              Passionate Developer <br className="hidden sm:block" />
              <span className="gradient-text">& Problem Solver</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-muted-foreground mb-8"
            >
              <p>
                I'm an aspiring software developer with a strong passion for web development 
                and building intuitive digital experiences. Currently focused on mastering 
                modern technologies like React, JavaScript, and MongoDB.
              </p>
              <p>
                My approach combines a solid foundation in programming fundamentals with 
                a constant drive to learn and adapt. I believe in writing clean, maintainable 
                code and creating solutions that make a real impact.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-sm font-medium text-foreground mb-4 tracking-wide uppercase">
                Beyond Coding
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="interest-chip hoverable"
                  >
                    <interest.icon size={16} className="text-primary" />
                    <span>{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
