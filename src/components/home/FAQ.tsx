import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

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
  const { elementRef, hasTriggered } = useScrollTrigger();

  const toggleFAQ = (idx: number) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <section
      ref={elementRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4 glass px-4 py-2 rounded-full">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openFAQ === idx}
              onClick={() => toggleFAQ(idx)}
              hasTriggered={hasTriggered}
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
  hasTriggered: boolean;
}

const FAQItem = ({
  faq,
  index,
  isOpen,
  onClick,
  hasTriggered,
}: FAQItemProps) => {
  return (
    <div
      className={`group bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/5 ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 50}ms` : "0ms",
      }}
    >
      {/* Header Button */}
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-700/20 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-white text-left group-hover:text-amber-400 transition-colors duration-300">
          {faq.question}
        </h3>
        <div
          className={`text-amber-500 transition-all duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={24} />
        </div>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="animate-slide-in-up border-t border-slate-700/50 px-8 py-6 bg-gradient-to-b from-transparent to-slate-900/50">
          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
