import { useEffect, useRef } from "react";
import { Search, Pencil, Rocket } from "lucide-react";
import { PageType } from "../../types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrambleReveal, scrambleText } from "../../utils/scrambleText";

gsap.registerPlugin(ScrollTrigger);

interface ProcessSectionProps {
  onNavigate?: (page: PageType) => void;
}

export const ProcessSection = ({ onNavigate }: ProcessSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We dive deep into understanding your business, goals, target audience to create a strategic foundation.",
      icon: Search,
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Our creative team crafts compelling strategies and executes stunning designs that bring your vision to life with precision.",
      icon: Pencil,
    },
    {
      number: "03",
      title: "Launch & Growth",
      description:
        "We deploy your project with excellence and provide ongoing optimization to ensure sustained growth and success.",
      icon: Rocket,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scramble text animation for title
      if (titleRef.current) {
        scrambleReveal(titleRef.current, {
          start: "top 80%",
          duration: 1.5,
        });
      }

      // Scramble text animation for subtitle
      if (subtitleRef.current) {
        scrambleText(subtitleRef.current, {
          start: "top 75%",
          duration: 2,
        });
      }

      // Steps animation
      if (stepsRef.current) {
        const stepCards = stepsRef.current.querySelectorAll(".step-card");

        stepCards.forEach((card, index) => {
          // Card reveal
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          });

          // Number animation
          const numberElement = card.querySelector(".step-number");
          if (numberElement) {
            gsap.from(numberElement, {
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              scale: 0,
              rotation: -180,
              opacity: 0,
              duration: 1,
              delay: index * 0.2 + 0.3,
              ease: "back.out(1.7)",
            });
          }

          // Icon animation
          const iconElement = card.querySelector(".step-icon");
          if (iconElement) {
            gsap.from(iconElement, {
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
              scale: 0,
              rotation: 360,
              opacity: 0,
              duration: 0.8,
              delay: index * 0.2 + 0.5,
              ease: "back.out(1.7)",
            });
          }

          // Content reveal
          const contentElements = card.querySelectorAll(".step-content > *");
          gsap.from(contentElements, {
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: index * 0.2 + 0.6,
            ease: "power3.out",
          });
        });

        // Connection lines animation
        const lines = stepsRef.current.querySelectorAll(".connection-line");
        lines.forEach((line, index) => {
          gsap.from(line, {
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.3 + 0.5,
            ease: "power2.inOut",
          });
        });
      }

      // Parallax effect on background
      if (sectionRef.current) {
        const bgElements = sectionRef.current.querySelectorAll(".bg-orb");
        bgElements.forEach((orb, index) => {
          gsap.to(orb, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: index % 2 === 0 ? -100 : 100,
            ease: "none",
          });
        });
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
        <div className="bg-orb absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="bg-orb absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-24">
          <h2
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            From Idea to Impact
          </h2>
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
          >
            A proven methodology that delivers exceptional results, every time
          </p>
        </div>

        {/* Process steps */}
        <div ref={stepsRef} className="relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="step-card group relative h-full">
                    {/* Card container */}
                    <div className="relative border border-white/10 rounded-3xl p-8 lg:p-10 min-h-[450px] flex flex-col bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
                      {/* Large step number background */}
                      <div className="step-number absolute top-8 right-8 text-[120px] font-bold text-white/5 leading-none pointer-events-none">
                        {step.number}
                      </div>

                      {/* Step number badge */}
                      <div className="step-number mb-6 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/30 bg-black/50 backdrop-blur-sm group-hover:border-white group-hover:bg-white transition-all duration-500">
                          <span className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-500">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="step-icon mb-6 relative z-10">
                        <div className="inline-flex p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-500">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="step-content flex-grow relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-500">
                          {step.title}
                        </h3>

                        <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom accent line */}
                      <div className="mt-6 relative z-10">
                        <div className="h-1 bg-white/20 rounded-full group-hover:bg-white transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Connection line between cards (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="connection-line hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-white/30 to-transparent transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        {onNavigate && (
          <div className="mt-24 text-center">
            <button
              onClick={() => onNavigate("services")}
              className="group inline-flex items-center gap-3 text-white text-xl font-light hover:gap-5 transition-all duration-300"
            >
              Learn more about our process
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
