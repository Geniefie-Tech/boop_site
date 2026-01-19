import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrambleTextOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  toggleActions?: string;
  duration?: number;
  scrambleSpeed?: number;
  chars?: string;
  onComplete?: () => void;
}

const defaultChars = "!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const scrambleText = (
  element: HTMLElement,
  options: ScrambleTextOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 60%",
    toggleActions = "play none none reverse",
    duration = 1,
    chars = defaultChars,
    onComplete,
  } = options;

  const originalText = element.textContent || "";
  const textLength = originalText.length;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      end,
      toggleActions,
    },
    onComplete,
  });

  tl.to(element, {
    duration: duration,
    ease: "none",
    onUpdate: function () {
      const progress = this.progress();
      const currentIteration = Math.floor(progress * textLength);

      element.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < currentIteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
    },
    onComplete: () => {
      element.textContent = originalText;
    },
  });

  return tl;
};

export const scrambleTextOnView = (
  element: HTMLElement,
  options: ScrambleTextOptions = {}
) => {
  return scrambleText(element, {
    ...options,
    toggleActions: "play none none none",
  });
};

export const scrambleTextContinuous = (
  element: HTMLElement,
  options: ScrambleTextOptions = {}
) => {
  const originalText = element.textContent || "";
  const {
    duration = 2,
    scrambleSpeed = 0.05,
    chars = defaultChars,
  } = options;

  let iteration = 0;
  const textLength = originalText.length;

  const interval = setInterval(() => {
    if (iteration < textLength) {
      element.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      iteration += 1 / scrambleSpeed;
    } else {
      element.textContent = originalText;
      clearInterval(interval);
    }
  }, scrambleSpeed * 1000);

  return () => clearInterval(interval);
};

export const scrambleTextBatch = (
  elements: HTMLElement[],
  options: ScrambleTextOptions = {}
) => {
  const timelines: gsap.core.Timeline[] = [];

  elements.forEach((element, index) => {
    const tl = scrambleText(element, {
      ...options,
      duration: (options.duration || 1) + index * 0.1,
    });
    timelines.push(tl);
  });

  return timelines;
};

export const scrambleReveal = (
  element: HTMLElement,
  options: ScrambleTextOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    duration = 1.5,
    chars = defaultChars,
  } = options;

  const originalText = element.textContent || "";
  const textLength = originalText.length;

  gsap.set(element, { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none reverse",
    },
  });

  tl.to(element, {
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
  });

  tl.to(element, {
    duration: duration,
    ease: "power2.out",
    onUpdate: function () {
      const progress = this.progress();
      const currentIteration = Math.floor(progress * textLength);

      element.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < currentIteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
    },
    onComplete: () => {
      element.textContent = originalText;
    },
  });

  return tl;
};
