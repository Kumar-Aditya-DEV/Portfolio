import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, ExternalLink, TrendingUp } from 'lucide-react';

const LeetCodeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leetcode" className="py-16 sm:py-24 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            Coding Practice
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            <span className="gradient-text">LeetCode</span> Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Actively practicing Data Structures & Algorithms to sharpen problem-solving skills
          </motion.p>
        </div>

        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card-hover p-8 text-center hoverable">
            {/* LeetCode Icon */}
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold font-display mb-4">
              LeetCode Profile
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Consistent practice of Data Structures and Algorithms. Solving problems 
              to strengthen logical thinking and coding efficiency.
            </p>

            {/* Stats Preview */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <TrendingUp size={16} />
                  <span className="text-xs font-medium uppercase tracking-wider">Status</span>
                </div>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-border" />
              
              <div className="text-center">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Code size={16} />
                  <span className="text-xs font-medium uppercase tracking-wider">Focus</span>
                </div>
                <p className="text-sm text-muted-foreground">DSA & Algorithms</p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://leetcode.com/u/Aditya-Kumar-DEVP/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl btn-primary-glow font-medium hoverable text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
