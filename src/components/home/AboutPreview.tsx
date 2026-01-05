import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

interface AboutPreviewProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPreview = ({ onNavigate }: AboutPreviewProps) => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.2 });

  return (
    <section
      ref={elementRef}
      className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
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
              <span className="glass text-amber-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                About Preview
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Born From Passion.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Built for Impact.
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              BoopOrg blends insight, creativity, and execution to help brands
              connect with audiences and win in competitive markets. From
              strategy to storytelling to execution, we build brands that
              matter.
            </p>

            <button
              onClick={() => onNavigate("about")}
              className="group inline-flex items-center gap-2 text-amber-600 font-semibold text-lg hover:gap-4 transition-all border-b-2 border-amber-500/30 hover:border-amber-500 pb-1"
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
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Creative team collaboration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent group-hover:from-slate-900/30 transition-all duration-700"></div>

            {/* Float Card Overlay */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl backdrop-blur-sm border border-white/20 group-hover:shadow-2xl transition-shadow duration-700">
              <p className="text-gray-700 font-semibold">
                Award Winning Agency
              </p>
              <p className="text-amber-600 text-sm">Since 2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};