"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { experience } from "../utils/data";
import Tags from "./Tags";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import useScrollReveal from "../hooks/useScrollReveal";

const getCompanyDuration = (roles) => {
  if (roles.length === 1) return roles[0].duration;

  const oldest = roles[roles.length - 1];
  const newest = roles[0];
  const start = oldest.duration.split(" – ")[0];
  const end = newest.duration.split(" – ")[1] ?? "Present";

  return `${start} – ${end}`;
};

const CompanyLogo = ({ company }) => {
  if (company.logo) {
    return (
      <Image
        width={48}
        height={48}
        alt={`${company.companyName} logo`}
        src={`/logos/${company.logo}.webp`}
        className="rounded-full shrink-0"
      />
    );
  }

  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-gamilia text-lg text-accent"
      aria-hidden="true"
    >
      {company.companyName.charAt(0)}
    </div>
  );
};

const RoleDetails = ({ role, showDivider }) => (
  <div className={showDivider ? "border-t border-border pt-6" : ""}>
    <div className="flex flex-wrap items-start justify-between gap-3">
        {role.title && (
          <h4 className="font-gamilia text-lg text-text">{role.title}</h4>
        )}
    </div>

    {role.tags && (
      <div className="flex flex-wrap gap-2 mt-4">
        {role.tags.map((tag) => (
          <Tags key={tag} text={tag} />
        ))}
      </div>
    )}

    <p className="text-text-muted text-sm leading-relaxed mt-4">{role.desc}</p>

    {role.highlights && (
      <ul className="space-y-2 text-sm text-text-muted border-t border-border pt-4 mt-4">
        {role.highlights.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-accent shrink-0">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const ExperienceCard = ({ company, isExpanded, onToggle }) => {
  const { roles } = company;
  const isMultiRole = roles.length > 1;
  const primaryRole = roles[0];
  const duration = getCompanyDuration(roles);

  return (
    <article className="experience-item relative pl-8 lg:pl-10">
      <div
        className="absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg"
        aria-hidden="true"
      />

      <div
        className={`glass-surface rounded-xl overflow-hidden transition-all duration-300 ${
          isExpanded ? "border-accent/30" : "hover:border-accent/30"
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          className="w-full p-6 text-left focus-ring rounded-xl"
        >
          <div className="flex items-start gap-4">
            <CompanyLogo company={company} />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <p className="font-gamilia text-xl text-text">{company.companyName}</p>
                <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                  {duration}
                </span>
                {isMultiRole && (
                  <span className="font-mono text-xs text-text-muted bg-surface px-2 py-1 rounded border border-border">
                    {roles.length} roles
                  </span>
                )}
              </div>

              <p className="text-accent font-medium">{primaryRole.designation}</p>
              {primaryRole.location && (
                <p className="font-mono text-xs text-text-muted mt-1">{primaryRole.location}</p>
              )}
              <p className="text-text-muted text-sm leading-relaxed mt-3 line-clamp-2">
                {primaryRole.desc}
              </p>
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`shrink-0 text-text-muted transition-transform duration-300 mt-1 ${
                isExpanded ? "rotate-180 text-accent" : ""
              }`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 border-t border-border/60">
              <div className="flex flex-col gap-6 pt-5">
                {roles.map((role, index) => (
                  <RoleDetails key={role.key} role={role} showDivider={index > 0} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Experience() {
  const timelineRef = useRef(null);
  const [expandedKey, setExpandedKey] = useState(null);

  useScrollReveal(timelineRef, ".experience-item", { y: 20, x: -20, stagger: 0.12, start: "top 85%" });

  const toggleCard = (key) => {
    setExpandedKey((current) => (current === key ? null : key));
  };

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
          {experience.map((company) => (
            <ExperienceCard
              key={company.key}
              company={company}
              isExpanded={expandedKey === company.key}
              onToggle={() => toggleCard(company.key)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
