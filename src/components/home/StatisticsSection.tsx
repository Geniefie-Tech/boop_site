import {
  useScrollTrigger,
  useCountAnimation,
} from "../../hooks/useScrollAnimation";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

export const StatisticsSection = () => {
  const { elementRef, hasTriggered } = useScrollTrigger();

  const stats = [
    {
      value: 350,
      label: "Businesses Trust Us",
      icon: Users,
      suffix: "+",
    },
    {
      value: 500,
      label: "Projects Completed",
      icon: TrendingUp,
      suffix: "+",
    },
    {
      value: 98,
      label: "Client Satisfaction",
      icon: Award,
      suffix: "%",
    },
    {
      value: 15,
      label: "Years of Experience",
      icon: Zap,
      suffix: "+",
    },
  ];

  return (
    <section
      ref={elementRef}
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our Impact By Numbers
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Building brands that drive real business growth and meaningful
            results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              hasTriggered={hasTriggered}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: number;
    label: string;
    icon: React.ElementType;
    suffix: string;
  };
  index: number;
  hasTriggered: boolean;
}

const StatCard = ({ stat, index, hasTriggered }: StatCardProps) => {
  const Icon = stat.icon;
  const animatedValue = useCountAnimation(stat.value, 2000, hasTriggered);

  return (
    <div
      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-2xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10 transform hover:-translate-y-2 ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 150}ms` : "0ms",
      }}
    >
      {/* Icon Background */}
      <div className="absolute top-6 right-6 p-3 bg-gradient-to-br from-amber-500/20 to-fuchsia-500/10 rounded-lg group-hover:from-amber-500/30 group-hover:to-fuchsia-500/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-amber-500" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4">
          <div
            className={`text-5xl font-bold bg-gradient-to-r from-amber-500 to-fuchsia-400 bg-clip-text text-transparent transition-all duration-500 ${
              hasTriggered ? "opacity-100" : "opacity-0"
            }`}
          >
            {animatedValue}
            {stat.suffix}
          </div>
        </div>

        <p className="text-gray-300 font-medium">{stat.label}</p>

        {/* Bottom Accent Line */}
        <div
          className={`mt-4 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full group-hover:from-amber-400 transition-all duration-300 ${
            hasTriggered ? "w-12" : "w-0"
          }`}
        ></div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-fuchsia-500/5 rounded-2xl transition-all duration-300"></div>
    </div>
  );
};