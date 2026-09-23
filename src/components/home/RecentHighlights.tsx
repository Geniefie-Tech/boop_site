import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import highlightTruckloads from "../../assets/our work/porter_event/PHOTO-2026-09-15-17-12-40 3.jpg";
import porterVideo from "../../assets/our work/porter_event/portervideo.mp4";
import porterPoster from "../../assets/our work/porter_event/porterposter.jpg";
import poolParty from "../../assets/our work/willdthing/Product Pool Party.mp4";
import navapunjab from "../../assets/our work/willdthing/navapunjab.jpg";

gsap.registerPlugin(ScrollTrigger);

type Highlight = {
  title: string;
  client: string;
  // date: string;
  venue: string;
  // null renders a styled placeholder tile until real photography arrives
  image?: string | null;
  // when set, the card plays this video instead of the still image
  video?: string;
  accent: string;
};

// Placeholder copy - swap in real details and images as they are confirmed
const highlights: Highlight[] = [
  {
    title: "TruckLoads of Change event",
    client: "Porter",
    // date: "10 August 2026",
    venue: "The Lalit, New Delhi",
    video: porterVideo,
    image: porterPoster,
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Pool Party",
    client: "Wiildthing",
    // date: "Coming soon",
    venue: "New Delhi",
    image: null,
    video: poolParty,
    accent: "from-lime-400 to-emerald-500",
  },
  {
    title: "Stall at Bhartiya Vyapar Mahotsav 2026",
    client: "Porter",
    // date: "Coming soon",
    venue: "Pragati maidan ,New Delhi",
    image: highlightTruckloads,
    accent: "from-sky-400 to-indigo-500",
  },
  {
    title: "Navaa Punjab Conclave",
    client: "",
    // date: "Coming soon",
    venue: "Mohali,Punjab",
    image: navapunjab,
    accent: "from-rose-400 to-fuchsia-500",
  },
];

// Card media: video (loaded only once scrolled into view), still image, or placeholder
const HighlightMedia = ({ event }: { event: Highlight }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // A 36MB file should not download until the card is actually on screen
  useEffect(() => {
    if (!event.video || !containerRef.current) return;

    const target = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "200px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [event.video]);

  // Attach the source once, then play/pause as the card enters and leaves view.
  // Playback has to wait for the render that actually puts src on the element.
  useEffect(() => {
    if (isVisible) setShowVideo(true);
  }, [isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    if (isVisible) {
      video.play().catch(() => {
        /* autoplay blocked - poster stays visible */
      });
    } else {
      video.pause();
    }
  }, [showVideo, isVisible]);

  // Placeholder only when the card has neither a video nor a still
  if (!event.video && !event.image) {
    return (
      /* Placeholder until photography is supplied */
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${event.accent} opacity-20`}
        ></div>
        <div className="relative w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-white/70" />
        </div>
        <span className="relative text-white/60 text-[11px] uppercase tracking-[0.2em]">
          Image coming soon
        </span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0">
      {event.video ? (
        <video
          ref={videoRef}
          src={showVideo ? event.video : undefined}
          poster={event.image ?? undefined}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
        />
      ) : (
        <img
          src={event.image ?? undefined}
          alt={event.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
        />
      )}

      {/* Duotone wash that clears on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${event.accent} mix-blend-overlay opacity-40 group-hover:opacity-0 transition-opacity duration-700`}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
    </div>
  );
};

export const RecentHighlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      if (cardsRef.current) {
        gsap.from(cardsRef.current.querySelectorAll(".highlight-card"), {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 90,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16 text-center lg:text-left">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.3em]">
            Latest Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5 leading-tight">
            Recent Highlights
          </h2>
          <p className="text-lg font-light text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A look at the events we have brought to life most recently
          </p>
        </div>

        {/* Highlight cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((event, index) => (
            <article
              key={index}
              className={`highlight-card group ${
                index % 2 === 1 ? "lg:mt-16" : ""
              }`}
            >
              {/* Event image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                <HighlightMedia event={event} />

                {/* Index number */}
                <span className="absolute top-4 right-5 text-4xl font-bold text-white/25 group-hover:text-white/60 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Accent bar sliding in from the bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                ></div>
              </div>

              {/* Event name beneath the image */}
              <div className="pt-5">
                <p
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${event.accent} text-[11px] font-semibold uppercase tracking-[0.2em] mb-2`}
                >
                  {event.client}
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {event.title}
                </h3>

                {/* Underline that draws on hover */}
                <div
                  className={`mt-3 h-px w-10 bg-gradient-to-r ${event.accent} group-hover:w-full transition-all duration-700`}
                ></div>

                <p className="mt-3 text-sm text-gray-400 font-light">
                  {event.date}
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {event.venue}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
