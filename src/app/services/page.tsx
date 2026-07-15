import React from "react";

export default function Services() {
  return (
    <>
      

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HEADER â€” Injected Dynamically
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HERO SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="w-full relative overflow-hidden bg-black flex items-center">
   <div className="absolute inset-0 bg-cover bg-center" style={{"backgroundImage": "url('/inframax/assets/images/services-header-banner.webp')"}}></div>
   <div className="hero-overlay"></div>
   <div className="container mx-auto px-4 relative z-10 w-full">
    <div className="pb-[50px] min-h-[380px] md:pb-[90px] md:min-h-[380px] flex items-end">
     <div className="will-change-transform">
      <h1 className="heading-1 !mb-[10px] max-w-[1200px] text-white">Our Services</h1>
      <p className="body-text text-white/90 max-w-2xl">
       Inframax delivers strong, reliable construction built to last.
      </p>
      <a className="btn-primary mt-[30px]" href="#quote">
       Get a Quote
      </a>
     </div>
    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SERVICES GRID SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

     {/*  Card 1: Road Crossing  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Road Crossing Icon" className="w-full h-full object-contain text-light-blue" src="/inframax/assets/images/services-road-crossing-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Road Crossing</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        Inframax delivers precision HDD and micro-tunneling solutions for road crossings without disrupting traffic or surface infrastructure. Our trenchless technology enables safe pipeline and utility installation beneath major road networks while maintaining structural stability and minimizing environmental impact.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="/roadcrossing">
        Read More
       </a>
      </div>
     </div>

     {/*  Card 2: Water Channel & Marine Crossing  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Water Channel Icon" className="w-full h-full object-contain" src="/inframax/assets/images/services-water-channel-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Water Channel &amp; Marine Crossing</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        Our advanced trenchless systems enable the installation of pipelines beneath water channels, coastal zones, and marine environments. Using controlled drilling and specialized monitoring technology, we ensure accurate pipeline placement while protecting aquatic ecosystems and surrounding infrastructure.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="/Water-channel-Marine-Crossing">
        Read More
       </a>
      </div>
     </div>

     {/*  Card 3: Railway Crossing  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Railway Crossing Icon" className="w-full h-full object-contain" src="/inframax/assets/images/services-railway-crossing-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Railway Crossing</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        Inframax executes railway crossings using high-precision HDD and micro-tunneling methods that eliminate track disruption. Our engineered drilling approach allows pipelines and utilities to pass safely beneath railway infrastructure while maintaining strict safety and regulatory compliance.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="/railway-crossing">
        Read More
       </a>
      </div>
     </div>

     {/*  Card 4: Highway Crossings  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Highway Crossings Icon" className="w-full h-full object-contain" src="/inframax/assets/images/services-highway-crossing-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Highway Crossings</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        Our high-capacity HDD rigs allow safe pipeline installation beneath major highways and high-traffic transport corridors. This trenchless approach prevents excavation, protects roadway integrity, and enables continuous traffic flow during construction operations.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="/highway-crossings">
        Read More
       </a>
      </div>
     </div>

     {/*  Card 5: Urban & Congested Utility Zones  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Urban Zones Icon" className="w-full h-full object-contain" src="/inframax/assets/images/services-urban-utility-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Urban &amp; Congested Utility Zones</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        In dense urban environments, Inframax utilizes advanced utility detection, precision steering systems, and controlled drilling paths to install pipelines and utilities safely around existing infrastructure such as power lines, telecom networks, and drainage systems.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="/Urban-Congested-Utility-Zones">
        Read More
       </a>
      </div>
     </div>

     {/*  Card 6: Landscape / Bridge Crossings  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Landscape Icon" className="w-full h-full object-contain" src="/inframax/assets/images/services-landscape-bridge-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Landscape / Bridge Crossings</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        Our trenchless solutions enable pipeline installations beneath bridges, landscaped zones, and protected infrastructure areas without surface disturbance. This approach preserves structural foundations, landscaping, and surrounding developments while delivering efficient underground crossings.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="/landscape-bridge-crossings">
        Read More
       </a>
      </div>
     </div>

     {/*  Card 7: Micro Tunneling  */}
     <div className="bg-white p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 h-[3px] bg-dark-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
      <div>
       <div className="w-14 h-14 mb-6">
        <img alt="Micro Tunneling Icon" className="w-full h-full object-contain" src="/inframax/assets/images/services-highway-crossing-thumb.webp"/>
       </div>
       <h3 className="heading-2 text-dark-blue !text-xl font-bold mb-4">Micro Tunneling</h3>
       <p className="caption-text text-gray-600 leading-relaxed">
        Our high-capacity HDD rigs allow safe pipeline installation beneath major highways and high-traffic transport corridors. This trenchless approach prevents excavation, protects roadway integrity, and enables continuous traffic flow during construction operations.
       </p>
      </div>
      <div className="pt-6">
       <a className="caption-text text-gray-500 font-semibold hover:text-light-blue transition-colors duration-200 flex items-center gap-1" href="#">
        Read More
       </a>
      </div>
     </div>

    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       WHY TRENCHLESS TECHNOLOGY SECTION
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  <section className="bg-white pb-16 lg:pb-20">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
     
     {/*  Left content side  */}
     <div className="flex flex-col space-y-6">
      <h2 className="heading-2 text-dark-blue uppercase font-bold tracking-tight">
       Why Trenchless<br/>Technology
      </h2>
      <p className="caption-text text-gray-600 leading-relaxed">
       Lorem ipsum is simply dummy text of the printing and typesetting industry. This technique reduces surface disruption, lowers environmental impact, and allows installations beneath existing infrastructure.
      </p>
      
      {/*  Checklist items  */}
      <ul className="flex flex-col space-y-4 pt-2">
       <li className="flex items-center space-x-3 text-dark-blue font-semibold text-sm group transition-all duration-200">
        <div className="aspect-square h-[26px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[16px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
         </svg>
        </div>
        <span className="group-hover:text-light-blue transition-colors duration-200">Cost-effective solutions</span>
       </li>
       <li className="flex items-center space-x-3 text-dark-blue font-semibold text-sm group transition-all duration-200">
        <div className="aspect-square h-[26px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[16px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
         </svg>
        </div>
        <span className="group-hover:text-light-blue transition-colors duration-200">Reduced environmental &amp; public impact</span>
       </li>
       <li className="flex items-center space-x-3 text-dark-blue font-semibold text-sm group transition-all duration-200">
        <div className="aspect-square h-[26px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[16px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
         </svg>
        </div>
        <span className="group-hover:text-light-blue transition-colors duration-200">Faster project completion</span>
       </li>
       <li className="flex items-center space-x-3 text-dark-blue font-semibold text-sm group transition-all duration-200">
        <div className="aspect-square h-[26px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[16px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
         </svg>
        </div>
        <span className="group-hover:text-light-blue transition-colors duration-200">Minimal surface restoration</span>
       </li>
       <li className="flex items-center space-x-3 text-dark-blue font-semibold text-sm group transition-all duration-200">
        <div className="aspect-square h-[26px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[16px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
         </svg>
        </div>
        <span className="group-hover:text-light-blue transition-colors duration-200">Safe for urban &amp; sensitive areas</span>
       </li>
      </ul>
     </div>

     {/*  Right image side  */}
     <div className="w-full">
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shadow-md rounded-md">
       <img alt="Inframax onsite trenchless machinery operation" className="w-full h-full object-cover" src="/inframax/assets/images/home-why-inframax-main.jpg"/>
      </div>
     </div>

    </div>
   </div>
  </section>

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       FOOTER â€” Injected Dynamically
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  

  {/*  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       COMPONENTS INJECTION SCRIPT
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•  */}
  
  

 
    </>
  );
}
