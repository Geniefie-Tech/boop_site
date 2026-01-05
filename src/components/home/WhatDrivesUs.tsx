import { Lightbulb, Sparkles, Target } from "lucide-react";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

export const WhatDrivesUs = () => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.2 });

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
      ref={elementRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4 glass px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Where Strategy Meets Creativity
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
              index={index}
              hasTriggered={hasTriggered}
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
      className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
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
      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
        {pillar.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">{pillar.description}</p>

      {/* Bottom Line */}
      <div
        className={`h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full group-hover:from-amber-400 transition-all duration-300 ${
          hasTriggered ? "w-12" : "w-0"
        } mx-auto`}
      ></div>
    </div>
  );
};
