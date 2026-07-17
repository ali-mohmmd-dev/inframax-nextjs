"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ClientsSection() {
  const baseImages = [
    { src: "/inframax/assets/images/home-certifications-logo-01.webp", alt: "ADNOC documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-abu-dhabi-municipality.webp", alt: "Abu Dhabi Municipality documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-logo-02.webp", alt: "Al Ain Distribution Company documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-logo-03.webp", alt: "Abu Dhabi Sewerage Services documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-logo-05.webp", alt: "Etisalat documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-logo-06.webp", alt: "du documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-ministry-infrastructure.webp", alt: "Musanada documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-sws.webp", alt: "Armed Forces documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-sewa.webp", alt: "Department of Transport documentation badge logo" },
    { src: "/inframax/assets/images/home-certifications-tabreed.webp", alt: "Regulation and Supervision Bureau documentation badge logo" }
  ];

  const images = [...baseImages, ...baseImages, ...baseImages];
  
  const [currentIndex, setCurrentIndex] = useState(baseImages.length);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const slide = containerRef.current?.children[0] as HTMLElement;
      if (slide) {
        setSlideWidth(slide.offsetWidth + 30); // gap-[30px] is 30px
      }
    };
    updateWidth();
    // Tiny delay to ensure layout is done
    setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useGSAP(() => {
    if (!containerRef.current || slideWidth === 0) return;

    gsap.to(containerRef.current, {
      x: -(currentIndex * slideWidth),
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        if (currentIndex === 0) {
          gsap.set(containerRef.current, { x: -(baseImages.length * slideWidth) });
          setCurrentIndex(baseImages.length);
        } else if (currentIndex === baseImages.length * 2) {
          gsap.set(containerRef.current, { x: -(baseImages.length * slideWidth) });
          setCurrentIndex(baseImages.length);
        }
      }
    });
  }, [currentIndex, slideWidth, baseImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000); // Short interval as requested
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => prev - 1);
  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  return (
    <section className="w-full bg-dark-blue-bg py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="w-full text-center mb-8 lg:mb-12">
          <h2 className="heading-2 text-white uppercase">Fully Licensed &amp; Approved</h2>
        </div>
      </div>
      
      <div className="w-[90%] max-w-[1400px] mx-auto relative flex items-center">
        <div className="absolute -left-4 sm:-left-6 md:-left-8 z-30">
          <button onClick={handlePrev} aria-label="Previous slide" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-dark-blue-bg shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
        
        <div className="w-full overflow-hidden">
          <div ref={containerRef} className="flex gap-[30px] w-max">
            {images.map((img, idx) => (
              <div key={idx} className="w-[90vw] md:w-[calc((min(90vw,1400px)-120px)/5)] aspect-square h-auto shrink-0">
                <div className="w-full aspect-square bg-white shadow-sm flex items-center justify-center p-6 hover:shadow-md transition-shadow duration-300 select-none">
                  <img alt={img.alt} className="max-w-full max-h-full object-contain filter contrast-125 select-none pointer-events-none" src={img.src} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -right-4 sm:-right-6 md:-right-8 z-30">
          <button onClick={handleNext} aria-label="Next slide" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-dark-blue-bg shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}