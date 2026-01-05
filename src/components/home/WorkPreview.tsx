import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

interface WorkPreviewProps {
  onNavigate: (page: PageType) => void;
}

export const WorkPreview = ({ onNavigate }: WorkPreviewProps) => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.2 });

  const brands = [
    "Paras Dairy",
    "Amar Ujala",
    "India TV",
    "Koffelo",
    "Porter",
    "PTC Network",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Work Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Our Impact in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with leading brands across FMCG, Media, Technology,
            Logistics, and Lifestyle, delivering campaigns that drive visibility
            and results.
          </p>
        </div>

        <div
          className={`mx-auto max-w-7xl grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "200ms" : "0ms",
          }}
        >
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Brand campaign"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Marketing campaign"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Creative work"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
        </div>

        <section className="py-16 lg:px-8 bg-slate-900 border-t border-grey/20">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Featured Brands
          </h3>
          <div className="max-w-7xl">
            <div className="client-marquee overflow-hidden">
              <div className="client-track flex items-center gap-12 animate-marquee">
                {[
                  "../../src/assets/Logo/amaarujala.png",
                  "../../src/assets/Logo/IndiaTV.png",
                  "../../src/assets/Logo/Lamar.png",
                  "../../src/assets/Logo/Porter.png",
                  "../../src/assets/Logo/wildthing.png",
                  "../../src/assets/Logo/Koffelo.png",
                ]
                  .concat([
                    "../../src/assets/Logo/amaarujala.png",
                    "../../src/assets/Logo/IndiaTV.png",
                    "../../src/assets/Logo/Lamar.png",
                    "../../src/assets/Logo/Porter.png",
                    "../../src/assets/Logo/wildthing.png",
                    "../../src/assets/Logo/Koffelo.png",
                  ])
                  .map((src, idx) => (
                    <img
                      src={src}
                      alt={`client-logo-${idx}`}
                      key={idx}
                      className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition"
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate("work")}
            className="group inline-flex items-center gap-2 text-amber-500 font-semibold text-lg hover:gap-4 transition-all"
          >
            View Case Studies
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
