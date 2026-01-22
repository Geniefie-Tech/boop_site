import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import asli from "../../assets/Asli.png";
import marketing from "../../assets/marketing.jpg";
import creative from "../../assets/creative.jpg";
import amaarujala from "../../assets/Logo/amaarujala.png";
import indiatv from "../../assets/Logo/IndiaTV.png";
import lamar from "../../assets/Logo/Lamaar logo.png";
import porter from "../../assets/Logo/Porter.png";
import wildthing from "../../assets/Logo/wildthing.png";
import koffelo from "../../assets/Logo/Koffelo logo.png";

gsap.registerPlugin(ScrollTrigger);

interface WorkPreviewProps {
  onNavigate: (page: PageType) => void;
}

export const WorkPreview = ({ onNavigate }: WorkPreviewProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const workGridRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Keep existing work items
  const featuredWork = [
    {
      id: 1,
      image: asli,
      title: "Brand Campaign",
      category: "FMCG",
    },
    {
      id: 2,
      image: marketing,
      title: "Marketing Campaign",
      category: "Media",
    },
    {
      id: 3,
      image: creative,
      title: "Creative Work",
      category: "Technology",
    },
  ];

  const brands = [amaarujala, indiatv, lamar, porter, wildthing, koffelo];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Heading animation with pin effect
      if (headingRef.current && !prefersReducedMotion) {
        const headingElements = headingRef.current.children;

        // Pin the heading section briefly
        ScrollTrigger.create({
          trigger: headingRef.current,
          start: "top 20%",
          end: "+=300",
          pin: true,
          pinSpacing: false,
        });

        // Staggered reveal with scale
        gsap.from(headingElements, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        });

        // Fade out heading as you scroll past
        gsap.to(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          opacity: 0.3,
          scale: 0.95,
          ease: "none",
        });
      }

      // Work grid items animation
      if (workGridRef.current) {
        const workItems = workGridRef.current.querySelectorAll(".work-item");

        workItems.forEach((item, index) => {
          // Card reveal with enhanced effects
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
            y: 120,
            opacity: 0,
            rotation: prefersReducedMotion ? 0 : 5,
            scale: 0.85,
            duration: 1.2,
            delay: index * 0.15,
            ease: "power4.out",
          });

          // Image parallax effect with scale
          const image = item.querySelector(".work-image");
          if (image && !prefersReducedMotion) {
            gsap.to(image, {
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
              y: -40,
              scale: 1.1,
              ease: "none",
            });
          }

          // Card container scale on scroll progress
          if (!prefersReducedMotion) {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "center center",
                scrub: 2,
              },
              scale: 1.02,
              ease: "power2.out",
            });
          }

          // Text reveal with stagger
          const textElements = item.querySelectorAll(".work-text > *");
          gsap.from(textElements, {
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: index * 0.15 + 0.3,
            ease: "power3.out",
          });

          // Border glow animation
          const borderGlow = item.querySelector(".hover-border-glow");
          if (borderGlow) {
            gsap.from(borderGlow, {
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              scale: 0.9,
              opacity: 0,
              duration: 1,
              delay: index * 0.15 + 0.5,
              ease: "power2.out",
            });
          }
        });
      }

      // CTA button animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "back.out(1.4)",
        });

        // Pulsing effect
        if (!prefersReducedMotion) {
          gsap.to(ctaRef.current, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
            },
            scale: 1.05,
            duration: 0.8,
            repeat: 2,
            yoyo: true,
            ease: "power2.inOut",
          });
        }
      }

      // Background parallax with rotation
      if (sectionRef.current && !prefersReducedMotion) {
        const bgOrbs = sectionRef.current.querySelectorAll(".bg-orb");
        bgOrbs.forEach((orb, index) => {
          gsap.to(orb, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
            y: index % 2 === 0 ? -120 : 120,
            x: index % 2 === 0 ? 40 : -40,
            rotation: index % 2 === 0 ? 90 : -90,
            scale: 1.2,
            ease: "none",
          });
        });

        // Grid pattern subtle movement
        const gridPattern = sectionRef.current.querySelector(".grid-pattern");
        if (gridPattern) {
          gsap.to(gridPattern, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
            y: -30,
            opacity: 0.05,
            ease: "none",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="bg-orb absolute top-40 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="bg-orb absolute bottom-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="grid-pattern w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <div ref={headingRef} className="mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Check out.
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/50 mb-8">
            Our work
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            We've partnered with leading brands across FMCG, Media, Technology,
            Logistics, and Lifestyle, delivering campaigns that drive visibility
            and results.
          </p>
        </div>

        {/* Work grid */}
        <div
          ref={workGridRef}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-32"
        >
          {featuredWork.map((work, index) => (
            <div
              key={work.id}
              className="work-item group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onNavigate("work")}
            >
              {/* Image container with overflow for parallax */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="work-image w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-90" : "opacity-70"
                  }`}
                ></div>

                {/* Text overlay */}
                <div className="work-text absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="inline-block px-3 py-1 border border-white/40 rounded-full text-white text-xs font-medium backdrop-blur-md mb-3">
                    {work.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    {work.title}
                  </h4>
                </div>

                {/* Arrow indicator */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-500 z-10 ${
                    hoveredIndex === index
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 -rotate-45"
                  }`}
                >
                  <ArrowRight size={20} className="text-black" />
                </div>

                {/* Hover border glow */}
                <div className="hover-border-glow absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Brands Section */}
        <div ref={brandsRef} className="border-t border-white/10 pt-20">
          <h3 className="text-2xl md:text-3xl font-light text-gray-400 mb-12 text-center">
            Featured Brands
          </h3>

          {/* Brand marquee */}
          <div className="overflow-hidden mb-16">
            <div className="flex items-center gap-16 animate-marquee">
              {[...brands, ...brands].map((src, idx) => (
                <div
                  key={idx}
                  className="brand-logo flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={src}
                    alt={`Brand logo ${idx}`}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-20">
          <button
            onClick={() => onNavigate("work")}
            className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:gap-5 hover:shadow-2xl hover:shadow-white/20"
          >
            View All Projects
            <ArrowRight
              size={24}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 5s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
