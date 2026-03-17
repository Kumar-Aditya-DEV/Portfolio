import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kumar-Aditya-DEV', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-kumar-060ba6376/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AdityaXDev', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/@CodeVerseAditya', label: 'YouTube' },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      <div className="section-container relative z-10 px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium mb-4 tracking-wide text-base sm:text-lg"
            >
              Hello, Welcome to my Portfolio. I'm
            </motion.h2>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 sm:mb-6"
            >
              <span className="gradient-text text-shadow">Aditya Kumar</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-4 sm:mb-6"
            >
              Aspiring Software Developer
            </motion.h3>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mb-8 sm:mb-10"
            >
              Passionate about crafting elegant web applications and solving complex problems 
              with clean, efficient code. Building the future, one line at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl btn-primary-glow font-medium hoverable inline-block text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl btn-ghost-border hoverable text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn hoverable"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500" />
              
              {/* Image container */}
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden hoverable">
                <div className="w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Aditya Kumar"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hoverable"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
