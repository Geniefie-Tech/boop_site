import {
  useScrollTrigger,
  useCountAnimation,
} from "../../hooks/useScrollAnimation";

export const Impact = () => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.2 });

  const metrics = [
    { value: 100, label: "Years of combined industry experience", suffix: "+" },
    { value: 15, label: "Industries served across India", suffix: "+" },
    { value: 500, label: "Campaigns delivered across platforms", suffix: "+" },
    { value: 5, label: "Years of consistent brand growth", suffix: "+" },
  ];

  return (
    <section
      ref={elementRef}
      className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
          }}
          className="w-full h-full"
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4 glass px-4 py-2 rounded-full">
            Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Measured. <span className="text-fuchsia-400">Proven.</span>{" "}
            Scalable.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Our track record speaks to the real value we bring to every project
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10 hover:scale-105 overflow-hidden ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-fuchsia-500/5 transition-all duration-500 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div
          className={`text-6xl font-bold bg-gradient-to-r from-amber-500 to-fuchsia-400 bg-clip-text text-transparent mb-4 transition-all duration-500 ${
            hasTriggered ? "opacity-100" : "opacity-0"
          }`}
        >
          {animatedValue}
          {metric.suffix}
        </div>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {metric.label}
        </p>
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-transparent group-hover:from-amber-400 transition-all duration-300 ${
          hasTriggered ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
};