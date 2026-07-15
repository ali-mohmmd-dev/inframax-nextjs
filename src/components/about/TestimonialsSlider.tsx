"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I have had the opportunity to work with Inframax on projects from modernizations to complex alterations, difficult site conditions and tight time frames. In all cases Inframax exceeded my expectations and did so in ways that ensured the schedule and budget goals were met.",
    author: "Client"
  },
  {
    text: "Inframax delivered exceptional quality on our recent infrastructure project. Their team's dedication to safety, precision, and timely execution was truly impressive. They are a reliable partner for any major development.",
    author: "Client"
  },
  {
    text: "Working with the Inframax team was a seamless experience. They provided innovative solutions to unexpected challenges and maintained transparent communication throughout the entire construction process.",
    author: "Client"
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 min-h-[250px] flex flex-col justify-between">
      <div className="relative h-full flex-grow flex items-center justify-center">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx}
            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${idx === currentIndex ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-4 invisible absolute z-0"}`}
          >
            <p className="text-white/95 text-[17px] font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
              "{testimonial.text}"
            </p>
            <p className="text-white font-bold text-lg mb-12 tracking-wide">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-3 mt-4">
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full shadow-sm transition-all duration-300 ${idx === currentIndex ? "w-3.5 h-3.5 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
