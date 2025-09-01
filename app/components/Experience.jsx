'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { experience } from '../utils/data';

const workExp = [...experience].reverse();
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const cardRef = useRef([]);
    const [maxHeight, setMaxHeight] = useState(0);
    useEffect(() => {
        if (cardRef.current.length) {
            const heights = cardRef.current.map(card => card.offsetHeight);
            setMaxHeight(Math.max(...heights));
        }
    }, [workExp])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const track = trackRef.current;
            if (!container || !track) return; 

            gsap.set(track, { x: 0 });

            const getScrollAmount = () => track.scrollWidth - container.offsetWidth;

            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true, 
                },
            });

            ScrollTrigger.refresh(); 
        }, containerRef);

        return () => ctx.revert();
    }, []);


    return (
        <section id='work-experience'
            ref={containerRef}
            className="relative h-screen overflow-hidden bg-white"
        >
            <h2 className="absolute top-8 md:top-20 left-6 lg:left-20 z-10 font-gamilia text-6xl lg:text-7xl xl:text-[100px] text-primary">
                Experience
            </h2>

            <div
                ref={trackRef}
                className="absolute inset-0 flex items-center gap-6 px-24"
            >

                {workExp.map((item, i) => (
                    <article
                        ref={el => cardRef.current[i] = el}
                        key={i}
                        style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}
                        className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] items-stretch rounded-3xl border border-pink-300/60  first:bg-[#A0EEC2] nth-2:bg-[#F9C5D1] last:bg-[#FDE2E4] backdrop-blur-xl shadow-xl p-6 "
                    >
                        <Image
                            width={48}
                            height={48}
                            alt={item.companyName}
                            src={`/logos/${item.logo}.webp`}
                            className="rounded-full"
                        />
                        <p className="text-2xl leading-tight">
                            {item.companyName}
                        </p>
                        <p className="italic text-lg">{item.duration}</p>
                        <p className="text-2xl font-medium text-primary">{item.designation}</p>
                        <p className="text-xl text-primary/80">{item.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
