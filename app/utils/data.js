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
        className="icon icon-tabler icons-tabler-outline icon-tabler-user size-7 lg:size-8.5 "
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2 size-7 lg:size-8.5 "
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-file-smile size-7 lg:size-8.5"
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-tools size-7 lg:size-8.5"
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-phone size-7 lg:size-8.5"
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
        Contributed as a Frontend Developer to build a mental health and
        counseling services website using Next.js, Tailwind CSS, and Framer
        Motion. Implemented animations, responsive UI, and performance
        optimizations to ensure smooth, engaging experiences for users seeking
        support. Collaborated with backend developers and designers to align on
        functionality and accessibility best practices.
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
        Worked as a Frontend Developer on a personal branding website for a
        political client. Without a provided Figma design, recreated the
        interface based on a single image reference. Built the project in
        Next.js with Tailwind CSS, ensuring responsive layouts and optimized
        performance across devices. Delivered a polished product reflecting the
        client’s identity with strong attention to detail and adaptability.
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
        As a Frontend Developer & UI Designer, worked on AG Infotech’s flagship
        corporate site using Next.js and Tailwind CSS. Took ownership of the
        design process where Figma files weren’t provided, creating layouts,
        color schemes, and interaction flows. Developed responsive, SEO-friendly
        components and integrated them into the company’s branding. This was one
        of the earliest professional projects, building confidence in balancing
        design and development roles.
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
        Contributed as a Frontend Developer to the Keller Immigration Law
        website using Next.js and Tailwind CSS. Focused on rapid development
        cycles, ensuring responsive pages, optimized loading speeds, and
        accessibility compliance. Successfully collaborated in a fast-paced
        environment, balancing quality and delivery deadlines.
      </>
    ),
    darkTheme: true,
    imageSrc: "keller",
    imageAlt: "law firm website ",
    // gitLink: "",
    webLink: "https://kellerimmigration.com/",
  },
  // {
  //   id: 5,
  //   name: "Paul Mankin Law",
  //   desc: (
  //     <>
  //       A professional website for a law firm, designed to highlight core legal
  //       services while providing an extensive blog library as a resource hub for
  //       clients. The platform ensures accessibility, readability, and
  //       trust-building through a structured and responsive layout.
  //       <br />
  //       Technologies Used: Next.js, Tailwind CSS
  //       <br />
  //       Role: Frontend Developer (Team Project)
  //       <br />
  //       Contributed to the development of the website and managed the
  //       integration of a large-scale content section, adding and formatting over
  //       400 blog posts in under a week to ensure consistent presentation and
  //       user-friendly navigation
  //     </>
  //   ),
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "https://github.com/UnaizaZafar/paul-mankin-law",
  //   webLink: "",
  // },
  // {
  //   id: 6,
  //   name: "ASH Portal",
  //   desc: "A portal built with TypeScript, Next.js, and Node.js, designed to streamline internal workflows. Contributed to frontend architecture, responsive UI, and integration with backend functionality.",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "https://github.com/UnaizaZafar/ash-portal.git",
  //   webLink: "",
  // },
  // {
  //   id: 7,
  //   name: "Advanced counceling associates",
  //   desc: "",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "",
  //   webLink: "",
  // },
  // {
  //   id: 8,
  //   name: "Advanced counceling associates",
  //   desc: "",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "",
  //   webLink: "",
  // },
  // {
  //   id: 9,
  //   name: "Advanced counceling associates",
  //   desc: "",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "",
  //   webLink: "",
  // },
  // {
  //   id: 10,
  //   name: "Advanced counceling associates",
  //   desc: "",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "",
  //   webLink: "",
  // },
  // {
  //   id: 11,
  //   name: "Advanced counceling associates",
  //   desc: "",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "",
  //   webLink: "",
  // },
  // {
  //   id: 12,
  //   name: "Advanced counceling associates",
  //   desc: "",
  //   imageSrc: "",
  //   imageAlt: "",
  //   gitLink: "",
  //   webLink: "",
  // },
];
