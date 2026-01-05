import {
  ArrowRight,
  Target,
  Palette,
  TrendingUp,
  Code,
  Globe,
  Calendar,
  Video,
  BarChart,
  ShoppingBag,
} from "lucide-react";
import { PageType } from "../../types";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

interface ServicesSnapshotProps {
  onNavigate: (page: PageType) => void;
}

export const ServicesSnapshot = ({ onNavigate }: ServicesSnapshotProps) => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.1 });

  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      description: "Defining your brand essence",
    },
    {
      icon: Palette,
      title: "Creative Design & Visual Identity",
      description: "Stunning visual experiences",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Performance",
      description: "Data-driven growth campaigns",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Scalable digital solutions",
    },
    {
      icon: Globe,
      title: "360° Integrated Marketing",
      description: "Omnichannel strategies",
    },
    {
      icon: Calendar,
      title: "Events & On-Ground Marketing",
      description: "Memorable brand experiences",
    },
    {
      icon: Video,
      title: "Content Creation & Production",
      description: "Compelling visual storytelling",
    },
    {
      icon: BarChart,
      title: "Analytics & Growth",
      description: "Measurable results",
    },
    {
      icon: ShoppingBag,
      title: "Brand Assets & Merchandise",
      description: "Premium brand collateral",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4 glass px-4 py-2 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
            What We Do Best
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive range of services designed to elevate your brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              hasTriggered={hasTriggered}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: hasTriggered ? "600ms" : "0ms",
          }}
        >
          <button
            onClick={() => onNavigate("services")}
            className="group inline-flex items-center gap-2 text-amber-500 font-semibold text-lg hover:gap-4 transition-all border-b-2 border-amber-500/30 hover:border-amber-500 pb-1"
          >
            View All Services
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

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
  hasTriggered: boolean;
}

const ServiceCard = ({ service, index, hasTriggered }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div
      className={`group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10 hover:scale-105 overflow-hidden ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-fuchsia-500/5 transition-all duration-500 rounded-2xl"></div>

      {/* Icon Container */}
      <div className="relative z-10 mb-6">
        <div className="inline-flex p-4 bg-gradient-to-br from-amber-500/20 to-fuchsia-500/10 rounded-xl group-hover:from-amber-500/30 group-hover:to-fuchsia-500/20 transition-all duration-300">
          <Icon
            className="text-amber-500 group-hover:scale-110 transition-transform duration-300"
            size={28}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{service.description}</p>

        {/* Animated Arrow */}
        <div className="flex items-center text-amber-500/60 group-hover:text-amber-400 transition-all duration-300">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-transparent group-hover:h-1 transition-all duration-300 ${
          hasTriggered ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
};