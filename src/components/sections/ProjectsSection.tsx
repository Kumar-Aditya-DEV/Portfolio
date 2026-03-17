import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my skills and projects with smooth animations and a clean design.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://id-preview--f9e7492e-5313-4d0d-9d37-8d2b37267a29.lovable.app/',
    githubUrl: 'https://github.com/Kumar-Aditya-DEV',
    image: 'https://image.thum.io/get/width/600/crop/400/https://id-preview--f9e7492e-5313-4d0d-9d37-8d2b37267a29.lovable.app/',
  },
  {
    title: 'Blinkit Clone',
    description: 'A full-stack clone of the Blinkit grocery delivery platform with product browsing, cart management, and a seamless checkout experience.',
    technologies: ['React', 'Node.js', 'CSS'],
    liveUrl: 'https://blinkit-web-clone-project.netlify.app/',
    githubUrl: 'https://github.com/Kumar-Aditya-DEV/Blinkit_Clone',
    image: 'https://image.thum.io/get/width/600/crop/400/https://blinkit-web-clone-project.netlify.app/',
  },
  {
    title: 'Rolex Clone',
    description: 'A premium, pixel-perfect frontend clone of the Rolex official website featuring elegant UI design and smooth animations.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://rolex-clone-project.netlify.app/',
    githubUrl: 'https://github.com/Kumar-Aditya-DEV/Rolex_Clone',
    image: 'https://image.thum.io/get/width/600/crop/400/https://rolex-clone-project.netlify.app/',
  },
  {
    title: 'StockAnalytix',
    description: 'A stock market analytics dashboard providing real-time data visualization, portfolio tracking, and market trend insights.',
    technologies: ['React', 'API Integration', 'Netlify'],
    liveUrl: 'https://stockanalytix.netlify.app',
    githubUrl: 'https://github.com/Kumar-Aditya-DEV/stockanalytix.netlify.app',
    image: 'https://image.thum.io/get/width/600/crop/400/https://stockanalytix.netlify.app/',
  },
  {
    title: 'Odoo Guj-Vid',
    description: 'A collaborative Odoo-based application built for regional video content management and distribution workflows.',
    technologies: ['Odoo', 'Python', 'JavaScript'],
    liveUrl: 'https://odoo-guj-vid.vercel.app/',
    githubUrl: 'https://github.com/harshit-kumar-dev/odoo-Guj-Vid',
    image: 'https://image.thum.io/get/width/600/crop/400/https://odoo-guj-vid.vercel.app/',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            My Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            A selection of projects that showcase my skills and passion for development
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  />
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors hoverable"
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors hoverable"
                    whileHover={{ x: 4 }}
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
