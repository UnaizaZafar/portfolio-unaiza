"use client";

import { useRef } from "react";
import GlassCard from "./ui/GlassCard";
import SectionWrapper from "./ui/SectionWrapper";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  { label: "Experience", value: "3 years" },
  { label: "Projects", value: "20+ overall" },
  { label: "Stack", value: "React / Next.js / Supabase" },
];

const AboutMe = () => {
  const cardRef = useRef(null);
  const statsRef = useRef(null);

  useScrollReveal(cardRef, ".about-card", { y: 40, start: "top 80%" });
  useScrollReveal(statsRef, ".about-stat", { y: 30, stagger: 0.12, start: "top 85%" });

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-start">
        <div ref={cardRef}>
          <GlassCard className="about-card overflow-hidden">
            <div className="flex gap-2 px-4 py-3 border-b border-border bg-surface/80">
              <div className="rounded-full size-3 bg-rose-400" />
              <div className="rounded-full size-3 bg-yellow-400" />
              <div className="rounded-full size-3 bg-emerald-500" />
              <span className="ml-2 font-mono text-xs text-text-muted">about-me.tsx</span>
            </div>
            <div className="flex flex-col gap-5 p-6 lg:p-8">
              <p className="font-gamilia text-2xl lg:text-3xl text-text cursor-blink">
                Hi! I&apos;m Unaiza Zafar
              </p>
              <p className="text-text-muted leading-relaxed">
                I&apos;m a <strong className="text-text">Full-Stack Developer</strong> with around{" "}
                <strong className="text-text">3 years of experience</strong> building scalable web applications
                using React.js, Next.js, TypeScript, and modern JavaScript.
              </p>
              <p className="text-text-muted leading-relaxed">
                I currently lead development of RBAC portal dashboards at BX Track Solutions, owning technical
                architecture and full-stack delivery with Next.js, Supabase, and PostgreSQL. I&apos;ve also built
                real-time sync features, interactive canvas-based UIs with Fabric.js, and client-facing products
                across healthcare and SaaS.
              </p>
              <div>
                <p className="font-mono text-sm text-accent mb-3">// what I care about</p>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">→</span> End-to-end, high-performance product delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">→</span> Cross-functional collaboration in Agile teams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">→</span> AI-powered tools to accelerate development
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>

        <div ref={statsRef} className="flex flex-col gap-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="about-stat p-6">
              <p className="font-mono text-sm uppercase tracking-wider text-accent">{stat.label}</p>
              <p className="mt-2 font-gamilia text-3xl text-text">{stat.value}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
