import { useEffect, useState, useRef, RefObject } from "react";

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, options]);

  return { isVisible, setElement };
};

/* Advanced Scroll-triggered Animation Hook */
export const useScrollTrigger = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { elementRef, hasTriggered };
};

/* Parallax Scroll Hook */
export const useParallax = (offset = 50) => {
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYOffset(window.scrollY * (offset / 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return yOffset;
};

/* Counter Animation Hook */
export const useCountAnimation = (
  target: number,
  duration: number = 2000,
  shouldStart: boolean = true
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
};

/* Stagger Animation Hook */
export const useStaggerAnimation = (itemCount: number, delay: number = 100) => {
  return Array.from({ length: itemCount }, (_, i) => ({
    delay: i * delay,
    className: `animate-slide-in-up delay-${i * delay}`,
  }));
};

/* Staggered Children Animation Hook */
export const useStaggerChildren = (
  shouldAnimate: boolean = true,
  itemDelay: number = 150
) => {
  const getItemDelay = (index: number) => {
    return shouldAnimate ? index * itemDelay : 0;
  };

  const getItemClass = (index: number) => {
    if (!shouldAnimate) return "";
    return `opacity-100 translate-y-0`;
  };

  return {
    getItemDelay,
    getItemClass,
    getItemStyle: (index: number) => ({
      transitionDelay: `${getItemDelay(index)}ms`,
    }),
  };
};
