import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kumar-Aditya-DEV', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-kumar-060ba6376/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AdityaXDev', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/@CodeVerseAditya', label: 'YouTube' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative z-10">
      <div className="section-container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-2xl font-bold font-display gradient-text hoverable"
            whileHover={{ scale: 1.05 }}
          >
            AK
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4 relative z-50">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn hoverable pointer-events-auto"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm sm:text-base text-center px-4">
            © {currentYear} Aditya Kumar. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg glow hoverable z-40"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
