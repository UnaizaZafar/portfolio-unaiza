'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menu } from "../utils/data"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-mauve w-max place-self-center rounded-full overflow-hidden text-secondary top-4 z-10 fixed hidden md:block">
                <div className=" flex justify-between items-center px-5">
                    <Link href={`/`}>
                        <Image src={"/images/uz-logo-2.webp"} width={70} height={70} alt="Logo" />
                    </Link>
                    <div className="flex gap-3 w-151 justify-between">
                        {menu.map((item) => (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`group flex items-center gap-2 rounded-3xl py-2 px-3 transition-all duration-500 ease-in-out
        ${pathname === item.link ? "bg-white text-deep-blue" : "hover:bg-white hover:text-deep-blue"}
      `}
                            >
                                <div>{item.icon}</div>

                                <p
                                    className={` hidden sm:inline-block max-w-0 group-hover:max-w-[160px]  overflow-hidden whitespace-nowrap
          transition-[max-width] duration-500 ease-in-out opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0
          text-xl font-medium
        `}
                                >
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
            <HamburgerMenu />
        </>
    )
}
export default Navbar
const HamburgerMenu = () => {
    const [active, setActive] = useState("");

    useEffect(() => {
        menu.forEach((item) => {
            ScrollTrigger.create({
                trigger: item.link,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActive(item.id),
                onEnterBack: () => setActive(item.id),
            });
        });
    }, []);

    return (
        <div className="bg-mauve w-full md:w-max place-self-center md:rounded-full overflow-hidden text-secondary bottom-0 fixed z-10 md:hidden block max-md:py-2">
            <div className="flex  w-full justify-between items-center px-3">
                {menu.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={`group flex items-center gap-1 rounded-md transition-all duration-500 ease-in-out 
                            ${active === item.id && "bg-secondary text-black p-2"} `} >
                        {item.icon}
                        <span className={`overflow-hidden transition-all duration-500 ease-in-out
             ${active === item.id ? "max-w-[100px] opacity-100 ml-1" : "max-w-0 opacity-0"} text-base md:text-xl font-medium`} >
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>

        </div>
    )
}