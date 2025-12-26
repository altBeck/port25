"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/app/components/NavLink";

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNavOverlay({ open, onClose }: Props) {
  // Lock body scroll when open
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
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-9999 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Dark panel (top half like your design) */}
      <div className="absolute inset-0 bg-[#041D26] h-114" />

      <div className="relative h-full w-full overflow-auto">
        <div>
          <div className="flex items-center justify-between p-6">
            <Link href="/" scroll onClick={onClose}>
              <Image src="/assets/icons/name.svg" alt="Beck Kanno" width={199} height={20} />
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="border-b border-white/10">
            <ul className="flex flex-col divide-y divide-white/10">
              <li>
                <NavLink href="#work" onClick={onClose} className="block text-base uppercase text-[#CED1D2] p-5">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink href="#about" onClick={onClose} className="block text-base uppercase text-[#CED1D2] p-5">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink href="#resume" onClick={onClose} className="block text-base uppercase text-[#CED1D2] p-5">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink href="#contact" onClick={onClose} className="block text-base uppercase text-[#CED1D2] p-5">
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
  );
}
