import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    if (isMobile) return;

    const dot = dotRef.current;
    const mid = midRef.current;
    const outer = outerRef.current;
    if (!dot || !mid || !outer) return;

    document.body.classList.add('custom-cursor-active');

    // Set initial positions off-screen
    [dot, mid, outer].forEach(el => {
      gsap.set(el, { xPercent: -50, yPercent: -50 });
    });

    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'none', overwrite: true });
      gsap.to(mid, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power3.out', overwrite: true });
      gsap.to(outer, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power3.out', overwrite: true });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.classList.contains('hoverable') || t.closest('.hoverable')
      ) {
        setIsHovering(true);
      }
    };
    const handleOut = () => setIsHovering(false);

    const handleClick = () => {
      gsap.to(outer, {
        scale: 0.6, duration: 0.08, ease: 'power2.in',
        onComplete: () => gsap.to(outer, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.3)' }),
      });
      gsap.to(mid, {
        scale: 0.7, duration: 0.08, ease: 'power2.in',
        onComplete: () => gsap.to(mid, { scale: 1, duration: 0.35, ease: 'elastic.out(1, 0.4)' }),
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      document.removeEventListener('click', handleClick);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const dotSize = isHovering ? 5 : 8;
  const midSize = isHovering ? 30 : 20;
  const outerSize = isHovering ? 56 : 44;

  return (
    <>
      {/* Core dot - snaps to pointer */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.15s ease' }}
      >
        <div
          className="rounded-full transition-[width,height] duration-200 ease-out"
          style={{
            width: dotSize,
            height: dotSize,
            background: 'hsl(var(--primary))',
            boxShadow: '0 0 8px 2px hsl(var(--primary) / 0.5)',
          }}
        />
      </div>

      {/* Middle ring - slight trail */}
      <div
        ref={midRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ opacity: isVisible ? 0.7 : 0, transition: 'opacity 0.15s ease' }}
      >
        <div
          className="rounded-full transition-[width,height,border-color] duration-200 ease-out"
          style={{
            width: midSize,
            height: midSize,
            border: `1.5px solid hsl(var(--primary) / ${isHovering ? 0.7 : 0.5})`,
            background: isHovering ? 'hsl(var(--primary) / 0.05)' : 'transparent',
          }}
        />
      </div>

      {/* Outer ring - most trail */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ opacity: isVisible ? 0.4 : 0, transition: 'opacity 0.15s ease' }}
      >
        <div
          className="rounded-full transition-[width,height,border-color] duration-200 ease-out"
          style={{
            width: outerSize,
            height: outerSize,
            border: `1px solid hsl(var(--primary) / ${isHovering ? 0.5 : 0.25})`,
            background: isHovering ? 'hsl(var(--primary) / 0.03)' : 'transparent',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;