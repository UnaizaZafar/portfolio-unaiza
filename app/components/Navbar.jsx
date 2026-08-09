"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menu } from "../utils/data";
import Button from "./ui/Button";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...menu.map((item) => item.link.replace("#", ""))];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
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
