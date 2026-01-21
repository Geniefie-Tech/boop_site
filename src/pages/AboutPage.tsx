import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageType } from "../types";

gsap.registerPlugin(ScrollTrigger);

interface AboutPageProps {
  onNavigate?: (page: PageType) => void;
}

export const AboutPage = ({ onNavigate }: AboutPageProps = {}) => {
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
        end: "+=200%",
        pin: true,
        pinSpacing: true,
      });

      // Morphing shapes - transform from circles to polygons
      gsap.to(".morph-shape-1", {
        attr: {
          d: "M 200 200 L 350 150 L 450 250 L 400 400 L 250 450 L 150 350 Z",
        },
        rotation: 180,
        scale: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 2,
        },
      });

      gsap.to(".morph-shape-2", {
        attr: {
          d: "M 600 150 L 750 200 L 800 350 L 700 450 L 550 400 L 500 250 Z",
        },
        rotation: -180,
        scale: 1.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 2.5,
        },
      });

      gsap.to(".morph-shape-3", {
        attr: {
          d: "M 300 500 L 500 550 L 550 650 L 400 700 L 250 650 Z",
        },
        rotation: 90,
        scale: 1.4,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 3,
        },
      });

      // 3D rotating rings
      gsap.to(".ring-1", {
        rotationY: 360,
        rotationX: 180,
        scale: 0.5,
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
        },
      });

      gsap.to(".ring-2", {
        rotationY: -360,
        rotationX: -180,
        scale: 1.5,
        opacity: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 2,
        },
      });

      // Text reveal with 3D transform
      gsap.to(".hero-main-title", {
        rotationX: -90,
        opacity: 0,
        y: -200,
        scale: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".hero-reveal-title",
        { rotationX: 90, opacity: 0, y: 100 },
        {
          rotationX: 0,
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "50% top",
            end: "+=150%",
            scrub: 1,
          },
        },
      );

      // Floating particles
      gsap.to(".particle", {
        y: (i) => -300 - i * 50,
        opacity: 0,
        scale: 2,
        rotation: 360,
        stagger: 0.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      // Background color shift
      gsap.to(heroRef.current, {
        backgroundColor: "#0f172a",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      // Scale and fade content
      gsap.to(".hero-subtitle", {
        scale: 0.8,
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20 overflow-hidden bg-black">
      {/* Premium Scroll-Driven Hero with Morphing Shapes */}
      <section
        ref={heroRef}
        className="relative h-screen bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden"
      >
        {/* SVG Morphing Shapes Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Morphing shape 1 - starts as circle, morphs to polygon */}
            <path
              className="morph-shape-1"
              d="M 300 300 m -100 0 a 100 100 0 1 0 200 0 a 100 100 0 1 0 -200 0"
              fill="url(#gradient1)"
              opacity="0.8"
              style={{
                transformOrigin: "300px 300px",
                willChange: "transform",
              }}
            />

            {/* Morphing shape 2 */}
            <path
              className="morph-shape-2"
              d="M 650 300 m -80 0 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0"
              fill="url(#gradient2)"
              opacity="0.7"
              style={{
                transformOrigin: "650px 300px",
                willChange: "transform",
              }}
            />

            {/* Morphing shape 3 */}
            <path
              className="morph-shape-3"
              d="M 400 600 m -70 0 a 70 70 0 1 0 140 0 a 70 70 0 1 0 -140 0"
              fill="url(#gradient3)"
              opacity="0.6"
              style={{
                transformOrigin: "400px 600px",
                willChange: "transform",
              }}
            />

            {/* 3D Rotating Rings */}
            <g
              className="ring-1"
              style={{
                transformOrigin: "500px 400px",
                willChange: "transform",
              }}
            >
              <circle
                cx="500"
                cy="400"
                r="200"
                fill="none"
                stroke="url(#ringGradient1)"
                strokeWidth="8"
                opacity="0.6"
              />
              <circle
                cx="500"
                cy="400"
                r="180"
                fill="none"
                stroke="url(#ringGradient1)"
                strokeWidth="4"
                opacity="0.4"
              />
            </g>

            <g
              className="ring-2"
              style={{
                transformOrigin: "500px 400px",
                willChange: "transform",
              }}
            >
              <circle
                cx="200"
                cy="400"
                r="250"
                fill="none"
                stroke="url(#ringGradient2)"
                strokeWidth="6"
                opacity="0.5"
              />
              <circle
                cx="500"
                cy="400"
                r="230"
                fill="none"
                stroke="url(#ringGradient2)"
                strokeWidth="3"
                opacity="0.3"
              />
            </g>

            {/* Gradient Definitions */}
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#F59E0B", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFE66D", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#06B6D4", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4ECDC4", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient
                id="gradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#EC4899", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FF6B6B", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient
                id="ringGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#F59E0B", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#FFE66D", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#F59E0B", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient
                id="ringGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#EC4899", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                className="particle"
                cx={100 + i * 80}
                cy={700 - (i % 3) * 50}
                r={8 + (i % 4) * 3}
                fill={
                  ["#FF6B6B", "#4ECDC4", "#FFE66D", "#F59E0B", "#8B5CF6"][i % 5]
                }
                opacity="0.7"
                style={{ willChange: "transform" }}
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center z-10">
            {/* Main Title - fades out with 3D transform */}
            <div
              className="hero-main-title"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
                <span className="text-white">Strategic</span>{" "}
                <span className="text-white/50">Thinking.</span>
              </h1>
            </div>

            <div className="hero-subtitle" style={{ willChange: "transform" }}>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                  brand
                </span>{" "}
                ecosystems that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                  perform across touchpoints
                </span>
                .
              </p>
            </div>

            {/* Reveal Title - appears with 3D transform */}
            <div
              className="hero-reveal-title"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white">Creative</span>{" "}
                <span className="text-white/50">Execution.</span>
              </h2>
              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 max-w-2xl mx-auto font-medium">
                Real results through clarity and confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
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

      {/* Who We Are Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 mb-8">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                A collective of strategists, designers, marketers,
                technologists, and execution specialists driven by one goal:
                creating work that delivers impact.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We work as an extension of your team—aligning business goals
                with brand storytelling and performance marketing.
              </p>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-amber-500/20">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 mb-16 text-center">
              Our Philosophy
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Strategy before creativity",
                  color: "bg-amber-500",
                },
                {
                  title: "Data before assumptions",
                  color: "bg-blue-500",
                },
                {
                  title: "Impact over impressions",
                  color: "bg-purple-500",
                },
                {
                  title: "Long-term growth over short-term wins",
                  color: "bg-pink-500",
                },
              ].map((principle, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 ${principle.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-2xl text-slate-700 font-semibold">
                    {principle.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Let's Build Something
            <br />
            <span className="text-amber-400">Extraordinary</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your brand and drive real results? Let's start
            the conversation.
          </p>
          <button
            onClick={() => onNavigate?.("contact")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/50"
          >
            Get in Touch
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

        .hero-main-title,
        .hero-reveal-title,
        .hero-subtitle {
          will-change: transform, opacity;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* 3D context */
        [style*="perspective"] {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};
