import { CareerSection } from "@/components/CareerSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { PeopleSection } from "@/components/PeopleSection";
import { StatsSection } from "@/components/StatsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <Header />
      <Hero />
      <MissionSection />
      <StatsSection />
      <CareerSection />
      <WorkSection />
      <PeopleSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
