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
                    start: "top 80%",
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
                    start: "top 80%",
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
            className=" min-h-screen  flex justify-between items-center bg-primary mx-auto px-6 py-8 xl:px-32 ">
            <div className="flex flex-col gap-3 max-w-screen-xl mx-auto">
                <p ref={fadeDownwardRef} className="font-gamilia text-6xl lg:text-7xl xl:text-[100px] text-secondary">Hi! I'm Unaiza Zafar</p>
                <p ref={fadeUpwardRef} className="text-xl/loose lg:text-2xl/loose  text-secondary">
                    I’m a 23-year-old Frontend Developer with 1+ year of professional experience and over 12 completed projects. What started as curiosity quickly grew into a passion for crafting clean, responsive, and user-focused web experiences.
                    <br />
                    I build interfaces with React, Next.js, and Tailwind CSS, always aiming for code that’s structured, maintainable, and logical. I enjoy collaborating with teams, communicating ideas clearly, and using modern AI tools to speed up development and problem-solving.
                    <br />
                    This journey hasn’t been perfect; I’ve made mistakes, and I’ll make more. But every challenge has been a lesson, and what keeps me moving forward is the growth, creativity, and love for building that comes with being a developer.
                </p>
            </div>
        </div>
    )
}

export default AboutMe