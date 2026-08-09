"use client";

import { useRef } from "react";
import Image from "next/image";
import { experience } from "../utils/data";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import useScrollReveal from "../hooks/useScrollReveal";

const CompanyLogo = ({ item }) => {
  if (item.logo) {
    return (
      <Image
        width={48}
        height={48}
        alt={`${item.companyName} logo`}
        src={`/logos/${item.logo}.webp`}
        className="rounded-full shrink-0"
      />
    );
  }

  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-gamilia text-lg text-accent"
      aria-hidden="true"
    >
      {item.companyName.charAt(0)}
    </div>
  );
};

export default function Experience() {
  const timelineRef = useRef(null);
  useScrollReveal(timelineRef, ".experience-item", { y: 20, x: -20, stagger: 0.12, start: "top 85%" });

  return (
    <SectionWrapper id="work-experience">
      <SectionHeading
        eyebrow="Career"
        title="Work Experience"
        subtitle="Around 3 years of experience — from design intern to full-stack developer and project lead."
        align="left"
      />

      <div ref={timelineRef} className="relative ml-4 lg:ml-8">
        <div
          className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <article key={item.key} className="experience-item relative pl-8 lg:pl-10">
              <div
                className="absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg"
                aria-hidden="true"
              />

              <div className="glass-surface rounded-xl p-6 transition-all duration-300 hover:border-accent/30">
                <div className="flex flex-wrap items-start gap-4">
                  <CompanyLogo item={item} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <p className="font-gamilia text-xl text-text">{item.companyName}</p>
                      <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-accent font-medium">{item.designation}</p>
                    {item.location && (
                      <p className="font-mono text-xs text-text-muted mt-1">{item.location}</p>
                    )}
                    <p className="text-text-muted text-sm leading-relaxed mt-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
