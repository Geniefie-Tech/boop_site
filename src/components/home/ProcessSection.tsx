import { useScrollTrigger } from "../../hooks/useScrollAnimation";
import { Search, Pencil, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const { elementRef, hasTriggered } = useScrollTrigger();

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We dive deep into understanding your business, goals, target audience, and competitive landscape to create a strategic foundation.",
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

  return (
    <section
      ref={elementRef}
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4 glass px-4 py-2 rounded-full">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results, every time
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line */}
          <div
            className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 transform -translate-y-1/2 hidden lg:block ${
              hasTriggered ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ProcessCard
                key={index}
                step={step}
                index={index}
                hasTriggered={hasTriggered}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className={`mt-20 pt-20 border-t border-slate-700/50 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "600ms" : "0ms",
          }}
        >
          {[
            {
              title: "Strategic Alignment",
              desc: "Everything aligns with your business objectives",
            },
            {
              title: "Collaborative Approach",
              desc: "You're involved every step of the way",
            },
            {
              title: "Data-Driven",
              desc: "Decisions backed by insights and analytics",
            },
          ].map((benefit, i) => (
            <div key={i} className="text-center">
              <h4 className="text-white font-bold text-lg mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProcessCardProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
  hasTriggered: boolean;
  isLast: boolean;
}

const ProcessCard = ({
  step,
  index,
  hasTriggered,
  isLast,
}: ProcessCardProps) => {
  const Icon = step.icon;

  return (
    <div
      className={`group relative transition-all duration-1000 ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 150}ms` : "0ms",
      }}
    >
      {/* Card Container */}
      <div className="relative">
        {/* Step Number Background */}
        <div className="absolute -top-6 left-0 right-0 flex justify-center">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center border-4 border-slate-800 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">
                {step.number}
              </span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 pt-16 group-hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-fuchsia-500/5 transition-all duration-300 rounded-2xl"></div>

          {/* Icon */}
          <div className="relative z-10 mb-6 flex justify-center">
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/10 rounded-xl group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/20 transition-all duration-300">
              <Icon className="w-8 h-8 text-amber-500" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{step.description}</p>
          </div>

          {/* Arrow to Next Step */}
          {!isLast && (
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-8 h-8 border-2 border-cyan-500/30 rounded-full flex items-center justify-center group-hover:border-cyan-500 transition-colors duration-300 relative z-20">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              </div>
            </div>
          )}

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-transparent group-hover:from-amber-400 transition-all duration-300 w-full"></div>
        </div>
      </div>
    </div>
  );
};