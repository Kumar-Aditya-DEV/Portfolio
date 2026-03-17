import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: moveX * 30,
          y: moveY * 30,
          duration: 1,
          ease: 'power2.out',
        });
      }
      
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: moveX * -20,
          y: moveY * -20,
          duration: 1.2,
          ease: 'power2.out',
        });
      }
      
      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          x: moveX * 15,
          y: moveY * -15,
          duration: 1.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full animate-blob"
        style={{
          background: 'radial-gradient(circle, hsl(173 80% 50% / 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div
        ref={orb2Ref}
        className="absolute top-3/4 right-0 w-[500px] h-[500px] rounded-full animate-blob"
        style={{
          background: 'radial-gradient(circle, hsl(199 89% 48% / 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '-5s',
        }}
      />
      
      <div
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(173 80% 50% / 0.08) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
