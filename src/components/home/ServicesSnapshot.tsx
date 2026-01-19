import { useEffect, useRef } from "react";
import {
  ArrowRight,
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
import { PageType } from "../../types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../../assets/bgc.jpg";

gsap.registerPlugin(ScrollTrigger);

interface ServicesSnapshotProps {
  onNavigate: (page: PageType) => void;
  limit?: number;
}

export const ServicesSnapshot = ({
  onNavigate,
  limit,
}: ServicesSnapshotProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      description: "Defining your brand essence",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Palette,
      title: "Creative Design & Visual Identity",
      description: "Stunning visual experiences",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Performance",
      description: "Data-driven growth campaigns",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Scalable digital solutions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "360° Integrated Marketing",
      description: "Omnichannel strategies",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Calendar,
      title: "Events & On-Ground Marketing",
      description: "Memorable brand experiences",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Video,
      title: "Content Creation & Production",
      description: "Compelling visual storytelling",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: BarChart,
      title: "Analytics & Growth",
      description: "Measurable results",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: "Brand Assets & Merchandise",
      description: "Premium brand collateral",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      // 1. MESMERIZING BACKGROUND PARALLAX WITH ZOOM
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          y: -200,
          scale: 1.3,
          rotation: 2,
          ease: "none",
        });
      }

      // 2. FLOATING GRADIENT ORBS WITH TRAILING EFFECT
      if (orbsRef.current) {
        const orbs = orbsRef.current.querySelectorAll(".gradient-orb");
        orbs.forEach((orb, index) => {
          // Main parallax movement
          gsap.to(orb, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2 + index * 0.5, // Different scrub speeds for trailing effect
            },
            y: index % 2 === 0 ? -250 : 250,
            x: index % 2 === 0 ? 150 : -150,
            rotation: index % 2 === 0 ? 360 : -360,
            scale: 1.5 + index * 0.2,
            ease: "none",
          });

          // Pulsing effect
          gsap.to(orb, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
            opacity: 0.15,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        });
      }

      // 3. EPIC HEADER REVEAL WITH 3D SPLIT
      if (headerRef.current) {
        const badge = headerRef.current.querySelector(".services-badge");
        const title = headerRef.current.querySelector(".services-title");
        const subtitle = headerRef.current.querySelector(".services-subtitle");
        const description = headerRef.current.querySelector(
          ".services-description",
        );

        // Badge spin reveal
        gsap.from(badge, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0,
          rotation: 720,
          duration: 1.2,
          ease: "back.out(2)",
        });

        // Title 3D reveal
        gsap.from(title, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 120,
          rotationX: -90,
          transformOrigin: "center bottom",
          duration: 1.4,
          delay: 0.2,
          ease: "power4.out",
        });

        // Subtitle slide reveal
        gsap.from(subtitle, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -100,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
        });

        // Description fade
        gsap.from(description, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
        });

        // Header parallax fade
        gsap.to(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          opacity: 0.4,
          y: -50,
          scale: 0.95,
          ease: "none",
        });
      }

      // 4. SERVICE CARDS - Simple fade in only
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".service-card");

        cards.forEach((card, index) => {
          // Simple fade in entrance
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
          });
        });
      }

      // 5. CTA BUTTON WITH MAGNETIC EFFECT
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          scale: 0.8,
          duration: 1,
          ease: "back.out(1.5)",
        });

        // Pulsing glow effect
        const button = ctaRef.current.querySelector("button");
        if (button) {
          gsap.to(button, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
            },
            boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
            duration: 1,
            repeat: 2,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }

      // 6. VIGNETTE INTENSITY ANIMATION
      if (sectionRef.current) {
        const vignette = sectionRef.current.querySelector(".vignette-effect");
        if (vignette) {
          gsap.to(vignette, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            opacity: 0.9,
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
      className="py-40 relative overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          willChange: "transform",
        }}
      ></div>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/40"></div>

      {/* Colored Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-fuchsia-950/10"></div>

      {/* Animated Gradient Orbs with Trailing Effect */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        <div className="gradient-orb absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="gradient-orb absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        <div className="gradient-orb absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="gradient-orb absolute top-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Vignette Effect */}
      <div className="vignette-effect absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="services-badge inline-block text-amber-400 font-semibold text-base uppercase tracking-widest mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/30">
            Our Expertise
          </span>
          <h2 className="services-title text-[clamp(2.5rem,6vw,6rem)] font-black text-white mt-6 mb-8 leading-[1] tracking-tighter drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            Comprehensive Solutions
          </h2>
          <h3 className="services-subtitle text-[clamp(2rem,5vw,5rem)] font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-fuchsia-400 leading-[1] tracking-tighter mb-8">
            for Brand Excellence
          </h3>
          <p className="services-description text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            Strategic services designed to elevate your brand and deliver
            measurable, sustainable growth
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16"
        >
          {services.slice(0, limit || services.length).map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="text-center">
          <button
            onClick={() => onNavigate("services")}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg px-10 py-5 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:gap-5 shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
            View All Services
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
  onNavigate: (page: PageType) => void;
}

const ServiceCard = ({ service, index, onNavigate }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div
      className="service-card group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/40 p-8 rounded-2xl hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105 overflow-hidden cursor-pointer"
      onClick={() => onNavigate("services")}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/15 group-hover:to-fuchsia-500/10 transition-all duration-500 rounded-2xl"></div>

      {/* Icon Container */}
      <div className="relative z-10 mb-6">
        <div className="inline-flex p-4 bg-gradient-to-br from-amber-500/20 to-fuchsia-500/10 rounded-xl group-hover:from-amber-500/30 group-hover:to-fuchsia-500/20 transition-all duration-300 shadow-lg">
          <Icon
            className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
            size={28}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="card-title text-white font-bold text-xl mb-3 group-hover:text-amber-400 transition-colors duration-300 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] tracking-tight">
          {service.title}
        </h3>
        <p className="card-description text-gray-200 text-base mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-light leading-relaxed">
          {service.description}
        </p>

        {/* Animated Arrow */}
        <div className="card-arrow flex items-center text-amber-400/70 group-hover:text-amber-400 transition-all duration-300">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-fuchsia-500 group-hover:h-1.5 transition-all duration-300"></div>
    </div>
  );
};
