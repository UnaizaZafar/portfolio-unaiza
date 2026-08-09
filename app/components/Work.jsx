"use client";

import { useRef } from "react";
import { work } from "../utils/data";
import Tags from "./Tags";
import GlassCard from "./ui/GlassCard";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import useScrollReveal from "../hooks/useScrollReveal";

const Work = () => {
  const gridRef = useRef(null);
  useScrollReveal(gridRef, ".work-card", { y: 20, stagger: 0.08 });

  return (
    <SectionWrapper id="work">
      <SectionHeading
        eyebrow="Professional Work"
        title="Selected Work"
        subtitle="Full-stack dashboards, client applications, and product features built across healthcare, SaaS, and enterprise teams."
      />

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {work.map((item) => (
          <GlassCard
            key={item.id}
            className={`work-card p-6 lg:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 ${
              item.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{item.company}</p>
                <h3 className="mt-1 font-gamilia text-xl lg:text-2xl text-text">{item.title}</h3>
              </div>
              <span className="font-mono text-xs text-text-muted bg-surface px-2.5 py-1 rounded border border-border shrink-0">
                {item.period}
              </span>
            </div>

            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Tags key={tag} text={tag} />
                ))}
              </div>
            )}

            <p className="text-text-muted leading-relaxed flex-grow">{item.desc}</p>

            {item.highlights && (
              <ul className="space-y-2 text-sm text-text-muted border-t border-border pt-4">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-accent shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Work;
