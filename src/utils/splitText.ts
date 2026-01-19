import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  toggleActions?: string;
  duration?: number;
  stagger?: number;
  animationType?: "fade" | "slideUp" | "slideDown" | "scale" | "rotate" | "wave";
  ease?: string;
  onComplete?: () => void;
}

// Split text into characters
export const splitTextByChars = (element: HTMLElement): HTMLElement[] => {
  const text = element.textContent || "";
  element.innerHTML = "";

  const chars: HTMLElement[] = [];

  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space
    element.appendChild(span);
    chars.push(span);
  });

  return chars;
};

// Split text into words
export const splitTextByWords = (element: HTMLElement): HTMLElement[] => {
  const text = element.textContent || "";
  element.innerHTML = "";

  const words: HTMLElement[] = [];

  text.split(" ").forEach((word, index, array) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = word;
    element.appendChild(span);
    words.push(span);

    // Add space after word (except last word)
    if (index < array.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  return words;
};

// Split text into lines
export const splitTextByLines = (element: HTMLElement): HTMLElement[] => {
  const text = element.textContent || "";
  element.innerHTML = "";

  const lines: HTMLElement[] = [];

  text.split("\n").forEach((line, index, array) => {
    const span = document.createElement("span");
    span.style.display = "block";
    span.textContent = line;
    element.appendChild(span);
    lines.push(span);

    // Add line break (except last line)
    if (index < array.length - 1) {
      element.appendChild(document.createElement("br"));
    }
  });

  return lines;
};

// Animate split text with various effects
export const animateSplitText = (
  element: HTMLElement,
  splitType: "chars" | "words" | "lines" = "chars",
  options: SplitTextOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 60%",
    toggleActions = "play none none reverse",
    duration = 0.8,
    stagger = 0.03,
    animationType = "fade",
    ease = "power3.out",
    onComplete,
  } = options;

  // Split the text
  let elements: HTMLElement[] = [];
  if (splitType === "chars") {
    elements = splitTextByChars(element);
  } else if (splitType === "words") {
    elements = splitTextByWords(element);
  } else {
    elements = splitTextByLines(element);
  }

  // Define animation based on type
  let fromProps: gsap.TweenVars = {};

  switch (animationType) {
    case "fade":
      fromProps = { opacity: 0, y: 20 };
      break;
    case "slideUp":
      fromProps = { opacity: 0, y: 50 };
      break;
    case "slideDown":
      fromProps = { opacity: 0, y: -50 };
      break;
    case "scale":
      fromProps = { opacity: 0, scale: 0 };
      break;
    case "rotate":
      fromProps = { opacity: 0, rotation: 90, transformOrigin: "0% 50%" };
      break;
    case "wave":
      fromProps = { opacity: 0, y: -30 };
      break;
  }

  // Animate the split elements
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      end,
      toggleActions,
    },
    onComplete,
  });

  tl.from(elements, {
    ...fromProps,
    duration,
    stagger: animationType === "wave" ? {
      each: stagger,
      from: "start",
      ease: "sine.inOut",
    } : stagger,
    ease,
  });

  return tl;
};

// Reveal text character by character
export const revealTextByChars = (
  element: HTMLElement,
  options: SplitTextOptions = {}
) => {
  return animateSplitText(element, "chars", {
    ...options,
    animationType: "fade",
    stagger: 0.03,
  });
};

// Reveal text word by word
export const revealTextByWords = (
  element: HTMLElement,
  options: SplitTextOptions = {}
) => {
  return animateSplitText(element, "words", {
    ...options,
    animationType: "slideUp",
    stagger: 0.05,
  });
};

// Wave effect (characters animate in wave motion)
export const waveTextEffect = (
  element: HTMLElement,
  options: SplitTextOptions = {}
) => {
  return animateSplitText(element, "chars", {
    ...options,
    animationType: "wave",
    stagger: 0.02,
    duration: 0.6,
  });
};

// Rotate in effect
export const rotateInText = (
  element: HTMLElement,
  options: SplitTextOptions = {}
) => {
  return animateSplitText(element, "chars", {
    ...options,
    animationType: "rotate",
    stagger: 0.02,
    duration: 0.8,
  });
};

// Scale in effect
export const scaleInText = (
  element: HTMLElement,
  options: SplitTextOptions = {}
) => {
  return animateSplitText(element, "chars", {
    ...options,
    animationType: "scale",
    stagger: 0.03,
    duration: 0.5,
    ease: "back.out(1.7)",
  });
};

// Cleanup split text (restore original text)
export const cleanupSplitText = (element: HTMLElement, originalText: string) => {
  element.innerHTML = originalText;
};
