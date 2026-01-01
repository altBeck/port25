"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type ProjectItem = {
  id: string;
  name: string;
  domain: string;
  platform: string;
  problemType: string;
  year?: string | number;
  image?: string; 
};

type Props = {
  projects?: ProjectItem[];
  activeProjectId?: string | null;
};

const defaultProjects: ProjectItem[] = [
  { id: "puplar", name: "PUPLAR", domain: "FINTECH, CRYPTO", platform: "iOS, ANDROID", problemType: "TRUST, MONEY MANAGEMENT", year: 2024, image: "/assets/images/puplar-mobile.png" },
  { id: "japa", name: "JAPA", domain: "MIGRATION, EDUTAINMENT", platform: "iOS, ANDROID", problemType: "COMPLEX IMMIGRATION FLOWS", year: 2024, image: "/assets/images/japa-mobile.png" },
  { id: "dash", name: "DASH", domain: "MOBILITY, COMMUTE", platform: "iOS, ANDROID, WEB", problemType: "POOR RIDE VISIBILITY & SCHEDULING", year: 2025, image: "/assets/images/dash-mobile.png" },
  { id: "akawo", name: "AKAWO", domain: "BNPL COMMERCE", platform: "iOS, ANDROID, WEB", problemType: "CHECK OUT FRICTION, SELLER DASHBOARD", year: 2025, image: "/assets/images/akawo-mobile.png" },
  { id: "pluto", name: "PLUTO", domain: "PERSONAL FINANCE ASSISTANT", platform: "MOBILE, WEB", problemType: "WEAK BUDGETS, NOISY RECEIPTS", year: "N/A", image: "/assets/images/pluto-mobile.png" },
];

export default function ProjectFooter({ projects = defaultProjects, activeProjectId = "puplar" }: Props) {
  return (
    // Removed overflow-hidden and w-full constraints that were breaking the layout
    <footer className="w-full bg-[#0B1214] text-[#D1D5D6] py-16 md:py-24 font-sans">
      
      {/* 1. Header */}
      <div className="px-6 md:px-12 mb-8">
        <h2 className="font-serif italic text-4xl md:text-5xl text-white font-light tracking-wide">
          Check out more projects
        </h2>
      </div>

      {/* 2. Desktop Table */}
      <div className="hidden md:block w-full px-6 md:px-12">
        <div className="w-full border-t border-[#1F292B]">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 py-6 text-xs font-semibold tracking-widest text-[#5F6A6C] uppercase">
            <div className="col-span-2">Project Name</div>
            <div className="col-span-3">Domain</div>
            <div className="col-span-2">Platform</div>
            <div className="col-span-4">Problem Type</div>
            <div className="col-span-1 text-right">Year</div>
          </div>

          {/* Project Rows */}
          <div className="flex flex-col">
            {projects.map((p) => {
              const isActive = p.id === activeProjectId;
              return (
                <Link 
                  href={`/projects/${p.id}`} 
                  key={p.id}
                  className={`
                    group grid grid-cols-12 gap-4 py-6 px-4 -mx-4 items-center border-t border-[#1F292B] transition-all duration-200
                    ${isActive ? "bg-[#111A1C]" : "hover:bg-[#111A1C]"}
                  `}
                >
                  <div className={`col-span-2 text-base font-semibold tracking-wide ${isActive ? "text-white" : "text-[#949A9C] group-hover:text-white"}`}>
                    {p.name}
                  </div>
                  <div className="col-span-3 text-[#7A8385] text-xs uppercase tracking-wide font-medium">{p.domain}</div>
                  <div className="col-span-2 text-[#7A8385] text-xs uppercase tracking-wide font-medium">{p.platform}</div>
                  <div className="col-span-4 text-[#7A8385] text-xs uppercase tracking-wide font-medium">{p.problemType}</div>
                  <div className="col-span-1 text-[#7A8385] text-xs text-right font-medium">{p.year}</div>
                </Link>
              );
            })}
             <div className="border-t border-[#1F292B]" />
          </div>
        </div>
      </div>

      {/* 3. Mobile Carousel */}
      <div className="md:hidden w-full pb-8 mt-6">
        <MobileCarousel projects={projects} activeProjectId={activeProjectId} />
      </div>

      {/* 4. Bottom Contact Info */}
      <div className="mt-16 md:mt-24 px-6 md:px-12">
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl text-[#C4C9CA] leading-relaxed mb-10 font-light">
            Have a project in mind you want to talk about? <br className="hidden md:block" />
            Shoot me an email and we can work something out.
          </p>

          <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <Link href="/about" className="text-white font-semibold text-base flex items-center gap-2 hover:text-[#4CC9F0] transition-colors">
                About Me <span className="text-lg">→</span>
              </Link>
              
              <a href="mailto:drkannobeck@gmail.com" className="text-white font-semibold text-base flex items-center gap-2 hover:text-[#4CC9F0] transition-colors">
                drkannobeck@gmail.com
                <span className="opacity-50 hover:opacity-100">📋</span>
              </a>
            </div>

            <div className="w-full pt-8 mt-8 border-t border-[#1F292B] flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-[#5F6A6C] gap-4">
              <div className="flex flex-col gap-2">
                <span>Made with sleepless nights and procrastination</span>
                <div className="flex items-center gap-2 opacity-60">
                    <span>Designed using</span>
                    <div className="flex gap-2">
                         {/* Simple circles for tool icons */}
                         <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                         <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                         <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    </div>
                </div>
              </div>
              <div>©2026</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- MOBILE CAROUSEL ---------------- */
function MobileCarousel({ projects, activeProjectId }: { projects: ProjectItem[]; activeProjectId?: string | null }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeProjectId && scrollContainerRef.current) {
      const index = projects.findIndex((p) => p.id === activeProjectId);
      if (index !== -1) {
        setActiveIndex(index);
        const container = scrollContainerRef.current;
        const cardWidth = container.offsetWidth; // snap-center full width logic
        container.scrollTo({ left: index * cardWidth, behavior: 'auto' });
      }
    }
  }, [activeProjectId, projects]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-6">
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-0" 
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((p) => (
          <div key={p.id} className="snap-center shrink-0 w-full px-4 flex justify-center">
            {/* CARD Matches Design: Dark Teal Background, Image Top, Button Bottom */}
            <div className="w-full max-w-[380px] bg-[#162629] rounded-[24px] overflow-hidden border border-[#233033] flex flex-col h-[520px]">
                
                {/* Image Section */}
                <div className="flex-1 relative bg-gradient-to-b from-[#1E3033] to-[#162629] flex items-end justify-center pt-8">
                     {p.image ? (
                        <div className="relative w-[80%] h-[90%]">
                           <Image 
                              src={p.image} 
                              alt={p.name} 
                              fill 
                              className="object-contain object-bottom"
                           />
                        </div>
                     ) : (
                        <span className="text-white/20 mb-10">No Preview</span>
                     )}
                </div>

                {/* Info Section */}
                <div className="px-6 py-6 bg-[#162629]">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-white text-lg font-bold tracking-wide">{p.name}</h3>
                        <span className="text-[#5F6A6C] text-xs font-medium">{p.year}</span>
                    </div>
                    
                    <div className="flex gap-2 text-[10px] text-[#7A8385] uppercase tracking-wider mb-2 font-medium">
                        <span>{p.domain}</span>
                    </div>

                    <p className="text-[#949A9C] text-xs leading-relaxed mb-6 h-8 line-clamp-2">
                       {p.platform} • {p.problemType}
                    </p>

                    <Link 
                      href={`/projects/${p.id}`}
                      className="w-full bg-[#F0F2F2] text-[#0B1214] font-bold text-sm h-12 rounded-full flex items-center justify-center gap-2 hover:bg-white transition"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        VIEW PROJECT
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        {projects.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-white" : "bg-[#2A3537]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}