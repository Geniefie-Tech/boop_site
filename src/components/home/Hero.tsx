import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

interface WorkShowcase {
  id: number;
  image: string;
  client: string;
  project: string;
  metric: string;
  category: string;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const horizontalTextRef = useRef<HTMLDivElement>(null);

  // Featured work showcase
  const featuredWork: WorkShowcase[] = [
    {
      id: 1,
      image:
        "/src/assets/our work/Exhibition Stall/Aahar 2025, New Delhi/Screenshot 2025-12-26 180857.png",
      client: "Aahar 2025",
      project: "Exhibition Stall Design",
      metric: "Major Trade Show",
      category: "Events",
    },
    {
      id: 2,
      image:
        "/src/assets/our work/social media/india tv/Screenshot 2025-12-26 172657.png",
      client: "India TV",
      project: "Social Media Campaign",
      metric: "Digital Engagement",
      category: "Media",
    },
    {
      id: 3,
      image:
        "/src/assets/our work/Exhibition Stall/IITF 2024, New Delhi/Screenshot 2025-12-26 181119.png",
      client: "IITF 2024",
      project: "Exhibition Booth",
      metric: "New Delhi Expo",
      category: "Events",
    },
    {
      id: 4,
      image:
        "/src/assets/our work/social media/amar ujala/Screenshot 2025-12-26 172418.png",
      client: "Amar Ujala",
      project: "Content Strategy",
      metric: "Brand Visibility",
      category: "Media",
    },
    {
      id: 5,
      image:
        "/src/assets/our work/Exhibition Stall/IFF 2024, Mumbai/Screenshot 2025-12-26 181231.png",
      client: "IFF 2024",
      project: "Trade Show Presence",
      metric: "Mumbai Event",
      category: "Events",
    },
    {
      id: 6,
      image:
        "/src/assets/our work/social media/PTC/Screenshot 2025-12-26 172501.png",
      client: "PTC Network",
      project: "Social Media Design",
      metric: "Creative Campaigns",
      category: "Media",
    },
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Horizontal scroll animation like Salt Agency for the heading
      if (
        horizontalTextRef.current &&
        heroRef.current &&
        !prefersReducedMotion
      ) {
        const lines =
          horizontalTextRef.current.querySelectorAll(".heading-line");

        lines.forEach((line, index) => {
          gsap.fromTo(
            line,
            {
              x: 0, // Start at normal position (visible)
            },
            {
              x: () => {
                // Move left by different amounts for each line
                return -300 * (index + 1);
              },
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=200%",
                scrub: 1,
                pin: true,
              },
            },
          );
        });
      }

      // Subtitle fade in
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
        });
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.9,
          ease: "power3.out",
        });
      }

      // Stats animation
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 1.1,
          ease: "power3.out",
        });
      }

      // Carousel reveal
      if (carouselRef.current) {
        gsap.from(carouselRef.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "power4.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredWork.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredWork.length]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 py-20">
        {/* Hero Heading - Three lines with horizontal scroll animation */}
        <div className="mb-12 lg:mb-16">
          <h1
            ref={horizontalTextRef}
            className="text-left text-[clamp(3rem,10vw,8rem)] font-bold leading-[1.1] tracking-tight w-fit"
          >
            <div className="heading-line block whitespace-nowrap will-change-transform">
              <span className="text-white">We Build</span>
            </div>
            <div className="heading-line block whitespace-nowrap will-change-transform">
              <span className="text-white/50">Unforgettable </span>
              <span className="text-white">360°</span>
            </div>
            <div className="heading-line block whitespace-nowrap will-change-transform">
              <span className="text-white/50">Creative </span>
              <span className="text-white">Brands</span>
            </div>
          </h1>
        </div>

        {/* Content Below Heading */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="overflow-hidden">
                <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm">
                  360° Creative & Marketing Agency
                </span>
              </div>

              {/* Subtitle */}
              <div
                ref={subtitleRef}
                className="space-y-4 text-center lg:text-left"
              >
                <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
                  Strategic creativity that transforms brands into market
                  leaders and customer favorites.
                </p>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                  We deliver strategy-led branding, performance-driven
                  marketing, and scalable growth solutions for ambitious brands
                  across FMCG, Media, Technology, and Logistics.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => onNavigate("work")}
                  className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Our Work
                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    size={20}
                  />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Start a Project
                </button>
              </div>

              {/* Quick Stats */}
              <div
                ref={statsRef}
                className="grid grid-cols-3 gap-6 pt-8 justify-items-center lg:justify-items-start"
              >
                {[
                  { number: "350+", text: "Clients" },
                  { number: "500+", text: "Projects" },
                  { number: "98%", text: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-base md:text-lg text-gray-400 font-light">
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Work Showcase Carousel */}
            <div
              ref={carouselRef}
              className="relative lg:h-[600px] h-[500px] opacity-0"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Slides */}
                {featuredWork.map((work, index) => (
                  <div
                    key={work.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={work.image}
                        alt={`${work.client} - ${work.project}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                      {/* Project Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className="inline-block px-3 py-1 border border-white/40 rounded-full text-white text-xs font-medium backdrop-blur-md mb-4">
                          {work.category}
                        </span>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                          {work.client}
                        </h3>

                        <p className="text-gray-300 text-xl md:text-2xl mb-4 font-light">
                          {work.project}
                        </p>

                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1 bg-white rounded-full"></div>
                          <span className="text-white font-bold text-2xl md:text-3xl">
                            {work.metric}
                          </span>
                        </div>
                      </div>

                      {/* View More Button */}
                      <button
                        onClick={() => onNavigate("work")}
                        className="absolute top-6 right-6 group bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white hover:border-white transition-all duration-300"
                        aria-label="View case study"
                      >
                        <ArrowRight
                          size={20}
                          className="text-white group-hover:text-black transition-colors"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                {featuredWork.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-white"
                        : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
