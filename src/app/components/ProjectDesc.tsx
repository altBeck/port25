"use client";

import Link from "next/link";
import Image from "next/image";
import CloseButton from "./CloseButton";

export type ProjectDescProps = {
  projectName: string;
  brief?: string;
  overview?: string;
  role?: string;
  client?: { name: string; url?: string };
  year?: string | number;
  iosDownloadUrl?: string | null;
  androidDownloadUrl?: string | null;
  className?: string;
};

export default function ProjectDesc({
  projectName,
  brief,
  overview,
  role,
  client,
  year,
  iosDownloadUrl,
  androidDownloadUrl,
  className = "",
}: ProjectDescProps) {
  const handleExternal = (e: React.MouseEvent, url?: string) => {
    if (!url) {
      e.preventDefault();
    }
  };

  // Keep your imports and type defs — only replace the JSX returned in the component
return (
  <aside
    className={`w-full md:w-[390px] shrink-0 h-full`}
      aria-labelledby="project-desc-title"
  >
    
    <div className="w-full md:w-[390px] md:fixed md:top-20 md:h-screen bg-[#F6F6F6]  md:flex md:flex-col overflow-hidden">
      
      <div className="p-5 md:p-[1.875em] md:flex-1">
        <div className="flex flex-row justify-between">
          <h2
            id="project-desc-title"
            className="text-slate-800 text-3xl lg:text-5xl font-serif tracking-tight leading-tight mb-2"
          >
            {projectName}
          </h2>

          <div className="hidden md:block">
            <CloseButton />
          </div>
        </div>

        {brief && (
          <div className="py-4">
            <p className="text-sm tracking-tight text-[#717680] font-semibold font-manrope uppercase">
              Project Brief
            </p>
            <p className="mt-2 text-[0.9375rem] tracking-tight text-[#414651] leading-relaxed">
              {brief}
            </p>
          </div>
        )}

        <div className="w-full border-[#E1E1E1] border-[0.5px] mb-4" />

        {overview && (
          <div className="pb-4">
            <p className="text-sm tracking-tight text-[#717680] font-semibold font-manrope uppercase">
              Overview
            </p>
            <p className="mt-2 text-[0.9375rem] tracking-tight text-[#414651] leading-relaxed">
              {overview}
            </p>
          </div>
        )}

        <div className="w-full border-[#E1E1E1] border-[0.5px] mb-4" />

          <div
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              {role && (
                <div>
                  <p className="text-sm tracking-tight text-[#717680] font-semibold font-manrope uppercase">Role</p>
                  <p className="mt-2 text-[0.9375rem] tracking-tight text-[#414651]">{role}</p>
                </div>
              )}

              <div>
                <p className="text-sm tracking-tight text-[#717680] font-semibold font-manrope uppercase">Client</p>
                {client?.url ? (
                  <Link
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex flex-row gap-1 items-center text-[0.9375rem] font-medium uppercase text-[#3B3BD1]"
                  >
                    {client.name}
                    <Image 
                      src="/assets/icons/arrow-blue.svg"
                      alt="arrow"
                      width={18}
                      height={18}
                    />
                  </Link>
                ) : (
                  <p className="mt-2 text-[0.9375rem] tracking-tight text-[#414651]">{client?.name ?? "—"}</p>
                )}
              </div>

              <div>
                <p className="text-sm tracking-tight text-[#717680] font-semibold font-manrope uppercase">Year</p>
                <p className="mt-2 text-gray-700">{year ?? "—"}</p>
              </div>

            </div>

            <div className="flex flex-col gap-3">
              <a
                href={iosDownloadUrl || "#"}
                onClick={(e) => handleExternal(e, iosDownloadUrl ?? undefined)}
                target={iosDownloadUrl ? "_blank" : undefined}
                rel={iosDownloadUrl ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition ${
                  iosDownloadUrl
                    ? "bg-[#2f6b6b] text-white hover:opacity-95"
                    : "bg-gray-200 text-gray-500"
                }`}
                aria-disabled={!iosDownloadUrl}
              >
                <Image 
                  src="/assets/icons/apple.svg"
                  alt="apple play store button"
                  width={20}
                  height={20}
                />
                <span>{iosDownloadUrl ? "Download on iOS" : "iOS coming soon"}</span>
              </a>

              <a
                href={androidDownloadUrl || "#"}
                onClick={(e) =>
                  handleExternal(e, androidDownloadUrl ?? undefined)
                }
                target={androidDownloadUrl ? "_blank" : undefined}
                rel={androidDownloadUrl ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition ${
                  androidDownloadUrl
                    ? "bg-gray-200 text-gray-500 hover:opacity-95"
                    : "bg-gray-200 text-gray-500"
                }`}
                aria-disabled={!androidDownloadUrl}
              >
                <Image 
                  src="/assets/icons/play.svg"
                  alt="android play store button"
                  width={20}
                  height={20}
                />
                <span>
                  {androidDownloadUrl ? "Download on Android" : "Android coming soon"}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/*
        
        <div className="px-[1.875em]">
          <div className="flex flex-col gap-3">
            <a
              href={iosDownloadUrl || "#"}
              onClick={(e) => handleExternal(e, iosDownloadUrl ?? undefined)}
              target={iosDownloadUrl ? "_blank" : undefined}
              rel={iosDownloadUrl ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center justify-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition ${
                iosDownloadUrl
                  ? "bg-[#2f6b6b] text-white hover:opacity-95"
                  : "bg-gray-200 text-gray-500"
              }`}
              aria-disabled={!iosDownloadUrl}
            >
              <Image 
                src="/assets/icons/apple.svg"
                alt="apple play store button"
                width={20}
                height={20}
              />
              <span>{iosDownloadUrl ? "Download on iOS" : "iOS coming soon"}</span>
            </a>

            <a
              href={androidDownloadUrl || "#"}
              onClick={(e) =>
                handleExternal(e, androidDownloadUrl ?? undefined)
              }
              target={androidDownloadUrl ? "_blank" : undefined}
              rel={androidDownloadUrl ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center justify-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition ${
                androidDownloadUrl
                  ? "bg-gray-200 text-gray-500 hover:opacity-95"
                  : "bg-gray-200 text-gray-500"
              }`}
              aria-disabled={!androidDownloadUrl}
            >
              <Image 
                src="/assets/icons/play.svg"
                alt="android play store button"
                width={20}
                height={20}
              />
              <span>
                {androidDownloadUrl ? "Download on Android" : "Android coming soon"}
              </span>
            </a>
          </div>
        </div>
        */}
      </div>
    </aside>
  );
}
