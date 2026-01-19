import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Palette,
  TrendingUp,
  Code,
  Globe,
  Calendar,
  Video,
  BarChart,
  ShoppingBag,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

export const ServicesPage = () => {
  const { isVisible, setElement } = useIntersectionObserver({ threshold: 0.1 });
  const heroRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !svgRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the hero section
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
      });

      // Parallax ribbons - left side ribbons move up
      gsap.to(".ribbon-left-1", {
        y: -200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        },
      });

      gsap.to(".ribbon-left-2", {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
        },
      });

      gsap.to(".ribbon-left-3", {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
        },
      });

      // Right side ribbons move down
      gsap.to(".ribbon-right-1", {
        y: 200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        },
      });

      gsap.to(".ribbon-right-2", {
        y: 150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
        },
      });

      gsap.to(".ribbon-right-3", {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
        },
      });

      // Center ribbons scale and rotate
      gsap.to(".ribbon-center-left", {
        scaleY: 1.3,
        rotation: -5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 2,
        },
      });

      gsap.to(".ribbon-center-right", {
        scaleY: 1.3,
        rotation: 5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 2,
        },
      });

      // Eye animation - unfold effect
      gsap.to(".eye-outer", {
        scale: 1.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 2,
        },
      });

      gsap.to(".eye-pupil", {
        scale: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 2,
        },
      });

      // Text animations - fade and scale
      gsap.to(".hero-title", {
        scale: 1.2,
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        },
      });

      gsap.to(".hero-subtitle", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
        },
      });

      // Reveal effect on scroll
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      description: "Identity, purpose, tone, and differentiation.",
    },
    {
      icon: Palette,
      title: "Creative & Visual Design",
      description: "Logos, brand systems, campaigns, and creatives.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, PPC, social media, and performance campaigns.",
    },
    {
      icon: Code,
      title: "Web & Technology",
      description: "Websites, landing pages, and digital experiences.",
    },
    {
      icon: Globe,
      title: "360° Marketing",
      description: "Print, outdoor, electronic, and integrated campaigns.",
    },
    {
      icon: Calendar,
      title: "Events & Exhibitions",
      description: "On-ground activations and immersive brand experiences.",
    },
    {
      icon: Video,
      title: "Content & Production",
      description: "Photography, videography, reels, and campaign films.",
    },
    {
      icon: BarChart,
      title: "Analytics & Optimization",
      description: "Insights, tracking, and continuous improvement.",
    },
    {
      icon: ShoppingBag,
      title: "Merchandise & Brand Assets",
      description: "Custom apparel, giveaways, and branded merchandise.",
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 overflow-hidden bg-black">
      {/* Premium Scroll-Driven Hero */}
      <section
        ref={heroRef}
        className="relative h-screen bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Text Content */}
            <div className="text-left z-10">
              <div className="hero-title">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
                    End-to-End
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
                    Solutions.
                  </span>
                </h1>
              </div>
              <div className="hero-subtitle">
                <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 mb-8 max-w-xl leading-relaxed font-medium">
                  From brand inception to large-scale campaigns, we deliver
                  integrated marketing solutions designed to scale.
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                  Explore Services
                </button>
              </div>

              {/* Reveal text on scroll */}
              <div className="reveal-text mt-12">
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-semibold">
                  One Strategic Partner →
                </p>
              </div>
            </div>

            {/* Premium SVG Illustration with Parallax */}
            <div className="relative h-full flex items-center justify-center">
              <svg
                ref={svgRef}
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-w-2xl"
              >
                {/* Left flowing ribbons */}
                <g
                  className="ribbon-left-1"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 80 100 Q 100 250, 80 400 Q 60 550, 80 700"
                    fill="url(#ribbonGradient1)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>
                <g
                  className="ribbon-left-2"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 130 100 Q 160 250, 130 400 Q 100 550, 130 700"
                    fill="url(#ribbonGradient2)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>
                <g
                  className="ribbon-left-3"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 180 100 Q 220 250, 180 400 Q 140 550, 180 700"
                    fill="url(#ribbonGradient3)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>

                {/* Left-center ribbons */}
                <g
                  className="ribbon-center-left"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 260 50 Q 280 220, 260 400 Q 240 580, 260 750"
                    fill="url(#ribbonGradient4)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>
                <g
                  className="ribbon-center-left"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 310 50 Q 340 220, 310 400 Q 280 580, 310 750"
                    fill="url(#ribbonGradient5)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>

                {/* Center Eye - Animated */}
                <g transform="translate(400, 400)">
                  {/* Outer circle */}
                  <circle
                    className="eye-outer"
                    cx="0"
                    cy="0"
                    r="90"
                    fill="url(#eyeGradient)"
                    style={{
                      transformOrigin: "center",
                      willChange: "transform",
                    }}
                  />
                  {/* Middle circle */}
                  <circle cx="0" cy="0" r="60" fill="url(#eyeMiddle)" />
                  {/* Inner circle (pupil) */}
                  <circle
                    className="eye-pupil"
                    cx="0"
                    cy="0"
                    r="30"
                    fill="url(#eyePupil)"
                    style={{
                      transformOrigin: "center",
                      willChange: "transform",
                    }}
                  />
                  {/* Highlight */}
                  <circle
                    cx="-10"
                    cy="-10"
                    r="12"
                    fill="#F5F5F5"
                    opacity="0.8"
                  />
                </g>

                {/* Right-center ribbons */}
                <g
                  className="ribbon-center-right"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 490 50 Q 460 220, 490 400 Q 520 580, 490 750"
                    fill="url(#ribbonGradient6)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>
                <g
                  className="ribbon-center-right"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 540 50 Q 510 220, 540 400 Q 570 580, 540 750"
                    fill="url(#ribbonGradient7)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>

                {/* Right flowing ribbons */}
                <g
                  className="ribbon-right-1"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 620 100 Q 580 250, 620 400 Q 660 550, 620 700"
                    fill="url(#ribbonGradient8)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>
                <g
                  className="ribbon-right-2"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 670 100 Q 640 250, 670 400 Q 700 550, 670 700"
                    fill="url(#ribbonGradient9)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>
                <g
                  className="ribbon-right-3"
                  style={{ transformOrigin: "center" }}
                >
                  <path
                    d="M 720 100 Q 700 250, 720 400 Q 740 550, 720 700"
                    fill="url(#ribbonGradient10)"
                    strokeLinecap="round"
                    style={{ willChange: "transform" }}
                  />
                </g>

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient
                    id="ribbonGradient1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FF6B6B", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#EC4899", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#06B6D4", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#4ECDC4", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient3"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FFE66D", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#F59E0B", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient4"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#10B981", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#95E1D3", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient5"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#F87171", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FF8C94", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient6"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#34D399", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#A8E6CF", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient7"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FBBF24", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FFDAB9", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient8"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#8B5CF6", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#B4A7D6", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient9"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#EC4899", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FFB6B9", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="ribbonGradient10"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FB7185", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FEC8D8", stopOpacity: 0.9 }}
                    />
                  </linearGradient>
                  <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#2D3561", stopOpacity: 1 }}
                    />
                  </radialGradient>
                  <radialGradient id="eyeMiddle" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#E5E7EB", stopOpacity: 1 }}
                    />
                  </radialGradient>
                  <radialGradient id="eyePupil" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#1F2937", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#2D3561", stopOpacity: 1 }}
                    />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-amber-400 text-sm font-medium">
              Scroll to explore
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      {/* Services Grid with Premium Cards */}
      <section className="py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to elevate your brand and drive
              measurable results.
            </p>
          </div>

          <div
            ref={setElement}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-2xl hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group border-2 border-slate-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="bg-amber-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all duration-300">
                  <service.icon
                    className="text-amber-500 group-hover:text-white transition-colors duration-300"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 mb-8">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch with our
            team to discuss your next project.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50">
            Start a Project
          </button>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .hero-title, .hero-subtitle {
          will-change: transform, opacity;
        }

        .reveal-text {
          will-change: transform, opacity;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* GPU acceleration */
        svg g {
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  );
};
