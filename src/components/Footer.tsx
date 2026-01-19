import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  // Facebook,
  // Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { PageType } from "../types";
import BoopLogo from "../../src/assets/Logo/BoopLogo.png";
import { useScrollTrigger } from "../hooks/useScrollAnimation";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const { elementRef, hasTriggered } = useScrollTrigger();

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Home", page: "home" as PageType },
    { label: "About", page: "about" as PageType },
    { label: "Services", page: "services" as PageType },
    { label: "Work", page: "work" as PageType },
  ];

  const services = [
    "Brand Strategy",
    "Creative Design",
    "Digital Marketing",
    "Web Development",
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/booporg-private-limited/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/booporg_/",
    },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@booporg.com" },
    { icon: Phone, label: "Phone", value: "+91 98110 66616" },
    {
      icon: MapPin,
      label: "Address",
      value:
        "Bhutani Alphathum, Tower-B, Office No. 504–505, Sector 90, Noida, Uttar Pradesh – 201304, India",
    },
  ];

  return (
    <footer
      ref={elementRef}
      className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div
            className={`transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-[150px] relative h-20 mb-6">
              <img
                src={BoopLogo}
                className="h-full w-full object-cover"
                alt="BoopOrg Logo"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A 360° creative and marketing agency building brands that perform.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: hasTriggered ? "100ms" : "0ms",
            }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className="text-gray-400 hover:text-amber-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: hasTriggered ? "200ms" : "0ms",
            }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`md:col-span-2 transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: hasTriggered ? "300ms" : "0ms",
            }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="p-2 bg-amber-500/20 rounded-lg group-hover:bg-amber-500 transition-all duration-300">
                      <Icon
                        className="text-amber-400 group-hover:text-white transition-colors"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <p className="text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © {new Date().getFullYear()} BoopOrg. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-amber-500 text-slate-900 rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/40 hover:scale-110 opacity-0 hover:opacity-100 focus:opacity-100 z-40"
          aria-label="Back to top"
        >
          <ArrowRight className="rotate-180" size={24} />
        </button>
      </div>
    </footer>
  );
};
