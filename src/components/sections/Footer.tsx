import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';

const LeetCodeIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.32 4.244a1.09 1.09 0 0 0 0 1.556 1.131 1.131 0 0 0 1.578 0l3.511-3.453 2.31 2.271-7.078 6.988a1.131 1.131 0 0 0 0 1.578 1.09 1.09 0 0 0 1.556 0l7.078-6.988 2.309 2.272-3.511 3.453a1.131 1.131 0 0 0 0 1.578 1.09 1.09 0 0 0 1.556 0l4.32-4.244a1.374 1.374 0 0 0 0-1.945L14.444.414A1.374 1.374 0 0 0 13.483 0zm-6.135 11.013a1.131 1.131 0 0 0-1.578 0l-3.511 3.453-2.31-2.271a1.374 1.374 0 0 0-1.945 0c-.538.538-.538 1.408 0 1.945l4.32 4.244c.538.538 1.408.538 1.945 0l7.078-6.988a1.131 1.131 0 0 0 0-1.578z"
      transform="translate(0, 3)"
    />
  </svg>
);

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kumar-Aditya-DEV', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-kumar-060ba6376/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AdityaXDev', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/@CodeVerseAditya', label: 'YouTube' },
  { icon: LeetCodeIcon, href: 'https://leetcode.com/u/Aditya-Kumar-DEVP/', label: 'LeetCode' },
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
            className="flex items-center hoverable"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/favicon.png" 
              alt="Logo" 
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-5 sm:gap-6 relative z-50">
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
