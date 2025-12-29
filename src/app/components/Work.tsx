import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full flex flex-col justify-center px-8 md:px-16 pb-12 md:pb-16 pt-8"
    >
      <h1 className="mb-8 text-[3.25rem] md:hidden italic text-[#FFFAFA]">
        Selected Projects
      </h1>

      <h1 className="mb-12 md:block hidden md:mb-16 italic text-[#FFFAFA]">
        Selected Projects
      </h1>

      <div className="flex flex-col gap-12 md:gap-16">
        {/* Project card 1 */}
        <div className="flex flex-col gap-6">
          <div
            id="dash"
            className="w-full relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-700"
            style={{
              background: "linear-gradient(135deg, #34266D 20%, #5C40CB 100%)",
            }}
          >
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
                <h1 className="text-[#FFFAFA] text-4xl md:text-5xl lg:text-6xl">
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

              {/* content section */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#302463] w-full pt-5 md:pt-6 rounded-3xl">
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <h2 className="text-base md:text-lg font-medium pb-3 md:pb-4 text-[#FFFAFA]">
                        • MOBILITY WITH CONVENIENCE
                      </h2>

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

                {/* Images section - horizontal layout */}
                <div className="flex-1 flex items-center justify-center md:justify-end">
                  <div className="flex gap-4 overflow-x-auto hide-scrollbar w-full md:w-auto">
                    <Image
                      src="/dashPreview.png"
                      alt="dash home"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="w-auto h-auto max-h-[400px] md:max-h-[500px] object-contain flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project card 2 */}
        <div className="flex flex-col gap-6">
          <div
            id="puplar"
            className="w-full relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#004F5D] to-[#33727D]"
            style={{
              background: "linear-gradient(135deg, #004F5D 20%, #33727D 100%)",
            }}
          >
            <div
              className="relative w-full h-full px-6 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 pt-6 md:pt-8 flex flex-col gap-8 md:gap-12"
              style={{
                backgroundImage: "url(/invisible.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col gap-32 justify-between w-full">
                {/* top side */}
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-[#FFFAFA]">Puplar</h1>

                    <div className="flex flex-row gap-4 uppercase">
                      <div className="p-2.5 px-4 rounded-full border border-gray-300 bg-white/8 drop-shadow-xl">
                        product design
                      </div>
                      <div className="p-2.5 px-4 rounded-full border border-gray-300 bg-white/8 drop-shadow-xl">
                        mobile app
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom side */}
                <div className="flex flex-row gap-4 justify-between items-start w-full">
                  <div className="flex-1 flex flex-col w-fit">
                    <div className="bg-[#083C45] w-fit pt-5 rounded-3xl">
                      <div className="md:px-5 md:pb-5">
                        <h2 className="text-lg font-medium pb-4">
                          • VISUAL UI REFRESH
                        </h2>

                        <p className="text-base md:text-xl font-manrope pb-4 w-sm">
                          I refreshed Puplar’s entire UI and brand system across
                          multi-currency funding, FX and virtual card flows. My
                          goal was making high-trust financial actions feel
                          approachable and consistent.
                          <br />
                        </p>
                      </div>

                      <div className="bg-[#052429] rounded-b-3xl p-5 items-start flex flex-row">
                        <Link
                          href="/puplar"
                          className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold font-manrope"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 absolute bottom-0 right-5">
                    <Image
                      src="/pupPreview.png"
                      alt="puplar"
                      width={0}
                      height={0}
                      sizes="50vw"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
