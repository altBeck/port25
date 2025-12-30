import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full flex flex-col justify-center px-8 md:px-16 pb-12 md:pb-16 pt-8 xl:max-w-350 mx-auto"
    >
      <h1 className="mb-8 text-[3.25rem] md:hidden italic text-[#FFFAFA]">
        Selected Projects
      </h1>

      <h1 className="mb-12 md:block hidden md:mb-16 italic text-[#FFFAFA]">
        Selected Projects
      </h1>

      <div className="flex flex-col gap-12 md:gap-16">

        {/* Project card 1 — PUPLAR */}
        <div className="flex flex-col gap-6">
          <div
            id="puplar"
            className="w-full relative rounded-2xl overflow-visible bg-linear-to-br from-[#004F5D] to-[#33727D]"
            style={{
              background: "linear-gradient(135deg, #004F5D 20%, #33727D 100%)",
            }}
          >
            {/*
              Inner padded content: keeps existing text & CTA layout.
              NOTE: images have been removed from here and placed in the absolu wrapper below.
            */}
            <div
              className="relative w-full h-full px-6 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 pt-6 md:pt-8 flex flex-col gap-8 md:gap-12"
              style={{
                backgroundImage: "url(/invisible.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* top side */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                <h4 className="text-[#FFFAFA] hidden md:block">Puplar</h4>
                <h1 className="text-[#FFFAFA] text-3xl md:hidden block">
                  Puplar
                </h1>
    
                <div className="flex flex-row gap-3 md:gap-4 uppercase text-xs md:text-sm">
                  <div className="p-2 md:p-2.5 px-3 md:px-4 rounded-full border border-gray-300 bg-white/8 drop-shadow-xl">
                    product design
                  </div>
                  <div className="p-2 md:p-2.5 px-3 md:px-4 rounded-full border border-gray-300 bg-white/8 drop-shadow-xl">
                    mobile app
                  </div>
                </div>
              </div>
    
              {/* content section (left column content) */}
              <div className="flex flex-col xl:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#083C45] w-full pt-5 md:pt-6 rounded-3xl">
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-sm md:text-base lg:text-xl font-manrope pb-3 md:pb-4 text-[#FFFAFA]/90 leading-relaxed">
                        Frequent commuters faced fractured booking and poor
                        visibility for scheduled rides, causing abandonment and
                        low repeat use.
                      </p>
    
                      <p className="text-sm md:text-base lg:text-xl font-manrope text-[#FFFAFA]/90 leading-relaxed">
                        I redesigned home screen patterns, introduced a
                        wallet-first flow and rebuilt scheduled-ride
                        interactions so recurring trips are visible, reliable
                        and fast to book.
                      </p>
                    </div>
    
                    <div className="bg-[#052429] rounded-b-3xl p-5 md:p-6">
                      <Link
                        href="/puplar"
                        className="inline-block bg-white text-gray-900 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold font-manrope text-sm md:text-base hover:bg-gray-100 transition-colors"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
    
                {/* placeholder column so layout spacing remains on large screens */}
                <div className="hidden md:block md:flex-1" />
    
                <div className="xl:hidden block pb-40 md:pb-100 lg:pb-120" />
              </div>
            </div>
    
            <div className="pointer-events-auto absolute bottom-0 left-0 w-full md:w-auto md:right-12 lg:right-10 flex items-end justify-center md:justify-end md:px-0">
              <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                <Image
                  src="/pupPreview.png"
                  alt="Puplar home"
                  width={0}
                  height={0}
                  sizes="50vw"
                  className="w-auto h-50 md:h-106 lg:h-144 xl:h-108 object-contain"
                />
    
              </div>
            </div>
          </div>
        </div>

        {/* Project card 2 — DASH */}
        <div className="flex flex-col gap-6">
          <div
            id="dash"
            className="w-full relative rounded-2xl overflow-visible bg-linear-to-br from-indigo-900 to-indigo-700"
            style={{
              background: "linear-gradient(135deg, #34266D 20%, #5C40CB 100%)",
            }}
          >
            {/*
              Inner padded content: keeps existing text & CTA layout.
              NOTE: images have been removed from here and placed in the absolute wrapper below.
            */}
            <div
              className="relative w-full h-full px-6 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 pt-6 md:pt-8 flex flex-col gap-8 md:gap-12"
              style={{
                backgroundImage: "url(/invisible.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* top side */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                <h4 className="text-[#FFFAFA] hidden md:block">Dash</h4>
                <h1 className="text-[#FFFAFA] text-3xl md:hidden block">
                  Dash
                </h1>

                <div className="flex flex-row gap-3 md:gap-4 uppercase text-xs md:text-sm">
                  <div className="p-2 md:p-2.5 px-3 md:px-4 rounded-full border border-gray-300 bg-white/8 drop-shadow-xl">
                    product design
                  </div>
                  <div className="p-2 md:p-2.5 px-3 md:px-4 rounded-full border border-gray-300 bg-white/8 drop-shadow-xl">
                    mobile app
                  </div>
                </div>
              </div>

              {/* content section (left column content) */}
              <div className="flex flex-col xl:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#302463] w-full pt-5 md:pt-6 rounded-3xl">
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-sm md:text-base lg:text-xl font-manrope pb-3 md:pb-4 text-[#FFFAFA]/90 leading-relaxed">
                        Frequent commuters faced fractured booking and poor
                        visibility for scheduled rides, causing abandonment and
                        low repeat use.
                      </p>

                      <p className="text-sm md:text-base lg:text-xl font-manrope text-[#FFFAFA]/90 leading-relaxed">
                        I redesigned home screen patterns, introduced a
                        wallet-first flow and rebuilt scheduled-ride
                        interactions so recurring trips are visible, reliable
                        and fast to book.
                      </p>
                    </div>

                    <div className="bg-[#1A1335] rounded-b-3xl p-5 md:p-6">
                      <Link
                        href="/dash"
                        className="inline-block bg-white text-gray-900 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold font-manrope text-sm md:text-base hover:bg-gray-100 transition-colors"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>

                {/* placeholder column so layout spacing remains on large screens */}
                <div className="hidden md:block md:flex-1" />

                <div className="xl:hidden block pb-40 md:pb-100 lg:pb-120" />
              </div>
            </div>

            <div className="pointer-events-auto absolute bottom-0 left-0 w-full md:w-auto md:right-12 lg:right-10 flex items-end justify-center md:justify-end md:px-0">
              <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                <Image
                  src="/dashPreview.png"
                  alt="dash home"
                  width={0}
                  height={0}
                  sizes="50vw"
                  className="w-auto h-50 md:h-106 lg:h-144 xl:h-108 object-contain"
                />

              </div>
            </div>
          </div>
        </div>

        
        {/* Project card 3 */}



      </div>
    </div>
  );
};

export default Work;
