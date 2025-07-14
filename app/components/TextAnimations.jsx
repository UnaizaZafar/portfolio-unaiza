
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function TextAnimations({ wordAnimation, LineAnimation }) {
    useEffect(() => {
        const splitWords = new SplitText(wordAnimation.current, { types: "words" });
        gsap.from(splitWords.words, {
            scrollTrigger: {
                trigger: wordAnimation.current,
                start: "top 80%",
                once: true,
            },
            y: -100,
            opacity: 0,
            rotation: () => gsap.utils.random(-80, 80),
            duration: 0.7,
            ease: "power1",
            stagger: 0.15,
            onComplete: () => {
                    gsap.set(LineAnimation.current, { opacity: 1 });
                    const splitLine = new SplitText(LineAnimation.current, {
                        types: "lines",
                        lineClass: "line-child",
                    });
                    gsap.from(splitLine.lines, {
                        rotationX: -100,
                        transformOrigin: "50% 50% -160px",
                        opacity: 0,
                        duration: 0.8,
                        ease: "back",
                        stagger: 0.25,
                    });

            },
        });

        return () => {
            splitWords.revert();
        };
    }, []);
}