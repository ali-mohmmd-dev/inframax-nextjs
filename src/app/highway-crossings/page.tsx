import React from "react";

export default function HighwayCrossings() {
  return (
    <>
      

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HEADER â€” injected by components.js
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HERO BANNER SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full relative overflow-hidden bg-black flex items-center">
   <div className="absolute inset-0 bg-cover bg-center" style={{"backgroundImage": "url('/inframax/assets/images/services-highway-crossing-header.webp')"}}></div>
   <div className="hero-overlay"></div>
   <div className="container mx-auto px-4 relative z-10 w-full">
    <div className="pb-[50px] min-h-[380px] md:pb-[90px] md:min-h-[380px] flex items-end justify-center text-center">
     <div className="will-change-transform w-full">
      <h1 className="heading-1 !mb-[10px] text-white tracking-wide font-semibold drop-shadow-sm">Highway Crossings</h1>
     </div>
    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       INFRASTRUCTURE OVERVIEW SECTION (Asymmetric Responsive Grid)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4 max-w-7xl">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
      
      {/*  Left content block  */}
      <div className="flex flex-col justify-center space-y-6 lg:pr-16 py-4">
       <h2 className="heading-2 text-dark-blue font-bold tracking-tight">
        Highway Crossing Infrastructure
       </h2>
       <p className="caption-text text-gray-600 leading-relaxed font-medium">
        Highway crossings require specialized trenchless construction techniques to avoid disrupting high-volume traffic routes. Inframax deploys high-capacity HDD rigs and precision drilling technology to install pipelines beneath highways safely and efficiently.
       </p>
       <p className="caption-text text-gray-600 leading-relaxed font-medium">
        This method allows infrastructure development without road closures or surface excavation.
       </p>
      </div>

      {/*  Right image block  */}
      <div className="w-full bg-gray-100 overflow-hidden shadow-sm relative min-h-[350px]">
       <img alt="Inframax highway crossing drilling setup onsite" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-highway-crossing-main.webp"/>
      </div>

     </div>
    </div>
   </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       KEY CAPABILITIES BLOCK (Deep Blue Full Width Ribbon Block)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full bg-dark-blue-bg pt-16 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden">
   
   {/*  Subtle geometric background accent visible on the edges  */}
   <div className="absolute left-4 inset-y-0 w-12 opacity-15 pointer-events-none flex flex-col justify-around text-white text-[10px]">
    <div>â–² â–² â–²</div><div>â–² â–² â–²</div><div>â–² â–² â–²</div>
   </div>

   <div className="container mx-auto px-4 max-w-7xl relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
     
     {/*  Left side: Project Site Execution Photo  */}
     <div className="w-full relative aspect-[4/3] bg-slate-900 overflow-hidden shadow-md">
      <img alt="Infrastructure alignment pipelines layout pit" className="w-full h-full object-cover" src="/inframax/assets/images/services-highway-crossing-key-capabilities.webp"/>
     </div>

     {/*  Right side: Numeric Capabilities List  */}
     <div className="flex flex-col justify-center space-y-8 lg:pl-4">
      <h2 className="heading-2 text-white font-bold tracking-wide uppercase">
       Key Capabilities
      </h2>
      <div className="flex flex-col space-y-6">
       
       {/*  Feature Item 01  */}
       <div className="flex items-start space-x-6 pb-4 border-b border-white/20">
        <div className="text-3xl font-black text-light-blue shrink-0 leading-none">01</div>
        <p className="body-text !font-semibold text-white tracking-wide">
         Long-distance HDD highway crossings
        </p>
       </div>

       {/*  Feature Item 02  */}
       <div className="flex items-start space-x-6 pb-4 border-b border-white/20">
        <div className="text-3xl font-black text-light-blue shrink-0 leading-none">02</div>
        <p className="body-text !font-semibold text-white tracking-wide">
         Pipeline installation beneath major highways
        </p>
       </div>

       {/*  Feature Item 03  */}
       <div className="flex items-start space-x-6 pb-4 border-b-0">
        <div className="text-3xl font-black text-light-blue shrink-0 leading-none">03</div>
        <p className="body-text !font-semibold text-white tracking-wide">
         Installation under high-traffic transportation corridors
        </p>
       </div>

      </div>
     </div>

    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       TECHNICAL HIGHLIGHTS SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
     
     {/*  Left side: Bullet Checklist Matrix  */}
     <div className="flex flex-col justify-center space-y-6 lg:pr-16 py-4">
      <h2 className="heading-2 text-dark-blue font-bold tracking-tight">
       Technical Highlights
      </h2>
      <ul className="flex flex-col space-y-4">
       
       <li className="flex items-center space-x-4 caption-text text-[#555555] font-medium transition-transform duration-200 hover:-translate-y-0.5 cursor-default group">
        <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue font-semibold transition-colors">Heavy-duty drilling rigs with high pullback capacity</span>
       </li>

       <li className="flex items-center space-x-4 caption-text text-[#555555] font-medium transition-transform duration-200 hover:-translate-y-0.5 cursor-default group">
        <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue font-semibold transition-colors">Advanced steering technology for accurate drilling</span>
       </li>

       <li className="flex items-center space-x-4 caption-text text-[#555555] font-medium transition-transform duration-200 hover:-translate-y-0.5 cursor-default group">
        <div className="w-6 h-6 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="w-3.5 h-3.5 text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue font-semibold transition-colors">Minimal disruption to road infrastructure</span>
       </li>

      </ul>
     </div>

     {/*  Right side: On-site Alignment Photo  */}
     <div className="w-full bg-gray-100 overflow-hidden shadow-sm relative min-h-[400px]">
      <img alt="Trenchless alignment drilling path excavation pit" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-highway-crossing-technical-highlights.webp"/>
     </div>
      
     </div>
    </div>
   </section>

  {/*  ============================================================================================= 
       TYPICAL APPLICATIONS FOOTER SECTION (3-Column Framework Matrix)
  =============================================================================================  */}
  <section className="w-full bg-[#f8fafc] pt-16 pb-16 lg:pt-20 lg:pb-20 border-t border-gray-100">
   <div className="container mx-auto px-4 max-w-7xl">
    <h2 className="heading-2 text-dark-blue text-center uppercase tracking-wide font-bold mb-12">
     Typical Applications
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

     {/*  Application Item 1  */}
     <div className="bg-white border border-gray-100 p-8 flex flex-col items-center justify-center text-center shadow-sm relative min-h-[160px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-dark-blue-bg transition-all duration-300 group-hover:w-full"></div>
      <div className="h-12 w-auto mb-4 flex items-center justify-center">
       <img alt="Oil and gas pipelines beneath highways" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-oil-gas-pipelines-beneath-highways.webp"/>
      </div>
      <p className="caption-text !font-bold text-[#222222] group-hover:text-dark-blue transition-colors duration-200 leading-snug max-w-[220px]">
       Oil and gas pipelines beneath highways
      </p>
     </div>

     {/*  Application Item 2  */}
     <div className="bg-white border border-gray-100 p-8 flex flex-col items-center justify-center text-center shadow-sm relative min-h-[160px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-dark-blue-bg transition-all duration-300 group-hover:w-full"></div>
      <div className="h-12 w-auto mb-4 flex items-center justify-center">
       <img alt="Water transmission infrastructure" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-water-transmission-infra.webp"/>
      </div>
      <p className="caption-text !font-bold text-[#222222] group-hover:text-dark-blue transition-colors duration-200 leading-snug max-w-[220px]">
       Water transmission infrastructure
      </p>
     </div>

     {/*  Application Item 3  */}
     <div className="bg-white border border-gray-100 p-8 flex flex-col items-center justify-center text-center shadow-sm relative min-h-[160px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-dark-blue-bg transition-all duration-300 group-hover:w-full"></div>
      <div className="h-12 w-auto mb-4 flex items-center justify-center">
       <img alt="Utility network expansion" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-utility-network-expansion.webp"/>
      </div>
      <p className="caption-text !font-bold text-[#222222] group-hover:text-dark-blue transition-colors duration-200 leading-snug max-w-[220px]">
       Utility network expansion
      </p>
     </div>

    </div>
   </div>
  </section>

  {/*  ============================================================================================= 
       SCRIPTS & LAYOUT ROUTER INITIALIZER
  =============================================================================================  */}
  
  

 
    </>
  );
}
