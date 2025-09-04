'use client'
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)
const SkillSet = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const logos = gsap.utils.toArray(".logo-img");

        const shuffled = [...logos].sort(() => Math.random() - 0.5);

        // Initial state: hidden, above, and big
        gsap.set(shuffled, {
            opacity: 0,
            scale: 1.3,
            y: -100, // 👈 above their actual position
        });

        gsap.to(shuffled, {
            opacity: 1,
            scale: 1,
            y: 0, // 👈 land into place
            duration: 0.8,
            stagger: {
                each: 0.2,
                amount: 3,
                from: "random",
            },
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, []);
    return (
        <div id="skill-set"
            ref={containerRef}
            className="flex flex-wrap gap-x-18 gap-8  justify-center items-center py-16 max-w-screen-xl mx-auto"
        >
            {Array.from({ length: 8 }, (_, i) => (
                <Image
                    key={i}
                    src={`/logos/tool-${i + 1}.png`}
                    width={0}
                    height={0}
                    unoptimized
                    className="logo-img w-max object-cover h-20"
                    alt={`Logo-${i + 1}`}
                />
            ))}
        </div>
    )
}

export default SkillSet