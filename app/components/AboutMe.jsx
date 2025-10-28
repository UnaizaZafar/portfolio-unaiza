'use client'
import { useEffect, useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const AboutMe = () => {
    const fadeUpwardRef = useRef(null);
    const fadeDownwardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(fadeUpwardRef.current, {
                scrollTrigger: {
                    trigger: fadeUpwardRef.current,
                    start: "top 60%",
                    once: true,
                },
                opacity: 0,
                y: 250,
                duration: 0.9,
                ease: "circ"
            })
            gsap.from(fadeDownwardRef.current, {
                scrollTrigger: {
                    trigger: fadeDownwardRef.current,
                    start: "top 60%",
                    once: true,
                },
                opacity: 0,
                y: -250,
                duration: 0.9,
                ease: "circ"
            })

        })
        return () => {
            ctx.revert();
        }
    }, [])
    return (
        <div id="about"
            className="flex justify-between items-center mx-auto px-6 py-8 xl:px-32">
            <div className="flex flex-col max-w-screen-lg mx-auto rounded-3xl border-3 border-purple-900/80 overflow-hidden">
                <div className="flex gap-2.5 px-2 lg:px-6 py-3 bg-purple-900/80">
                    <div className="rounded-full size-3.5 bg-rose-400" />
                    <div className="rounded-full size-3.5 bg-yellow-400" />
                    <div className="rounded-full size-3.5 bg-emerald-600" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-5 bg-gradient-to-b from-purple-950/70 via-purple-950 to-purple-900/85 shadow-inner px-2 lg:px-6 py-5 lg:py-10">
                    <p ref={fadeDownwardRef} className="font-gamilia text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white">Hi! I'm Unaiza Zafar</p>
                    <p ref={fadeUpwardRef} className="text-lg text-white">
                        I’m a 23-year-old Frontend Developer with <strong>1+ year of professional experience and over 12 completed projects</strong>. What started as curiosity quickly grew into a passion for crafting clean, responsive, and user-focused web experiences.
                        <br />
                        I build interfaces with React, Next.js, and Tailwind CSS, always aiming for code that’s structured, maintainable, and logical. I enjoy collaborating with teams, communicating ideas clearly, and using modern AI tools to speed up development and problem-solving.
                        <br />
                        This journey hasn’t been perfect; I’ve made mistakes, and I’ll make more. But every challenge has been a lesson, and what keeps me moving forward is the growth, creativity, and love for building that comes with being a developer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe