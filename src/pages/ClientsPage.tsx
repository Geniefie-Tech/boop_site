import { CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useScrollAnimation";
import hp from "../../src/assets/Logo/hp.png";
import airtel from "../../src/assets/Logo/Airtel Logo.png";
import assocham from "../../src/assets/Logo/Assocham logo.png";
import axis from "../../src/assets/Logo/Axis_Bank_logo.png";
import barcadi from "../../src/assets/bacardy.png";
import bajaj from "../../src/assets/Logo/Bajaj logo.png";
import dabur from "../../src/assets/Logo/Dabur-Logo.png";
import dlf from "../../src/assets/dlf.png";
import google from "../../src/assets/Logo/Google logo.png";
import hm from "../../src/assets/Logo/H & M.png";
import hindustan from "../../src/assets/Logo/Hindustan_Times_logo.svg.png";
import hotstar from "../../src/assets/hotstar.png";
import indianoil from "../../src/assets/Logo/Indian_Oil_Logo.svg.png";
import isuzu from "../../src/assets/Logo/isuzu.png";
import jeep from "../../src/assets/jeep.png";
import kotak from "../../src/assets/Logo/Kotak logo.png";
import lamaar from "../../src/assets/Logo/Lamaar logo.png";
import lg from "../../src/assets/lg.png";
import nissan from "../../src/assets/Logo/Nissan Logo.png";
import oral from "../../src/assets/Logo/Oral B Logo.png";
import dew from "../../src/assets/Logo/pngegg.png";
import ptc from "../../src/assets/Logo/PTC Punjabi.png";
import radiocity from "../../src/assets/Logo/Radio City.png";
import redbull from "../../src/assets/Logo/Red-Bull-logo.png";
import samsung from "../../src/assets/Logo/Samsung.png";
import shell from "../../src/assets/Logo/Shell_logo.svg.png";
import sony from "../../src/assets/sony.png";
import toyota from "../../src/assets/Logo/toyota-car-logo-6958.png";
import vivo from "../../src/assets/Logo/Vivo_mobile_logo.png";
import wt from "../../src/assets/Logo/wildthing.png";
import zee from "../../src/assets/Logo/Zee logo.png";
import paras from "../../src/assets/Logo/Paras logo.png";
import porter from "../../src/assets/porter.png";
import amarjula from "../../src/assets/Logo/amaarujala.png";
import indiatv from "../../src/assets/indiatv.png";

export const ClientsPage = () => {
  const { isVisible, setElement } = useIntersectionObserver({ threshold: 0.2 });

  const clients = [
    hp,
    airtel,
    amarjula,
    assocham,
    axis,
    barcadi,
    bajaj,
    dabur,
    dlf,
    google,
    hm,
    hindustan,
    hotstar,
    indiatv,
    indianoil,
    isuzu,
    jeep,
    kotak,
    lamaar,
    lg,
    nissan,
    oral,
    dew,
    ptc,
    radiocity,
    redbull,
    samsung,
    shell,
    sony,
    toyota,
    vivo,
    wt,
    zee,
    paras,
    porter,
  ];

  const reasons = [
    "Transparent collaboration",
    "Strong strategic foundation",
    "Consistent delivery",
    "Results-driven mindset",
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Clients
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Brands That Believe
            <br />
            <span className="text-amber-400">in Our Process</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From fast-growing startups to established enterprises, brands trust
            BoopOrg for strategy-led creativity and execution excellence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={setElement}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-all hover:scale-105 flex items-center justify-center text-center min-h-32 border-2 border-transparent hover:border-amber-500"
              >
                <img src={client} className="w-40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Clients Choose Us
          </h2>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle
                  className="text-amber-500 flex-shrink-0"
                  size={28}
                />
                <p className="text-lg text-slate-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
