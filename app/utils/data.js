export const menu = [
  {
    id: 1,
    name: "About Me",
    link: "#about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-user size-7"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Experience",
    link: "#work-experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2 size-7"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Portfolio ",
    link: "#portfolio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-file-smile size-7"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2zm-7 -7h.01m3.99 0h.01" />
        <path d="M10 17a3.5 3.5 0 0 0 4 0" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "SkillSet",
    link: "#skill-set",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-tools size-7"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
        <path d="M14.5 5.5l4 4" />
        <path d="M12 8l-5 -5l-4 4l5 5" />
        <path d="M7 8l-1.5 1.5" />
        <path d="M16 12l5 5l-4 4l-5 -5" />
        <path d="M16 17l-1.5 1.5" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Contact",
    link: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-phone size-7"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      </svg>
    ),
  },
];

export const experience = [
  {
    key: 1,
    logo: "pims",
    companyName: "Pakistan Institute of Medical Sciences",
    designation: "Design Intern",
    duration: "Sep 2022",
    desc: "Trained in the basics of graphic and web design, made things that looked good and worked well. Helped PIMS enhance their digital presence with engaging visuals and content. Basically, gave their site a little more personality.",
  },
  {
    key: 2,
    logo: "ptcl",
    companyName: "PTCL (Pakistan Telecommunication Company Ltd.)",
    designation: "Technical Intern",
    duration: "Aug – Sep 2023",
    desc: "Peeked behind the scenes of one of Pakistan’s largest telcos. Explored network management systems, CRM platforms, and fiber optic setups. Learned how big infrastructure runs and how everything connects.",
  },
  {
    key: 3,
    logo: "ag-logo",
    companyName: "AG InfoTech",
    designation: "Front-End Intern",
    duration: "Jun 2024 – Aug 2024",
    desc: "Dove into the frontend world with real projects. Learned how to turn HTML, CSS, JS, and React code into actual user experiences. This was where theory met reality and I was hooked.",
  },

  {
    key: 4,
    logo: "ag-logo",
    companyName: "AG InfoTech",
    designation: "Junior Front-end Developer",
    duration: "September,2024-August,2025",
    desc: "Started as an intern, earned my spot on the team ; now building sleek, responsive UIs with React, JavaScript, and Next.js. I collaborate with designers and backend devs to craft interfaces that feel right. Clean code, great UX, and pixel precision? That’s my jam.",
  },
  // {
  //     logo:"",
  //     companyName:"",
  //     designation:"",
  //     duration:"",
  //     desc:"",
  // },
];
export const projects = [
  {
    id: 1,
    name: "Advanced counceling associates",
    desc: (
      <>
        Contributed as a{" "}
        <span className="underline underline-offset-2">Frontend Developer</span>{" "}
        to build a mental health and counseling services website using Next.js,
        Tailwind CSS, and Framer Motion. Implemented animations, responsive UI,
        and performance optimizations to ensure smooth, engaging experiences for
        users seeking support. Collaborated with backend developers and
        designers to align on functionality and accessibility best practices.
      </>
    ),
    imageSrc: "aca",
    imageAlt:
      "Advanced Councelling Associates- mental health services platform",
    gitLink:
      "https://github.com/UnaizaZafar/advanced-counselling-associates.git",
    webLink: "https://main.djnukwmwo4i0p.amplifyapp.com/",
  },
  {
    id: 2,
    name: "Samina Khalid Ghurki",
    desc: (
      <>
        Worked as a{" "}
        <span className="underline underline-offset-2">Frontend Developer</span>{" "}
        on a personal branding website for a political client. Without a
        provided Figma design, recreated the interface based on a single image
        reference. Built the project in Next.js with Tailwind CSS, ensuring
        responsive layouts and optimized performance across devices. Delivered a
        polished product reflecting the client’s identity with strong attention
        to detail and adaptability.
      </>
    ),
    darkTheme: true,
    imageSrc: "skg",
    imageAlt: "SKG- personal Website",
    gitLink: "https://github.com/UnaizaZafar/skg-next.git",
    webLink: "https://main.d7292mdyn5r02.amplifyapp.com/",
  },
  {
    id: 3,
    name: "AG InfoTech - Cooperate Website",
    desc: (
      <>
        As a{" "}
        <span className="underline underline-offset-2">
          Frontend Developer & UI Designer
        </span>
        , worked on AG Infotech’s flagship corporate site using Next.js and
        Tailwind CSS. Took ownership of the design process where Figma files
        weren’t provided, creating layouts, color schemes, and interaction
        flows. Developed responsive, SEO-friendly components and integrated them
        into the company’s branding. This was one of the earliest professional
        projects, building confidence in balancing design and development roles.
      </>
    ),
    imageSrc: "ag",
    imageAlt: "AG InfoTech - Cooperate Website",
    // gitLink: "",
    webLink: "https://www.aginfotech.co/",
  },
  {
    id: 4,
    name: "Keller Immigration Law",
    desc: (
      <>
        Contributed as a{" "}
        <span className="underline underline-offset-2">Frontend Developer</span>{" "}
        to the Keller Immigration Law website using Next.js and Tailwind CSS.
        Focused on rapid development cycles, ensuring responsive pages,
        optimized loading speeds, and accessibility compliance. Successfully
        collaborated in a fast-paced environment, balancing quality and delivery
        deadlines.
      </>
    ),
    darkTheme: true,
    imageSrc: "keller",
    imageAlt: "law firm website ",
    // gitLink: "",
    webLink: "https://kellerimmigration.com/",
  },
  {
    id: 5,
    name: "Paul Mankin Law",
    desc: (
      <>
        As a{" "}
        <span className="underline underline-offset-2">Frontend Developer</span>
        , built and maintained Paul Mankin’s law firm website using Next.js and
        Tailwind CSS. Besides implementing the UI, contributed to large-scale
        content population by uploading and formatting 400+ blog posts in under
        a week, ensuring consistency, SEO optimization, and site stability.
        Demonstrated efficiency, attention to detail, and time management under
        demanding content requirements.
      </>
    ),
    darkTheme: true,
    imageSrc: "paul",
    imageAlt: "law services website ",
    gitLink: "https://github.com/UnaizaZafar/paul-mankin-law",
    // webLink: "",
  },
  {
    id: 6,
    name: "ASH Portal",
    desc: (
      <>
        Served as a{" "}
        <span className="underline underline-offset-2">Frontend Developer</span>{" "}
        on an internal management platform project, utilizing TypeScript,
        Next.js, and backend integration. Designed the architecture for reusable
        UI components, implemented TypeScript types for safety, and ensured
        seamless interaction with APIs. This project highlighted adaptability
        and ability to work on scalable, enterprise-level solutions.
      </>
    ),
    darkTheme: true,
    imageSrc: "ash",
    imageAlt: "ASH management portal ",
    gitLink: "https://github.com/UnaizaZafar/ash-portal.git",
    // webLink: "",
  },
  {
    id: 7,
    name: "SNH Consultants",
    desc: (
      <>
        Worked as a{" "}
        <span className="underline underline-offset-2">QA Engineer</span> to
        ensure the quality and stability of the SNH Consultants website.
        Conducted manual testing across devices, logging functional bugs, UI
        inconsistencies, and performance issues. Created a detailed QA report
        with categorized issues, reproduction steps, and severity levels,
        directly supporting the development team in delivering a reliable and
        polished product.
      </>
    ),
    imageSrc: "snh",
    imageAlt: "SNH Consultants website",
    // gitLink: "",
    webLink: "https://snhconsultants.co/",
  },
  {
    id: 8,
    name: "React Jobs",
    desc: "Created a React Jobs application with React.js and Tailwind CSS, simulating a modern job board. Implemented job listings, category-based filtering, and responsive design to ensure a smooth user experience. This project strengthened practical React skills, focusing on props, state, and reusable components.",
    imageSrc: "react-jobs",
    imageAlt: "React Jobs",
    darkTheme: true,
    gitLink: "https://github.com/UnaizaZafar/ReactJobs.git",
    webLink: "https://react-jobs-coral.vercel.app/",
  },
  {
    id: 9,
    name: "React Dynamic Table",
    desc: "Built a feature-rich React Dynamic Table component designed for reusability across multiple applications. Implemented functionalities like column sorting, filtering, pagination, and responsive design. This project demonstrated component reusability, modular design, and clean state management in React.",
    imageSrc: "dynamic-table",
    imageAlt: "React Dynamic Table",
    darkTheme: true,
    gitLink:
      "https://github.com/UnaizaZafar/Dynamic-React-Table-A-Feature-Rich-Reusable-Component.git",
    webLink:
      "https://dynamic-react-table-a-feature-rich-reusable-component.vercel.app/",
  },
  {
    id: 10,
    name: "ConcertRx",
    desc: "Developed ConcertRx, an event and concert booking platform using Next.js. Implemented clean UI layouts, routing, and responsive design. This project highlighted the ability to create engaging front-end experiences with a scalable code structure.",
    imageSrc: "concertrx",
    imageAlt: "ConcertRx",
    darkTheme: true,
    gitLink: "https://github.com/UnaizaZafar/concertRx-next.git",
    // webLink: "",
  },
  {
    id: 11,
    name: "Repair Management System",
    desc: "Designed and developed a Repair Management System using Next.js, enabling users to create, track, and manage repair requests efficiently. Implemented task tracking, intuitive UI components, and basic CRUD functionality, showcasing the ability to build practical, real-world applications with structured workflows.",
    imageSrc: "rms",
    imageAlt: "Repair Management System",
    darkTheme: true,
    gitLink: "https://github.com/UnaizaZafar/next-rms.git",
    webLink: "https://next-rms-six.vercel.app/analytics",
  },
  {
    id: 12,
    name: "Calculator",
    desc: "Developed a fully functional calculator using HTML, CSS, and JavaScript as an introductory project during internship. Focused on understanding DOM manipulation, button event handling, and building a clean, responsive UI. This project helped solidify JavaScript fundamentals and problem-solving skills.",
    imageSrc: "calc",
    imageAlt: "Calculator",
    gitLink: "https://github.com/UnaizaZafar/calculator-html.git",
    webLink: "https://calculator-html-gilt.vercel.app/",
  },
];
export const skills = [
  {
    name: "html",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        ></path>
        <path
          fill="#F16529"
          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        ></path>
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        ></path>
      </svg>
    ),
  },
  {
    name: "css",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <path
          fill="#1572B6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        ></path>
        <path
          fill="#33A9DC"
          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
        ></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        ></path>
        <path
          fill="#fff"
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        ></path>
      </svg>
    ),
  },
  {
    name: "javascript",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        ></path>
      </svg>
    ),
  },
  {
    name: "react",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "nextjs",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <circle cx="64" cy="64" r="64"></circle>
        <path
          fill="url(#a)"
          d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
        ></path>
        <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
        <defs>
          <linearGradient
            id="a"
            x1="109"
            x2="144.5"
            y1="116.5"
            y2="160.5"
            gradientTransform="scale(.71111)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="b"
            x1="121"
            x2="120.799"
            y1="54"
            y2="106.875"
            gradientTransform="scale(.71111)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "nodejs",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path
          fill="url(#a)"
          d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
        ></path>
        <path
          fill="url(#b)"
          d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
        ></path>
        <path
          fill="url(#c)"
          d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
        ></path>
        <defs>
          <linearGradient
            id="a"
            x1="34.513"
            x2="27.157"
            y1="15.535"
            y2="30.448"
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F873F"></stop>
            <stop offset=".33" stop-color="#3F8B3D"></stop>
            <stop offset=".637" stop-color="#3E9638"></stop>
            <stop offset=".934" stop-color="#3DA92E"></stop>
            <stop offset="1" stop-color="#3DAE2B"></stop>
          </linearGradient>
          <linearGradient
            id="b"
            x1="30.009"
            x2="50.533"
            y1="23.359"
            y2="8.288"
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".138" stop-color="#3F873F"></stop>
            <stop offset=".402" stop-color="#52A044"></stop>
            <stop offset=".713" stop-color="#64B749"></stop>
            <stop offset=".908" stop-color="#6ABF4B"></stop>
          </linearGradient>
          <linearGradient
            id="c"
            x1="21.917"
            x2="40.555"
            y1="22.261"
            y2="22.261"
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".092" stop-color="#6ABF4B"></stop>
            <stop offset=".287" stop-color="#64B749"></stop>
            <stop offset=".598" stop-color="#52A044"></stop>
            <stop offset=".862" stop-color="#3F873F"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "github",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <g fill="#ffffff">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
          ></path>
          <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "tailwind",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <path
          fill="#ffffff"
          d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
        ></path>
        <path
          fill="#fff"
          d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
        ></path>
      </svg>
    ),
  },
  {
    name: "typescript",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
        <path
          data-name="original"
          fill="#007acc"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
        ></path>
      </svg>
    ),
  },
  // { name: "bootstrap", icon: "" },
  // { name: "material-ui", icon: "" },
  // { name: "sass", icon: "" },
  {
    name: "framer-motion",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path
          fill="#fff"
          d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"
        ></path>
      </svg>
    ),
  },
  // { name: "gsap", icon: "" },
  {
    name: "redux",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path
          fill="#764abc"
          d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
        ></path>
      </svg>
    ),
  },
  // { name: "context-api", icon: "" },
  {
    name: "figma",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path
          fill="#0acf83"
          d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
        ></path>
        <path
          fill="#a259ff"
          d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
        ></path>
        <path
          fill="#f24e1e"
          d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
        ></path>
        <path
          fill="#ff7262"
          d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
        ></path>
        <path
          fill="#1abcfe"
          d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
        ></path>
      </svg>
    ),
  },
  {
    name: "canva",
    icon: (
      <svg viewBox="0 0 128 128" height={70} width={70}>
        <g fill="#00c4cc">
          <path d="M59.39.152c-.484.051-1.995.23-3.328.387-5.374.613-11.468 2.227-16.816 4.48C19.891 13.106 5.324 30.849 1.305 51.2.359 56.04.129 58.418.129 64c0 7.195.715 12.16 2.61 18.434 6.195 20.53 22.323 36.632 42.906 42.851 6.195 1.871 11.187 2.586 18.355 2.586 7.195 0 12.16-.715 18.434-2.61 20.53-6.195 36.632-22.323 42.851-42.906 1.871-6.195 2.586-11.187 2.586-18.355 0-3.047-.152-6.527-.332-7.809-2.074-14.796-8.168-27.238-18.328-37.402C99.07 8.703 86.68 2.586 72.19.512c-1.996-.282-11.238-.54-12.8-.36zm-20.863 40.32c1.36.41 1.996.794 2.918 1.715 1.793 1.82 2.203 2.817 2.203 5.555 0 2.051-.078 2.434-.691 3.508-1.18 1.996-3.918 3.84-5.812 3.89-1.333.028-1.278-.562.18-2.097 1.945-2.023 2.226-2.79 2.226-5.813-.024-2.917-.383-3.914-1.739-4.734-1.128-.691-2.355-.64-4.148.203-4.66 2.23-9.703 9.653-11.672 17.258-2.613 10.137 2.02 18.25 9.649 16.867 2.226-.41 6.425-2.558 8.246-4.25 1.508-1.379 1.508-1.406 1.66-3.12.336-3.587 2.867-7.169 6.25-8.833 1.558-.77 1.945-.844 4.043-.844 1.996 0 2.457.102 3.43.637 3.097 1.77 2.457 5.89-.895 5.89-1.945 0-2.945-1-1.535-1.534 1.383-.512.867-2.434-.742-2.868-1.895-.488-4.047.793-5.403 3.25-1.64 2.97-1.715 6.504-.156 8.114 1.512 1.613 3.406.336 4.867-3.329.766-1.867 1.867-2.867 3.149-2.867 1.125 0 1.332.692.843 2.793-.718 3.25-.23 4.094 1.793 3.098.664-.309 1.766-1.023 2.43-1.535l1.254-1 .848-4.43c.922-4.965 1.277-5.633 3.172-5.988 1.82-.336 2.23.562 1.562 3.402l-.36 1.59 1.333-1.36c3.148-3.226 7.015-4.812 8.347-3.48.715.715.637 1.613-.386 4.785-.485 1.512-1.153 3.895-1.457 5.25-.461 2.047-.489 2.535-.23 2.868.82.972 3.327-.028 5.554-2.204l1.305-1.277.156-2.844c.152-3.277.457-4.453 1.328-5.504.82-.972 2.305-1.687 3.098-1.484.793.207.793.973.078 3.227-1 3.097-.895 10.238.129 10.238.41 0 2.507-2.2 3.84-4.043l.996-1.36-.793-.816c-1.383-1.46-1.715-2.406-1.715-4.789 0-1.738.129-2.379.562-3.227.719-1.328 1.844-2.3 3.176-2.687 1.406-.434 3.148.281 3.863 1.562.719 1.305.54 4.223-.383 6.223l-.664 1.457h.895c1.23 0 1.715-.305 3.918-2.379 1.152-1.101 2.484-2.05 3.48-2.511 3.918-1.84 8.528-.895 9.293 1.921.64 2.254-.765 3.84-3.226 3.66-1.766-.128-2.098-.59-1.074-1.456 1.843-1.54 0-3.508-2.637-2.793-1.434.386-3.047 1.996-3.89 3.867-1.692 3.738-.794 8.14 1.636 8.14.973 0 2.691-1.921 3.355-3.789.793-2.152 2.457-3.507 3.711-3.02.692.255.743.946.309 3.122-.488 2.383-.563 4.61-.18 5.633.153.382.614 1.101 1.051 1.586.816.921.844 1.254.152 1.691-.332.23-.77.129-1.843-.46-1.485-.77-2.766-2.153-3.227-3.458l-.281-.766-1.024.766c-.59.41-1.511.871-2.047 1.023-2.125.563-4.738-.894-5.964-3.351-.489-.95-.641-3.738-.282-4.813.204-.59.204-.59-.617-.18-.433.231-1.355.485-2.07.563-1.18.13-1.36.258-2.535 1.742-1.664 2.07-4.61 4.864-5.813 5.454-2.558 1.277-3.402.918-4.07-1.72l-.461-1.765-1.102.973c-1.406 1.23-4.222 2.715-5.836 3.074-1.535.332-3.175-.156-3.84-1.18-.995-1.535-.663-4.785.922-9.164 1.176-3.25.333-3.3-2.636-.203-2.203 2.328-3.149 3.992-3.762 6.578-.64 2.688-1.41 3.66-3.148 4.07-1.051.231-1.54-.41-1.332-1.816l.152-1.129-.973.668c-1.383.946-3.125 1.817-4.328 2.149-1.203.332-2.789-.024-3.172-.692-.691-1.175-.691-1.175-1.765-.332-2.332 1.895-5.66 1.356-7.348-1.152l-.54-.793-1.687 1.562c-4.867 4.454-10.957 6.45-15.464 5.067-5.735-1.738-8.907-6.656-8.856-13.746.024-7.117 3.172-14.617 8.473-20.172 2.996-3.125 5.812-4.969 8.68-5.66 2.07-.512 3.328-.485 5.296.129zm0 0" />
          <path d="M90.418 58.676c-.563.562-.356 2.816.36 4.25.359.742.742 1.332.87 1.332.102 0 .332-.59.512-1.309.64-2.66-.512-5.504-1.742-4.273zm0 0" />
        </g>
      </svg>
    ),
  },
  {
    name: "adobe-illustrator",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path
          fill="#300"
          d="M22.7 1.6h82.7c12.5 0 22.7 10.1 22.7 22.7v79.5c0 12.5-10.1 22.7-22.7 22.7H22.7C10.1 126.4 0 116.3 0 103.7V24.3C0 11.7 10.1 1.6 22.7 1.6"
        ></path>
        <path
          fill="#ff9a00"
          d="M61.9 76.3H42l-4 12.5c-.1.5-.5.8-1 .7H27c-.6 0-.7-.3-.6-1l17.2-49.4c.2-.5.3-1.1.5-1.8.2-1.1.3-2.3.3-3.5-.1-.3.2-.5.4-.6h13.8c.4 0 .6.2.7.4l19.5 54.9c.2.6 0 .9-.5.9H67.1c-.4.1-.7-.2-.9-.6zM45.1 65.4h13.5c-.3-1.1-.7-2.5-1.2-3.8-.5-1.4-1-3-1.4-4.6-.5-1.7-1-3.3-1.5-4.9-.5-1.7-1-3.2-1.4-4.7-.4-1.5-.8-2.9-1.2-4.2h-.1c-.5 2.3-1.1 4.6-1.8 6.9-.8 2.6-1.6 5.2-2.5 7.9-.8 2.7-1.6 5.2-2.4 7.4m45.6-22.7c-1.8.1-3.5-.6-4.7-1.9-1.2-1.3-1.9-3.1-1.8-4.9-.1-1.8.6-3.5 1.9-4.7 1.3-1.2 3-1.9 4.7-1.9 2.1 0 3.7.6 4.9 1.9 1.2 1.3 1.8 3 1.8 4.7.1 1.8-.6 3.6-1.9 4.9-1.3 1.3-3.1 2-4.9 1.9m-6 46.3V47.9c0-.5.2-.7.7-.7H96c.5 0 .7.3.7.7V89c0 .6-.2.9-.7.9H85.5c-.5-.1-.8-.4-.8-.9"
        ></path>
      </svg>
    ),
  },
  {
    name: "photoshop",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path
          fill="#001e36"
          d="M22.667 1.6h82.666C117.867 1.6 128 11.733 128 24.267v79.466c0 12.534-10.133 22.667-22.667 22.667H22.667C10.133 126.4 0 116.267 0 103.733V24.267C0 11.733 10.133 1.6 22.667 1.6Z"
        ></path>
        <path
          fill="#31a8ff"
          d="M45.867 33.333c-1.6 0-3.2 0-4.853.054-1.654.053-3.201.053-4.641.107-1.44.053-2.773.053-4.053.106-1.227.053-2.08.053-2.987.053-.373 0-.533.213-.533.587v54.88c0 .48.213.694.64.694h10.347c.373-.054.64-.374.586-.747v-17.12c1.013 0 1.76 0 2.294.053.533.053 1.386.053 2.666.053 4.374 0 8.374-.48 12-1.813 3.467-1.28 6.454-3.52 8.587-6.507 2.133-2.986 3.2-6.773 3.2-11.36 0-2.4-.426-4.693-1.226-6.933A16.98 16.98 0 0 0 64 39.36a19.049 19.049 0 0 0-7.147-4.374c-2.987-1.12-6.613-1.653-10.986-1.653Zm1.19 10.505c1.9.036 3.75.368 5.476 1.068 1.547.587 2.827 1.654 3.734 3.04a8.779 8.779 0 0 1 1.227 4.748c0 2.346-.534 4.16-1.654 5.493-1.174 1.333-2.667 2.347-4.373 2.827-1.974.64-4.054.959-6.134.959h-2.827c-.64 0-1.332-.053-2.079-.106v-17.92c.373-.054 1.12-.107 2.187-.053 1.013-.054 2.239-.054 3.626-.054.273-.007.546-.008.817-.002zm44.73 2.723c-3.787 0-6.934.586-9.44 1.866-2.293 1.067-4.267 2.773-5.6 4.906-1.173 1.974-1.814 4.16-1.814 6.454a11.447 11.447 0 0 0 1.227 5.44 13.809 13.809 0 0 0 4.054 4.533 32.629 32.629 0 0 0 7.573 3.84c2.613 1.013 4.373 1.813 5.227 2.506.853.694 1.28 1.387 1.28 2.134 0 .96-.587 1.867-1.44 2.24-.96.48-2.4.747-4.427.747-2.133 0-4.267-.267-6.294-.8a22.834 22.834 0 0 1-6.613-2.613c-.16-.107-.32-.16-.48-.053-.16.106-.213.319-.213.479v9.28c-.053.427.213.8.587 1.013a21.49 21.49 0 0 0 5.44 1.707c2.4.48 4.799.693 7.252.693 3.84 0 7.041-.586 9.654-1.706 2.4-.96 4.48-2.613 5.973-4.747a12.41 12.41 0 0 0 2.08-7.093 11.512 11.512 0 0 0-1.226-5.493c-1.014-1.814-2.454-3.307-4.214-4.427a38.625 38.625 0 0 0-8.213-3.894 48.784 48.784 0 0 1-3.787-1.76c-.693-.373-1.333-.853-1.813-1.44-.32-.427-.533-.906-.533-1.386 0-.48.16-1.013.426-1.44.374-.533.96-.907 1.653-1.067 1.014-.266 2.134-.427 3.2-.374 2.027 0 4 .267 5.974.694 1.814.373 3.52.96 5.12 1.814.213.106.48.106.96 0a.656.656 0 0 0 .267-.534v-8.693c0-.214-.054-.427-.107-.64-.107-.213-.32-.427-.533-.48A18.762 18.762 0 0 0 98.4 47.04a45.98 45.98 0 0 0-6.613-.48z"
        ></path>
      </svg>
    ),
  },
  {
    name: "vercel",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <path d="M64.002 8.576 128 119.424H0Zm0 0"></path>
      </svg>
    ),
  },
  // { name: "netlify", icon: "" },
  // { name: "mongodb", icon: "" },
  {
    name: "azure",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <defs>
          <linearGradient
            id="azure-original-a"
            x1="60.919"
            y1="9.602"
            x2="18.667"
            y2="134.423"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#114A8B"></stop>
            <stop offset="1" stop-color="#0669BC"></stop>
          </linearGradient>
          <linearGradient
            id="azure-original-b"
            x1="74.117"
            y1="67.772"
            x2="64.344"
            y2="71.076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity=".3"></stop>
            <stop offset=".071" stop-opacity=".2"></stop>
            <stop offset=".321" stop-opacity=".1"></stop>
            <stop offset=".623" stop-opacity=".05"></stop>
            <stop offset="1" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="azure-original-c"
            x1="68.742"
            y1="5.961"
            x2="115.122"
            y2="129.525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3CCBF4"></stop>
            <stop offset="1" stop-color="#2892DF"></stop>
          </linearGradient>
        </defs>
        <path
          d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z"
          fill="url(#azure-original-a)"
          transform="translate(.587 4.468) scale(.91904)"
        ></path>
        <path
          d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z"
          fill="#0078d4"
        ></path>
        <path
          d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z"
          fill="url(#azure-original-b)"
          transform="translate(.587 4.468) scale(.91904)"
        ></path>
        <path
          d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z"
          fill="url(#azure-original-c)"
          transform="translate(.587 4.468) scale(.91904)"
        ></path>
      </svg>
    ),
  },
  // { name: "docker", icon: "" },
  {
    name: "jira",
    icon: (
      <svg viewBox="0 0 128 128" width={70} height={70}>
        <defs>
          <linearGradient
            id="jira-original-a"
            gradientUnits="userSpaceOnUse"
            x1="22.034"
            y1="9.773"
            x2="17.118"
            y2="14.842"
            gradientTransform="scale(4)"
          >
            <stop offset=".176" stop-color="#0052cc"></stop>
            <stop offset="1" stop-color="#2684ff"></stop>
          </linearGradient>
          <linearGradient
            id="jira-original-b"
            gradientUnits="userSpaceOnUse"
            x1="16.641"
            y1="15.564"
            x2="10.957"
            y2="21.094"
            gradientTransform="scale(4)"
          >
            <stop offset=".176" stop-color="#0052cc"></stop>
            <stop offset="1" stop-color="#2684ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0"
          fill="#2684ff"
        ></path>
        <path
          d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0"
          fill="url(#jira-original-a)"
        ></path>
        <path
          d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0"
          fill="url(#jira-original-b)"
        ></path>
      </svg>
    ),
  },
  // { name: "trello", icon: "" },
  // { name: "github-copilot", icon: "" },
  // { name: "chatgpt", icon: "" },
];
