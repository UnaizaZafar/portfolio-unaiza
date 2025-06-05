'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState,useEffect } from "react"
const menu = [
    {
        id: 1,
        name: "👤 About Me",
        link: "#about"
    },
    {
        id: 2,
        name: "🎓 My Learning Journey",
        link: "#learning"
    },
    {
        id: 3,
        name: "💼 Where I’ve Worked ",
        link: "#work-experience"
    },
    {
        id: 4,
        name: "🛠️ Portfolio ",
        link: "#portfolio"
    },
    {
        id: 5,
        name: "💡My Toolbox ",
        link: "#toolbox"
    },
    {
        id: 6,
        name: "📬 Let’s Connect",
        link: "#contact"
    },
]
const Navbar = () => {
    useEffect(() => {
        const handleHashChange = () => {
            console.log(window.location.hash); // e.g., "#about"
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    // const [active, setActive] = useState(false);
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="bg-black w-full rounded-b-3xl text-white py-6 px-8 z-10">
            <div className="max-w-[1920px] flex justify-between items-center">
                <Link href={"/"}>
                    <Image src={"/images/uz-logo.webp"} width={70} height={70} alt="Logo" />
                </Link>
                <div className={`flex gap-8 font-space-grostesk text-xl font-medium`}>
                    {menu.map((item) => (
                        <Link className={`${pathname === "#about" ? "bg-white text-black" : "hover:bg-white hover:text-black"} rounded-3xl  p-3 transition-all duration-500 ease-in-out`}
                            key={item.id} href={item.link}>{item.name}
                        </Link>

                    ))}
                </div>
                <Image src={"/images/uz-logo.webp"} width={70} height={70} alt="Logo" className="invisible" />

            </div>
        </div>
    )
}

export default Navbar