import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Jeet from "../../assets/Jeet.png";
import Kripal from "../../assets/Kripal.png";
import sid from "../../assets/Siddharth.png";
import neithal from "../../assets/Neithal.png";
import soman from "../../assets/Soman.png";
import udit from "../../assets/Udit.png";
import ali from "../../assets/Ali.png";
import ayush from "../../assets/Ayush.png";
import ravi from "../../assets/Ravi.png";
import inderjit from "../../assets/inderjit.png";
import shailin from "../../assets/Shailen.png";
import saurabh from "../../assets/Saurabh.png";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Siddharth Biswas",
    role: "CEO",
    image: sid,
  },
  {
    id: 2,
    name: "Soman Nandy",
    role: "CPO",
    image: soman,
  },
  {
    id: 3,
    name: "Shailin Bardhan",
    role: "Creative Head",
    image: shailin,
  },
  {
    id: 4,
    name: "Neithal Rajpurohit",
    role: "Frontend Developer",
    image: neithal,
  },
  {
    id: 5,
    name: "Jeet Kumar",
    role: "Event Manager",
    image: Jeet,
  },
  {
    id: 6,
    name: "Kripal Singh",
    role: "Graphic Designer",
    image: Kripal,
  },
  {
    id: 7,
    name: "Ali Raza",
    role: "Digital Marketing",
    image: ali,
  },
  {
    id: 8,
    name: "Saurabh Dixit",
    role: "Head of Strategy",
    image: saurabh,
  },
  {
    id: 9,
    name: "Ayush Kumar",
    role: "Backend Developer",
    image: ayush,
  },
  {
    id: 10,
    name: "Indrajeet",
    role: "Event Director",
    image: inderjit,
  },
  {
    id: 11,
    name: "Udit",
    role: "Digital Marketing",
    image: udit,
  },
];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        const headingElements = headingRef.current.children;
        gsap.from(headingElements, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        });
      }

      // Team cards animation
      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll(".team-card");

        cards.forEach((card, index) => {
          // Card reveal
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            rotation: -5,
            duration: 1,
            delay: (index % itemsPerView) * 0.15,
            ease: "power3.out",
          });

          // Image scale on scroll
          const image = card.querySelector(".team-image");
          if (image) {
            gsap.to(image, {
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
              scale: 1.1,
              ease: "none",
            });
          }
        });
      }

      // Background parallax
      if (sectionRef.current) {
        const bgOrbs = sectionRef.current.querySelectorAll(".bg-orb");
        bgOrbs.forEach((orb, index) => {
          gsap.to(orb, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: index % 2 === 0 ? -100 : 100,
            x: index % 2 === 0 ? 50 : -50,
            ease: "none",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [itemsPerView]);

  const nextSlide = () => {
    const maxIndex = teamMembers.length - itemsPerView;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = teamMembers.length - itemsPerView;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="bg-orb absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="bg-orb absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm mb-6">
            Our Team
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Leadership Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex-shrink-0 px-4 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                        ? "w-1/2"
                        : "w-1/3"
                  }`}
                >
                  <div className="team-card group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Image container */}
                    <div className="relative h-80 overflow-hidden bg-gray-900">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-image w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>

                    {/* Info */}
                    <div className="p-6 bg-black/60 backdrop-blur-sm relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 font-medium text-sm uppercase tracking-wide text-center group-hover:text-gray-300 transition-colors duration-300">
                        {member.role}
                      </p>

                      {/* Decorative line */}
                      <div className="mt-4 flex justify-center">
                        <div className="w-12 h-px bg-white/20 group-hover:w-full group-hover:bg-white transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 pointer-events-none transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-white text-black p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:bg-gray-100 group"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-white text-black p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:bg-gray-100 group"
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

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: Math.ceil(teamMembers.length / itemsPerView),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-white w-8"
                    : "bg-gray-600 w-2 hover:bg-gray-400"
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
