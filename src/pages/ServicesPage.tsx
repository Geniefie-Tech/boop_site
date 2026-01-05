import { Target, Palette, TrendingUp, Code, Globe, Calendar, Video, BarChart, ShoppingBag } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export const ServicesPage = () => {
  const { isVisible, setElement } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: Target,
      title: 'Brand Strategy & Positioning',
      description: 'Identity, purpose, tone, and differentiation.',
    },
    {
      icon: Palette,
      title: 'Creative & Visual Design',
      description: 'Logos, brand systems, campaigns, and creatives.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, PPC, social media, and performance campaigns.',
    },
    {
      icon: Code,
      title: 'Web & Technology',
      description: 'Websites, landing pages, and digital experiences.',
    },
    {
      icon: Globe,
      title: '360° Marketing',
      description: 'Print, outdoor, electronic, and integrated campaigns.',
    },
    {
      icon: Calendar,
      title: 'Events & Exhibitions',
      description: 'On-ground activations and immersive brand experiences.',
    },
    {
      icon: Video,
      title: 'Content & Production',
      description: 'Photography, videography, reels, and campaign films.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Insights, tracking, and continuous improvement.',
    },
    {
      icon: ShoppingBag,
      title: 'Merchandise & Brand Assets',
      description: 'Custom apparel, giveaways, and branded merchandise.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            End-to-End Solutions.
            <br />
            <span className="text-amber-400">One Strategic Partner.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From brand inception to large-scale campaigns, we deliver integrated marketing
            solutions designed to scale.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
            Core Services
          </h2>

          <div
            ref={setElement}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 group border-2 border-transparent hover:border-amber-500"
              >
                <service.icon className="text-amber-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};