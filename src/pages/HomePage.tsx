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
      <StatisticsSection />
      <ServicesSnapshot onNavigate={onNavigate} />
      <ProcessSection />
      <WorkPreview onNavigate={onNavigate} />
      <AboutPreview onNavigate={onNavigate} />
      <WhatDrivesUs />
      <Impact />
      <Team />
      <FinalCTA onNavigate={onNavigate} />
      <FAQ />
    </div>
  );
};
