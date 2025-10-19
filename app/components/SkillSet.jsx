import { skills } from "../utils/data"
const SkillSet = () => {

    //     const logos = gsap.utils.toArray(".logo-img");

    //     const shuffled = [...logos].sort(() => Math.random() - 0.5);

    //     // Initial state: hidden, above, and big
    //     gsap.set(shuffled, {
    //         opacity: 0,
    //         scale: 1.3,
    //         y: -100, // 👈 above their actual position
    //     });

    //     gsap.to(shuffled, {
    //         opacity: 1,
    //         scale: 1,
    //         y: 0, // 👈 land into place
    //         duration: 0.8,
    //         stagger: {
    //             each: 0.2,
    //             amount: 3,
    //             from: "random",
    //         },
    //         ease: "power3.out",
    //         scrollTrigger: {
    //             trigger: containerRef.current,
    //             start: "top 80%",
    //             toggleActions: "play none none none",
    //         },
    //     });
    // }, []);
    return (
        <div id="skill-set"
            className="flex flex-col gap-8 justify-center items-center py-16 max-w-screen-xl mx-auto"
        >
            <p className="font-gamilia text-6xl lg:text-7xl xl:text-8xl text-secondary">Tools That Shape My Work</p>
            <div className="grid grid-cols-6 gap-6">
                {skills.map((skill, i) => {
                    return (
                        <div className=" rounded-lg py-10 px-6 flex justify-center items-center aspect-square bg-gradient-to-r from-neutral-600 to-cyan-950 overflow-hidden hover:scale-105 transition-all duration-300" key={i}>
                            {skill.icon}
                        </div>
                    )
                })}
            </div>



            <p className="text-xl/loose lg:text-2xl/loose text-secondary">And the learning never stops — more skills are always on the way</p>
        </div>
    )
}

export default SkillSet

{/* Logos marquee */ }
{/* <div className="w-full overflow-hidden inline-flex flex-nowrap gap-24 lg:py-4.5 px-20">
                <div className="flex animate-infinite-scroll gap-24 items-center justify-center [&_img]:max-w-none">
                    {Array.from({ length: 8 }, (_, i) => (
                        <img src={`/logos/tool-${i + 1}.png`} alt={i + 1} key={i} className="w-max object-cover h-20" />
                    ))}
                </div>
                <div
                    aria-hidden="true"
                    className="flex animate-infinite-scroll gap-24 items-center justify-center [&_img]:max-w-none"
                >
                    {Array.from({ length: 8 }, (_, i) => (
                        <img src={`/logos/tool-${i + 1}.png`} alt={i + 1} key={i} className="w-max object-cover h-20" />
                    ))}
                </div>
            </div> */}