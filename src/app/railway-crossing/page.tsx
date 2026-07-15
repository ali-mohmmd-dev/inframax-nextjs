import React from "react";

export default function RailwayCrossing() {
  return (
    <>
      

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HEADER â€” injected by components.js
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HERO BANNER SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full relative overflow-hidden bg-black flex items-center">
   <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{"backgroundImage": "url('/inframax/assets/images/services-railway-crossing-header.jpg')"}}></div>
   <div className="hero-overlay"></div>
   <div className="container mx-auto px-4 relative z-10 w-full">
    <div className="pb-[50px] min-h-[380px] md:pb-[90px] md:min-h-[400px] flex items-end justify-center text-center">
     <div className="will-change-transform w-full">
      <h1 className="heading-1 text-white font-bold tracking-tight text-center">
       Railway Crossing
      </h1>
     </div>
    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       OVERVIEW CONTENT BLOCK (ASYMMETRIC SPLIT)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
    
    {/*  Left Hand Side Descriptions  */}
    <div className="flex flex-col justify-center space-y-6 lg:pr-16 py-4">
     <h2 className="heading-2 text-dark-blue font-bold tracking-tight">
      Railway Crossing Solutions
     </h2>
     <p className="caption-text text-gray-600 leading-relaxed font-medium">
      Railway crossings require highly precise trenchless engineering to ensure that rail infrastructure remains fully operational during construction. Inframax uses HDD and micro-tunneling technology to install pipelines and utilities beneath railway tracks without disrupting train operations.
     </p>
     <p className="caption-text text-gray-600 leading-relaxed font-medium">
      Our controlled drilling approach ensures structural safety and alignment accuracy while meeting strict regulatory standards.
     </p>
    </div>

    {/*  Right Hand Side Machine Frame  */}
    <div className="w-full shadow-sm bg-gray-50 overflow-hidden relative min-h-[350px]">
     <img alt="Inframax high-capacity trenchless drilling rig executing railway crossing alignment" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-railway-crossing-main.jpg"/>
    </div>

   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       KEY CAPABILITIES STRIP (DEEP-BLUE LAYERING)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full bg-[#004b87] pt-16 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden" style={{"backgroundImage":"radial-gradient(circle at 5% 20%, rgba(0, 85, 165, 0.3) 0%, transparent 65%)"}}>
   
   {/*  Structural minimal triangles arrays overlay  */}
   <div className="absolute inset-y-0 left-4 w-12 opacity-15 pointer-events-none flex flex-col justify-around text-white text-[10px]">
    <div>â–² â–² â–²</div><div>â–² â–² â–²</div><div>â–² â–² â–²</div><div>â–² â–² â–²</div>
   </div>

   <div className="container mx-auto px-4 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
    
    {/*  Left Pipeline Trench View Frame  */}
    <div className="w-full shadow-xl relative overflow-hidden bg-slate-900 min-h-[400px]">
     <img alt="Large diameter heavy steel pipeline alignment crossing inside excavated corridor" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-railway-crossing-key-capabilities.jpg"/>
    </div>

    {/*  Right Capabilities Numeric Column Block  */}
    <div className="flex flex-col justify-center space-y-6 lg:pl-16 py-4">
     <h2 className="heading-2 text-white font-bold uppercase tracking-wide mb-2">
      Key Capabilities
     </h2>
     
     <div className="flex flex-col border-y border-white/10 divide-y divide-white/10">
      
      {/*  Entry Item 01  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">01</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Pipeline installation beneath railway lines
       </span>
      </div>

      {/*  Entry Item 02  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">02</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Utility crossings under active rail infrastructure
       </span>
      </div>

      {/*  Entry Item 03  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">03</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Long-distance HDD drilling for railway corridors
       </span>
      </div>

      {/*  Entry Item 04  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">04</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Precision alignment systems
       </span>
      </div>

     </div>
    </div>

   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       TECHNICAL HIGHLIGHTS SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
    
    {/*  Left Checklist Elements  */}
    <div className="flex flex-col justify-center space-y-6 lg:pr-16 py-4">
     <h2 className="heading-2 text-dark-blue font-bold tracking-tight mb-2">
      Technical Highlights
     </h2>
     
     <ul className="flex flex-col space-y-4">
      
      {/*  Point Line 1  */}
      <li className="flex items-start space-x-4 group cursor-pointer">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="text-sm text-gray-700 font-medium tracking-wide group-hover:text-dark-blue transition-colors duration-200 leading-snug">
        Advanced bore path tracking systems
       </span>
      </li>

      {/*  Point Line 2  */}
      <li className="flex items-start space-x-4 group cursor-pointer">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="text-sm text-gray-700 font-medium tracking-wide group-hover:text-dark-blue transition-colors duration-200 leading-snug">
        Minimal vibration and ground disturbance
       </span>
      </li>

      {/*  Point Line 3  */}
      <li className="flex items-start space-x-4 group cursor-pointer">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="text-sm text-gray-700 font-medium tracking-wide group-hover:text-dark-blue transition-colors duration-200 leading-snug">
        Compliance with railway engineering standards
       </span>
      </li>

      {/*  Point Line 4  */}
      <li className="flex items-start space-x-4 group cursor-pointer">
       <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
        <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <span className="text-sm text-gray-700 font-medium tracking-wide group-hover:text-dark-blue transition-colors duration-200 leading-snug">
        High precision directional drilling
       </span>
      </li>

     </ul>
    </div>

    {/*  Right Content Frame (Crawler Rig)  */}
    <div className="w-full shadow-md overflow-hidden bg-gray-50 relative min-h-[400px]">
     <img alt="Aerial top-down view of heavy compact directional drilling track rig setup" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-railway-crossing-technical-highlights.jpg"/>
    </div>

   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       TYPICAL APPLICATIONS SECTOR GRID
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full bg-[#f8fafc] pt-16 pb-20 lg:pt-20 lg:pb-24">
   <div className="container mx-auto px-4 max-w-7xl">
    
    <h2 className="heading-2 text-[#004b87] text-center font-bold tracking-tight mb-16">
     Typical Applications
    </h2>

    {/*  Balanced symmetric 3-column panel grid layout exactly matching screenshot details  */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
     
     {/*  Application Card 1  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[190px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Gas and oil pipelines under railway track" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-oil-gas-pipelines-beneath-highways.png"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Gas and oil pipelines under railway track
      </h3>
     </div>

     {/*  Application Card 2  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[190px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Utility infrastructure crossings" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-utility-infra-crossings.png"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Utility infrastructure crossings
      </h3>
     </div>

     {/*  Application Card 3  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[190px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Water and sewer pipelines beneath rail corridors" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-water-sewer-rail-corridors.png"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Water and sewer pipelines beneath rail corridors
      </h3>
     </div>

    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       FOOTER â€” injected by components.js
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SCRIPTS INITIALIZATION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  
  

 
    </>
  );
}
