import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageType } from "../../types";

interface FinalCTAProps {
  onNavigate: (page: PageType) => void;
}

export const FinalCTA = ({ onNavigate }: FinalCTAProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Main heading */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Let's grow your business!
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            Ready to transform your brand? Let's create something extraordinary
            together.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate("contact")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white text-black px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 hover:gap-5"
          >
            Work with us
            <ArrowRight
              size={24}
              className={`transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
