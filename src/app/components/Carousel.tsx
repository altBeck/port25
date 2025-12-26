import Image from "next/image";
import { useRef } from "react";

const images = [
  "/assets/images/dis1.png",
  "/assets/images/dis2.png",
  "/assets/images/dis4.png",
  "/assets/images/dis3.png",
  "/assets/images/trpspk.png",
  "/assets/images/brdg.png",
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative my-8 w-full">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 md:px-10 hide-scrollbar snap-x"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`carousel ${idx + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain xl:max-h-184 max-h-128 w-auto snap-center"
            style={{ scrollSnapAlign: "center" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;