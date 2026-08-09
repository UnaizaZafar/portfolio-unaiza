"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimations({ wordAnimation, LineAnimation }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      gsap.set([wordAnimation.current, ...LineAnimation.current.filter(Boolean)], {
        opacity: 1,
        y: 0,
        rotation: 0,
      });
      return;
    }

    const splitWords = new SplitText(wordAnimation.current, { types: "words" });
    gsap.from(splitWords.words, {
      scrollTrigger: {
        trigger: wordAnimation.current,
        start: "top 80%",
        once: true,
      },
      y: -60,
      opacity: 0,
      rotation: () => gsap.utils.random(-40, 40),
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      onComplete: () => {
        gsap.set(LineAnimation.current, { opacity: 1 });
        const validLines = LineAnimation.current.filter(Boolean);
        if (!validLines.length) return;

        const splitLine = new SplitText(validLines, {
          types: "lines",
          lineClass: "line-child",
        });
        gsap.from(splitLine.lines, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        });
      },
    });

    return () => {
      splitWords.revert();
    };
  }, [wordAnimation, LineAnimation]);
}
