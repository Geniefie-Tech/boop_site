import {
  useScrollTrigger,
  useCountAnimation,
  useParallax,
} from "../../hooks/useScrollAnimation";
import eventsImage from "../../assets/events.jpg";

export const Impact = () => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.2 });
  const parallax = useParallax(20);

  const metrics = [
    { value: 100, label: "Years of combined industry experience", suffix: "+" },
    { value: 15, label: "Industries served across India", suffix: "+" },
    { value: 500, label: "Campaigns delivered across platforms", suffix: "+" },
    { value: 5, label: "Years of consistent brand growth", suffix: "+" },
  ];

  return (
    <section ref={elementRef} className="py-40 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${eventsImage})`,
          transform: `translateY(${parallax * 0.3}px)`,
        }}
      ></div>

      {/* Dark Overlay for Text Contrast - Reduced for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/45 to-slate-950/50"></div>

      {/* Colored Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-fuchsia-950/20"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-amber-400 font-semibold text-base uppercase tracking-widest mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/30">
            Impact
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black text-white mt-6 leading-[1] tracking-tighter drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-fuchsia-400">
              Measured.
            </span>{" "}
            Proven.{" "}
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-lime-400">
              Scalable.
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl mx-auto mt-8 font-light leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            Our track record demonstrates the strategic value and consistent
            results we deliver
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              index={index}
              hasTriggered={hasTriggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  metric: {
    value: number;
    label: string;
    suffix: string;
  };
  index: number;
  hasTriggered: boolean;
}

const MetricCard = ({ metric, index, hasTriggered }: MetricCardProps) => {
  const animatedValue = useCountAnimation(metric.value, 2500, hasTriggered);

  return (
    <div
      className={`group relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-700/40 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105 overflow-hidden ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/15 group-hover:to-fuchsia-500/10 transition-all duration-500 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div
          className={`text-7xl md:text-8xl font-black bg-gradient-to-r from-amber-500 to-fuchsia-400 bg-clip-text text-transparent mb-4 tracking-tighter transition-all duration-500 ${
            hasTriggered ? "opacity-100" : "opacity-0"
          }`}
        >
          {animatedValue}
          {metric.suffix}
        </div>
        <p className="text-gray-100 leading-relaxed text-base md:text-lg font-medium drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
          {metric.label}
        </p>
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-fuchsia-500 group-hover:h-1.5 transition-all duration-300 ${
          hasTriggered ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
};
