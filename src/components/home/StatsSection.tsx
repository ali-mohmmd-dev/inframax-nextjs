"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function StatsSection() {
  const baseImages = [
    { src: "/inframax/assets/images/home-featured-works-banner.png", alt: "Featured industrial contract slide work 1" },
    { src: "/inframax/assets/images/home-featured-works-image-02.jpg", alt: "Featured industrial contract slide work 2" }
  ];
  
  // Triple the array to allow seamless wrapping (prev and next without hitting ends)
  const images = [...baseImages, ...baseImages, ...baseImages];
  
  // Start in the middle set
  const [currentIndex, setCurrentIndex] = useState(baseImages.length);
  const viewportRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const prevIndexRef = useRef(currentIndex);
  const isFirstRender = useRef(true);

  // Measure viewport and calculate slide width so exactly 20% of the next image shows
  useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        const viewportW = viewportRef.current.clientWidth;
        // Current slide (100%) + gap (24px) + next slide (20%) = viewportW
        // 1.2 * itemWidth + 24 = viewportW  =>  itemWidth = (viewportW - 24) / 1.2
        const calculatedSlideW = (viewportW - 24) / 1.2;
        setItemWidth(calculatedSlideW);
        setSlideWidth(calculatedSlideW + 24);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // GSAP animation for sliding
  useGSAP(() => {
    if (!containerRef.current || slideWidth === 0) return;

    // If initial render or just window resize without index change, snap instantly
    if (isFirstRender.current || prevIndexRef.current === currentIndex) {
      gsap.set(containerRef.current, { x: -(currentIndex * slideWidth) });
      isFirstRender.current = false;
      prevIndexRef.current = currentIndex;
      return;
    }

    prevIndexRef.current = currentIndex;

    gsap.to(containerRef.current, {
      x: -(currentIndex * slideWidth),
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        // Seamless Wrap Logic
        if (currentIndex === 0) {
          // If we reached the first clone, silently snap back to the middle set
          gsap.set(containerRef.current, { x: -(baseImages.length * slideWidth) });
          setCurrentIndex(baseImages.length);
          prevIndexRef.current = baseImages.length;
        } else if (currentIndex === baseImages.length * 2) {
          // If we reached the end of the middle set, silently snap back to start of middle set
          gsap.set(containerRef.current, { x: -(baseImages.length * slideWidth) });
          setCurrentIndex(baseImages.length);
          prevIndexRef.current = baseImages.length;
        }
      }
    });
  }, [currentIndex, slideWidth, baseImages.length]);

  // Auto-slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="w-full bg-dark-blue-bg pt-16 pb-16 lg:pt-20 lg:pb-[60px] relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/inframax/assets/images/home-featured-works-background.jpg')" }}>
      
      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12">
          <div className="w-full lg:w-[30%] flex flex-col justify-between py-2 lg:min-h-auto text-center shrink-0">
            <div>
              <h2 className="heading-2 text-white text-center">Featured Works</h2>
            </div>
            <div className="caption-text text-white/80 mt-2">Check Out Our Projects</div>
          </div>
          <div ref={viewportRef} className="w-full lg:w-[70%] overflow-hidden relative shrink-0">
            <div className="w-full overflow-visible">
              <div ref={containerRef} className="flex gap-6 w-max">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    style={{ width: itemWidth > 0 ? `${itemWidth}px` : "calc((100vw - 48px) / 1.2)" }}
                    className="aspect-[16/11.5] min-h-[360px] md:min-h-[350px] shrink-0 bg-slate-900 shadow-2xl relative overflow-hidden rounded-sm group"
                  >
                    <img alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img.src} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center mt-4 pt-0">
          <div className="flex space-x-2">
            <button onClick={handlePrev} aria-label="Previous slide" className="text-white opacity-60 hover:opacity-100 hover:-translate-x-1 transition-all duration-200 cursor-pointer py-2">
              <svg className="w-16 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 64 24">
                <path d="M16 5l-7 7 7 7M9 12h46" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <button onClick={handleNext} aria-label="Next slide" className="text-white opacity-60 hover:opacity-100 hover:translate-x-1 transition-all duration-200 cursor-pointer py-2">
              <svg className="w-16 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 64 24">
                <path d="M48 5l7 7-7 7M55 12H9" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}