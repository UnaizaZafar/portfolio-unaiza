'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { menu } from "../utils/data"
const Navbar = () => {

    // const [active, setActive] = useState(false);
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="bg-mauve w-max place-self-center rounded-full overflow-hidden text-secondary top-4 z-10 fixed hidden md:block">
            <div className=" flex justify-between items-center px-5">
                <Link href={"/"}>
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
    )
}

export default Navbar