"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/app/components/NavLink";
import MobileNavOverlay from "./MobileNavOverlay";

const MenuIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M6 6l12 12M6 18L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full top-0 left-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } fixed`}
      >
        <div className="w-full flex items-center py-10 bg-[#041D26] px-6">
          {/* Left: Logo */}
          <div className="z-10">
            <Link href="/" scroll={true}>
              <Image
                src="/assets/icons/name.svg"
                alt="Logo"
                width={199}
                height={20}
                className="cursor-pointer"
              />
            </Link>
          </div>
          {/* Center: Status */}
          <div className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-manrope font-medium uppercase tracking-tight text-sm">
              Available for New Projects
            </span>
          </div>
          {/* Desktop Nav Links (md+) */}
          <div className="ml-auto z-10 hidden lg:flex">
            <ul className="flex space-x-3 text-base uppercase font-manrope font-medium">
              <li>
                <NavLink
                  href="#work"
                  className="cursor-pointer py-2 rounded-full hover:text-white/50"
                >
                  Work,
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#about"
                  className="cursor-pointer py-2 rounded-full hover:text-white/50"
                >
                  About,
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#resume"
                  className="cursor-pointer py-2 rounded-full hover:text-white/50"
                >
                  Resume,
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#contact"
                  className="cursor-pointer py-2 rounded-full hover:text-white/50"
                >
                  Email
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="ml-auto lg:hidden">
            <button className="p-2" onClick={() => setOpen((o) => !o)}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <MobileNavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default NavBar;
