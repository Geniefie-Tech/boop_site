import { useState } from "react";

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual WhatsApp number (include country code without + or spaces)
  // Example: "919876543210" for India, "14155552671" for US
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // TODO: Add your WhatsApp number here
  const message = "Hi! I'd like to start a project with BoopOrg.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-float"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse Effect */}
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></div>

        {/* Button Content */}
        <div className="relative flex items-center justify-center w-16 h-16 p-4">
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
            <path d="M16.002 0C7.165 0 0 7.165 0 16.002c0 2.833.744 5.49 2.04 7.802L.696 31.197l7.594-1.99c2.23 1.213 4.792 1.91 7.512 1.91h.006c8.832 0 16-7.165 16-16C31.808 7.165 24.838 0 16.002 0zm0 29.27c-2.407 0-4.766-.647-6.828-1.87l-.488-.29-5.064 1.327 1.352-4.938-.318-.506C2.94 21.036 2.27 18.56 2.27 16.002c0-7.58 6.165-13.745 13.738-13.745 3.67 0 7.116 1.43 9.708 4.023 2.592 2.592 4.023 6.038 4.023 9.708 0 7.58-6.17 13.745-13.738 13.745v.001zm7.544-10.294c-.413-.207-2.448-1.208-2.827-1.345-.38-.138-.656-.207-.932.207-.276.413-1.07 1.345-1.31 1.62-.242.276-.483.31-.897.103-.413-.207-1.745-.644-3.323-2.05-1.23-1.095-2.06-2.448-2.3-2.86-.24-.414-.026-.638.18-.844.186-.186.414-.483.62-.724.207-.242.276-.414.414-.69.138-.276.07-.518-.034-.724-.103-.207-.932-2.244-1.276-3.07-.338-.804-.68-.696-.932-.707-.242-.01-.518-.013-.794-.013s-.724.103-1.103.518c-.38.413-1.448 1.414-1.448 3.448s1.483 4 1.69 4.276c.206.276 2.914 4.448 7.06 6.236.986.426 1.756.68 2.356.87.99.315 1.892.27 2.604.163.794-.118 2.448-.998 2.792-1.966.345-.966.345-1.794.242-1.966-.103-.172-.38-.276-.793-.483z" />
          </svg>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <span className="text-sm font-medium">Chat with us on WhatsApp</span>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-slate-900"></div>
          </div>
        </div>
      </button>
    </div>
  );
};
