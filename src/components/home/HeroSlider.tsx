"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const slides = [
  {
    id: 1,
    image: "/inframax/assets/images/home-hero-slide-01.webp",
    title: "Leading HDD Infrastructure Solutions in the UAE",
    description: (
      <>
        4+ Years of Industry Experience<br />
        79+ HDD Projects Successfully Completed<br />
        77+ Million AED Total Project Value
      </>
    ),
    buttonLink: "#quote",
    buttonText: "Get a Quote",
  },
  {
    id: 2,
    image: "/inframax/assets/images/home-hero-slide-02.webp",
    title: "Advanced HDD Guidance – ParaTrack Technology",
    description: (
      <>
        Utilizing high-precision <strong>ParaTrack tracking systems</strong> to ensure accurate drilling guidance and reliable HDD installations across complex infrastructure projects.
      </>
    ),
    buttonLink: "#quote",
    buttonText: "Get a Quote",
  },
  {
    id: 3,
    image: "/inframax/assets/images/home-hero-slide-03.webp",
    title: "Precision HDD Monitoring & Guidance",
    description: (
      <>
        Real-time drilling monitoring and advanced tracking systems delivering <strong>safe, accurate, and efficient</strong> underground pipeline crossings.
      </>
    ),
    buttonLink: "#quote",
    buttonText: "Get a Quote",
  },
];

export default function HeroSlider() {
  const containerRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set initial states cleanly for optimal rendering performance
  useGSAP(() => {
    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      if (idx === 0) {
        gsap.set(slide, { opacity: 1, zIndex: 10 });
        if (bgRefs.current[idx]) gsap.set(bgRefs.current[idx], { scale: 1 });
        if (contentRefs.current[idx]) gsap.set(contentRefs.current[idx], { opacity: 1, y: 0 });
      } else {
        gsap.set(slide, { opacity: 0, zIndex: 0 });
        if (bgRefs.current[idx]) gsap.set(bgRefs.current[idx], { scale: 1.06 });
        if (contentRefs.current[idx]) gsap.set(contentRefs.current[idx], { opacity: 0, y: 20 });
      }
    });
  }, { scope: containerRef });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  // Animate slide transitions when currentIndex updates
  useGSAP(() => {
    const currentSlide = slideRefs.current[currentIndex];
    const currentBg = bgRefs.current[currentIndex];
    const currentContent = contentRefs.current[currentIndex];

    if (!currentSlide || !currentBg || !currentContent) return;

    // Set z-index stack: incoming slide on top (z: 10), others lower (z: 1)
    slideRefs.current.forEach((slide, idx) => {
      if (slide) gsap.set(slide, { zIndex: idx === currentIndex ? 10 : 1 });
    });

    const tl = gsap.timeline();

    // Smooth background crossfade and gentle ken-burns zoom in
    tl.to(currentSlide, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
    }, 0);

    tl.fromTo(
      currentBg,
      { scale: 1.06 },
      { scale: 1, duration: 2.2, ease: "power2.out" },
      0
    );

    // Smooth content reveal without heavy blur for peak GPU performance
    tl.fromTo(
      currentContent,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
      0.3
    );

    // Fade out hidden slides cleanly after the crossfade completes
    slideRefs.current.forEach((slide, idx) => {
      if (slide && idx !== currentIndex) {
        gsap.to(slide, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        });
      }
    });
  }, { scope: containerRef, dependencies: [currentIndex] });

  return (
    <section
      ref={containerRef}
      id="hero-slider"
      className="w-full relative overflow-hidden bg-black min-h-[550px] md:min-h-[500px] flex items-center"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => { slideRefs.current[index] = el; }}
          className="hero-slide absolute inset-0 will-change-[opacity,transform] opacity-0"
        >
          <div
            ref={(el) => { bgRefs.current[index] = el; }}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65)), url('${slide.image}')`,
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-20 w-full h-full flex items-center">
            <div
              ref={(el) => { contentRefs.current[index] = el; }}
              className="hero-content will-change-[opacity,transform] mt-16 md:mt-24 opacity-0"
            >
              <h1 className="heading-1 !mb-[15px] max-w-[1200px] text-white">
                {slide.title}
              </h1>
              <p className="body-text text-white/90 max-w-2xl whitespace-pre-line text-[16px] md:text-[18px] leading-relaxed">
                {slide.description}
              </p>
              <a className="btn-primary mt-[30px]" href={slide.buttonLink}>
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
