import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import ThreeBackground from '@/components/ThreeBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import LeetCodeSection from '@/components/sections/LeetCodeSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* SEO */}
      <SEO />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background Effects */}
      {theme === 'dark' && (
        <>
          <BackgroundAnimation />
          <ThreeBackground />
        </>
      )}
      
      {/* Navbar */}
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <LeetCodeSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
