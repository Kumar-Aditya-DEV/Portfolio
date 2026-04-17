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
              className="space-y-6 text-muted-foreground mb-12 text-lg leading-relaxed"
            >
<p>
  Hello! I'm <span className="text-foreground font-medium">Aditya Kumar</span>, a Software Developer based in India. 
  I started my journey with curiosity about how things work behind the screen, which turned into a passion for building efficient software.
</p>

<p>
  I specialize in creating responsive web apps using the <span className="text-primary font-medium">MERN stack</span> (MongoDB, Express.js, React, Node.js). 
  I also regularly practice <span className="text-primary font-medium">Data Structures and Algorithms</span> to improve my problem-solving skills.
</p>

<p>
  I enjoy combining <span className="text-foreground font-medium">creativity and logic</span>—whether designing clean UI or optimizing backend systems. 
  I also like sharing knowledge and growing with the developer community.
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
