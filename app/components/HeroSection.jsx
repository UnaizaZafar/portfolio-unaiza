"use client";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import TextAnimations from "./TextAnimations";
const HeroSection = () => {
    const wordsRef = useRef();
    const lineRef = useRef([]);
    TextAnimations({ wordAnimation: wordsRef, LineAnimation: lineRef });

    return (
        <section id="hero" className="min-h-screen flex max-lg:flex-col gap-4 justify-center items-center px-6 py-8 lg:px-32 md:py-21 bg-primary2">
            <div className="flex flex-col gap-6 justify-center ">
                <h1
                    ref={wordsRef}
                    className="font-gamilia text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-medium text-neutral-50 text-left "
                >
                    Design meets <span className="text-[#45c2d7] ">development</span> in my little corner of the web
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
            </div>
            <Image src={"/images/dev-girl.webp"} alt="Developer girl illustration" priority width={0} height={0} unoptimized className="w-96 lg:w-2/5"
            />
        </section>
    )
}

export default HeroSection