// app/puplar/page.tsx
"use client";

import React from "react";
import ProjectNavbar from "../components/ProjectNavbar";
import ProjectDesc from "../components/ProjectDesc";
import CaseStudyLayout from "../components/CaseStudyLayout";
import ProjectFooter from "../components/ProjectFooter";

const Puplar = () => {
  // Shared props to keep code clean
  const descriptionProps = {
    projectName: "Puplar",
    brief: "Refresh brand and product UI for a multi-currency savings & payments experience, including virtual cards and FX flows.",
    overview: "Puplar offers crypto and fiat funding, multi-currency accounts and virtual dollar cards. Users struggled with trust and clarity on large cross-border transactions and funding flows.",
    role: "Product Designer — UI refresh, brand system, transaction UX",
    client: { name: "Puplar", url: "https://puplar.com" },
    year: 2025,
    iosDownloadUrl: "https://apps.apple.com/app/id6451193227",
    androidDownloadUrl: "https://play.google.com/store/apps/details?id=com.a.puplar"
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f6f6f6]">
      
      {/* --- LEFT COLUMN: CONTENT --- */}
      <div className="flex-1 flex flex-col min-w-0">
        <ProjectNavbar />

        <main className="w-full px-5 md:px-12 lg:px-20 py-8 md:py-16">
          <CaseStudyLayout />
        </main>

        {/* MOBILE ONLY: Project Description appears AFTER the footer on small screens */}
        <div className="block md:hidden">
          <ProjectDesc {...descriptionProps} />
        </div>
        
        {/* Footer stays here for Desktop */}
        <ProjectFooter activeProjectId="puplar" />

      </div>

      {/* --- RIGHT COLUMN: SIDEBAR (DESKTOP ONLY) --- */}
      {/* We hide this on mobile so it doesn't show up at the very bottom */}
      <aside className="hidden md:block w-[400px] lg:w-[480px] shrink-0 bg-white border-l border-gray-200 z-40 h-screen sticky top-0 overflow-y-auto">
        <ProjectDesc {...descriptionProps} />
      </aside>

    </div>
  );
};

export default Puplar;