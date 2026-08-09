"use client";

import { useRef } from "react";
import { projects } from "../utils/data";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import WorkCards from "./WorkCards";
import useScrollReveal from "../hooks/useScrollReveal";

const Portfolio = () => {
  const gridRef = useRef(null);
  useScrollReveal(gridRef, ".portfolio-card", { y: 24, stagger: 0.05 });

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        eyebrow="Project Showcase"
        title="Portfolio"
        subtitle="12+ projects spanning client work, personal builds, and team collaborations."
      />

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="portfolio-card md:col-span-2 lg:col-span-2">
          <WorkCards item={featured} featured />
        </div>
        {rest.map((item) => (
          <div key={item.id} className="portfolio-card">
            <WorkCards item={item} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
