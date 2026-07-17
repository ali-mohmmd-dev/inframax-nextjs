import React from "react";

export default function RoadCrossing() {
  return (
    <>
      

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HEADER â€” injected by components.js
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HERO BANNER SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full relative overflow-hidden bg-black flex items-center">
   <div className="absolute inset-0 bg-cover bg-center" style={{"backgroundImage": "url('/inframax/assets/images/services-road-crossing-header.webp')"}}></div>
   <div className="hero-overlay"></div>
   <div className="container mx-auto px-4 relative z-10 w-full">
    <div className="pb-[50px] min-h-[380px] md:pb-[90px] md:min-h-[400px] flex items-end justify-center text-center">
     <div className="will-change-transform w-full">
      <h1 className="heading-1 text-white font-bold tracking-tight text-center">
       Road Crossing Solutions
      </h1>
     </div>
    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       OVERVIEW CONTENT BLOCK (ASYMMETRIC SPLIT Layout)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
    
    {/*  Left Hand Side Description Block  */}
    <div className="flex flex-col justify-center space-y-6 lg:pr-16 py-4">
     <h2 className="heading-2 text-dark-blue font-bold tracking-tight">
      Road Crossing Solutions
     </h2>
     <p className="caption-text text-gray-600 leading-relaxed font-medium">
      Inframax provides advanced trenchless solutions for installing pipelines and underground utilities beneath roads without disrupting surface infrastructure or traffic flow. Using Horizontal Directional Drilling (HDD) and micro-tunneling technology, we deliver precise and controlled pipeline installations under highways, arterial roads, and urban streets.
     </p>
     <p className="caption-text text-gray-600 leading-relaxed font-medium">
      Our road crossing solutions eliminate the need for open trench excavation, significantly reducing environmental impact, road closures, and construction time.
     </p>
    </div>

    {/*  Right Hand Side Operational Frame Block  */}
    <div className="w-full shadow-sm bg-gray-50 overflow-hidden relative min-h-[350px]">
     <img alt="Inframax field specialists implementing street marking and trenchless directional operations layout" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-road-crossing-main.webp"/>
    </div>

   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       KEY CAPABILITIES STRIP MODULE (DEEP-BLUE LAYERING)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full bg-[#004b87] pt-16 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden" style={{"backgroundImage":"radial-gradient(circle at 5% 20%, rgba(0, 85, 165, 0.3) 0%, transparent 65%)"}}>
   
   {/*  Structural minimal triangles arrays overlay tracking on sidebar margins  */}
   <div className="absolute inset-y-0 left-4 w-12 opacity-15 pointer-events-none flex flex-col justify-around text-white text-[10px]">
    <div>â–² â–² â–²</div><div>â–² â–² â–²</div><div>â–² â–² â–²</div><div>â–² â–² â–²</div>
   </div>

   <div className="container mx-auto px-4 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
    
    {/*  Left Operational Evening Onsite View Frame  */}
    <div className="w-full shadow-xl relative overflow-hidden bg-slate-900 min-h-[400px]">
     <img alt="Inframax engineering crew executing nighttime guidance systems validation at highway shoulder checkpoint" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-road-crossing-key-capabilities.webp"/>
    </div>

    {/*  Right Capabilities Numeric Progression Column Block  */}
    <div className="flex flex-col justify-center space-y-6 lg:pl-16 py-4">
     <h2 className="heading-2 text-white font-bold uppercase tracking-wide mb-2">
      Key Capabilities
     </h2>
     
     <div className="flex flex-col border-y border-white/10 divide-y divide-white/10">
      
      {/*  Entry Item 01  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">01</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        HDD pipeline installation beneath roads
       </span>
      </div>

      {/*  Entry Item 02  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">02</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Steel and HDPE pipeline crossings
       </span>
      </div>

      {/*  Entry Item 03  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">03</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Long-distance road crossings
       </span>
      </div>

      {/*  Entry Item 04  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">04</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Installation under major highways and arterial roads
       </span>
      </div>

      {/*  Entry Item 05  */}
      <div className="flex items-center space-x-8 py-4 group">
       <span className="text-2xl font-bold text-light-blue tracking-wider shrink-0 min-w-[40px]">05</span>
       <span className="text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-light-blue transition-colors duration-200">
        Controlled drilling with precision steering systems
       </span>
      </div>

     </div>
    </div>

   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       TECHNICAL HIGHLIGHTS VERIFICATION BLOCK
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
    
    {/*  Left Checklist Elements Columns  */}
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
        Controlled directional drilling under water bodies
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
        Advanced bore path monitoring systems
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
        Minimal environmental impact
       </span>
      </li>

     </ul>
    </div>

    {/*  Right Target Content Frame matching image_455f6b.jpg survey alignment tracking action  */}
    <div className="w-full shadow-md overflow-hidden bg-gray-50 relative min-h-[400px]">
     <img alt="Survey engineering worker verifying reference string metrics across asphalt tracking plane pathways" className="absolute inset-0 w-full h-full object-cover" src="/inframax/assets/images/services-road-crossing-technical-highlights.webp"/>
    </div>

   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       TYPICAL APPLICATIONS GRID COMPONENT SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full bg-[#f8fafc] pt-16 pb-20 lg:pt-20 lg:pb-24">
   <div className="container mx-auto px-4 max-w-7xl">
    
    <h2 className="heading-2 text-[#004b87] text-center font-bold tracking-tight mb-16">
     Typical Applications
    </h2>

    {/*  Dynamic 4-Column and Left Aligned 5th Tile Matrix Layout matching image_455fa3.jpg metrics exactly  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
     
     {/*  Application Item 1  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[180px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Oil & gas pipeline crossings" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-oil-gas-pipelines-beneath-highways.webp"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Oil &amp; gas pipeline crossings
      </h3>
     </div>

     {/*  Application Item 2  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[180px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Water transmission pipelines" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-water-transmission-infra.webp"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Water transmission pipelines
      </h3>
     </div>

     {/*  Application Item 3  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[180px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Sewer and drainage infrastructure" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-sewer-water-network.webp"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Sewer and drainage infrastructure
      </h3>
     </div>

     {/*  Application Item 4  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[180px] hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Electrical and communication conduits" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-telecommunications-infra.webp"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Electrical and communication conduits
      </h3>
     </div>

     {/*  Application Item 5 (Spans column left alignment track on secondary matrix row)  */}
     <div className="bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 min-h-[180px] hover:shadow-md transition-shadow duration-300 lg:col-start-1">
      <div className="h-12 w-auto mb-4 flex items-center justify-center opacity-75">
       <img alt="Utility network expansion beneath roads" className="h-12 w-auto object-contain" src="/inframax/assets/images/services-icon-utility-network-expansion.webp"/>
      </div>
      <h3 className="caption-text !font-bold text-[#222222] tracking-wide leading-tight px-2">
       Utility network expansion beneath roads
      </h3>
     </div>

    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       FOOTER â€” injected by components.js
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SCRIPTS INITIATION ACTIVATE
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  
  

 
    </>
  );
}
