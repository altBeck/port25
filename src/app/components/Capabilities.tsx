import { useEffect, useRef, MouseEvent } from "react";
import gsap from "gsap";

const Capabilities = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation: Pills slide up and fade in one by one
      gsap.from("span", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05, // The "wave" effect
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Hover effect function
  const onMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      backgroundColor: "rgba(255, 250, 250, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onMouseLeave = (e: MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "rgba(255, 250, 250, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const skills = [
    "PRODUCT DESIGN",
    "0→1 Projects",
    "WEB DESIGN",
    "DESIGN SYSTEMS",
    "PITCH DECK DESIGN",
    "RESPONSIVE DESIGN",
    "PRODUCT STRATEGY",
    "PROTOTYPING",
    "RESPONSIVE LAYOUTS",
    "GSAP",
    "TEAM BUILDING",
    "SEO",
    "USER RESEARCH",
    "UI DEVELOPMENT",
    "PRODUCT MGMT",
  ];

  return (
    <div className="flex flex-col gap-6" ref={containerRef}>
      <h1 className="mb-4 italic text-4xl md:text-5xl text-[#FFFAFA]">
        Capabilities
      </h1>

      <div className="flex flex-wrap gap-3 md:gap-5 uppercase text-xs md:text-lg font-medium">
        {skills.map((skill) => (
          <span
            key={skill}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="cursor-pointer py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#FFFAFA]/10 text-[#FFFAFA] border border-white/5 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
