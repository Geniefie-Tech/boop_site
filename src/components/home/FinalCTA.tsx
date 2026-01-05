import { ArrowRight, Zap } from "lucide-react";
import { PageType } from "../../types";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

interface FinalCTAProps {
  onNavigate: (page: PageType) => void;
}

export const FinalCTA = ({ onNavigate }: FinalCTAProps) => {
  const { elementRef, hasTriggered } = useScrollTrigger();

  return (
    <section
      ref={elementRef}
      className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Glow Lines */}
      <div className="absolute top-0 left-1/4 w-1 h-64 bg-gradient-to-b from-amber-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-1/3 w-1 h-48 bg-gradient-to-t from-fuchsia-500 to-transparent opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-block mb-8 transition-all duration-1000 ${
            hasTriggered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="glass px-6 py-3 rounded-full border border-amber-500/30 text-amber-400 text-sm font-semibold flex items-center gap-2 mx-auto">
            <Zap size={16} />
            Ready to Transform Your Brand?
          </div>
        </div>

        {/* Main Heading */}
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "100ms" : "0ms",
          }}
        >
          Let's Build Something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-fuchsia-400">
            That Lasts
          </span>
        </h2>

        {/* Subheading */}
        <p
          className={`text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "200ms" : "0ms",
          }}
        >
          Have a challenge worth solving?
        </p>

        {/* Description */}
        <p
          className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "300ms" : "0ms",
          }}
        >
          Let's create something meaningful—and measurable. From strategy to
          execution, we're here to drive real results.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "400ms" : "0ms",
          }}
        >
          <button
            onClick={() => onNavigate("contact")}
            className="group bg-gradient-to-r from-amber-500 to-fuchsia-500 text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all hover:scale-105 inline-flex items-center gap-3 transform"
          >
            Start a Project
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </button>
          <button
            onClick={() => onNavigate("work")}
            className="text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/5 transition-all backdrop-blur-sm"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};
