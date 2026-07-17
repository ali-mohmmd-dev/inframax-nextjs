"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const SECTORS = [
  {
    title: "Road Crossing",
    href: "/roadcrossing",
    icon: "/inframax/assets/images/home-sectors-road-crossing-icon.svg",
    image: "/inframax/assets/images/home-sectors-road-crossing-image.webp",
  },
  {
    title: "Water Channel & Marine Crossing",
    href: "/Water-channel-Marine-Crossing",
    icon: "/inframax/assets/images/home-sectors-water-channel-icon.svg",
    image: "/inframax/assets/images/home-sectors-water-channel-image.webp",
  },
  {
    title: "Railway Crossing",
    href: "/railway-crossing",
    icon: "/inframax/assets/images/home-sectors-railway-crossing-icon.svg",
    image: "/inframax/assets/images/home-sectors-railway-crossing-image.webp",
  },
  {
    title: "Highway Crossings",
    href: "/highway-crossings",
    icon: "/inframax/assets/images/home-sectors-highway-crossing-icon.svg",
    image: "/inframax/assets/images/home-sectors-highway-crossing-image.webp",
  },
  {
    title: "Urban & Congested Utility Zones",
    href: "/Urban-Congested-Utility-Zones",
    icon: "/inframax/assets/images/home-major-crossing-icon-03.webp",
    image: "/inframax/assets/images/services-urban-utility-header.webp",
  },
  {
    title: "Landscape & Bridge Crossings",
    href: "/landscape-bridge-crossings",
    icon: "/inframax/assets/images/home-major-crossing-icon-04.webp",
    image: "/inframax/assets/images/services-landscape-bridge-header.webp",
  },

 
];

export default function SectorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, SECTORS.length - cardsPerView);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section 
      className="w-full bg-white pt-0 pb-16 lg:pb-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto mb-8 lg:mb-12">
        <div className="relative w-full flex justify-between items-center">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-light-blue/30 z-0"></div>
          <div className="relative bg-white pr-6 z-10">
            <h2 className="heading-2 text-dark-blue">We are Specialized in</h2>
          </div>
          <div className="relative bg-white pl-6 z-10 flex space-x-3">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-dark-blue flex items-center justify-center text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-dark-blue flex items-center justify-center text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
            >
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {SECTORS.map((sector, idx) => (
            <Link
              key={`${sector.title}-${idx}`}
              className="group block relative w-full sm:w-1/2 lg:w-1/4 shrink-0 flex flex-col overflow-hidden"
              href={sector.href}
            >
              <div className="bg-dark-blue-bg group-hover:bg-light-blue px-[40px] flex items-center space-x-4 min-h-[110px] relative z-20 transition-colors duration-300 ease-in-out">
                <img
                  alt={`${sector.title} icon`}
                  className="w-8 h-8 shrink-0 object-contain brightness-0 invert transition-all duration-300"
                  src={sector.icon}
                />
                <h3 className="body-text !font-medium text-white !leading-[1.3]">
                  {sector.title}
                </h3>
              </div>
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] bg-slate-900 overflow-hidden">
                <img
                  alt={sector.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={sector.image}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-dark-blue shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}