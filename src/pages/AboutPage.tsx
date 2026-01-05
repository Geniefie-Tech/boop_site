import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export const AboutPage = () => {
  const { isVisible, setElement } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Strategic Thinking.
              <br />
              Creative Execution.
              <br />
              <span className="text-amber-400">Real Results.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              BoopOrg is a full-service creative and marketing agency built to help brands grow
              with clarity and confidence. We don't chase trends—we build brand ecosystems that
              perform across touchpoints.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={setElement}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A collective of strategists, designers, marketers, technologists, and execution
                specialists driven by one goal: creating work that delivers impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work as an extension of your team—aligning business goals with brand
                storytelling and performance marketing.
              </p>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Philosophy
            </h2>

            <div className="space-y-6">
              {[
                'Strategy before creativity',
                'Data before assumptions',
                'Impact over impressions',
                'Long-term growth over short-term wins',
              ].map((principle, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <p className="text-lg text-slate-700 font-medium">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};