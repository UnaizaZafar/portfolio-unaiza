"use client";
import Link from "next/link";
import { useRef } from "react";
import TextAnimations from "./TextAnimations";
const HeroSection = () => {
    const wordsRef = useRef();
    const lineRef = useRef([]);
    TextAnimations({ wordAnimation: wordsRef, LineAnimation: lineRef });

    return (
        <section id="hero" className="h-screen flex flex-col gap-6 items-center justify-center px-6 py-21 bg-[#151520]">
            <h1
                ref={wordsRef}
                className="font-gamilia text-6xl md:text-9xl 2xl:text-[150px] font-medium xl:leading-30 text-center text-neutral-50 w-full xl:max-w-4/5 "
            >
                Design meets development in my little corner of the web
            </h1>

            <p
                ref={(el) => (lineRef.current[0] = el)}
                className="text-xl font-cobe opacity-0 text-neutral-200"
            >
                I create immersive digital experiences with code and creativity.
                {/* I'm Unaiza, a frontend developer building elegant web experiences. */}
            </p>
            <Link
                ref={(el) => (lineRef.current[1] = el)}
                download={"UnaizaZ-Resume"}
                href="/Unaiza-Resume.pdf"
                className="opacity-0 download-button font-cobe transition-all duration-300 ease-in-out"
            >
                <div className="docs">
                    {/* File icon */}
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1={16} y1={13} x2={8} y2={13} />
                        <line x1={16} y1={17} x2={8} y2={17} />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Download CV
                </div>
                <div className="download">
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1={12} y1={15} x2={12} y2={3} />
                    </svg>
                </div>
            </Link>
        </section>
    )
}

export default HeroSection