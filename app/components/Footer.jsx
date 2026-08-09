import Link from "next/link";
import { menu } from "../utils/data";
import { githubIcon, gmailIcon, linkedinIcon } from "../utils/svgs";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer id="contact" className="relative z-[1] bg-bg-elevated border-t border-border rounded-t-3xl pb-20 md:pb-0">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
          <div className="mx-auto flex w-full flex-col items-center gap-4 text-center">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              Get in touch
            </span>
            <h2 className="font-gamilia text-[clamp(2rem,5vw,3.5rem)] leading-tight text-text text-center">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto max-w-lg text-center text-lg text-text-muted">
              Open to full-stack roles, freelance projects, and collaborations.
            </p>
          </div>

          <Button
            href="mailto:unaizaofficial840@gmail.com"
            variant="primary"
            className="mx-auto gap-3"
          >
            <span className="size-5 shrink-0">{gmailIcon}</span>
            unaizaofficial840@gmail.com
          </Button>

          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/UnaizaZafar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-muted hover:text-accent transition-colors duration-300 focus-ring rounded-lg p-1"
            >
              {githubIcon}
            </Link>
            <Link
              href="https://www.linkedin.com/in/unaiza-z-49540b302"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-muted hover:text-accent transition-colors duration-300 focus-ring rounded-lg p-1"
            >
              {linkedinIcon}
            </Link>
            <Link
              href="mailto:unaizaofficial840@gmail.com"
              aria-label="Send email"
              className="text-text-muted hover:text-accent transition-colors duration-300 focus-ring rounded-lg p-1"
            >
              {gmailIcon}
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-md flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-4 text-center">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-300 focus-ring rounded"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="mx-auto text-center text-sm text-text-muted">
          © 2026 Unaiza Zafar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
