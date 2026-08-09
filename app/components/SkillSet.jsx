"use client";

import { useRef } from "react";
import { pendingCustomIcons, skillCatalog } from "../utils/skillIcons";
import DeviconIcon from "./DeviconIcon";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import useScrollReveal from "../hooks/useScrollReveal";

const SkillSet = () => {
  const gridRef = useRef(null);
  useScrollReveal(gridRef, ".skill-item", { y: 16, stagger: 0.04 });

  return (
    <SectionWrapper id="skill-set" className="pb-24 md:pb-[clamp(4rem,10vh,8rem)]">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & Tools"
        subtitle="Icons from Devicon — custom image assets will be added for tools not yet in the library."
      />

      <div ref={gridRef} className="flex flex-col gap-12">
        {skillCatalog.map((category) => (
          <div key={category.name}>
            <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-accent mb-6">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <GlassCard
                  key={skill.label}
                  className="skill-item flex flex-col items-center justify-center gap-3 p-6 aspect-square transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
                >
                  <DeviconIcon skill={skill} />
                  <span className="font-mono text-xs text-text-muted text-center leading-snug">
                    {skill.label}
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillSet;
