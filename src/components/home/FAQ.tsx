import { useState } from "react";
import { ChevronDown } from "lucide-react";
import event1Image from "../../assets/event1.jpg";

const faqs = [
  {
    question: "What does Boop Org do?",
    answer:
      "Boop Org is a 360° creative and marketing agency that helps brands grow through strategy, design, marketing, and execution across digital, offline, and on-ground platforms.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across FMCG, Media, Technology, Logistics, Retail, Lifestyle, Events, and Services, delivering tailored solutions for each industry.",
  },
  {
    question: "Do you provide end-to-end marketing solutions?",
    answer:
      "Yes. From brand strategy and creative design to digital marketing, exhibitions, events, production, and analytics, we offer complete end-to-end solutions.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "Absolutely. We work with startups, SMEs, and large enterprises, adapting our approach based on brand size, objectives, and market stage.",
  },
  {
    question: "How soon can we start a project?",
    answer:
      "We can typically kick off projects within 1-2 weeks, depending on discovery and project complexity. Reach out to discuss your timeline.",
  },
  {
    question: "Do you offer customized packages?",
    answer:
      "Yes, we offer fully customized packages tailored to your brand's needs, budget, and goals. Let's talk about what works best for you.",
  },
];

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${event1Image})`,
        }}
      ></div>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/45 to-slate-950/50"></div>

      {/* Colored Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-fuchsia-950/20"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-base uppercase tracking-widest mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/30">
            FAQs
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black text-white leading-[1] tracking-tighter drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            Frequently Asked
            <br />
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-fuchsia-400">
              Questions
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mt-8 font-light leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openFAQ === idx}
              onClick={() => toggleFAQ(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ faq, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/40 hover:border-amber-500/60 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-fuchsia-500/5 to-amber-500/5 blur-xl"></div>
      </div>

      {/* Header Button */}
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-800/30 transition-all duration-300 relative z-10"
      >
        <h3 className="text-xl md:text-2xl font-bold text-white text-left group-hover:text-amber-400 transition-colors duration-300 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] tracking-tight">
          {faq.question}
        </h3>
        <div
          className={`text-amber-500 transition-all duration-500 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
          }`}
        >
          <ChevronDown size={24} />
        </div>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="border-t border-slate-700/50 px-8 py-6 bg-gradient-to-b from-transparent to-slate-900/60 animate-slide-in-up">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};
