import { useFadeIn } from "@/hooks/useFadeIn";
import Masthead from "@/components/newspaper/Masthead";
import HeroImage from "@/components/newspaper/HeroImage";
import FrontPage from "@/components/newspaper/FrontPage";
import Characters from "@/components/newspaper/Characters";
import Themes from "@/components/newspaper/Themes";
import LiteraryDevices from "@/components/newspaper/LiteraryDevices";
import Editorial from "@/components/newspaper/Editorial";
import PoliticalCartoon from "@/components/newspaper/PoliticalCartoon";
import Obituaries from "@/components/newspaper/Obituaries";
import Commentary from "@/components/newspaper/Commentary";
import Extras from "@/components/newspaper/Extras";
import Footer from "@/components/newspaper/Footer";

const SectionDivider = () => (
  <div className="my-10 flex items-center gap-4">
    <div className="flex-1 border-t border-foreground" />
    <span className="text-accent text-lg font-headline">&#9830;</span>
    <div className="flex-1 border-t border-foreground" />
  </div>
);

const Index = () => {
  const containerRef = useFadeIn();

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 md:px-8 py-6">
      <Masthead />
      <HeroImage />
      <FrontPage />
      <SectionDivider />
      <Characters />
      <SectionDivider />
      <Themes />
      <SectionDivider />
      <LiteraryDevices />
      <SectionDivider />
      <Editorial />
      <SectionDivider />
      <PoliticalCartoon />
      <SectionDivider />
      <Obituaries />
      <SectionDivider />
      <Commentary />
      <SectionDivider />
      <Extras />
      <Footer />
    </div>
  );
};

export default Index;
