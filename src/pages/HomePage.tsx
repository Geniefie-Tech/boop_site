import { PageType } from "../types";
import { Hero } from "../components/home/Hero";
import { AboutPreview } from "../components/home/AboutPreview";
import { ServicesSnapshot } from "../components/home/ServicesSnapshot";
import { WhatDrivesUs } from "../components/home/WhatDrivesUs";
import { StatisticsSection } from "../components/home/StatisticsSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { Impact } from "../components/home/Impact";
import { WorkPreview } from "../components/home/WorkPreview";
import { FinalCTA } from "../components/home/FinalCTA";
import { FAQ } from "../components/home/FAQ";
import { Team } from "../components/home/Team";

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Spacer: 120px */}
      <div className="h-30" />

      <StatisticsSection />

      {/* Spacer: 200px */}
      <div className="h-50" />

      <ServicesSnapshot onNavigate={onNavigate} limit={6} />

      {/* Spacer: 150px */}
      <div className="h-40" />

      <ProcessSection onNavigate={onNavigate} />

      {/* Spacer: 180px */}
      <div className="h-45" />

      <WorkPreview onNavigate={onNavigate} />

      {/* Spacer: 200px */}
      <div className="h-50" />

      <AboutPreview onNavigate={onNavigate} />

      {/* Spacer: 150px */}
      <div className="h-35" />

      <WhatDrivesUs />

      {/* Spacer: 200px */}
      <div className="h-50" />

      <Impact />

      {/* Spacer: 180px */}
      <div className="h-45" />

      <Team />

      {/* Spacer: 200px */}
      <div className="h-50" />

      <FinalCTA onNavigate={onNavigate} />

      {/* Spacer: 150px */}
      {/* <div className="h-40" /> */}

      <FAQ />
    </div>
  );
};
