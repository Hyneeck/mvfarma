import React, { useEffect, useState } from 'react';

const MobileOptimized = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Mobile-specific optimizations
    if (typeof window !== 'undefined') {
      // Disable hover effects on mobile for better performance
      if ('ontouchstart' in window) {
        document.documentElement.classList.add('touch-device');
      }

      // Add viewport height CSS custom property for mobile
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      const updateVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      window.addEventListener('resize', updateVH);
      window.addEventListener('orientationchange', updateVH);

      return () => {
        window.removeEventListener('resize', checkIsMobile);
        window.removeEventListener('resize', updateVH);
        window.removeEventListener('orientationchange', updateVH);
      };
    }
  }, []);

  useEffect(() => {
    // Mobile-specific CSS optimizations
    const mobileCSS = `
      @media (max-width: 768px) {
        .touch-device *:hover {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .mobile-vh {
          height: calc(var(--vh, 1vh) * 100);
        }
        
        .mobile-optimized {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-tap-highlight-color: transparent;
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = mobileCSS;
    style.setAttribute('data-mobile-optimized', 'true');
    document.head.appendChild(style);

    return () => {
      const mobileStyle = document.querySelector('style[data-mobile-optimized]');
      if (mobileStyle) {
        mobileStyle.remove();
      }
    };
  }, []);

  return null;
};

export default MobileOptimized;