'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { experience } from "../utils/data";
const workExp = [...experience].reverse();
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const track = trackRef.current;
            if (!container || !track) return;

            gsap.to(track, {
                x: () => -(track.scrollWidth - container.clientWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (track.scrollWidth - container.clientWidth),
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className=" relative overflow-hidden h-screen bg-white"
             style={{ height: "100vh" }}
        >
            {/* ✅ Fixed Heading */}
            <h2 className="absolute top-10 left-10 z-20 font-gamilia text-7xl xl:text-[100px] text-primary">
                Work Experience
            </h2>

            {/* ✅ Track that scrolls */}
            <div
                ref={trackRef}
                className="flex h-full"
            >
                {workExp.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            width: "100vw", // ✅ fixes white space issue
                            height: "100vh",
                            flexShrink: 0,
                        }}
                        className="flex items-center justify-center"
                    >
                        <div className="exp-card bg-secondary/30 drop-shadow-2xl backdrop-blur-3xl rounded-3xl p-6 flex flex-col gap-3 shrink-0 w-180">
                            <div className="flex flex-col gap-2 text-primary">
                                <Image
                                    width={50}
                                    height={50}
                                    alt={item.companyName}
                                    src={`/logos/${item.logo}.webp`}
                                    className="rounded-full h-12.5"
                                />
                                <p className="font-semibold text-2xl">{item.companyName}</p>
                                <p className="text-2xl">{item.designation}</p>
                                <p className="italic text-lg">{item.duration}</p>
                                <p className="text-xl">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
}
