// components/CloseButton.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type CloseButtonProps = {
  href?: string;        // default "/"
  className?: string;
  ariaLabel?: string;
};

export default function CloseButton({
  href = "/",
  className = "bg-[#EAEAEA] w-fit",
  ariaLabel = "Close and return to homepage",
}: CloseButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center
        w-10 h-fit rounded-md flex-row space-x-2 p-2 md:p-4 hover:bg-[#E6E6E6] 
        ${className}`}
    >
      <Image 
        src="/assets/icons/close.svg"
        alt="close icon"
        width={18}
        height={18}
      />

      <span className="uppercase text-gray-800">close</span>
    </Link>
  );
}
