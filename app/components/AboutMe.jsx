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
            className=" min-h-screen  flex justify-between items-center bg-primary mx-auto px-4 xl:px-32">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
                <p ref={fadeDownwardRef} className="font-gamilia text-7xl xl:text-[100px] text-secondary">Hi! I'm Unaiza Zafar</p>
                <p ref={fadeUpwardRef} className="text-2xl/loose col-span-2 text-secondary">I’m a 23-year-old frontend developer who’s been working professionally for nearly a year.
                    My journey with technology began as curiosity soon turned into a passion for crafting beautiful, responsive web experiences.
                    <br />
                    Currently working as a frontend developer, I focus on building clean, structured, and user-focused interfaces using tools like React, Next.js, and Tailwind CSS. I value maintainable code, clear structure, and strong logic. I’m quick to pick up new technologies and love solving challenges with a curious mindset.
                    <br />
                    This journey hasn’t been perfect — I’ve made mistakes, and I know I’ll make more. But I’ve learned that mistakes are just part of the process. What matters is the growth that comes from them, and the love for what I do that keeps me moving forward.

                    Stick around — I’ll be sharing my growth, projects, and learnings as I continue building in public.</p>
            </div>
        </div>
    )
}

export default AboutMe