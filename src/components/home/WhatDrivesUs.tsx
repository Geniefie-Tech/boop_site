import { useEffect, useRef, useState } from "react";
import { Lightbulb, Sparkles, Target } from "lucide-react";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";
import { revealTextByWords, waveTextEffect } from "../../utils/splitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhatDrivesUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate first heading with word-by-word reveal
      if (heading1Ref.current) {
        revealTextByWords(heading1Ref.current, {
          start: "top 80%",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          onComplete: () => setIsAnimated(true),
        });
      }

      // Animate second heading with wave effect
      if (heading2Ref.current) {
        waveTextEffect(heading2Ref.current, {
          start: "top 75%",
          duration: 0.6,
          stagger: 0.02,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: Lightbulb,
      title: "Strategy First",
      description: "Every decision backed by insight, research, and clarity.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Ideas that inspire, engage, and elevate perception.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Results That Matter",
      description: "Execution focused on growth, reach, and ROI.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-slate-950 to-black relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4 glass px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/30">
            What Drives Us
          </span>
          <h2
            ref={heading1Ref}
            className="text-4xl md:text-5xl font-bold text-white mt-6"
          >
            Where Strategy Meets Creativity.
          </h2>
          <h2
            ref={heading2Ref}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mt-2"
          >
            Where Results Matter Most.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
              index={index}
              hasTriggered={isAnimated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PillarCardProps {
  pillar: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
  hasTriggered: boolean;
}

const PillarCard = ({ pillar, index, hasTriggered }: PillarCardProps) => {
  const Icon = pillar.icon;

  return (
    <div
      className={`group text-center p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 150}ms` : "0ms",
      }}
    >
      {/* Icon Container */}
      <div
        className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-full mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
      >
        <Icon className="text-white transition-colors" size={40} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
        {pillar.title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{pillar.description}</p>

      {/* Bottom Line */}
      <div
        className={`h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full group-hover:from-amber-400 transition-all duration-300 ${
          hasTriggered ? "w-12" : "w-0"
        } mx-auto`}
      ></div>
    </div>
  );
};
