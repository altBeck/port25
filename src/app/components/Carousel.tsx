// components/Carousel.tsx
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

const images = [
  "/assets/images/dis1.png",
  "/assets/images/dis2.png",
  "/assets/images/dis4.png",
  "/assets/images/dis3.png",
  "/assets/images/trpspk.png",
  "/assets/images/brdg.png",
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const firstImageContainerRef = useRef<HTMLDivElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  // Measure first image height once it loads (only on mobile)
  const measureFirstImage = useCallback(() => {
    const container = firstImageContainerRef.current;
    if (!container) return;

    // Only apply fixed height on mobile (below md breakpoint)
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setImageHeight(null);
      return;
    }

    const img = container.querySelector<HTMLImageElement>("img");
    if (!img) return;

    // Wait for image to be fully rendered
    const checkHeight = () => {
      const rect = img.getBoundingClientRect();
      if (rect.height > 0) {
        // Limit height to half of viewport height on mobile
        const maxHeight = window.innerHeight * 0.5;
        const finalHeight = Math.min(rect.height, maxHeight);
        setImageHeight(finalHeight);
      } else {
        // Retry if height not available yet
        requestAnimationFrame(checkHeight);
      }
    };

    if (img.complete) {
      checkHeight();
    } else {
      img.addEventListener("load", checkHeight, { once: true });
    }
  }, []);

  useEffect(() => {
    measureFirstImage();

    // Recompute on resize
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measureFirstImage);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [measureFirstImage]);

  return (
    <div className="relative my-8 w-full">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 md:px-10 hide-scrollbar snap-x"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            ref={idx === 0 ? firstImageContainerRef : null}
            className="snap-center shrink-0 flex items-center"
            style={{
              // On mobile, height is the measured (and capped) first image height.
              // On tablet/desktop (where imageHeight stays null), use a taller 70vh.
              height: imageHeight ? `${imageHeight}px` : "70vh",
            }}
          >
            <Image
              src={img}
              alt={`carousel ${idx + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                scrollSnapAlign: "center",
                // Always fill the container height while preserving aspect ratio.
                height: "100%",
                width: "auto",
                maxWidth: "100%",
              }}
              className="object-contain snap-center"
              onLoadingComplete={idx === 0 ? measureFirstImage : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
