import React from "react";
import Image from "next/image";
import ProjectNavbar from "../components/ProjectNavbar";
import ProjectDesc from "../components/ProjectDesc";
import CaseStudyLayout from "../components/CaseStudyLayout";

const Puplar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectNavbar />

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden md:min-h-0">
        {/* ONLY this main scrolls */}
        <main className="flex-1 md:overflow-y-auto min-h-0 px-5 md:px-12 bg-[#f6f6f6] py-8">
          <CaseStudyLayout />
        </main>

        {/* Aside (ProjectDesc) — no onWheel handler (server safe) */}
        <aside className="w-full md:w-[390px] shrink-0 h-full">
          <ProjectDesc
            projectName="Puplar"
            brief="Refresh brand and product UI for a multi-currency savings & payments experience, including virtual cards and FX flows."
            overview="Puplar offers crypto and fiat funding, multi-currency accounts and virtual dollar cards. Users struggled with trust and clarity on large cross-border transactions and funding flows."
            role="Product Designer — UI refresh, brand system, transaction UX"
            client={{ name: "Puplar", url: "https://puplar.com" }}
            year={2025}
            iosDownloadUrl="https://apps.apple.com/app/id6451193227"
            androidDownloadUrl="https://play.google.com/store/apps/details?id=com.a.puplar"
          />
        </aside>
      </div>
    </div>
  );
};

export default Puplar;
