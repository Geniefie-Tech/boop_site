import { useState, useEffect } from "react";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";
import team1 from "../../assets/Jeet.png";
import team2 from "../../assets/Kripal.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";
import team7 from "../../assets/team7.png";
import team8 from "../../assets/team8.png";
import team9 from "../../assets/team9.png";
import team10 from "../../assets/team10.png";
import team11 from "../../assets/team11.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Soman Nandy",
    role: "CTO",
    image: team6,
  },
  {
    id: 2,
    name: "Siddharth Biswas",
    role: "CEO",
    image: team7,
  },

  {
    id: 3,
    name: "Shailin Bardhan",
    role: "Creative Head",
    image: team5,
  },
  {
    id: 4,
    name: "Neithal Rajpurohit",
    role: "Frontend Developer",
    image: team4,
  },
  {
    id: 5,
    name: "Jeet Kumar",
    role: "Event Manager",
    image: team1,
  },
  {
    id: 6,
    name: "Kripal Singh",
    role: "Graphic Designer ",
    image: team2,
  },

  {
    id: 7,
    name: "Ali Raza",
    role: "Digital Marketing",
    image: team3,
  },
  {
    id: 8,
    name: "Ali Raza",
    role: "Digital Marketing",
    image: team3,
  },
  {
    id: 9,
    name: "Ali Raza",
    role: "Digital Marketing",
    image: team3,
  },
  {
    id: 10,
    name: "Ali Raza",
    role: "Digital Marketing",
    image: team11,
  },
  {
    id: 11,
    name: "Ayush Kumar",
    role: "Backend Developer",
    image: team10,
  },
];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.1 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = teamMembers.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const nextSlide = () => {
    const maxIndex = teamMembers.length - itemsPerView;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = teamMembers.length - itemsPerView;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-black text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {teamMembers.map((member, idx) => (
                <div
                  key={member.id}
                  className={`flex-shrink-0 px-4 transition-all duration-1000 ${
                    hasTriggered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                  style={{
                    transitionDelay: hasTriggered ? `${idx * 100}ms` : "0ms",
                  }}
                >
                  <div className="group bg-grey/10 border border-grey/20 rounded-lg overflow-hidden hover:border-amber-500 transition-all hover:shadow-lg hover:shadow-amber-500/20">
                    <div className="relative h-96 overflow-hidden bg-grey/20 top-2">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain overflow-hidden group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-black text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-amber-500 font-semibold text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-amber-500 hover:bg-amber-400 text-slate-900 p-3 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-amber-500 hover:bg-amber-400 text-slate-900 p-3 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: Math.ceil(teamMembers.length / itemsPerView),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-amber-500 w-8" : "bg-grey/40 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
