import { menu } from "../utils/data"
import Link from "next/link"
import { githubIcon, gmailIcon, linkedinIcon } from "../utils/svgs"
const Footer = () => {
  return (
    <div id="contact" className='bg-black rounded-t-3xl p-4 pb-24 xl:p-24'>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="text-white flex max-md:flex-col gap-3 md:gap-6 justify-center">
          {menu.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-1 group">
              <Link href={item.link} className="font-medium text-xl hover:font-semibold">{item.name}</Link>
              <p className=" h-0.5 max-w-0 group-hover:max-w-full w-full bg-white transition-all duration-500 ease-in-out" />
            </div>
          ))}
        </div>

        {/* Github */}
        <div className="text-white flex gap-6 justify-center">
          <Link href={"https://github.com/UnaizaZafar/"} target="_blank" className="text-white hover:text-white/90 transition-all duration-300">
            {githubIcon}
          </Link>
          {/* Linkedin */}
          <Link href={"https://www.linkedin.com/in/unaiza-z-49540b302/"} target="_blank" className="text-white hover:text-white/90 transition-all duration-300">
            {linkedinIcon}
          </Link>
          {/* Gmail */}
          <Link href={"mailto:unaizaofficial840@gmail.com"} target="_blank" className="text-white hover:text-white/90 transition-all duration-300">
            {gmailIcon}
          </Link>
        </div>
        <p className="text-white text-sm">© 2025 Unaiza Zafar. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer