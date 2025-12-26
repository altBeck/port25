"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Header = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".profile-title",
        { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="w-full relative pt-20 md:pt-24 lg:pt-24">
      {/* Hero background */}
      <div className="relative w-full h-auto">
        <Image
          src="/assets/images/header.jpg"
          alt="header image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover md:block hidden"
          priority
        />

        <Image 
          src="/assets/images/header-mobile.png"
          alt="header image mobile"
          width={540}
          height={780}
          className="w-full h-auto object-cover block md:hidden"
          priority
        />
      </div>

      {/* Overlay text */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12 lg:px-24"
      >
        <h1 className="profile-title text-[clamp(2.5rem,6vw,7rem)] md:text-[clamp(4rem,8vw,9rem)] font-serif text-white leading-tight">
          Beck&nbsp;Kanno
        </h1>

        <span
          className="profile-divider block mx-4 border-b-2 border-white w-20"
          style={{ transformOrigin: "left" }}
        />

        <h1 className="profile-title italic text-[clamp(2.5rem,6vw,7rem)] md:text-[clamp(4rem,8vw,9rem)] font-serif text-white leading-tight">
          Product&nbsp;Designer.
        </h1>
      </div>
    </header>
  );
};

export default Header;
