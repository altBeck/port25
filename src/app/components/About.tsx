import Image from "next/image";

import Capabilities from "./Capabilities";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center p-5 lg:p-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="mb-8 italic text-[#FFFAFA]">About Me</h1>

          <p className="text-[#FFFAFA] text-2xl md:text-3xl leading-snug max-w-2xl font-manrope">
            I&apos;m a Product Designer specializing in UX, UI, and product strategy.
            I&apos;ve worked across fintech, trade finance SaaS, legal-tech,
            commerce, gaming, edutainment, and healthcare, helping startups and
            established teams alike launch and scale 0→1 products that feel both
            well-crafted and highly functional.
          </p>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <Image
            src="/assets/images/profile.png"
            alt="Profile photo"
            width={200}
            height={200}
            className="rounded-[2rem] object-cover w-[200px] h-[200px] md:w-[220px] md:h-[220px]"
            priority
          />
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white/10 my-18 " />
      {/* Bottom: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white text-base md:text-lg font-manrope md:mr-64">
        <p className="text-[#E9E9E8]/80">
          I work closely with early-stage startups to shape their product
          direction from the ground up, conducting UX audits, user research, and
          iterative design processes that move ideas from raw intuition to
          structured flows.
        </p>
        <p className="text-[#E9E9E8]/80">
          My approach blends user-centered design with business strategy,
          ensuring every decision I make is grounded in clarity, intent, and
          impact. My goal isn&apos;t just to make things usable, but to make them
          meaningful for the people using them and viable for the teams building
          them.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-18" />

      <Capabilities />

      <div className="flex flex-col gap-5" />
    </section>
  );
};

export default About;
