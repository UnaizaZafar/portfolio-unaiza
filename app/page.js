import Link from "next/link";
import Tags from "./components/Tags";
export default function Home() {
  return (
    <div className="bg-[#F2E9E4] h-screen flex flex-col gap-6 items-center justify-center">
      <h1 className="font-gamilia text-[160px] font-medium leading-32 text-center text-[#22223B] max-w-[60%] ">
        Design meets development in my little corner of the web
      </h1>
      <p className="text-xl font-cobe">
        {/* I create immersive digital experiences with code and creativity. */}
        I'm Unaiza, a frontend developer building elegant web experiences.
      </p>
      <Link
        download={"UnaizaZ-Resume"}
        href="/Unaiza Zafar Resume.pdf"
        className="download-button font-cobe"
      >
        <div className="docs">
          {/* File icon */}
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={16} y1={13} x2={8} y2={13} />
            <line x1={16} y1={17} x2={8} y2={17} />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Download CV
        </div>
        <div className="download">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1={12} y1={15} x2={12} y2={3} />
          </svg>
        </div>
      </Link>

      {/* <Link
        download={"UnaizaZ-Resume"}
        href="/Unaiza Zafar Resume.pdf"
        className="animated-background text-white font-space-grostesk drop-shadow-md/50 bg-gradient-to-bl from-[#d9673d] to-[#ecb651]  rounded-3xl py-3 px-5  text-xl font-medium"
      >
        Download Resume
      </Link> */}
    </div>
  );
}
