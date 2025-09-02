import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience/>
      <Portfolio/>
    </div>
  );
}
