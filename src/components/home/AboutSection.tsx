"use client";
import React, { useState, useEffect, useRef } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-5xl text-center font-semibold text-light-blue">
      {count}{suffix}
    </div>
  );
}

export default function AboutSection() {
  const [activeVideo, setActiveVideo] = useState('https://www.youtube.com/embed/8DEr6RM95Y8?autoplay=1&mute=1&rel=0');

  return (
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    <div className="w-full flex flex-col">
     <div className="w-full aspect-video bg-black relative overflow-hidden rounded-none shadow-md">
      <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute inset-0 w-full h-full border-0 scale-[1.03] transform-gpu" referrerPolicy="strict-origin-when-cross-origin" src={activeVideo} title="YouTube video player">
      </iframe>
     </div>
     <div className="flex gap-[10px] mt-[10px] w-full">
      <button 
        onClick={() => setActiveVideo('https://www.youtube.com/embed/8DEr6RM95Y8?autoplay=1&mute=1&rel=0')} 
        className={`flex-1 p-[10px] text-[15px] font-semibold border-none cursor-pointer text-white rounded-[4px] transition-colors duration-300 uppercase hover:bg-[#00a4db] ${activeVideo === 'https://www.youtube.com/embed/8DEr6RM95Y8?autoplay=1&mute=1&rel=0' ? 'bg-[#00a4db]' : 'bg-[#0b458b]'}`}>
        CHANNEL CROSSING
      </button>
      <button 
        onClick={() => setActiveVideo('https://www.youtube.com/embed/ucQeFETLR6Y?autoplay=1&mute=1&rel=0')} 
        className={`flex-1 p-[10px] text-[15px] font-semibold border-none cursor-pointer text-white rounded-[4px] transition-colors duration-300 uppercase hover:bg-[#00a4db] ${activeVideo === 'https://www.youtube.com/embed/ucQeFETLR6Y?autoplay=1&mute=1&rel=0' ? 'bg-[#00a4db]' : 'bg-[#0b458b]'}`}>
        HIGHWAY CROSSING
      </button>
     </div>
    </div>
    <div className="">
     <h2 className="heading-2 text-dark-blue">
      About&nbsp;
      <span>
       Inframax
      </span>
     </h2>
     <p className="caption-text text-gray-600 mt-4 lg:mt-[20px]">
      INFRAMAX Drilling is an ADNOC pre-qualified NDRC–HDD contractor specializing in HDD. We operate rigs up to 500-ton capacity, installing pipelines up to 48 inches using advanced trenchless technology. We deliver safe, precise, and zero-disruption solutions for oil &amp; gas, water, sewerage, electricity, and telecom projects.
     </p>
     <div className="flex gap-[10px] md:gap-[20px] pt-4 pb-2">
      <div>
       <AnimatedCounter end={47} />
       <div className="text-gray-500 body-text mt-1">
        Employee
       </div>
      </div>
      <div>
       <AnimatedCounter end={89} />
       <div className="text-gray-500 body-text mt-1">
        Completed Projects
       </div>
      </div>
     </div>
     <div className="pt-6">
      <a className="btn-primary" href="/about/">
       More About
      </a>
     </div>
    </div>
   </div>
  </section>
  );
}