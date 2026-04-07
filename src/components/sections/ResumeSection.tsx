import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FileText, Eye, Download } from 'lucide-react';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  // You'll replace this with your actual resume PDF path
  const resumeUrl = '/resume.pdf';

  return (
    <section className="py-16 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div
            className="glass-card-hover p-8 text-center relative overflow-hidden hoverable"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold font-display mb-2">
              Resume
            </h3>
            
            <p className="text-muted-foreground text-base mb-6">
              Download or view my professional resume
            </p>

            {/* Buttons - Show on hover (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:flex items-center justify-center gap-3"
            >
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg btn-ghost-border text-sm hoverable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} />
                <span>View</span>
              </motion.a>
              
              <motion.a
                href={resumeUrl}
                download="Aditya_Kumar_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg btn-primary-glow text-sm hoverable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Download</span>
              </motion.a>
            </motion.div>

            {/* Default state text - visible on all devices */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="mt-4 lg:absolute lg:bottom-6 lg:left-0 lg:right-0 lg:mt-0"
            >
              <p className="text-xs text-muted-foreground">
                {window.innerWidth >= 1024 ? 'Hover for options' : ''}
              </p>
              {/* Always show buttons on touch devices */}
              <div className="flex items-center justify-center gap-3 lg:hidden mt-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg btn-ghost-border text-sm hoverable"
                >
                  <Eye size={16} />
                  <span>View</span>
                </a>
                <a
                  href={resumeUrl}
                  download="Aditya_Kumar_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg btn-primary-glow text-sm hoverable"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
