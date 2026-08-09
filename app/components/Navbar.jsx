"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menu } from "../utils/data";
import Button from "./ui/Button";

const NAV_OFFSET = 120;

const getSectionTop = (element) =>
  element.getBoundingClientRect().top + window.scrollY;

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = [...new Set(menu.map((item) => item.link.replace("#", "")))];

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + NAV_OFFSET;
      let currentSection = sectionIds[0] ?? "hero";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && getSectionTop(element) <= scrollPosition) {
          currentSection = id;
        }
      }

      setActive(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? "glass-surface border-b border-border py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="#hero" className="focus-ring rounded-lg">
            <Image src="/images/uz-logo-2.webp" width={44} height={44} alt="Unaiza Zafar logo" />
          </Link>

          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {menu.map((item) => {
              const sectionId = item.link.replace("#", "");
              const isActive = active === sectionId;
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`rounded-lg px-2.5 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-all duration-300 focus-ring ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-text-muted hover:text-text hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Button href="/Unaiza-Resume.pdf" download="Unaiza-Resume.pdf" variant="outline" className="!px-4 !py-2 text-sm">
            Download CV
          </Button>
        </nav>
      </header>

      <MobileNav active={active} />
    </>
  );
};

const MobileNav = ({ active }) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 glass-surface border-t border-border md:hidden">
      <div className="flex w-full justify-around items-center px-2 py-2">
        {menu.map((item) => {
          const sectionId = item.link.replace("#", "");
          const isActive = active === sectionId;
          return (
            <Link
              key={item.id}
              href={item.link}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 transition-all duration-300 focus-ring ${
                isActive ? "text-accent" : "text-text-muted"
              }`}
            >
              <span className="size-6">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.name.split(" ")[0]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
