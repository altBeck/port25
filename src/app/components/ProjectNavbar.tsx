"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const MenuIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ProjectNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        role="navigation"
        aria-label="Primary"
        className="h-20 px-6 flex items-center bg-[#041D26] text-white"
      >
        {/* Left: Logo */}
        <div className="z-20 flex items-center">
          <Link href="/" className="inline-block" scroll>
            <Image
              src="/assets/icons/name.svg"
              alt="Beck Kanno logo"
              width={199}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Center status: hidden on small screens */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="font-manrope font-medium uppercase tracking-tight text-sm">
            Available for New Projects
          </span>
        </div>

        {/* Desktop Links (md+) */}
        <div className="ml-auto z-20 hidden lg:flex">
          <ul className="flex space-x-3 text-base uppercase font-manrope font-medium">
            <li><NavLink href="#about" className="py-2">About,</NavLink></li>
            <li><NavLink href="#work" className="py-2">Work,</NavLink></li>
            <li><NavLink href="#resume" className="py-2">Resume,</NavLink></li>
            <li><NavLink href="#contact" className="py-2">Email</NavLink></li>
          </ul>
        </div>

        {/* Mobile hamburger (visible on small screens) */}
        <div className="ml-auto z-30 lg:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-[#041D26] h-114" />

          <div className="relative h-full w-full overflow-auto">
            <div className="">
              <div className="flex items-center justify-between p-6">
                <Link href="/" scroll onClick={() => setOpen(false)}>
                  <Image src="/assets/icons/name.svg" alt="Beck Kanno" width={199} height={20} />
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav>
                <ul className="flex flex-col divide-y divide-white/6">
                  <li>
                    <NavLink href="#work" onClick={() => setOpen(false)} className="block text-base uppercase text-[#CED1D2] p-5">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#about" onClick={() => setOpen(false)} className="block text-base uppercase text-[#CED1D2] p-5">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#resume" onClick={() => setOpen(false)} className="block text-base uppercase text-[#CED1D2] p-5">
                      Resume
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#contact" onClick={() => setOpen(false)} className="block text-base uppercase text-[#CED1D2] p-5">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="mt-10 flex items-center justify-center gap-3">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="font-manrope font-medium uppercase tracking-tight text-sm text-white">
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ProjectNavbar;
