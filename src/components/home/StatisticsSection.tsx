import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StatisticsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: 350,
      suffix: "+",
      label: "Businesses Trust Us",
    },
    {
      value: 500,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      value: 15,
      suffix: "+",
      label: "Years of Experience",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      // Stats animation with counter
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll(".stat-item");

        statElements.forEach((stat, index) => {
          const numberElement = stat.querySelector(".stat-number");
          const labelElement = stat.querySelector(".stat-label");

          // Number counter animation
          if (numberElement) {
            const targetValue = parseInt(
              numberElement.getAttribute("data-value") || "0",
            );
            const suffix = numberElement.getAttribute("data-suffix") || "";

            // Set initial value to 0
            numberElement.innerText = "0" + suffix;

            gsap.to(numberElement, {
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              innerText: targetValue,
              duration: 2,
              delay: index * 0.15,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate: function () {
                const value = Math.ceil(this.targets()[0].innerText);
                this.targets()[0].innerText = value + suffix;
              },
            });
          }

          // Label fade in
          if (labelElement) {
            gsap.from(labelElement, {
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              y: 20,
              opacity: 0,
              duration: 0.8,
              delay: index * 0.15 + 0.3,
              ease: "power3.out",
            });
          }
        });
      }

      // Background reveal animation
      if (sectionRef.current) {
        gsap.from(sectionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
          backgroundColor: "rgb(20, 20, 20)",
          ease: "none",
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
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Subtle grid pattern */}
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
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Proven Impact
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building brands that drive measurable growth and competitive
            advantage
          </p>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center group cursor-default"
            >
              {/* Large number */}
              <div className="mb-3 relative">
                <div className="relative inline-block">
                  <span
                    className="stat-number text-5xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-300 group-hover:scale-105"
                    data-value={stat.value}
                    data-suffix={stat.suffix}
                  >
                    {stat.value}
                    {stat.suffix}
                  </span>

                  {/* Decorative underline on hover */}
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>

              {/* Label */}
              <p className="stat-label text-sm md:text-base text-gray-400 font-light leading-snug transition-colors duration-300 group-hover:text-gray-300 px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
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

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};
