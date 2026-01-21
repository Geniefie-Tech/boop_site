import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import { PageType } from "../types";
import hp from "../../src/assets/Logo/hp.png";
import airtel from "../../src/assets/Logo/Airtel Logo.png";
import assocham from "../../src/assets/Logo/Assocham logo.png";
import axis from "../../src/assets/Logo/Axis_Bank_logo.png";
import barcadi from "../../src/assets/bacardy.png";
import bajaj from "../../src/assets/Logo/Bajaj logo.png";
import dabur from "../../src/assets/Logo/Dabur-Logo.png";
import dlf from "../../src/assets/dlf.png";
import google from "../../src/assets/Logo/Google logo.png";
import hm from "../../src/assets/Logo/H & M.png";
import hindustan from "../../src/assets/Logo/Hindustan_Times_logo.svg.png";
import hotstar from "../../src/assets/hotstar.png";
import indianoil from "../../src/assets/Logo/Indian_Oil_Logo.svg.png";
import isuzu from "../../src/assets/Logo/isuzu.png";
import jeep from "../../src/assets/jeep.png";
import kotak from "../../src/assets/Logo/Kotak logo.png";
import lamaar from "../../src/assets/ Lamar.png";
import lg from "../../src/assets/lg.png";
import nissan from "../../src/assets/Logo/Nissan Logo.png";
import oral from "../../src/assets/Logo/Oral B Logo.png";
import dew from "../../src/assets/Logo/pngegg.png";
import ptc from "../../src/assets/Logo/PTC Punjabi.png";
import radiocity from "../../src/assets/Logo/Radio City.png";
import redbull from "../../src/assets/Logo/Red-Bull-logo.png";
import samsung from "../../src/assets/Logo/Samsung.png";
import shell from "../../src/assets/Logo/Shell_logo.svg.png";
import sony from "../../src/assets/sony.png";
import toyota from "../../src/assets/Logo/toyota-car-logo-6958.png";
import vivo from "../../src/assets/Logo/Vivo_mobile_logo.png";
import wt from "../../src/assets/Wildthing.png";
import zee from "../../src/assets/Logo/Zee logo.png";
import paras from "../../src/assets/Logo/Paras logo.png";
import porter from "../../src/assets/porter.png";
import amarjula from "../../src/assets/Amar Ujala.png";
import indiatv from "../../src/assets/indiatv.png";
import koffeelo from "../../src/assets/koffelo.png";

gsap.registerPlugin(ScrollTrigger);

interface ClientsPageProps {
  onNavigate?: (page: PageType) => void;
}

export const ClientsPage = ({ onNavigate }: ClientsPageProps = {}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const clients = [
    indiatv,
    lamaar,
    paras,
    porter,
    koffeelo,
    hp,
    airtel,
    amarjula,
    assocham,
    axis,
    barcadi,
    bajaj,
    dabur,
    dlf,
    google,
    hm,
    hindustan,
    hotstar,
    indianoil,
    isuzu,
    jeep,
    kotak,
    lg,
    nissan,
    oral,
    dew,
    ptc,
    radiocity,
    redbull,
    samsung,
    shell,
    sony,
    toyota,
    vivo,
    wt,
    zee,
  ];

  const colors = [
    "from-pink-500 via-purple-500 to-indigo-500",
    "from-cyan-500 via-blue-500 to-purple-500",
    "from-yellow-500 via-orange-500 to-red-500",
    "from-green-500 via-teal-500 to-cyan-500",
    "from-rose-500 via-pink-500 to-fuchsia-500",
    "from-amber-500 via-yellow-500 to-lime-500",
    "from-violet-500 via-purple-500 to-pink-500",
    "from-emerald-500 via-green-500 to-teal-500",
  ];

  const reasons = [
    {
      text: "Transparent collaboration",
      gradient: "from-amber-400 via-orange-500 to-amber-600",
      icon: "💎",
    },
    {
      text: "Strong strategic foundation",
      gradient: "from-amber-400 via-orange-400 to-amber-500",
      icon: "🚀",
    },
    {
      text: "Consistent delivery",
      gradient: "from-amber-300 via-orange-400 to-amber-500",
      icon: "⚡",
    },
    {
      text: "Results-driven mindset",
      gradient: "from-amber-300 via-orange-300 to-amber-400",
      icon: "🎯",
    },
  ];

  useEffect(() => {
    if (!heroRef.current || !gridRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Liquid morphing blobs
      gsap.to(".blob-1", {
        x: 100,
        y: -80,
        scale: 1.2,
        rotation: 180,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-2", {
        x: -120,
        y: 100,
        scale: 0.8,
        rotation: -180,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-3", {
        x: -80,
        y: -90,
        scale: 1.3,
        rotation: 90,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hero title animation - split reveal
      gsap.from(".hero-title-word", {
        y: 150,
        opacity: 0,
        rotationX: -90,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Floating particles with random motion
      gsap.utils.toArray<HTMLElement>(".particle").forEach((particle, i) => {
        gsap.to(particle, {
          y: `random(-100, 100)`,
          x: `random(-100, 100)`,
          rotation: `random(-180, 180)`,
          scale: `random(0.5, 1.5)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      // Magnetic logo cards with bounce
      gsap.utils.toArray<HTMLElement>(".client-logo").forEach((card, i) => {
        // Entrance animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          opacity: 0,
          duration: 1,
          delay: i * 0.03,
          ease: "elastic.out(1, 0.5)",
        });

        // No floating animation - keep grid straight
      });

      // Reason cards - liquid slide in
      gsap.from(".reason-card", {
        scrollTrigger: {
          trigger: ".reasons-section",
          start: "top 80%",
        },
        x: (i: number) => (i % 2 === 0 ? -200 : 200),
        opacity: 0,
        rotation: (i: number) => (i % 2 === 0 ? -15 : 15),
        scale: 0.5,
        stagger: 0.2,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      });

      // Colorful border animation
      gsap.to(".animated-border", {
        backgroundPosition: "200% center",
        duration: 3,
        repeat: -1,
        ease: "linear",
      });

      // Section title reveal
      gsap.from(".section-title", {
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 90%",
        },
        scale: 0.5,
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Wavy text animation
      gsap.utils.toArray<HTMLElement>(".wave-text span").forEach((span, i) => {
        gsap.to(span, {
          y: -20,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      // CTA section animations
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    // Custom cursor follower
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-slate-950">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ top: "-16px", left: "-16px" }}
      >
        <div className="w-full h-full bg-white rounded-full blur-sm"></div>
      </div>

      {/* Hero Section with Liquid Morphing Blobs */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Liquid Blobs */}
        <div className="absolute inset-0">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 800"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" />
              </filter>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9D" />
                <stop offset="50%" stopColor="#C44569" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D2FF" />
                <stop offset="50%" stopColor="#3A7BD5" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE66D" />
                <stop offset="50%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            <g filter="url(#gooey)">
              <ellipse
                className="blob-1"
                cx="200"
                cy="300"
                rx="180"
                ry="200"
                fill="url(#grad1)"
                opacity="0.6"
              />
              <ellipse
                className="blob-2"
                cx="700"
                cy="400"
                rx="220"
                ry="180"
                fill="url(#grad2)"
                opacity="0.5"
              />
              <ellipse
                className="blob-3"
                cx="500"
                cy="600"
                rx="200"
                ry="220"
                fill="url(#grad3)"
                opacity="0.4"
              />
            </g>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                className="particle"
                cx={100 + i * 45}
                cy={100 + (i % 3) * 200}
                r={5 + (i % 4) * 2}
                fill={
                  [
                    "#FF6B9D",
                    "#00D2FF",
                    "#FFE66D",
                    "#8B5CF6",
                    "#F59E0B",
                    "#10B981",
                  ][i % 6]
                }
                opacity="0.6"
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-black leading-none mb-8">
              <div className="hero-title-word inline-block text-white">
                Brands
              </div>
              <br />
              <div className="hero-title-word inline-block text-white/50">
                That
              </div>
              <br />
              <div className="hero-title-word inline-block text-white">
                Trust Us
              </div>
            </h1>
          </div>

          <div className="hero-subtitle">
            <p className="text-2xl md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                startups
              </span>{" "}
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                enterprises
              </span>
              , brands choose BoopOrg for creativity that delivers results.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 text-sm font-semibold">
              Discover our clients
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#arrowGrad)"
              className="text-pink-500"
            >
              <defs>
                <linearGradient id="arrowGrad">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Client Logos Grid - Magnetic Cards */}
      <section className="py-32 relative overflow-hidden">
        {/* Rainbow gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-black mb-6">
              <span className="wave-text inline-block">
                <span className="inline-block text-white">T</span>
                <span className="inline-block text-white">r</span>
                <span className="inline-block text-white">u</span>
                <span className="inline-block text-white">s</span>
                <span className="inline-block text-white">t</span>
                <span className="inline-block text-white">e</span>
                <span className="inline-block text-white">d</span>
              </span>
              <br />
              <span className="text-white">By</span>{" "}
              <span className="text-white/50">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're proud to partner with innovative brands across industries.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="client-logo group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ willChange: "transform" }}
              >
                {/* Animated gradient border */}
                <div
                  className={`animated-border absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r ${colors[index % colors.length]}`}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 rounded-3xl"></div>
                </div>

                {/* Card content */}
                <div className="relative p-8 flex items-center justify-center min-h-[180px] bg-gray-50 backdrop-blur-sm rounded-3xl">
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}
                  ></div>

                  {/* Logo */}
                  <img
                    src={client}
                    alt="Client logo"
                    className="w-28 h-auto object-contain transform group-hover:scale-110 transition-all duration-500 relative z-10"
                    loading="lazy"
                  />

                  {/* Corner accents */}
                  <div
                    className={`absolute top-2 right-2 w-4 h-4 bg-gradient-to-br ${colors[index % colors.length]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-br ${colors[index % colors.length]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us - Liquid Cards */}
      <section className="reasons-section py-32 relative overflow-hidden">
        {/* Colorful background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-black mb-6">
              <span className="wave-text inline-block">
                <span className="inline-block text-white">W</span>
                <span className="inline-block text-white">h</span>
                <span className="inline-block text-white">y</span>
              </span>
              <br />
              <span className="text-white">Choose</span>{" "}
              <span className="text-white/50">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart.
            </p>
          </div>

          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="reason-card group relative overflow-hidden rounded-3xl"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative p-6 flex items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    {reason.icon}
                  </div>

                  {/* Text */}
                  <p className="text-xl md:text-2xl text-white font-bold flex-grow">
                    {reason.text}
                  </p>

                  {/* Check icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform duration-500">
                    <CheckCircle className="text-white" size={22} />
                  </div>
                </div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section with Premium Gradient */}
      <section className="cta-section py-32 relative overflow-hidden bg-black">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-600/80 to-blue-600/80"></div>

        {/* Animated overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500 via-purple-500 to-cyan-500 animate-pulse"></div>
        </div>

        <div className="cta-content max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            Ready to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
              Join Them?
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let's create something remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate?.("contact")}
              className="group relative bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => onNavigate?.("work")}
              className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md border-2 border-white/30"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .client-logo {
          will-change: transform;
        }

        html {
          scroll-behavior: smooth;
        }

        .animated-border {
          background-size: 200% 200%;
        }

        .wave-text span {
          display: inline-block;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000000;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f59e0b, #8b5cf6);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #db2777, #7c3aed);
        }
      `}</style>
    </div>
  );
};
