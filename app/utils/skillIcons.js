const DEVICON_CDN =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const pendingCustomIcons = [
  "Fabric.js",
  "GSAP",
  "Framer Motion",
  "ClickUp",
  "Cursor",
  "Claude",
  "ChatGPT",
  "GitHub Copilot",
  "Canva",
  "RBAC",
  "REST APIs",
  "Agile / Scrum",
  "Postman",
];

export const skillCatalog = [
  {
    name: "Frontend",
    skills: [
      { label: "HTML5", devicon: "html5", variant: "plain" },
      { label: "CSS3", devicon: "css3", variant: "plain" },
      { label: "JavaScript", devicon: "javascript", variant: "plain" },
      { label: "TypeScript", devicon: "typescript", variant: "plain" },
      { label: "React", devicon: "react", variant: "original" },
      { label: "Next.js", devicon: "nextjs", variant: "original" },
      // { label: "React Native", devicon: "reactnative", variant: "original" },
      { label: "Redux", devicon: "redux", variant: "original" },
      { label: "Tailwind CSS", devicon: "tailwindcss", variant: "original" },
      { label: "SASS", devicon: "sass", variant: "original" },
      { label: "Bootstrap", devicon: "bootstrap", variant: "plain" },
      { label: "Material UI", devicon: "materialui", variant: "plain" },
      { label: "Webpack", devicon: "webpack", variant: "plain" },
      { label: "Fabric.js", devicon: null },
      { label: "GSAP", devicon: null },
      { label: "Framer Motion", devicon: null },
    ],
  },
  {
    name: "Backend & API",
    skills: [
      { label: "Supabase", devicon: "supabase", variant: "original" },
      { label: "PostgreSQL", devicon: "postgresql", variant: "plain" },
      { label: "Prisma", devicon: "prisma", variant: "original" },
      { label: "Node.js", devicon: "nodejs", variant: "plain" },
      { label: "REST APIs", devicon: null },
      { label: "RBAC", devicon: null },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { label: "Git", devicon: "git", variant: "plain" },
      { label: "GitHub", devicon: "github", variant: "original" },
      { label: "NPM", devicon: "npm", variant: "original" },
      { label: "VS Code", devicon: "vscode", variant: "original" },
      { label: "Vercel", devicon: "vercel", variant: "original" },
      { label: "Azure", devicon: "azure", variant: "plain" },
      { label: "AWS", devicon: "amazonwebservices", variant: "plain-wordmark" },
      { label: "Postman", devicon: null },
      { label: "ClickUp", devicon: null },
    ],
  },
  {
    name: "AI & Productivity",
    skills: [
      { label: "GitHub Copilot", devicon: null },
      { label: "ChatGPT", devicon: null },
      { label: "Claude", devicon: null },
      { label: "Cursor", devicon: null },
    ],
  },
  {
    name: "Design",
    skills: [
      { label: "Figma", devicon: "figma", variant: "plain" },
      { label: "Illustrator", devicon: "illustrator", variant: "plain" },
      { label: "Photoshop", devicon: "photoshop", variant: "plain" },
      { label: "Canva", devicon: null },
    ],
  },
];

export const getDeviconUrl = (devicon, variant = "original") =>
  `${DEVICON_CDN}/${devicon}/${devicon}-${variant}.svg`;
