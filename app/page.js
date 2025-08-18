import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience/>
    </div>
  );
}
