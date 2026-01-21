import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { db, auth } from "../firebase/config";

gsap.registerPlugin(ScrollTrigger);

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [canSubmit, setCanSubmit] = useState(true);
  const [cooldownTime, setCooldownTime] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLButtonElement>(null);

  // Check rate limiting on mount
  useEffect(() => {
    const checkRateLimit = () => {
      const lastSubmission = localStorage.getItem("lastFormSubmission");
      if (lastSubmission) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
        const cooldownPeriod = 60000; // 1 minute in milliseconds

        if (timeSinceLastSubmission < cooldownPeriod) {
          setCanSubmit(false);
          setCooldownTime(
            Math.ceil((cooldownPeriod - timeSinceLastSubmission) / 1000),
          );
        }
      }
    };

    checkRateLimit();

    // Update cooldown timer every second
    const timer = setInterval(() => {
      const lastSubmission = localStorage.getItem("lastFormSubmission");
      if (lastSubmission) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
        const cooldownPeriod = 60000;

        if (timeSinceLastSubmission < cooldownPeriod) {
          setCooldownTime(
            Math.ceil((cooldownPeriod - timeSinceLastSubmission) / 1000),
          );
        } else {
          setCanSubmit(true);
          setCooldownTime(0);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current || !formRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero title animation - exploding letters
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

      // Subtitle fade in
      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Floating orbs
      gsap.to(".floating-orb", {
        y: (i) => `random(-30, 30)`,
        x: (i) => `random(-30, 30)`,
        scale: (i) => `random(0.8, 1.2)`,
        duration: (i) => `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // Form fields entrance
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -10 : 10),
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.5)",
      });

      // Contact info cards
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "elastic.out(1, 0.6)",
      });

      // Particle animation
      gsap.utils.toArray<HTMLElement>(".particle").forEach((particle, i) => {
        gsap.to(particle, {
          y: `random(-200, 200)`,
          x: `random(-200, 200)`,
          rotation: `random(0, 360)`,
          scale: `random(0.5, 2)`,
          duration: `random(4, 8)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      // Map section reveal
      gsap.from(".map-section", {
        scrollTrigger: {
          trigger: ".map-section",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      });

      // Success message animation
      if (submitted) {
        gsap.from(".success-message", {
          scale: 0,
          rotation: 720,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
      }
    }, containerRef);

    // Magnetic button effect
    const handleMouseMove = (e: MouseEvent) => {
      if (magneticRef.current && !isSubmitting && canSubmit) {
        const rect = magneticRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < 150) {
          const strength = 0.3;
          gsap.to(magneticRef.current, {
            x: distanceX * strength,
            y: distanceY * strength,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(magneticRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          });
        }
      }

      // Custom cursor
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isSubmitting, canSubmit, submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limiting
    if (!canSubmit) {
      setError(`Please wait ${cooldownTime} seconds before submitting again.`);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Animate form submission
    if (formRef.current) {
      gsap.to(formRef.current, {
        scale: 0.95,
        opacity: 0.5,
        duration: 0.3,
      });
    }

    try {
      // Sign in anonymously if not already signed in to get a uid
      if (!auth.currentUser) {
        await signInAnonymously(auth);
      }

      // Submit to Firebase Firestore
      await addDoc(collection(db, "formSubmissions"), {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        company: formData.company,
        message: formData.message,
        uid: auth.currentUser?.uid,
        createdAt: serverTimestamp(),
        status: "new",
      });
      console.log("efbhivy");
      // Set rate limit timestamp
      localStorage.setItem("lastFormSubmission", Date.now().toString());
      setCanSubmit(false);
      setCooldownTime(60);

      // Success animation
      if (formRef.current) {
        gsap.to(formRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      }

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          company: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.log("Error submitting form:", err);
      setError(
        "Failed to submit form. Please try again or contact us directly.",
      );

      if (formRef.current) {
        gsap.to(formRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <div ref={containerRef} className="overflow-hidden bg-slate-950">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ top: "-20px", left: "-20px" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-sm"></div>
      </div>

      {/* Hero Section with Floating Orbs */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 1000 800"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="orbGrad1">
                <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
              </radialGradient>
              <radialGradient id="orbGrad2">
                <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3A7BD5" stopOpacity="0.2" />
              </radialGradient>
              <radialGradient id="orbGrad3">
                <stop offset="0%" stopColor="#FFE66D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
              </radialGradient>
            </defs>

            {/* Floating orbs */}
            <circle
              className="floating-orb"
              cx="200"
              cy="300"
              r="150"
              fill="url(#orbGrad1)"
            />
            <circle
              className="floating-orb"
              cx="700"
              cy="200"
              r="180"
              fill="url(#orbGrad2)"
            />
            <circle
              className="floating-orb"
              cx="500"
              cy="600"
              r="160"
              fill="url(#orbGrad3)"
            />

            {/* Particles */}
            {[...Array(30)].map((_, i) => (
              <circle
                key={i}
                className="particle"
                cx={50 + i * 30}
                cy={50 + (i % 5) * 150}
                r={3 + (i % 3)}
                fill={
                  ["#FF6B9D", "#00D2FF", "#FFE66D", "#8B5CF6", "#F59E0B"][i % 5]
                }
                opacity="0.4"
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-7xl md:text-9xl font-black mb-8">
            <span className="text-white">Get in</span>{" "}
            <span className="text-white/50">Touch</span>
          </h1>

          <div className="hero-subtitle">
            <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed">
              Have a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                brand challenge
              </span>
              ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                campaign idea
              </span>
              , or{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
                growth goal
              </span>
              ?
              <br />
              We're ready when you are.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 relative">
        {/* Colorful background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Cards */}
            <div className="contact-info space-y-8">
              <h2 className="text-5xl md:text-6xl font-black mb-12">
                <span className="text-white">Let's</span>{" "}
                <span className="text-white/50">Connect</span>
              </h2>

              <div className="contact-card group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-white/90 text-base">info@booporg.com</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              <div className="contact-card group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-white/90 text-base">+91 98110 66616</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              <div className="contact-card group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Visit Us
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      {boopLocation.address}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="form-field">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-gray-300 mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl focus:border-purple-500 focus:outline-none transition-all text-white placeholder-gray-500 text-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gray-300 mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl focus:border-pink-500 focus:outline-none transition-all text-white placeholder-gray-500 text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-lg font-semibold text-gray-300 mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl focus:border-cyan-500 focus:outline-none transition-all text-white placeholder-gray-500 text-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="company"
                    className="block text-lg font-semibold text-gray-300 mb-3"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-yellow-500/30 rounded-2xl focus:border-yellow-500 focus:outline-none transition-all text-white placeholder-gray-500 text-lg"
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-gray-300 mb-3"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl focus:border-purple-500 focus:outline-none transition-all resize-none text-white placeholder-gray-500 text-lg"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <div className="bg-red-500/20 border-2 border-red-500 text-red-300 px-6 py-4 rounded-2xl text-base backdrop-blur-sm">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="success-message bg-green-500/20 border-2 border-green-500 text-green-300 px-6 py-4 rounded-2xl text-base backdrop-blur-sm flex items-center gap-3">
                    <Sparkles className="text-green-400" size={24} />
                    <span className="font-semibold">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                <button
                  ref={magneticRef}
                  type="submit"
                  disabled={submitted || isSubmitting || !canSubmit}
                  className="group relative w-full py-6 rounded-2xl font-bold text-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ willChange: "transform" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-center gap-3 text-white">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Magic...
                      </>
                    ) : submitted ? (
                      <>
                        <Sparkles size={24} />
                        Sent Successfully!
                      </>
                    ) : !canSubmit ? (
                      `Wait ${cooldownTime}s`
                    ) : (
                      <>
                        Send Message
                        <Send size={24} />
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section w-full h-[500px] relative overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8736289906847!2d77.3827!3d28.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cede10b09dce1%3A0xd9d2ac3ec1e22c0!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1625000000000"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "grayscale(100%) contrast(1.2) brightness(0.7) hue-rotate(220deg)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Animated Pin */}
          <button
            onClick={handlePinClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full group cursor-pointer z-10 transition-transform hover:scale-125 duration-300"
            title="Click to open in Google Maps"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>

              <div className="relative w-20 h-28 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 rounded-full rounded-b-none shadow-2xl flex items-start justify-center pt-3 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all">
                <MapPin size={36} className="text-white drop-shadow-2xl" />

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-10 border-r-10 border-t-12 border-l-transparent border-r-transparent border-t-blue-500 group-hover:border-t-blue-400"></div>
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-pink-400 group-hover:border-purple-400 animate-ping opacity-50"></div>
            </div>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 bg-slate-900 text-white px-6 py-3 rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl border-2 border-purple-500/50 backdrop-blur-sm">
              <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Boop's Location
              </p>
              <p className="text-sm text-gray-300">Click to open in Maps</p>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-t-slate-900"></div>
            </div>
          </button>

          {/* Info Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-slate-900/90 backdrop-blur-lg text-white p-6 rounded-3xl shadow-2xl border-2 border-purple-500/50 z-20">
            <h3 className="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-3">
              Our Location
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {boopLocation.address}
            </p>
            <button
              onClick={handlePinClick}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-3 rounded-2xl font-bold text-base hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .hero-letter {
          will-change: transform;
        }

        .form-field {
          will-change: transform;
        }

        .floating-orb {
          will-change: transform;
        }

        .particle {
          will-change: transform;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ec4899, #8b5cf6);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #db2777, #7c3aed);
        }

        /* Remove number input arrows */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};
