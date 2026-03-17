import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, BookOpen, Presentation, ChevronDown, ChevronUp, Star, Eye } from 'lucide-react';

import certCss from '@/assets/cert-css.jpg';
import certDataScience from '@/assets/cert-data-science.png';
import certPowerBi from '@/assets/cert-power-bi.png';
import certIntroC from '@/assets/cert-intro-c.png';
import certIntroHtml from '@/assets/cert-intro-html.png';
import certJsIntermediate from '@/assets/cert-js-intermediate.png';
import certPythonWebinar from '@/assets/cert-python-webinar.png';
import certWebDev from '@/assets/cert-web-dev.png';
import certAiTools from '@/assets/cert-ai-tools.png';
import certCppBootcamp from '@/assets/cert-cpp-bootcamp.png';
import certEthicalHacking from '@/assets/cert-ethical-hacking.png';
import certGenAi from '@/assets/cert-gen-ai.png';
import certDeloitteTech from '@/assets/cert-deloitte-technology.jpg';
import certDeloitteData from '@/assets/cert-deloitte-data-analytics.jpg';
import certDeloitteCyber from '@/assets/cert-deloitte-cyber.jpg';
import certWalmartSoftwareEng from '@/assets/cert-walmart-software-eng.jpg';

type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  type: 'course' | 'webinar' | 'workshop' | 'simulation';
  image: string;
  featured?: boolean;
};

const certificates: CertificateItem[] = [
  {
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart Global Tech | Forage',
    date: 'February 23, 2026',
    type: 'simulation',
    image: certWalmartSoftwareEng,
    featured: true,
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte | Forage',
    date: 'February 21, 2026',
    type: 'simulation',
    image: certDeloitteTech,
    featured: true,
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte | Forage',
    date: 'February 21, 2026',
    type: 'simulation',
    image: certDeloitteData,
    featured: true,
  },
  {
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte | Forage',
    date: 'February 21, 2026',
    type: 'simulation',
    image: certDeloitteCyber,
    featured: true,
  },
  {
    title: 'C++ Bootcamp',
    issuer: 'LetsUpgrade | NSDC | GDG MAD',
    date: 'February 4, 2026',
    type: 'course',
    image: certCppBootcamp,
  },
  {
    title: 'Master Dashboard Creation using Power BI & Tableau',
    issuer: 'GUVI | HCL',
    date: 'January 31, 2026',
    type: 'workshop',
    image: certPowerBi,
  },
  {
    title: 'Ethical Hacking & Cybersecurity',
    issuer: 'VaultofCodes',
    date: 'January 26, 2026',
    type: 'workshop',
    image: certEthicalHacking,
  },
  {
    title: 'Decode Data Science – Tools, Skills & Mindset',
    issuer: 'GUVI | HCL',
    date: 'January 23, 2026',
    type: 'webinar',
    image: certDataScience,
  },
  {
    title: 'Generative & Agentic AI',
    issuer: 'DV Analytics',
    date: 'January 23, 2026',
    type: 'workshop',
    image: certGenAi,
  },
  {
    title: 'Web Application Development with Python',
    issuer: 'TOPS Technologies',
    date: 'January 21, 2026',
    type: 'webinar',
    image: certPythonWebinar,
  },
  {
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'Be10X',
    date: 'January 10, 2026',
    type: 'workshop',
    image: certAiTools,
  },
  {
    title: 'Introduction to C',
    issuer: 'Sololearn',
    date: 'January 9, 2026',
    type: 'course',
    image: certIntroC,
  },
  {
    title: 'Web Development',
    issuer: 'Sololearn',
    date: 'January 7, 2026',
    type: 'course',
    image: certWebDev,
  },
  {
    title: 'Introduction to CSS',
    issuer: 'Sololearn',
    date: 'January 6, 2026',
    type: 'course',
    image: certCss,
  },
  {
    title: 'Introduction to HTML',
    issuer: 'Sololearn',
    date: 'January 6, 2026',
    type: 'course',
    image: certIntroHtml,
  },
  {
    title: 'JavaScript Intermediate',
    issuer: 'Sololearn',
    date: 'January 4, 2026',
    type: 'course',
    image: certJsIntermediate,
  },
];

const typeConfig = {
  course: { icon: BookOpen, label: 'Course' },
  webinar: { icon: Presentation, label: 'Webinar' },
  workshop: { icon: Award, label: 'Workshop' },
  simulation: { icon: Star, label: 'Job Simulation' },
};

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section id="certificates" className="py-16 sm:py-24 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            Achievements
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            <span className="gradient-text">Certificates</span> & Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Continuous learning through verified certifications, webinars, and workshops
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedCertificates.map((cert, index) => {
            const TypeIcon = typeConfig[cert.type].icon;
            const typeLabel = typeConfig[cert.type].label;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className={`certificate-card group hoverable cursor-pointer relative ${cert.featured ? 'border-primary/30' : ''}`}
                onClick={() => setSelectedImage(cert.image)}
              >
                {/* High Value Badge */}
                {cert.featured && (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/15 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wide border border-primary/30">
                    <Star size={10} className="fill-primary" />
                    High Value
                  </span>
                )}

                {/* Certificate Image */}
                <div className={`rounded-lg overflow-hidden mb-4 border ${cert.featured ? 'border-primary/20' : 'border-border/50'}`}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <TypeIcon size={12} />
                    {typeLabel}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors mb-2">
                  {cert.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-muted-foreground gap-1">
                  <span className="font-medium text-xs sm:text-sm">{cert.issuer}</span>
                  <span className="text-xs">{cert.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More Button */}
        {certificates.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-ghost-border hoverable"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showAll ? 'Show Less' : `See More (${certificates.length - 6} more)`}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
