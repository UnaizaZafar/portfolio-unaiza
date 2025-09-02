import { githubIcon, websiteIcon } from "../utils/svgs"
import Image from "next/image"
import Link from "next/link"
const WorkCards = ({ item }) => {

    return (
        <div className="lg:relative rounded-2xl overflow-hidden max-lg:border border-neutral-300">
            <Image className="shrink-0 aspect-[5/2.5] lg:aspect-[5/3.5] w-full object-cover object-top"
                width={0} height={0} unoptimized src={`/images/projects/${item.imageSrc}.webp`}
                alt={item.imageAlt}
            />
            <div className={`flex flex-col gap-3 lg:absolute ${item.darkTheme ? "lg:text-black" : "lg:text-white text-black"} bottom-0 p-5 backdrop-blur-2xl bg-blend-darken`}>
                <p className="font-gamilia text-xl lg:text-2xl font-semibold tracking-wider">{item.name}</p>
                <p className="text-base lg:text-lg">
                    {item.desc}
                </p>
                {/* buttons */}
                <div className="flex gap-4">
                    {item.gitLink &&
                        <Link
                            href={item?.gitLink}
                            className="w-max group relative flex items-center gap-2 px-2 lg:px-4 py-2 rounded-xl font-medium lg:text-lg  text-white bg-gradient-to-r from-purple-600 to-indigo-900 overflow-hidden transition-transform "
                        >
                            <span className="absolute left-0 top-0 h-full w-[120%] -translate-x-[10%] skew-x-12 bg-black transition-transform duration-500 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>

                            <span className="relative z-10 flex items-center gap-2">
                                <span className="size-5 lg:size-7">{githubIcon}</span>
                                GitHub
                            </span>
                        </Link>
                    }
                    {item.webLink &&
                        <Link
                            href={item.webLink}
                            className="w-max group relative flex items-center gap-2 px-2 lg:px-4 py-2 rounded-xl font-medium lg:text-lg  text-white bg-gradient-to-r from-pink-600 to-rose-400 overflow-hidden transition-transform "
                        >
                            <span className="absolute left-0 top-0 h-full w-[120%] -translate-x-[10%] skew-x-12 bg-black transition-transform duration-500 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>

                            <span className="relative z-10 flex items-center gap-2">
                                <span className="size-5 lg:size-7">{websiteIcon}</span> Website
                            </span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkCards