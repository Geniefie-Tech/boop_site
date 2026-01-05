import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Boop's location: Bhutani Alphathum, Tower-B, Office No. 504–505, Sector 90, Noida
  const boopLocation = {
    lat: 28.5244,
    lng: 77.3827,
    address:
      "Bhutani Alphathum, Tower-B, Office No. 504–505, Sector 90, Noida, Uttar Pradesh – 201304, India",
  };

  const handlePinClick = () => {
    const mapsUrl = `https://www.google.com/maps?q=${boopLocation.lat},${boopLocation.lng}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Get in Touch
            <br />
            <span className="text-amber-500">With Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a brand challenge, campaign idea, or growth goal?
            <br />
            We're ready when you are.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@booporg.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98110 66616</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">{boopLocation.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-amber-500 to-fuchsia-500 text-slate-900 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Half-height black and white map section */}
      <section className="w-full h-96 relative overflow-hidden bg-black">
        {/* Black and white map container */}
        <div className="relative w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8736289906847!2d77.3827!3d28.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cede10b09dce1%3A0xd9d2ac3ec1e22c0!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1625000000000"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) contrast(1.2) brightness(0.9)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Custom pin marker */}
          <button
            onClick={handlePinClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full group cursor-pointer z-10 transition-transform hover:scale-125 duration-300"
            title="Click to open in Google Maps"
          >
            {/* Pin icon */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Pin shape */}
              <div className="relative w-16 h-24 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full rounded-b-none shadow-2xl flex items-start justify-center pt-2 group-hover:from-amber-400 group-hover:to-amber-500 transition-all">
                {/* Inner pin dot */}
                <MapPin size={28} className="text-white drop-shadow-lg" />

                {/* Pin pointer */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-amber-600 group-hover:border-t-amber-500"></div>
              </div>

              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-500 group-hover:border-amber-400 animate-ping opacity-60"></div>
            </div>

            {/* Info tooltip on hover */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-amber-500/50">
              <p className="text-sm font-semibold">Boop's Location</p>
              <p className="text-xs text-gray-300">Click to open in Maps</p>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
            </div>
          </button>
        </div>

        {/* Info card in bottom left corner */}
        <div className="absolute bottom-4 left-4 bg-slate-900 backdrop-blur-md bg-opacity-90 text-white px-4 py-3 rounded-lg shadow-2xl border border-amber-500/30 z-20 max-w-xs">
          <h3 className="font-bold text-lg text-amber-500 mb-1">
            Our Location
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-2">
            {boopLocation.address}
          </p>
          <button
            onClick={handlePinClick}
            className="w-full bg-gradient-to-r from-amber-500 to-fuchsia-500 text-slate-900 py-1.5 rounded-lg font-semibold text-xs hover:shadow-lg hover:shadow-amber-500/50 transition-all hover:scale-105"
          >
            Open in Google Maps
          </button>
        </div>
      </section>
    </div>
  );
};