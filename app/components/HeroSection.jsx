"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import TextAnimations from "./TextAnimations";
import Button from "./ui/Button";

const HeroSection = () => {
  const wordsRef = useRef();
  const lineRef = useRef([]);

  TextAnimations({ wordAnimation: wordsRef, LineAnimation: lineRef });

  return (
    <section
      id="hero"
      className="relative z-[1] min-h-screen flex items-center px-6 pt-28 pb-24 lg:px-12 lg:pt-32 lg:pb-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Full-Stack Developer · Rawalpindi, PK
          </span>

          <h1
            ref={wordsRef}
            className="font-gamilia text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-medium text-text"
          >
            Crafting digital experiences with{" "}
            <span className="text-accent">code & creativity</span>
          </h1>

          <p
            ref={(el) => (lineRef.current[0] = el)}
            className="max-w-xl text-lg text-text-muted opacity-0"
          >
            I build scalable web applications with React, Next.js, TypeScript, and Supabase — from RBAC dashboards and real-time sync to polished, accessible user interfaces.
          </p>

          <div
            ref={(el) => (lineRef.current[1] = el)}
            className="flex flex-wrap gap-4 opacity-0"
          >
            <Button href="#work-experience" variant="primary">
              View Experience
            </Button>
            <Button href="/Unaiza-Resume.pdf" download="Unaiza-Resume.pdf" variant="ghost">
              Download CV
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border p-2 glass-surface animate-float">
            <Image
              src="/images/dev-girl.webp"
              alt="Developer illustration"
              priority
              width={480}
              height={480}
              unoptimized
              className="w-full max-w-sm lg:max-w-md rounded-xl"
            />
          </div>
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors focus-ring rounded-full p-2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </Link>
    </section>
  );
};

export default HeroSection;
