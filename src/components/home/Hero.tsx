import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";
import { useParallax } from "../../hooks/useScrollAnimation";

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const parallax = useParallax(25);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-20">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"
        style={{
          transform: `translateY(${parallax * 0.5}px)`,
        }}
      ></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Badge */}
          <div className="inline-block animate-fade-in">
            <div className="glass px-6 py-3 rounded-full border border-amber-500/30 text-amber-400 text-sm font-semibold flex items-center gap-2 mx-auto">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              Trusted by 350+ Businesses Worldwide
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              We Build Brands
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-fuchsia-400 to-lime-300 animate-pulse">
                That Perform.
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-fade-in delay-200">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Not just remembered.{" "}
              <span className="text-amber-500 font-medium">Chosen.</span> By
              your customers, for the right reasons.
            </p>
          </div>

          {/* Description */}
          {/* <div className="animate-fade-in delay-300">
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We are a 360° creative and marketing agency delivering
              strategy-led branding, performance-driven marketing, and scalable
              growth solutions for ambitious brands.
            </p>
          </div> */}

          {/* CTA Buttons */}
          <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => onNavigate("contact")}
              className="group bg-gradient-to-r from-amber-500 to-fuchsia-500 text-slate-950 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all hover:scale-105 flex items-center gap-2 transform"
            >
              Start a Project
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button
              onClick={() => onNavigate("work")}
              className="text-white border-2 border-amber-500/50 px-8 py-4 rounded-full font-semibold text-lg hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/5 transition-all backdrop-blur-sm"
            >
              View Our Work
            </button>
          </div>

          {/* Quick Stats */}
          {/* <div className="animate-fade-in delay-500 grid grid-cols-3 gap-4 md:gap-8 pt-12 max-w-2xl mx-auto">
            {[
              { number: "350+", text: "Clients" },
              { number: "500+", text: "Projects" },
              { number: "98%", text: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.text}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-2 hover:border-amber-400 transition-colors">
          <div className="w-1 h-3 bg-amber-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};