import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PageType } from "../types";
import BoopLogo from "../../src/assets/Logo/BoopLogo.png";
interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  // WhatsApp configuration
  const whatsappNumber = 9310333816; // TODO: Add your WhatsApp number here
  const whatsappMessage = "Hi! I'd like to start a conversation with BoopOrg.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; page: PageType }[] = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Work", page: "work" },
    { label: "Clients", page: "clients" },
    { label: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="h-[120px] mt-8">
              <img src={BoopLogo} className="h-full w-full" />
            </div>
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 ${
                    currentPage === item.page
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300"
                >
                  Let's Discuss
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-2.5 rounded-full transition-all hover:scale-110 shadow-lg animate-whatsapp-pop"
                  aria-label="Contact us on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  {/* Pulsing Ring Effect */}
                  <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping opacity-40"></span>

                  <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 relative z-10"
                  >
                    <path d="M16.002 0C7.165 0 0 7.165 0 16.002c0 2.833.744 5.49 2.04 7.802L.696 31.197l7.594-1.99c2.23 1.213 4.792 1.91 7.512 1.91h.006c8.832 0 16-7.165 16-16C31.808 7.165 24.838 0 16.002 0zm0 29.27c-2.407 0-4.766-.647-6.828-1.87l-.488-.29-5.064 1.327 1.352-4.938-.318-.506C2.94 21.036 2.27 18.56 2.27 16.002c0-7.58 6.165-13.745 13.738-13.745 3.67 0 7.116 1.43 9.708 4.023 2.592 2.592 4.023 6.038 4.023 9.708 0 7.58-6.17 13.745-13.738 13.745v.001zm7.544-10.294c-.413-.207-2.448-1.208-2.827-1.345-.38-.138-.656-.207-.932.207-.276.413-1.07 1.345-1.31 1.62-.242.276-.483.31-.897.103-.413-.207-1.745-.644-3.323-2.05-1.23-1.095-2.06-2.448-2.3-2.86-.24-.414-.026-.638.18-.844.186-.186.414-.483.62-.724.207-.242.276-.414.414-.69.138-.276.07-.518-.034-.724-.103-.207-.932-2.244-1.276-3.07-.338-.804-.68-.696-.932-.707-.242-.01-.518-.013-.794-.013s-.724.103-1.103.518c-.38.413-1.448 1.414-1.448 3.448s1.483 4 1.69 4.276c.206.276 2.914 4.448 7.06 6.236.986.426 1.756.68 2.356.87.99.315 1.892.27 2.604.163.794-.118 2.448-.998 2.792-1.966.345-.966.345-1.794.242-1.966-.103-.172-.38-.276-.793-.483z" />
                  </svg>
                </button>
              </div>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`text-2xl font-light transition-colors ${
                currentPage === item.page
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all text-lg"
          >
            Start a Project
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-full font-medium transition-all text-lg flex items-center gap-3 animate-whatsapp-pop"
          >
            {/* Pulsing Ring Effect */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping opacity-40"></span>

            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-6 h-6 relative z-10"
            >
              <path d="M16.002 0C7.165 0 0 7.165 0 16.002c0 2.833.744 5.49 2.04 7.802L.696 31.197l7.594-1.99c2.23 1.213 4.792 1.91 7.512 1.91h.006c8.832 0 16-7.165 16-16C31.808 7.165 24.838 0 16.002 0zm0 29.27c-2.407 0-4.766-.647-6.828-1.87l-.488-.29-5.064 1.327 1.352-4.938-.318-.506C2.94 21.036 2.27 18.56 2.27 16.002c0-7.58 6.165-13.745 13.738-13.745 3.67 0 7.116 1.43 9.708 4.023 2.592 2.592 4.023 6.038 4.023 9.708 0 7.58-6.17 13.745-13.738 13.745v.001zm7.544-10.294c-.413-.207-2.448-1.208-2.827-1.345-.38-.138-.656-.207-.932.207-.276.413-1.07 1.345-1.31 1.62-.242.276-.483.31-.897.103-.413-.207-1.745-.644-3.323-2.05-1.23-1.095-2.06-2.448-2.3-2.86-.24-.414-.026-.638.18-.844.186-.186.414-.483.62-.724.207-.242.276-.414.414-.69.138-.276.07-.518-.034-.724-.103-.207-.932-2.244-1.276-3.07-.338-.804-.68-.696-.932-.707-.242-.01-.518-.013-.794-.013s-.724.103-1.103.518c-.38.413-1.448 1.414-1.448 3.448s1.483 4 1.69 4.276c.206.276 2.914 4.448 7.06 6.236.986.426 1.756.68 2.356.87.99.315 1.892.27 2.604.163.794-.118 2.448-.998 2.792-1.966.345-.966.345-1.794.242-1.966-.103-.172-.38-.276-.793-.483z" />
            </svg>
            <span className="relative z-10">WhatsApp</span>
          </button>
        </nav>
      </div>
    </>
  );
};
