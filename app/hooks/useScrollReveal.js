"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(containerRef, selector, options = {}) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          y: options.y ?? 24,
          x: options.x ?? 0,
        },
        {
          y: 0,
          x: 0,
          duration: options.duration ?? 0.55,
          stagger: options.stagger ?? 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: options.start ?? "top 90%",
            once: true,
          },
        }
      );
    }, container);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [containerRef, selector]);
}
