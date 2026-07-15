"use client";
import React, { useEffect } from "react";
import TestimonialsSlider from "@/components/about/TestimonialsSlider";

export default function About() {
  return (
    <>
      

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HEADER â€” injected by components.js
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HERO SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full relative overflow-hidden bg-black flex items-center">
   <div className="absolute inset-0 bg-cover bg-center" style={{"backgroundImage": "url('/inframax/assets/images/about-intro-image-01.jpg')"}}></div>
   <div className="hero-overlay"></div>
   <div className="container mx-auto px-4 relative z-10 w-full">
    <div className="pb-[50px] min-h-[380px] md:pb-[90px] md:min-h-[380px] flex items-end">
     <div className="will-change-transform">
      <h1 className="heading-1  text-white max-w-[1200px]">About Us</h1>
      <p className="body-text text-white/90 max-w-2xl">
       Inframax delivers strong, reliable construction built to last.
      </p>
      <a className="btn-primary mt-5" href="#quote">
       Get a Quote
      </a>
     </div>
    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       ABOUT INFRAMAX â€” text left Â· two images stacked right
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

    {/*  Left: text  */}
    <div>
     <h2 className="heading-2 text-dark-blue">
      About&nbsp;
      <span className="text-light-blue font-semibold">Inframax</span>
     </h2>
     <div className="flex flex-col space-y-4 mt-4 lg:mt-[20px]">
      <p className="caption-text text-gray-600">
       INFRAMAX is a specialized trenchless construction contractor delivering advanced Horizontal Directional Drilling (HDD) solutions. We support critical infrastructure networks, including oil &amp; gas, water, sewerage, electricity, telecommunications, and utility crossings beneath highways, railways, rivers, and other critical assets, ensuring zero surface disturbance.
      </p>
      <p className="caption-text text-gray-600">
       As an ADNOC pre-qualified NDRC contractor, INFRAMAX Drilling specializes in Horizontal Directional Drilling (HDD). We operate high-capacity HDD rigs with pullback capacities of up to 500 tons, enabling the installation of pipelines up to 48 inches in diameter. Our in-house PARA TRACK II wireline system and beacon tracking technology ensure precise execution across complex crossings, including waterways, highways, and other challenging environments.
      </p>
      <p className="caption-text text-gray-600">
       INFRAMAX provides advanced HDD solutions for hard rock, sandy, and underwater conditions. We install HDPE and Carbon Steel pipelines using modern trenchless technology, delivering safe, cost-effective, and environmentally responsible solutions supported by our experienced engineering and technical teams.
      </p>
      <p className="caption-text text-gray-600">
       With advanced HDD equipment, certified engineering professionals, and ISO-driven safety and quality management systems, INFRAMAX delivers precision, operational efficiency, and sustainable project execution across every stage of the construction process.
      </p>
     </div>
     <div className="pt-6">
      <a className="btn-primary" href="#">
       More About
      </a>
     </div>
    </div>

    {/*  Right: two stacked images  */}
    <div className="flex flex-col space-y-4">
     <div className="relative w-full aspect-video bg-gray-100 overflow-hidden shadow-sm">
      <img alt="Inframax HDD drilling rig at construction site" className="w-full h-full object-cover" src="/inframax/assets/images/about%20inframax%20image%201.jpeg"/>
     </div>
     <div className="relative w-full aspect-video bg-gray-100 overflow-hidden shadow-sm">
      <img alt="Inframax large-diameter pipeline installation" className="w-full h-full object-cover" src="/inframax/assets/images/about%20inframax%20image%202.png"/>
     </div>
    </div>

   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  <!-- â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       OUR VALUES
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="w-full bg-[#f4f5f7] pt-16 pb-16 lg:pt-24 lg:pb-24">
   <div className="container mx-auto px-4 max-w-7xl">
    <h2 className="heading-2 text-dark-blue text-center uppercase mb-12 font-bold tracking-wide">
     Our Values
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     {/*  Card 1  */}
     <div className="bg-white p-8 shadow-sm hover:shadow-md flex flex-col hover:-translate-y-1 transition-all duration-300">
      <img src="/inframax/assets/images/about-values-safety-icon.webp" alt="Safety" className="w-16 h-16 object-contain mb-6"/>
      <h3 className="text-xl font-bold text-dark-blue mb-4 uppercase">Safety</h3>
      <p className="caption-text text-[#555555]">
       Safety comes first; the safety of our employees, owners, and the general public is our primary concern. Safety objectives are equally and in alignment with our business. We are conscientious in our actions and provide a safe workplace.
      </p>
     </div>
     {/*  Card 2  */}
     <div className="bg-white p-8 shadow-sm hover:shadow-md flex flex-col hover:-translate-y-1 transition-all duration-300">
      <img src="/inframax/assets/images/about-values-strength-icon.webp" alt="Strength" className="w-16 h-16 object-contain mb-6"/>
      <h3 className="text-xl font-bold text-dark-blue mb-4 uppercase">Strength</h3>
      <p className="caption-text text-[#555555]">
       We recognize our primary asset is people. To be successful, trust brings trust. We encourage people to work with passion and enthusiasm to help people reach their potential. We move with our clients and suppliers as a team.
      </p>
     </div>
     {/*  Card 3  */}
     <div className="bg-white p-8 shadow-sm hover:shadow-md flex flex-col hover:-translate-y-1 transition-all duration-300">
      <img src="/inframax/assets/images/about-values-standard-icon.webp" alt="Standard" className="w-16 h-16 object-contain mb-6"/>
      <h3 className="text-xl font-bold text-dark-blue mb-4 uppercase">Standard</h3>
      <p className="caption-text text-[#555555] ">
       We are keen on the highest standards of service, quality, and personal attention to clients. We constantly challenge ourselves to be the best.
      </p>
     </div>
    </div>
   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       HDD PROCESS
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="w-full bg-[#004b87] pt-20 pb-24 relative overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('/inframax/assets/images/global-projects-blue-background.jpg')"}}>
   
   <div className="container mx-auto px-4 max-w-7xl relative z-10">
    <h2 className="heading-2 text-white text-center uppercase mb-20 font-bold tracking-wide">
     HDD Process
    </h2>
    
    <div className="flex flex-col md:flex-row items-center justify-between relative max-w-6xl mx-auto w-full">
     <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[1px] border-t-[1.5px] border-dashed border-light-blue/60 z-0"></div>
     
     <div className="flex flex-col items-center relative z-10 group w-full md:w-1/5 mb-12 md:mb-0">
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-dark-blue shadow-lg relative">
       01
       <div className="absolute -inset-[10px] rounded-full border border-light-blue/40"></div>
       <div className="absolute -inset-[18px] rounded-full border-[3px] border-transparent border-t-light-blue border-r-light-blue animate-spin" style={{"animationDuration":"3s"}}></div>
       <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-8 border-l-[2.5px] border-dotted border-light-blue/60"></div>
      </div>
      <div className="mt-14 text-center text-white font-bold text-sm uppercase tracking-wide leading-tight px-2">Site Study &<br/>Feasibility</div>
     </div>
     
     <div className="flex flex-col items-center relative z-10 group w-full md:w-1/5 mb-12 md:mb-0">
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-dark-blue shadow-lg relative">
       02
       <div className="absolute -inset-[10px] rounded-full border border-light-blue/40"></div>
       <div className="absolute -inset-[18px] rounded-full border-[3px] border-transparent border-t-light-blue border-r-light-blue animate-spin" style={{"animationDuration":"3s"}}></div>
       <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-8 border-l-[2.5px] border-dotted border-light-blue/60"></div>
      </div>
      <div className="mt-14 text-center text-white font-bold text-sm uppercase tracking-wide leading-tight px-2">Pilot Bore<br/>Drilling</div>
     </div>

     <div className="flex flex-col items-center relative z-10 group w-full md:w-1/5 mb-12 md:mb-0">
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-dark-blue shadow-lg relative">
       03
       <div className="absolute -inset-[10px] rounded-full border border-light-blue/40"></div>
       <div className="absolute -inset-[18px] rounded-full border-[3px] border-transparent border-t-light-blue border-r-light-blue animate-spin" style={{"animationDuration":"3s"}}></div>
       <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-8 border-l-[2.5px] border-dotted border-light-blue/60"></div>
      </div>
      <div className="mt-14 text-center text-white font-bold text-sm uppercase tracking-wide leading-tight px-2">Reaming &<br/>Upsizing</div>
     </div>

     <div className="flex flex-col items-center relative z-10 group w-full md:w-1/5 mb-12 md:mb-0">
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-dark-blue shadow-lg relative">
       04
       <div className="absolute -inset-[10px] rounded-full border border-light-blue/40"></div>
       <div className="absolute -inset-[18px] rounded-full border-[3px] border-transparent border-t-light-blue border-r-light-blue animate-spin" style={{"animationDuration":"3s"}}></div>
       <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-8 border-l-[2.5px] border-dotted border-light-blue/60"></div>
      </div>
      <div className="mt-14 text-center text-white font-bold text-sm uppercase tracking-wide leading-tight px-2">Pipe Pullback</div>
     </div>

     <div className="flex flex-col items-center relative z-10 group w-full md:w-1/5">
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-dark-blue shadow-lg relative">
       05
       <div className="absolute -inset-[10px] rounded-full border border-light-blue/40"></div>
       <div className="absolute -inset-[18px] rounded-full border-[3px] border-transparent border-t-light-blue border-r-light-blue animate-spin" style={{"animationDuration":"3s"}}></div>
       <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-8 border-l-[2.5px] border-dotted border-light-blue/60"></div>
      </div>
      <div className="mt-14 text-center text-white font-bold text-sm uppercase tracking-wide leading-tight px-2">Completion &<br/>Testing</div>
     </div>

    </div>
   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       PERFORMANCE & QUALITY
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="bg-[#f0f2f5] pt-16 pb-16 lg:pt-24 lg:pb-24">
   <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    <div className="flex flex-col space-y-6 lg:pr-8 py-4">
     <h2 className="heading-2 text-dark-blue font-bold tracking-tight uppercase leading-tight">
      Performance<br/>&amp; Quality
     </h2>
     <p className="caption-text text-[#555555] font-bold leading-relaxed mb-2">
      INFRAMAX is committed to delivering world-class<br/>trenchless projects supported by:
     </p>
     <ul className="flex flex-col space-y-4">
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">ISO Certified Quality Management</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Accurate engineering planning</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Experienced technical team</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Strict inspection procedures</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Strong documentation systems</span>
      </li>
     </ul>
    </div>
    
    <div className="w-full relative min-h-[450px]">
     <img alt="Inframax performance engineer" className="absolute inset-0 w-full h-full object-cover shadow-sm" src="/inframax/assets/images/about-progress-quality-image.jpg"/>
    </div>
   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       HEALTH & SAFETY
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="bg-white pt-16 pb-16 lg:pt-24 lg:pb-24">
   <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    
    <div className="w-full relative min-h-[450px] order-2 lg:order-1 mt-8 lg:mt-0">
     <img alt="Safety equipment hard hat" className="absolute inset-0 w-full h-full object-cover shadow-sm" src="/inframax/assets/images/about-health-safety-image.jpg"/>
    </div>

    <div className="flex flex-col space-y-6 lg:pl-16 py-4 order-1 lg:order-2">
     <h2 className="heading-2 text-dark-blue font-bold tracking-tight uppercase">
      Health &amp; Safety
     </h2>
     <ul className="flex flex-col space-y-4 mt-2">
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Risk assessments &amp; HSE procedures</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">ADNOC &amp; Municipality approvals</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Environmental controls</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">HSE management systems</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Certified safety teams</span>
      </li>
      <li className="flex items-center space-x-4 caption-text text-[#555555] group cursor-default">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="font-medium text-gray-600 group-hover:text-dark-blue transition-colors duration-200">Continuous monitoring &amp; inspections</span>
      </li>
     </ul>
    </div>
   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       LEADERSHIP & GOVERNANCE
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="w-full bg-[#004b87] pt-16 pb-16 lg:pt-24 lg:pb-24 relative overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('/inframax/assets/images/about-leadership-background.jpg')"}}>
  
   <div className="container mx-auto px-4 max-w-7xl relative z-10">
    <h2 className="heading-2 text-white text-center uppercase mb-16 font-bold tracking-wide">
     Leadership &amp; Governance
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
     
     <div className="bg-white p-8 shadow-sm relative  group">
      {/* Sliding Blue Background */}
      <div className="absolute top-0 left-0 h-full w-0 bg-[#004b87] transition-all duration-500 ease-in-out group-hover:w-full z-0"></div>

      <div className="m-auto w-[140px] h-[140px] rounded-full border-[6px] mb-4 border-white shadow-sm overflow-hidden bg-white z-10">
       <img src="/inframax/assets/images/about-chairman-message-photo.webp" alt="Chairman" className="w-full h-full object-cover"/>
      </div>
      
      <div className="relative z-10">
       <h3 className="body-text !font-bold text-dark-blue group-hover:text-white transition-colors duration-500 mb-4 uppercase">Chairman's Message</h3>
       <p className="caption-text text-[#555555] group-hover:text-white/90 transition-colors duration-500 text-[15px] leading-relaxed mb-4">
        We are group of companies and we over fifteen have been in business years and we started it based on honesty and integrity. Our vision for the next five years is to expand our contracting services to other countries. We are ISO carried and we are approved by deferent entities and Municipalities.
       </p>
       <p className="caption-text text-[#555555] group-hover:text-white/90 transition-colors duration-500 text-[15px] leading-relaxed mb-4">
        As I always tell the people around me, trust is the most important element for a successful company. Leaders nowadays can no longer trust in power; instead, they should rely on the power of trust.
       </p>
       <p className="caption-text text-[#555555] group-hover:text-white transition-colors duration-500 text-[15px] leading-relaxed font-bold">
        "By building trust, I know that we can move closer to realizing our vision."
       </p>
      </div>
     </div>

     <div className="bg-white p-8 shadow-sm relative  group">
      {/* Sliding Blue Background */}
      <div className="absolute top-0 left-0 h-full w-0 bg-[#004b87] transition-all duration-500 ease-in-out group-hover:w-full z-0"></div>

      <div className="m-auto mb-4 w-[140px] h-[140px] rounded-full border-[6px] border-white shadow-sm overflow-hidden bg-white z-10">
       <img src="/inframax/assets/images/about-head-divisions-photo.png" alt="Head Division" className="w-full h-full object-cover"/>
      </div>
      
      <div className="relative z-10">
       <h3 className="body-text !font-bold text-dark-blue group-hover:text-white transition-colors duration-500 mb-4 uppercase">Head Division's Message</h3>
       <p className="caption-text text-[#555555] group-hover:text-white/90 transition-colors duration-500 text-[15px] leading-relaxed mb-4">
        The use of the latest technology with skilled hands in a short time leads to the completion of the work in a wonderful method without compromising the quality and general safety of the work crew and the assigned job, all of which constitute our work priorities.
       </p>
       <p className="caption-text text-[#555555] group-hover:text-white/90 transition-colors duration-500 text-[15px] leading-relaxed">
        INFRAMAX always seeks to train and develop the work team to use the latest devices and equipment, which led to the team acquiring planning and execution capabilities with high accuracy to implement the largest number of projects with the reliability of all customers, and this is what made us pioneers in the field of NDRC.
       </p>
      </div>
     </div>

    </div>
   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       TESTIMONIALS
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="w-full bg-[#00a3e0] pt-16 pb-20 lg:pt-24 lg:pb-24 relative overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('/inframax/assets/images/global-projects-blue-background.jpg')"}}>
   <div className="absolute inset-0 bg-[#00a3e0]/85 mix-blend-multiply"></div>
   <div className="absolute inset-0 bg-[#00a3e0]/40"></div>
   <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
    <h2 className="heading-2 text-white mb-8 tracking-wide">
     What clients say about us
    </h2>
    <TestimonialsSlider />
   </div>
  </section>

  {/*  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
       CTA BANNER
  â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•   */}
  <section className="w-full bg-[#4a4a4a] py-10">
   <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between">
    <p className="text-white text-[17px] font-medium mb-6 md:mb-0 text-center md:text-left tracking-wide">
     We believe in sustainable construction, precise engineering, and long-term value creation.
    </p>
    <a href="/contact" className="bg-white text-[#333333] font-bold py-3.5 px-8 rounded text-sm hover:bg-gray-100 transition-colors shrink-0 uppercase tracking-wide shadow-sm">
     Get Started
    </a>
   </div>
  </section>

 
    </>
  );
}
