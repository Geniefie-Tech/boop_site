import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useScrollAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import all images - Multiple images per project
import brandingUTH1 from "../assets/Healthways.jpg";
import brandingUTH2 from "../assets/healthways1.jpg";
import boop from "../assets/Logo/BoopLogo.png";
import brandingKoffelo1 from "../assets/our work/Branding and Packaging/Coffee Brand- Koffelo/Screenshot 2025-12-31 155520.png";

import brandingKoffelo2 from "../assets/our work/Branding and Packaging/Coffee Brand- Koffelo/Screenshot 2025-12-31 155529.png";
import brandingESL from "../assets/our work/Branding and Packaging/ESL Milk for Healthways/Screenshot 2025-12-31 155618.png";
import brandingMilkshake1 from "../assets/our work/Branding and Packaging/Milkshake Brand  - Paras Enjoy/Screenshot 2025-12-31 155537.png";
import brandingMilkshake2 from "../assets/our work/Branding and Packaging/Milkshake Brand  - Paras Enjoy/Screenshot 2025-12-31 155542.png";
// import brandingMozzarella from "../assets/our work/Branding and Packaging/Mozzarella Cheese packaging  Galacia/Screenshot 2025-12-31 155642.png";
import brandingMozzarella from "../assets/galacia.png";
//
import brandingMustard1 from "../assets/our work/Branding and Packaging/Mustard Oil Packaging for Paras/Screenshot 2025-12-31 155550.png";
import brandingMustard2 from "../assets/our work/Branding and Packaging/Mustard Oil Packaging for Paras/Screenshot 2025-12-31 155556.png";
import logoDesign1 from "../assets/our work/Branding and Packaging/Logo Design/All about data.png";
import logoDesign2 from "../assets/our work/Branding and Packaging/Logo Design/Click mania.png";
import logoDesign3 from "../assets/our work/Branding and Packaging/Logo Design/Cold Brew.png";
import brandingColdBrew from "../assets/coldbrew.png";
import brandingKoffeloNOC from "../assets/koffelo.png"; // Placeholder - replace with NOC images
import logoDesign4 from "../assets/our work/Branding and Packaging/Logo Design/Data Decore.png";
import logoDesign5 from "../assets/our work/Branding and Packaging/Logo Design/Entice.png";
import logoDesign6 from "../assets/our work/Branding and Packaging/Logo Design/Galacia.png";
import logoDesign7 from "../assets/our work/Branding and Packaging/Logo Design/Geniefie.png";
import logoDesign8 from "../assets/our work/Branding and Packaging/Logo Design/Grannys.png";
import logoDesign9 from "../assets/our work/Branding and Packaging/Logo Design/Informals.png";
import logoDesign10 from "../assets/our work/Branding and Packaging/Logo Design/Jaipur Jadu.png";
import logoDesign11 from "../assets/our work/Branding and Packaging/Logo Design/Koffelo.png";
import logoDesign12 from "../assets/our work/Branding and Packaging/Logo Design/Medispjre.png";
import logoDesign13 from "../assets/our work/Branding and Packaging/Logo Design/NBDA.png";
import logoDesign14 from "../assets/our work/Branding and Packaging/Logo Design/NIrala greenhire.png";
import logoDesign15 from "../assets/our work/Branding and Packaging/Logo Design/PPR ASAdham.png";
import logoDesign16 from "../assets/our work/Branding and Packaging/Logo Design/PTC concert.png";
import logoDesign17 from "../assets/our work/Branding and Packaging/Logo Design/Shandaar 75.png";
import logoDesign18 from "../assets/our work/Branding and Packaging/Logo Design/arah.png";
import emailerIndiaTV1 from "../assets/our work/Branding and Packaging/Emailer/Client India TV/Screenshot 2025-12-31 155844.png";
import emailerIndiaTV2 from "../assets/our work/Branding and Packaging/Emailer/Client India TV/Screenshot 2025-12-31 155848.png";
import emailerIndiaTV3 from "../assets/our work/Branding and Packaging/Emailer/Client India TV/Screenshot 2025-12-31 155854.png";
import emailerIndiaTV4 from "../assets/our work/Branding and Packaging/Emailer/Client India TV/Screenshot 2025-12-31 155905.png";
import emailerIndiaTV5 from "../assets/our work/Branding and Packaging/Emailer/Client India TV/Screenshot 2025-12-31 155912.png";
import emailerIndiaTV6 from "../assets/our work/Branding and Packaging/Emailer/Client India TV/Screenshot 2025-12-31 155922.png";
import emailerPTC1 from "../assets/our work/Branding and Packaging/Emailer/Client PTC Network/Screenshot 2025-12-31 155932.png";
import emailerPTC2 from "../assets/our work/Branding and Packaging/Emailer/Client PTC Network/Screenshot 2025-12-31 155940.png";

import btlChristmas1 from "../assets/our work/BTL Activities/Christmas Mall Décor Pacific Mall – New Delhi/Screenshot 2025-12-31 154043.png";
import btlChristmas2 from "../assets/our work/BTL Activities/Christmas Mall Décor Pacific Mall – New Delhi/Screenshot 2025-12-31 154050.png";
import btlDiwali1 from "../assets/our work/BTL Activities/Diwali  Merchandising Box – Paras Dairy/Screenshot 2025-12-31 153811.png";
import btlDiwali2 from "../assets/our work/BTL Activities/Diwali  Merchandising Box – Paras Dairy/Screenshot 2025-12-31 153818.png";
import btlGanesh1 from "../assets/our work/BTL Activities/Ganesh Chathurti campaign with ABP Majha/Screenshot 2025-12-31 153620.png";
import btlGanesh2 from "../assets/our work/BTL Activities/Ganesh Chathurti campaign with ABP Majha/Screenshot 2025-12-31 153624.png";
import btlChromebook1 from "../assets/our work/BTL Activities/Google Chromebook Pan INDIA Roadshow/Screenshot 2025-12-31 154006.png";
import btlChromebook2 from "../assets/our work/BTL Activities/Google Chromebook Pan INDIA Roadshow/Screenshot 2025-12-31 154014.png";
import btlHero1 from "../assets/our work/BTL Activities/Hero Electric Pan India Road Show 6 Months Campaign/Screenshot 2025-12-31 154024.png";
import btlHero2 from "../assets/our work/BTL Activities/Hero Electric Pan India Road Show 6 Months Campaign/Screenshot 2025-12-31 154032.png";
import btlHoli1 from "../assets/our work/BTL Activities/Holi Merchandising Box – Paras Dairy/Screenshot 2025-12-31 153837.png";
import btlHoli2 from "../assets/our work/BTL Activities/Holi Merchandising Box – Paras Dairy/Screenshot 2025-12-31 153844.png";
import btlVehicleVinyl1 from "../assets/our work/BTL Activities/Vehicle Branding Activity with Vinyl printing/Screenshot 2025-12-31 153730.png";
import btlVehicleVinyl2 from "../assets/our work/BTL Activities/Vehicle Branding Activity with Vinyl printing/Screenshot 2025-12-31 153735.png";
import btlVehiclePaint1 from "../assets/our work/BTL Activities/Vehicle Branding with painting/Screenshot 2025-12-31 153752.png";
import btlVehiclePaint2 from "../assets/our work/BTL Activities/Vehicle Branding with painting/Screenshot 2025-12-31 153803.png";
import btlMerchandising1 from "../assets/our work/BTL Activities/Merchandising T shirt/Screenshot 2025-12-31 153859.png";
import btlMerchandising2 from "../assets/our work/BTL Activities/Merchandising T shirt/Screenshot 2025-12-31 153915.png";
import btlMerchandising3 from "../assets/our work/BTL Activities/Merchandising T shirt/Screenshot 2025-12-31 153924.png";
import btlMerchandising4 from "../assets/our work/BTL Activities/Merchandising T shirt/Screenshot 2025-12-31 153930.png";
import btlMerchandising5 from "../assets/our work/BTL Activities/Merchandising T shirt/Screenshot 2025-12-31 153945.png";
import btlMerchandising6 from "../assets/our work/BTL Activities/Merchandising T shirt/Screenshot 2025-12-31 153954.png";
import btlNissan1 from "../assets/our work/BTL Activities/Nissan Kicks-Mall Activation Delhi-Mumbai-Kolkata-Bangalore & Kolkata/Screenshot 2025-12-31 154101.png";
import btlNissan2 from "../assets/our work/BTL Activities/Nissan Kicks-Mall Activation Delhi-Mumbai-Kolkata-Bangalore & Kolkata/Screenshot 2025-12-31 154111.png";
import btlPTCFilmfare1 from "../assets/our work/BTL Activities/PTC Digital Film Fare – On ground Activity/Screenshot 2025-12-31 153540.png";
import btlPTCFilmfare2 from "../assets/our work/BTL Activities/PTC Digital Film Fare – On ground Activity/Screenshot 2025-12-31 153545.png";

import eventAirtel1 from "../assets/our work/event/Airtel Annual Leadership Conclave - Dubai/Screenshot 2025-12-26 174226.png";
import eventAirtel2 from "../assets/our work/event/Airtel Annual Leadership Conclave - Dubai/Screenshot 2025-12-26 174238.png";
import eventBacardi1 from "../assets/our work/event/Bacardi- NH7 Weekender Express Chandigarh/Screenshot 2025-12-26 175336.png";
import eventBacardi2 from "../assets/our work/event/Bacardi- NH7 Weekender Express Chandigarh/Screenshot 2025-12-26 175355.png";
import eventHP1 from "../assets/our work/event/HP Asia Employee Meet & Gala Night/Screenshot 2025-12-26 174514.png";
import eventHP2 from "../assets/our work/event/HP Asia Employee Meet & Gala Night/Screenshot 2025-12-26 174520.png";
import eventPTC1 from "../assets/our work/event/PTC Filmfare Awards Taj Hotel - Chandigarh/Screenshot 2025-12-26 175243.png";
import eventPTC2 from "../assets/our work/event/PTC Filmfare Awards Taj Hotel - Chandigarh/Screenshot 2025-12-26 175306.png";
import eventParas1 from "../assets/our work/event/Paras Annual Sales Meeting Mussoorie, 2024/Screenshot 2025-12-26 173955.png";
import eventParas2 from "../assets/our work/event/Paras Annual Sales Meeting Mussoorie, 2024/Screenshot 2025-12-26 174000.png";
import eventRangotsav1 from "../assets/our work/event/Rangotsav/Screenshot 2025-12-26 175318.png";
import eventRangotsav2 from "../assets/our work/event/Rangotsav/Screenshot 2025-12-26 175326.png";
import eventViber1 from "../assets/our work/event/Viber 8 Festival/Screenshot 2025-12-26 174615.png";
import eventViber2 from "../assets/our work/event/Viber 8 Festival/Screenshot 2025-12-26 174623.png";
import eventWella1 from "../assets/our work/event/Wella Professionals Hometel, Chandigarh/Screenshot 2025-12-26 174251.png";
import eventWella2 from "../assets/our work/event/Wella Professionals Hometel, Chandigarh/Screenshot 2025-12-26 174304.png";

import exhibPragati1 from "../assets/our work/Exhibition Stall/1350 Sq. Meter Stall at Pragati Maidan,/Screenshot 2025-12-26 181315.png";
import exhibPragati2 from "../assets/our work/Exhibition Stall/1350 Sq. Meter Stall at Pragati Maidan,/Screenshot 2025-12-26 181322.png";
import exhibAahar1 from "../assets/our work/Exhibition Stall/Aahar 2025, New Delhi/Screenshot 2025-12-26 180849.png";
import exhibAahar2 from "../assets/our work/Exhibition Stall/Aahar 2025, New Delhi/Screenshot 2025-12-26 180857.png";
import exhibAnuga1 from "../assets/our work/Exhibition Stall/Anuga 2024, Mumbai/Screenshot 2025-12-26 180702.png";
import exhibAnuga2 from "../assets/our work/Exhibition Stall/Anuga 2024, Mumbai/Screenshot 2025-12-26 180839.png";
import exhibJSW1 from "../assets/our work/Exhibition Stall/Exhibition Stall for JSW, 2016/Screenshot 2025-12-26 181258.png";
import exhibJSW2 from "../assets/our work/Exhibition Stall/Exhibition Stall for JSW, 2016/Screenshot 2025-12-26 181307.png";
import exhibIITF1 from "../assets/our work/Exhibition Stall/IITF 2024, New Delhi/Screenshot 2025-12-26 180949.png";
import exhibIITF2 from "../assets/our work/Exhibition Stall/IITF 2024, New Delhi/Screenshot 2025-12-26 181119.png";
import exhibReliance1 from "../assets/our work/Exhibition Stall/Reliance Met City/Screenshot 2025-12-26 181333.png";
import exhibReliance2 from "../assets/our work/Exhibition Stall/Reliance Met City/Screenshot 2025-12-26 181341.png";
import exhibIFF1 from "../assets/our work/Exhibition Stall/IFF 2024, Mumbai/Screenshot 2025-12-26 181126.png";
import exhibIFF2 from "../assets/our work/Exhibition Stall/IFF 2024, Mumbai/Screenshot 2025-12-26 181231.png";
import exhibMithai1 from "../assets/our work/Exhibition Stall/The World Mithai Namkeen Convention & Expo 2024, New Delhi/Screenshot 2025-12-26 181241.png";
import exhibMithai2 from "../assets/our work/Exhibition Stall/The World Mithai Namkeen Convention & Expo 2024, New Delhi/Screenshot 2025-12-26 181248.png";

import socialParas1 from "../assets/our work/social media/Paras Dairy/Screenshot 2025-12-26 172521.png";
import socialParas2 from "../assets/our work/social media/Paras Dairy/Screenshot 2025-12-26 172526.png";
import socialAmarUjala1 from "../assets/our work/social media/amar ujala/Screenshot 2025-12-26 172409.png";
import socialAmarUjala2 from "../assets/our work/social media/amar ujala/Screenshot 2025-12-26 172418.png";
import socialIndiaTV1 from "../assets/our work/social media/india tv/Screenshot 2025-12-26 172657.png";
import socialIndiaTV2 from "../assets/our work/social media/india tv/Screenshot 2025-12-26 172707.png";
import socialKoffelo1 from "../assets/our work/social media/koffelo/Screenshot 2025-12-26 172806.png";
import socialKoffelo2 from "../assets/our work/social media/koffelo/Screenshot 2025-12-26 172815.png";
import socialKoffelo3 from "../assets/our work/social media/koffelo/Screenshot 2025-12-26 172848.png";
import socialKoffelo4 from "../assets/our work/social media/koffelo/Screenshot 2025-12-26 172902.png";
import socialKoffelo5 from "../assets/our work/social media/koffelo/Screenshot 2025-12-26 172914.png";
import socialKoffelo6 from "../assets/our work/social media/koffelo/Screenshot 2025-12-26 172922.png";
import socialPTC1 from "../assets/our work/social media/PTC/Screenshot 2025-12-26 172450.png";
import socialPTC2 from "../assets/our work/social media/PTC/Screenshot 2025-12-26 172501.png";
import socialGeniefie1 from "../assets/our work/social media/Geniefie/Screenshot 2025-12-26 172558.png";
import socialGeniefie2 from "../assets/our work/social media/Geniefie/Screenshot 2025-12-26 172608.png";
import socialGeniefie3 from "../assets/our work/social media/Geniefie/Screenshot 2025-12-26 172616.png";
import socialGeniefie4 from "../assets/our work/social media/Geniefie/Screenshot 2025-12-26 172630.png";
import socialGeniefie5 from "../assets/our work/social media/Geniefie/Screenshot 2025-12-26 172638.png";
import socialGeniefie6 from "../assets/our work/social media/Geniefie/Screenshot 2025-12-26 172647.png";

// Type definitions
type Project = {
  title: string;
  client: string;
  category: string;
  image: string;
  images: string[];
  video?: string;
  poster?: string;
};

// Modal Component
const ImageModal = ({
  isOpen,
  project,
  onClose,
}: {
  isOpen: boolean;
  project: any;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !project) return null;

  const images = project.images || [];
  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-start bg-gradient-to-b from-black to-transparent">
          <div className="text-white">
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <p className="text-amber-400 text-sm mt-1">{project.client}</p>
            <p className="text-gray-400 text-xs mt-2">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 transition-colors text-3xl font-bold hover:scale-110"
          >
            ✕
          </button>
        </div>

        {/* Main Media with scale animation */}
        <div className="relative bg-black rounded-lg overflow-hidden flex items-center justify-center min-h-[70vh]">
          {currentImage.includes(".mp4") ? (
            <video
              src={currentImage}
              controls
              autoPlay
              poster={project.poster}
              className="max-w-full max-h-[70vh] object-contain animate-fadeIn"
            />
          ) : (
            <img
              src={currentImage}
              alt={`${project.title} - ${currentIndex + 1}`}
              className="max-w-full max-h-[70vh] object-contain animate-fadeIn"
            />
          )}

          {/* Media Counter Badge */}
          <div className="absolute bottom-4 right-4 bg-amber-500 text-black px-4 py-2 rounded-full font-bold text-sm">
            {currentIndex + 1}/{images.length}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6 gap-4">
          <button
            onClick={prevImage}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            ← Previous
          </button>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto flex-1 py-2 px-2 bg-black/30 rounded-lg">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition-all hover:scale-110 ${
                  idx === currentIndex
                    ? "border-amber-500 scale-110 shadow-lg shadow-amber-500/50"
                    : "border-gray-600 hover:border-amber-400 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img.includes(".mp4") ? project.poster || img : img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextImage}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

// Horizontal Carousel Component with Marquee
const HorizontalCarousel = ({
  images,
}: // title,
// subtitle,
{
  images: string[];
  // title: string;
  // subtitle: string;
}) => {
  return (
    <div className="mb-20 animate-fade-in">
      {/* <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 animate-slide-in-left">
          {title}
        </h3>
        <p className="text-gray-600 text-lg mt-2 animate-slide-in-left delay-100">
          {subtitle}
        </p>
      </div> */}

      <div className="relative overflow-hidden rounded-lg">
        <div className="flex gap-6 py-6 px-4 carousel-marquee hover:pause">
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((img: string, idx: number) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={img}
                alt={`${""} ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WorkPage = () => {
  const { isVisible: isBrandingVisible, setElement: setBrandingRef } =
    useIntersectionObserver({ threshold: 0.1 });
  const { isVisible: isEmailerVisible, setElement: setEmailerRef } =
    useIntersectionObserver({ threshold: 0.1 });
  const { isVisible: isBTLVisible, setElement: setBTLRef } =
    useIntersectionObserver({ threshold: 0.1 });
  const { isVisible: isEventsVisible, setElement: setEventsRef } =
    useIntersectionObserver({ threshold: 0.1 });
  const { isVisible: isExhibitionVisible, setElement: setExhibitionRef } =
    useIntersectionObserver({ threshold: 0.1 });
  const { isVisible: isSocialVisible, setElement: setSocialRef } =
    useIntersectionObserver({ threshold: 0.1 });

  // Modal state for image viewing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animations
      const tl = gsap.timeline();

      // Animate hero text letters
      tl.from(".hero-content h1 span", {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .from(
          ".hero-content p",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".scroll-unfold-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.2",
        );

      // Animate background orbs
      gsap.to(".work-orb-1", {
        x: 100,
        y: -50,
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".work-orb-2", {
        x: -80,
        y: 60,
        scale: 0.9,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".work-orb-3", {
        x: 50,
        y: 80,
        scale: 1.1,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll-triggered animations for project cards
      gsap.utils.toArray(".project-card").forEach((card: any, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotateY: -15,
          duration: 1,
          ease: "power3.out",
          delay: (index % 2) * 0.2,
        });

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Section title animations
      gsap.utils.toArray(".section-title").forEach((title: any) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -100,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Category badges animation
      gsap.utils.toArray(".glass").forEach((badge: any, index) => {
        gsap.from(badge, {
          scrollTrigger: {
            trigger: badge,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0,
          rotation: 360,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Portfolio data organized by category with ALL images
  const portfolio = {
    "Branding & Packaging": [
      {
        title: "Active UTH Milk",
        client: "Healthways",
        category: "Branding & Packaging",

        image: brandingUTH1,

        images: [brandingUTH1, brandingUTH2],
      },
      {
        title: "Coffee Brand",
        client: "Koffelo",
        category: "Branding & Packaging",
        image: brandingKoffelo1,
        images: [brandingKoffelo1, brandingKoffelo2],
      },
      {
        title: "ESL Milk",
        client: "Healthways",
        category: "Branding & Packaging",
        image: brandingESL,

        images: [brandingESL],
      },
      {
        title: "Milkshake Brand",
        client: "Paras Enjoy",
        category: "Branding & Packaging",
        image: brandingMilkshake1,
        images: [brandingMilkshake1, brandingMilkshake2],
      },
      {
        title: "Mozzarella Cheese",
        client: "Galacia",
        category: "Branding & Packaging",
        image: brandingMozzarella,
        images: [brandingMozzarella],
      },
      {
        title: "Mustard Oil",
        client: "Paras",
        category: "Branding & Packaging",
        image: brandingMustard1,
        images: [brandingMustard1, brandingMustard2],
      },
      {
        title: "Logo Design",
        client: "Various",
        category: "Branding & Packaging",
        image: logoDesign1,
        images: [logoDesign1],
      },
      {
        title: "NOC Koffelo",
        client: "Koffelo",
        category: "Branding & Packaging",
        image: brandingKoffeloNOC,
        images: [brandingKoffeloNOC],
      },
      {
        title: "Cold Brew Coffee",
        client: "Cold Brew",
        category: "Branding & Packaging",
        image: brandingColdBrew,
        images: [brandingColdBrew],
      },
    ],
    "BTL Activities": [
      {
        title: "Christmas Mall Décor",
        client: "Pacific Mall",
        category: "BTL Activities",
        image: btlChristmas1,
        images: [btlChristmas1, btlChristmas2],
      },
      {
        title: "Diwali Merchandising",
        client: "Paras Dairy",
        category: "BTL Activities",
        image: btlDiwali1,
        images: [btlDiwali1, btlDiwali2],
      },
      {
        title: "Ganesh Chathurti Campaign",
        client: "ABP Majha",
        category: "BTL Activities",
        image: btlGanesh1,
        images: [btlGanesh1, btlGanesh2],
      },
      {
        title: "Google Chromebook Roadshow",
        client: "Google",
        category: "BTL Activities",
        image: btlChromebook1,
        images: [btlChromebook1, btlChromebook2],
      },
      {
        title: "Hero Electric Roadshow",
        client: "Hero Electric",
        category: "BTL Activities",
        image: btlHero1,
        images: [btlHero1, btlHero2],
      },
      {
        title: "Holi Merchandising",
        client: "Paras Dairy",
        category: "BTL Activities",
        image: btlHoli1,
        images: [btlHoli1, btlHoli2],
      },
      {
        title: "Vehicle Branding with Vinyl Printing",
        client: "Various",
        category: "BTL Activities",
        image: btlVehicleVinyl1,
        images: [btlVehicleVinyl1, btlVehicleVinyl2],
      },
      {
        title: "Vehicle Branding with Painting",
        client: "Various",
        category: "BTL Activities",
        image: btlVehiclePaint1,
        images: [btlVehiclePaint1, btlVehiclePaint2],
      },
      {
        title: "Nissan Kicks Mall Activation",
        client: "Nissan",
        category: "BTL Activities",
        image: btlNissan1,
        images: [btlNissan1, btlNissan2],
      },
      {
        title: "PTC Digital Film Fare",
        client: "PTC",
        category: "BTL Activities",
        image: btlPTCFilmfare1,
        images: [btlPTCFilmfare1, btlPTCFilmfare2],
      },
    ],
    Merchandising: [
      {
        title: "Diwali Merchandising",
        client: "Paras Dairy",
        category: "Merchandising",
        image: btlDiwali1,
        images: [btlDiwali1, btlDiwali2],
      },
      {
        title: "Holi Merchandising",
        client: "Paras Dairy",
        category: "Merchandising",
        image: btlHoli1,
        images: [btlHoli1, btlHoli2],
      },
      {
        title: "Merchandising T-Shirt",
        client: "Various",
        category: "Merchandising",
        image: btlMerchandising1,
        images: [
          btlMerchandising1,
          btlMerchandising3,
          btlMerchandising4,
          btlMerchandising5,
        ],
      },
    ],
    Events: [
      {
        title: "Airtel Leadership Conclave",
        client: "Airtel",
        category: "Events",
        image: eventAirtel1,
        images: [eventAirtel1, eventAirtel2],
      },
      {
        title: "Bacardi NH7 Weekender",
        client: "Bacardi",
        category: "Events",
        image: eventBacardi1,
        images: [eventBacardi1, eventBacardi2],
      },
      {
        title: "HP Asia Employee Meet",
        client: "HP Asia",
        category: "Events",
        image: eventHP1,
        images: [eventHP1, eventHP2],
      },
      {
        title: "PTC Filmfare Awards",
        client: "PTC",
        category: "Events",
        image: eventPTC1,
        images: [eventPTC1, eventPTC2],
      },
      {
        title: "Paras Annual Meeting",
        client: "Paras",
        category: "Events",
        image: eventParas1,
        images: [eventParas1, eventParas2],
      },
      {
        title: "Rangotsav Festival",
        client: "Rangotsav",
        category: "Events",
        image: eventRangotsav1,
        images: [eventRangotsav1, eventRangotsav2],
      },
      {
        title: "Viber 8 Festival",
        client: "Viber",
        category: "Events",
        image: eventViber1,
        images: [eventViber1, eventViber2],
      },
      {
        title: "Wella Professionals Event",
        client: "Wella Professionals",
        category: "Events",
        image: eventWella1,
        images: [eventWella1, eventWella2],
      },
    ],
    "Exhibition Stalls": [
      {
        title: "Pragati Maidan Stall",
        client: "Multi-Client",
        category: "Exhibition Stalls",
        image: exhibPragati1,
        images: [exhibPragati1, exhibPragati2],
      },
      {
        title: "Aahar 2025 Stall",
        client: "Aahar",
        category: "Exhibition Stalls",
        image: exhibAahar1,
        images: [exhibAahar1, exhibAahar2],
      },
      {
        title: "Anuga 2024 Stall",
        client: "Anuga",
        category: "Exhibition Stalls",
        image: exhibAnuga1,
        images: [exhibAnuga1, exhibAnuga2],
      },
      {
        title: "JSW Exhibition Stall",
        client: "JSW",
        category: "Exhibition Stalls",
        image: exhibJSW1,
        images: [exhibJSW1, exhibJSW2],
      },
      {
        title: "IITF 2024 Stall",
        client: "IITF",
        category: "Exhibition Stalls",
        image: exhibIITF1,
        images: [exhibIITF1, exhibIITF2],
      },
      {
        title: "Reliance Met City",
        client: "Reliance",
        category: "Exhibition Stalls",
        image: exhibReliance1,
        images: [exhibReliance1, exhibReliance2],
      },
      {
        title: "IFF 2024 Stall",
        client: "IFF Mumbai",
        category: "Exhibition Stalls",
        image: exhibIFF1,
        images: [exhibIFF1, exhibIFF2],
      },
      {
        title: "World Mithai Namkeen Convention 2024",
        client: "WMNC",
        category: "Exhibition Stalls",
        image: exhibMithai1,
        images: [exhibMithai1, exhibMithai2],
      },
    ],
    "Social Media": [
      {
        title: "Paras Dairy",
        client: "Paras Dairy",
        category: "Social Media",
        image: socialParas1,
        images: [socialParas1, socialParas2],
      },
      {
        title: "Amar Ujala",
        client: "Amar Ujala",
        category: "Social Media",
        image: socialAmarUjala1,
        images: [socialAmarUjala1, socialAmarUjala2],
      },
      {
        title: "India TV",
        client: "India TV",
        category: "Social Media",
        image: socialIndiaTV1,
        images: [socialIndiaTV1, socialIndiaTV2],
      },
      {
        title: "Koffelo",
        client: "Koffelo",
        category: "Social Media",
        image: socialKoffelo1,
        images: [
          socialKoffelo1,
          socialKoffelo2,
          socialKoffelo3,
          socialKoffelo4,
          socialKoffelo5,
          socialKoffelo6,
        ],
      },
      {
        title: "PTC",
        client: "PTC",
        category: "Social Media",
        image: socialPTC1,
        images: [socialPTC1, socialPTC2],
      },
      {
        title: "Geniefie",
        client: "Geniefie",
        category: "Social Media",
        image: socialGeniefie1,
        images: [
          socialGeniefie1,
          socialGeniefie2,
          socialGeniefie3,
          socialGeniefie4,
          socialGeniefie5,
          socialGeniefie6,
        ],
      },
    ],
    Emailer: [
      {
        title: "PTC Network Emailer",
        client: "PTC Network",
        category: "Emailer",
        image: emailerPTC1,
        images: [emailerPTC1, emailerPTC2],
      },
      {
        title: "India TV Emailer",
        client: "India TV",
        category: "Emailer",
        image: emailerIndiaTV1,
        images: [
          emailerIndiaTV1,
          emailerIndiaTV2,
          emailerIndiaTV3,
          emailerIndiaTV4,
          emailerIndiaTV5,
          emailerIndiaTV6,
        ],
      },
    ],
  };

  // Handle project click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // GSAP Animations - TODO: Uncomment when GSAP is imported and refs are defined
  /* useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero letter explosion animation
      gsap.from(".hero-letter", {
        scale: 0,
        opacity: 0,
        rotation: 360,
        stagger: {
          each: 0.05,
          from: "random",
        },
        duration: 1,
        ease: "back.out(2)",
      });

      // Floating orbs animation
      gsap.to(".floating-orb-work", {
        y: (i) => `random(-30, 30)`,
        x: (i) => `random(-30, 30)`,
        scale: (i) => `random(0.8, 1.2)`,
        duration: (i) => `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // Portfolio orbs animation
      gsap.to(".portfolio-orb", {
        scale: (i) => `random(0.9, 1.1)`,
        x: (i) => `random(-50, 50)`,
        y: (i) => `random(-50, 50)`,
        duration: (i) => `random(4, 6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      // Portfolio header reveal animation
      gsap.from(".portfolio-header-reveal", {
        scrollTrigger: {
          trigger: ".portfolio-header-reveal",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
      });

      // Reveal words stagger
      gsap.from(".reveal-word", {
        scrollTrigger: {
          trigger: ".reveal-title",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
        y: 50,
        opacity: 0,
        rotationX: -45,
        stagger: 0.1,
      });

      // Animated divider
      gsap.to(".animated-divider", {
        scaleX: 1.5,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });

      // Magnetic cards animation
      gsap.utils.toArray<HTMLElement>(".magnetic-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15,
        });
      });

      // Category particle animation
      gsap.to(".category-particle", {
        y: "random(-100, -200)",
        x: "random(-50, 50)",
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.1,
      });

      // Stats counter animation
      const statItems = gsap.utils.toArray<HTMLElement>(".stat-item");
      statItems.forEach((item) => {
        const counter = item.querySelector("div[data-target]");
        if (counter) {
          const target = parseInt(counter.getAttribute("data-target") || "0");
          const isPercentage = counter.textContent?.includes("%");

          ScrollTrigger.create({
            trigger: item,
            start: "top 80%",
            onEnter: () => {
              gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out",
                onUpdate: function () {
                  const current = Math.round(this.targets()[0].innerText);
                  this.targets()[0].innerText = isPercentage
                    ? `${current}%`
                    : `${current}+`;
                },
              });
            },
          });
        }
      });

      // Particles animation
      gsap.utils
        .toArray<HTMLElement>(".particle-work")
        .forEach((particle, i) => {
          gsap.to(particle, {
            y: `random(-150, 150)`,
            x: `random(-150, 150)`,
            rotation: `random(0, 360)`,
            scale: `random(0.5, 2)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1,
          });
        });

      // Unfold curtain timeline
      const unfoldTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Curtain unfold effect
      unfoldTimeline
        .to(
          ".unfold-curtain",
          {
            scaleY: 0,
            transformOrigin: "top",
            ease: "power2.inOut",
          },
          0,
        )
        // Hero content fades and moves up
        .to(
          ".hero-content",
          {
            y: -100,
            opacity: 0,
            scale: 0.95,
            ease: "power2.in",
          },
          0,
        )
        // Preview text appears
        .to(
          ".preview-text",
          {
            y: -50,
            opacity: 1,
            ease: "power2.out",
          },
          0.5,
        );

      // Hero Background Parallax
      gsap.to(heroRef.current?.querySelector(".sticky"), {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
      });

      // Floating Navigation Animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "80% top",
        end: "bottom top",
        onEnter: () => {
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.4,
          });
        },
      });

      // Featured Section Split Reveal
      const featuredSection = document.querySelector(".featured-section");
      if (featuredSection) {
        gsap.fromTo(
          ".split-left",
          { x: "-100%" },
          {
            x: "0%",
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredSection,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          ".split-right",
          { x: "100%" },
          {
            x: "0%",
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredSection,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          ".featured-content",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredSection,
              start: "top 60%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      }

      // Category Section Animations
      categories.forEach((category) => {
        const section = document.getElementById(category.id);
        if (!section) return;

        // Header Animation with reveal effect
        const header = section.querySelector(".category-header");
        gsap.fromTo(
          header,
          { y: 100, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 1,
            scrollTrigger: {
              trigger: header,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          },
        );

        // Cards Stagger Animation with 3D effect
        const cards = section.querySelectorAll(".project-card");
        gsap.fromTo(
          cards,
          {
            y: 120,
            opacity: 0,
            scale: 0.85,
            rotationX: 45,
            rotationY: -15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 1,
            stagger: {
              each: 0.15,
              from: "start",
            },
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "top 30%",
              scrub: 1.5,
            },
          },
        );

        // Card hover parallax effect
        cards.forEach((card) => {
          const cardElement = card as HTMLElement;
          cardElement.addEventListener("mousemove", (e) => {
            const rect = cardElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(cardElement, {
              rotationX: rotateX,
              rotationY: rotateY,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          });
        });
      });

      // Pin the first section header during scroll
      ScrollTrigger.create({
        trigger: ".section-pin-header",
        start: "top 100px",
        end: "bottom 100px",
        pin: true,
        pinSpacing: false,
      });

      // Horizontal Scroll Showcase
      const showcaseSection = document.querySelector(".horizontal-showcase");
      if (showcaseSection) {
        const showcaseCards =
          showcaseSection.querySelectorAll(".showcase-card");

        gsap.to(showcaseCards, {
          xPercent: -100 * (showcaseCards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: showcaseSection,
            pin: true,
            scrub: 1,
            snap: 1 / (showcaseCards.length - 1),
            end: () => "+=" + showcaseSection.scrollWidth,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [categories]); */

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Hero Section with Scroll to Unfold */}
      <div ref={heroRef} className="relative h-[80vh] overflow-hidden">
        {/* Fixed Hero Content */}
        <div
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #000000 0%, #1a0a2e 50%, #16213e 100%)",
          }}
        >
          {/* Animated Background Elements with SVG Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              viewBox="0 0 1000 800"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="workOrbGrad1">
                  <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                </radialGradient>
                <radialGradient id="workOrbGrad2">
                  <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3A7BD5" stopOpacity="0.2" />
                </radialGradient>
                <radialGradient id="workOrbGrad3">
                  <stop offset="0%" stopColor="#FFE66D" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              {/* Floating orbs */}
              <circle
                className="work-orb-1"
                cx="200"
                cy="200"
                r="150"
                fill="url(#workOrbGrad1)"
                opacity="0.6"
              />
              <circle
                className="work-orb-2"
                cx="700"
                cy="400"
                r="200"
                fill="url(#workOrbGrad2)"
                opacity="0.5"
              />
              <circle
                className="work-orb-3"
                cx="500"
                cy="600"
                r="180"
                fill="url(#workOrbGrad3)"
                opacity="0.4"
              />

              {/* Particles */}
              {[...Array(25)].map((_, i) => (
                <circle
                  key={i}
                  className="particle-work"
                  cx={50 + i * 40}
                  cy={50 + (i % 5) * 150}
                  r={3 + (i % 3)}
                  fill={
                    ["#FF6B9D", "#00D2FF", "#FFE66D", "#8B5CF6", "#F59E0B"][
                      i % 5
                    ]
                  }
                  opacity="0.5"
                />
              ))}
            </svg>
          </div>

          {/* Unfold Curtain Effect */}
          <div className="unfold-curtain absolute inset-0 bg-black origin-top"></div>

          {/* Hero Content */}
          <div className="hero-content relative z-10 text-center px-6">
            <h1 className="text-7xl md:text-9xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-white/50">Work</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4 animate-fade-in-delay">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
                Transforming visions into reality
              </span>
            </p>

            {/* Scroll to Unfold Text */}
            <div className="scroll-unfold-text mt-12 animate-fade-in-delay-2">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
                <p className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
                  Scroll to unfold
                </p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
              </div>
              <button
                onClick={() => scrollToSection("branding")}
                className="group animate-bounce-slow"
              >
                <ChevronDown
                  size={48}
                  className="text-amber-500 group-hover:text-amber-400 transition-colors"
                />
              </button>
            </div>
          </div>

          {/* Preview Text that appears on scroll */}
          <div className="preview-text absolute bottom-20 left-0 right-0 text-center px-6 opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {"Selected Case Studies".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    background:
                      letter === " "
                        ? "transparent"
                        : `linear-gradient(135deg, ${
                            [
                              "#FF6B9D",
                              "#C44569",
                              "#8B5CF6",
                              "#00D2FF",
                              "#FFE66D",
                              "#F59E0B",
                            ][i % 6]
                          }, ${
                            [
                              "#C44569",
                              "#8B5CF6",
                              "#00D2FF",
                              "#3A7BD5",
                              "#F59E0B",
                              "#FF6B9D",
                            ][i % 6]
                          })`,
                    backgroundClip: letter === " " ? "border-box" : "text",
                    WebkitBackgroundClip:
                      letter === " " ? "border-box" : "text",
                    WebkitTextFillColor:
                      letter === " " ? "transparent" : "transparent",
                    display: "inline-block",
                    marginRight: letter === " " ? "1rem" : "0",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Explore our creative journey
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Reveal Section */}
      <div className="featured-section relative py-32 bg-black overflow-hidden flex items-center justify-center">
        {/* Split Screen Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-float"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Featured Image */}
        <div className="relative z-10 w-full h-96 md:h-[500px]">
          <img
            src={boop}
            alt="Featured Work"
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-end justify-center pb-12 z-20">
            <div className="text-center animate-fade-in delay-100">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-fuchsia-400">
                  Creative
                </span>{" "}
                Work
              </h1>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Award-winning campaigns across 6+ categories, showcasing
                strategic creativity and measurable impact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project Sections */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Branding Section */}
          <div id="branding" className="mb-32" ref={setBrandingRef}>
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isBrandingVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-amber-500 font-semibold text-sm uppercase tracking-widest">
                  Category 01
                </span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                BRANDING &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-fuchsia-400 to-cyan-400">
                  PACKAGING
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Creating distinctive brand identities that resonate with
                audiences and tell compelling stories through thoughtful design
                and strategic positioning.
              </p>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
                isBrandingVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Coffee Brand</h3>
                <p className="text-amber-400 text-lg font-semibold">Koffelo</p>
                <p className="text-gray-300 leading-relaxed">
                  A complete brand redesign for a premium coffee brand,
                  featuring elegant packaging design, visual identity system,
                  and market positioning across multiple touchpoints.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-slide-in-left delay-100">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Coffee Brand",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingKoffelo1}
                    alt="Koffelo 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Coffee Brand",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingKoffelo2}
                    alt="Koffelo 2"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-200">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Milkshake Brand",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingMilkshake1}
                    alt="Milkshake 1"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Milkshake Brand",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingMilkshake2}
                    alt="Milkshake 2"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Milkshake Brand
                </h3>
                <p className="text-fuchsia-400 text-lg font-semibold">
                  Paras Enjoy
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Vibrant packaging and brand identity for a premium milkshake
                  line. Fresh design approach that captures youthful energy
                  while maintaining premium positioning in the market.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Active UTH Milk
                </h3>
                <p className="text-green-400 text-lg font-semibold">
                  Healthways
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Strategic branding for a health-focused dairy product.
                  Designed to communicate nutrition and wellness benefits while
                  building trust with health-conscious consumers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Active UTH Milk",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingUTH2}
                    alt="UTH 1"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Active UTH Milk",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingUTH1}
                    alt="UTH 2"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Mozzarella Cheese",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingMozzarella}
                    alt="Mozzarella"
                    className="h-68 object-contain group-hover:scale-110 transition-transform duration-500 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Mozzarella Cheese
                </h3>
                <p className="text-yellow-400 text-lg font-semibold">Galacia</p>
                <p className="text-gray-300 leading-relaxed">
                  Premium cheese packaging design combining artisanal aesthetic
                  with modern retail appeal. Strategic visual identity for
                  specialty food positioning.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Mustard Oil Packaging
                </h3>
                <p className="text-amber-400 text-lg font-semibold">Paras</p>
                <p className="text-gray-300 leading-relaxed">
                  Bold, traditional packaging design for mustard oil that
                  captures heritage values while ensuring modern shelf presence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Mustard Oil",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingMustard1}
                    alt="Mustard 1"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Mustard Oil",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingMustard2}
                    alt="Mustard 2"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "ESL Milk",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingESL}
                    alt="ESL Milk"
                    className="h-68 object-contain group-hover:scale-110 transition-transform duration-500 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">ESL Milk</h3>
                <p className="text-blue-400 text-lg font-semibold">
                  Healthways
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Extended shelf life milk branding strategy. Contemporary
                  design communicating food safety, quality assurance, and
                  nutritional value to modern consumers.
                </p>
              </div>
            </div>

            {/* Logo Design Carousel */}
            <div className="mt-20">
              <HorizontalCarousel
                images={[
                  logoDesign1,
                  logoDesign2,
                  logoDesign3,
                  logoDesign4,
                  logoDesign5,
                  logoDesign6,
                  logoDesign7,
                  logoDesign8,
                  logoDesign9,
                  logoDesign10,
                  logoDesign11,
                  logoDesign12,
                  logoDesign13,
                  logoDesign14,
                  logoDesign15,
                  logoDesign16,
                  logoDesign17,
                  logoDesign18,
                ]}
                // title="Logo Design Collection"
                // subtitle="Brand Identity & Logo Marks"
              />
            </div>

            {/* NOC Koffelo Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">NOC Koffelo</h3>
                <p className="text-amber-400 text-lg font-semibold">Koffelo</p>
                <p className="text-gray-300 leading-relaxed">
                  NOC is India’s first Nitro-Cartridge Cold Brew Coffee, crafted
                  with premium Brazilian and Ethiopian beans. This concentrated
                  coffee shot delivers 2.4X caffeine—smooth, creamy, low acidic,
                  and packed with instant energy.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "NOC Koffelo",
                      ),
                    )
                  }
                >
                  <img
                    src={socialKoffelo2}
                    alt="NOC Koffelo"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cold Brew Coffee Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in">
              <div className="grid grid-cols-1 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-brown-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Branding & Packaging"].find(
                        (p) => p.title === "Cold Brew Coffee",
                      ),
                    )
                  }
                >
                  <img
                    src={brandingColdBrew}
                    alt="Cold Brew Coffee"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Cold Brew Coffee
                </h3>
                <p className="text-stone-400 text-lg font-semibold">
                  Cold Brew
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Experience the deep, rich flavor of cold brew in seconds.
                  Koffelo Cold Brew Instant Coffee Powder is crafted from 100%
                  premium Arabica beans using a slow cold brewing process for a
                  naturally smooth, low-acidity taste. Freeze-dried to lock in
                  freshness, just mix with cold or hot water / Milk-no brewing,
                  no waiting.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-32 relative h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-lg shadow-blue-500/20"></div>

          {/* Emailer Section */}
          <div className="mb-32" ref={setEmailerRef}>
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isEmailerVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-fuchsia-500 font-semibold text-sm uppercase tracking-widest">
                  Category 02
                </span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                EMAILER &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-amber-300">
                  CAMPAIGNS
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Crafting engaging email designs that drive conversions and
                deliver compelling brand messages directly to target audiences
                across digital channels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Emailer"].find(
                        (p) => p.title === "PTC Network Emailer",
                      ),
                    )
                  }
                >
                  <img
                    src={emailerPTC1}
                    alt="PTC 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Emailer"].find(
                        (p) => p.title === "PTC Network Emailer",
                      ),
                    )
                  }
                >
                  <img
                    src={emailerPTC2}
                    alt="PTC 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">PTC Network</h3>
                <p className="text-cyan-400 text-lg font-semibold">
                  Email Marketing Designs
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Professional email design and digital marketing campaigns for
                  entertainment networks, featuring responsive layouts, brand
                  guidelines compliance, and audience targeting.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-32 relative h-1 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent shadow-lg shadow-fuchsia-500/20"></div>

          {/* BTL Activities Section */}
          <div className="mb-32" ref={setBTLRef}>
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isBTLVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-cyan-500 font-semibold text-sm uppercase tracking-widest">
                  Category 03
                </span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                BTL ACTIVITIES &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-400 to-purple-400">
                  EVENTS
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transforming brands into immersive experiences through strategic
                ground activations, experiential marketing, and engaging
                consumer touchpoints.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Google Chromebook Roadshow
                </h3>
                <p className="text-blue-400 text-lg font-semibold">Google</p>
                <p className="text-gray-300 leading-relaxed">
                  Pan-India roadshow campaign showcasing the latest Chromebook
                  innovations. Multi-city activation engaging thousands of
                  consumers and demonstrating product capabilities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Google Chromebook Roadshow",
                      ),
                    )
                  }
                >
                  <img
                    src={btlChromebook1}
                    alt="Chromebook 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Google Chromebook Roadshow",
                      ),
                    )
                  }
                >
                  <img
                    src={btlChromebook2}
                    alt="Chromebook 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Christmas Mall Décor
                </h3>
                <p className="text-red-400 text-lg font-semibold">
                  Pacific Mall
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Spectacular Christmas decorations transforming Pacific Mall
                  into a festive wonderland. Large-scale visual merchandising
                  creating immersive holiday shopping experience.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Christmas Mall Décor",
                      ),
                    )
                  }
                >
                  <img
                    src={btlChristmas1}
                    alt="Christmas 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Christmas Mall Décor",
                      ),
                    )
                  }
                >
                  <img
                    src={btlChristmas2}
                    alt="Christmas 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in delay-300">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Ganesh Chathurti Campaign",
                      ),
                    )
                  }
                >
                  <img
                    src={btlGanesh1}
                    alt="Ganesh 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>

                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Ganesh Chathurti Campaign",
                      ),
                    )
                  }
                >
                  <img
                    src={btlGanesh2}
                    alt="Ganesh Campaign"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Ganesh Chathurti 360° Campaign
                </h3>
                <p className="text-purple-400 text-lg font-semibold">
                  ABP Majha
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Culturally resonant festival campaign celebrating Ganesh
                  Chathurti with authentic design and local engagement across
                  media channels.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in delay-400">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Hero Electric Roadshow
                </h3>
                <p className="text-green-400 text-lg font-semibold">
                  Hero Electric
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive 6-month pan-India roadshow showcasing electric
                  vehicle innovations. Multi-city activation driving awareness
                  and test drives across major markets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Hero Electric Roadshow",
                      ),
                    )
                  }
                >
                  <img
                    src={btlHero1}
                    alt="Hero 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Hero Electric Roadshow",
                      ),
                    )
                  }
                >
                  <img
                    src={btlHero2}
                    alt="Hero 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Branding with Vinyl Printing */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Vehicle Branding with Vinyl Printing
                </h3>
                <p className="text-cyan-400 text-lg font-semibold">
                  Various Clients
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Professional vehicle branding solutions using high-quality
                  vinyl printing. Transforming commercial vehicles into mobile
                  billboards with vibrant, durable graphics that capture
                  attention on the move.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) =>
                          p.title === "Vehicle Branding with Vinyl Printing",
                      ),
                    )
                  }
                >
                  <img
                    src={btlVehicleVinyl1}
                    alt="Vehicle Vinyl 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) =>
                          p.title === "Vehicle Branding with Vinyl Printing",
                      ),
                    )
                  }
                >
                  <img
                    src={btlVehicleVinyl2}
                    alt="Vehicle Vinyl 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Branding with Painting */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Vehicle Branding with Painting",
                      ),
                    )
                  }
                >
                  <img
                    src={btlVehiclePaint1}
                    alt="Vehicle Paint 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Vehicle Branding with Painting",
                      ),
                    )
                  }
                >
                  <img
                    src={btlVehiclePaint2}
                    alt="Vehicle Paint 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Vehicle Branding with Painting
                </h3>
                <p className="text-orange-400 text-lg font-semibold">
                  Various Clients
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Custom hand-painted vehicle branding for lasting impact.
                  Professional paint application creating permanent,
                  weather-resistant brand presence on commercial fleets.
                </p>
              </div>
            </div>

            {/* Nissan Kicks Mall Activation */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Nissan Kicks Mall Activation",
                      ),
                    )
                  }
                >
                  <img
                    src={btlNissan1}
                    alt="Nissan 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "Nissan Kicks Mall Activation",
                      ),
                    )
                  }
                >
                  <img
                    src={btlNissan2}
                    alt="Nissan 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Nissan Kicks Mall Activation
                </h3>
                <p className="text-red-400 text-lg font-semibold">
                  Nissan - Multi-City
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Premium mall activation campaign for Nissan Kicks across
                  Delhi, Mumbai, Kolkata, and Bangalore. Interactive displays
                  driving footfall and test drive bookings in high-traffic
                  retail locations.
                </p>
              </div>
            </div>

            {/* PTC Digital Film Fare */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  PTC Digital Film Fare
                </h3>
                <p className="text-yellow-400 text-lg font-semibold">
                  PTC Network
                </p>
                <p className="text-gray-300 leading-relaxed">
                  On-ground activation for PTC Digital Film Fare awards.
                  Engaging experiential setup driving audience participation and
                  social media buzz around the prestigious awards event.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "PTC Digital Film Fare",
                      ),
                    )
                  }
                >
                  <img
                    src={btlPTCFilmfare1}
                    alt="PTC Filmfare 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["BTL Activities"].find(
                        (p) => p.title === "PTC Digital Film Fare",
                      ),
                    )
                  }
                >
                  <img
                    src={btlPTCFilmfare2}
                    alt="PTC Filmfare 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-32 relative h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-lg shadow-purple-500/20"></div>

          {/* Events Section */}
          <div className="mb-32" ref={setEventsRef}>
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isEventsVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-purple-500 font-semibold text-sm uppercase tracking-widest">
                  Category 04
                </span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                EVENTS &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-red-400">
                  ACTIVATIONS
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Creating unforgettable brand moments through expertly executed
                events, conferences, and experiential activations that leave
                lasting impressions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Airtel Leadership Conclave
                </h3>
                <p className="text-indigo-400 text-lg font-semibold">
                  Airtel - Dubai
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Premium corporate event bringing together industry leaders in
                  Dubai for strategic conversations and networking. Luxury event
                  design with global standards.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Airtel Leadership Conclave",
                      ),
                    )
                  }
                >
                  <img
                    src={eventAirtel1}
                    alt="Airtel 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Airtel Leadership Conclave",
                      ),
                    )
                  }
                >
                  <img
                    src={eventAirtel2}
                    alt="Airtel 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-100">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-700/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Bacardi NH7 Weekender",
                      ),
                    )
                  }
                >
                  <img
                    src={eventBacardi1}
                    alt="Bacardi 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Bacardi NH7 Weekender",
                      ),
                    )
                  }
                >
                  <img
                    src={eventBacardi2}
                    alt="Bacardi 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Bacardi NH7 Weekender
                </h3>
                <p className="text-red-400 text-lg font-semibold">
                  Bacardi - Chandigarh
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Music festival activation bringing entertainment and brand
                  engagement to Chandigarh. Dynamic on-ground presence creating
                  memorable brand experiences for thousands.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  HP Asia Employee Meet
                </h3>
                <p className="text-cyan-400 text-lg font-semibold">
                  HP - Gala Night
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Corporate gala event celebrating HP Asia employee achievements
                  and fostering company culture through upscale dining and
                  entertainment experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "HP Asia Employee Meet",
                      ),
                    )
                  }
                >
                  <img
                    src={eventHP1}
                    alt="HP 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "HP Asia Employee Meet",
                      ),
                    )
                  }
                >
                  <img
                    src={eventHP2}
                    alt="HP 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-300">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "PTC Filmfare Awards",
                      ),
                    )
                  }
                >
                  <img
                    src={eventPTC1}
                    alt="PTC 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "PTC Filmfare Awards",
                      ),
                    )
                  }
                >
                  <img
                    src={eventPTC2}
                    alt="PTC 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  PTC Filmfare Awards
                </h3>
                <p className="text-yellow-400 text-lg font-semibold">
                  Taj Hotel - Chandigarh
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Grand awards ceremony celebrating cinema excellence. Luxury
                  venue setup with professional staging, lighting, and design
                  for prestigious television broadcast.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-400">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Paras Annual Sales Meet
                </h3>
                <p className="text-blue-400 text-lg font-semibold">
                  Mussoorie - 2024
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Prestigious annual gathering of Paras Dairy sales team in
                  scenic Mussoorie setting. Inspiring agenda with team building
                  activities and strategic business planning.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Paras Annual Meeting",
                      ),
                    )
                  }
                >
                  <img
                    src={eventParas1}
                    alt="Paras 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Paras Annual Meeting",
                      ),
                    )
                  }
                >
                  <img
                    src={eventParas2}
                    alt="Paras 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in delay-500">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Rangotsav Festival",
                      ),
                    )
                  }
                >
                  <img
                    src={eventRangotsav1}
                    alt="Rangotsav 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Events"].find(
                        (p) => p.title === "Rangotsav Festival",
                      ),
                    )
                  }
                >
                  <img
                    src={eventRangotsav2}
                    alt="Rangotsav 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Rangotsav Festival
                </h3>
                <p className="text-purple-400 text-lg font-semibold">
                  Rangotsav
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Vibrant cultural festival celebrating colors, art, and
                  creativity. Large-scale experiential activation bringing
                  communities together through artistic expression.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-32 relative h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-lg shadow-red-500/20"></div>

          {/* Exhibition Stalls Section */}
          <div className="mb-32" ref={setExhibitionRef}>
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isExhibitionVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-red-500 font-semibold text-sm uppercase tracking-widest">
                  Category 05
                </span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                EXHIBITION &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
                  STALLS
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Designing impactful exhibition spaces that command attention and
                create memorable brand experiences at major industry events and
                trade shows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {[
                {
                  img1: exhibPragati1,
                  img2: exhibPragati2,
                  title: "Pragati Maidan Stall",
                },
                {
                  img1: exhibAahar1,
                  img2: exhibAahar2,
                  title: "Aahar 2025 Stall",
                },
                {
                  img1: exhibAnuga1,
                  img2: exhibAnuga2,
                  title: "Anuga 2024 Stall",
                },
                {
                  img1: exhibJSW1,
                  img2: exhibJSW2,
                  title: "JSW Exhibition Stall",
                },
                {
                  img1: exhibIITF1,
                  img2: exhibIITF2,
                  title: "IITF 2024 Stall",
                },
                {
                  img1: exhibReliance1,
                  img2: exhibReliance2,
                  title: "Reliance Met City",
                },
                {
                  img1: exhibIFF1,
                  img2: exhibIFF2,
                  title: "IFF 2024 Stall",
                },
                {
                  img1: exhibMithai1,
                  img2: exhibMithai2,
                  title: "World Mithai Namkeen Convention 2024",
                },
              ].map((stall, idx) => (
                <div
                  key={idx}
                  className={`group cursor-pointer animate-fade-in delay-${(idx + 1) * 100}`}
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Exhibition Stalls"].find(
                        (p) => p.title === stall.title,
                      ),
                    )
                  }
                >
                  <div className="grid grid-cols-2 gap-2 mb-4 overflow-hidden rounded-lg relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={stall.img1}
                        alt={`${stall.title} 1`}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={stall.img2}
                        alt={`${stall.title} 2`}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 col-span-2">
                      <p className="text-white font-semibold">
                        Click to view full gallery
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {stall.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-32 relative h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-lg shadow-green-500/20"></div>

          {/* Social Media Section */}
          <div ref={setSocialRef}>
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isSocialVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-green-600 font-semibold text-sm uppercase tracking-widest">
                  Category 06
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                SOCIAL MEDIA &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-400 to-emerald-400">
                  DIGITAL
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
              {[
                {
                  img1: socialParas1,
                  img2: socialParas2,
                  title: "Paras Dairy",
                },
                {
                  img1: socialIndiaTV1,
                  img2: socialIndiaTV2,
                  title: "India TV",
                },
                {
                  img1: socialKoffelo4,
                  img2: socialKoffelo5,
                  title: "Koffelo",
                },
                {
                  img1: socialAmarUjala1,
                  img2: socialAmarUjala2,
                  title: "Amar Ujala",
                },
                {
                  img1: socialPTC1,
                  img2: socialPTC2,
                  title: "PTC",
                },
                {
                  img1: socialGeniefie1,
                  img2: socialGeniefie2,
                  title: "Geniefie",
                },
              ].map((social, idx) => (
                <div
                  key={idx}
                  className={`group cursor-pointer animate-fade-in delay-${(idx + 1) * 100}`}
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Social Media"].find(
                        (p) => p.title === social.title,
                      ),
                    )
                  }
                >
                  <div className="grid grid-cols-2 gap-2 mb-6 overflow-hidden rounded-lg relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={social.img1}
                        alt={`${social.title} 1`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={social.img2}
                        alt={`${social.title} 2`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 col-span-2">
                      <p className="text-white font-semibold">
                        Click to view full gallery
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {social.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-32 relative h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-lg shadow-pink-500/20"></div>

          {/* Merchandising Section */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="glass px-4 py-2 rounded-full text-pink-400 font-semibold text-sm uppercase tracking-widest">
                  Category 07
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                MERCHANDISING &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400">
                  PROMOTIONAL
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Custom branded merchandise and promotional campaigns that bring
                brands to life through quality products and creative executions.
              </p>
            </div>

            {/* Diwali Merchandising */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Diwali Merchandising
                </h3>
                <p className="text-orange-400 text-lg font-semibold">
                  Paras Dairy
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Festive campaign celebrating Diwali with specially designed
                  merchandising boxes. Captured the spirit of the celebration
                  while driving brand engagement and sales through thematic
                  packaging.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Merchandising"].find(
                        (p) => p.title === "Diwali Merchandising",
                      ),
                    )
                  }
                >
                  <img
                    src={btlDiwali1}
                    alt="Diwali 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Merchandising"].find(
                        (p) => p.title === "Diwali Merchandising",
                      ),
                    )
                  }
                >
                  <img
                    src={btlDiwali2}
                    alt="Diwali 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Holi Merchandising */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-100">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Merchandising"].find(
                        (p) => p.title === "Holi Merchandising",
                      ),
                    )
                  }
                >
                  <img
                    src={btlHoli1}
                    alt="Holi 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Merchandising"].find(
                        (p) => p.title === "Holi Merchandising",
                      ),
                    )
                  }
                >
                  <img
                    src={btlHoli2}
                    alt="Holi 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white">
                  Holi Merchandising
                </h3>
                <p className="text-rose-400 text-lg font-semibold">
                  Paras Dairy
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Festival merchandising campaign bringing colors of Holi to
                  retail spaces. Limited edition boxes designed to celebrate the
                  festival of colors with style and cultural authenticity.
                </p>
              </div>
            </div>

            {/* Merchandising T-Shirt */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in delay-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Merchandising T-Shirt
                </h3>
                <p className="text-violet-400 text-lg font-semibold">
                  Various Brands
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Custom branded merchandise bringing brands to life through
                  quality apparel. Creative t-shirt designs for promotional
                  campaigns, events, and brand visibility initiatives across
                  multiple industries.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Merchandising"].find(
                        (p) => p.title === "Merchandising T-Shirt",
                      ),
                    )
                  }
                >
                  <img
                    src={btlMerchandising3}
                    alt="Merchandising 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
                <div
                  className="project-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleProjectClick(
                      portfolio["Merchandising"].find(
                        (p) => p.title === "Merchandising T-Shirt",
                      ),
                    )
                  }
                >
                  <img
                    src={btlMerchandising5}
                    alt="Merchandising 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">
                      Click to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};
