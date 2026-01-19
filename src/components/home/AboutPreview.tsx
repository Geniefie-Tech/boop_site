import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";
import teamImage from "../../assets/team.png";

interface AboutPreviewProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPreview = ({ onNavigate }: AboutPreviewProps) => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.2 });

  return (
    <section
      ref={elementRef}
      className="py-32 bg-gradient-to-br from-black via-slate-950 to-black relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{
              transitionDelay: hasTriggered ? "200ms" : "0ms",
            }}
          >
            <div className="inline-block">
              {/*<span className="glass text-amber-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                About Preview
              </span>*/}
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[1] tracking-tighter">
              Strategy-Led.
              <br />
              <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Results-Driven.
              </span>
            </h2>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light">
              BoopOrg combines strategic insight, creative excellence, and
              flawless execution to help brands dominate their markets and
              achieve sustainable growth.
            </p>

            <button
              onClick={() => onNavigate("about")}
              className="group inline-flex items-center gap-2 text-amber-600 font-bold text-xl hover:gap-4 transition-all border-b-2 border-amber-500/30 hover:border-amber-500 pb-1"
            >
              Know More
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>

          {/* Right Image */}
          <div
            className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{
              transitionDelay: hasTriggered ? "400ms" : "0ms",
            }}
          >
            <img
              src={teamImage}
              alt="Creative team collaboration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
