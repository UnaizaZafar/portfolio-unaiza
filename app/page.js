import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
// import Portfolio from "./components/Portfolio";
import SkillSet from "./components/SkillSet";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      {/* <Portfolio /> */}
      <Work />
      <SkillSet />
    </>
  );
}
