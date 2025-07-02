import React, { useEffect, useRef } from 'react';
type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
};
export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.classList.add('animate');
          }
        }, delay);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10';
      case 'fade-in':
        return 'opacity-0';
      case 'slide-in-right':
        return 'opacity-0 translate-x-10';
      case 'slide-in-left':
        return 'opacity-0 -translate-x-10';
      default:
        return 'opacity-0';
    }
  };
  return <div ref={sectionRef} className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      {children}
    </div>;
};