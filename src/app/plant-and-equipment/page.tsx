import React from "react";

export default function PlantAndEquipment() {
  return (
    <>
      {/*  HERO SECTION  */}
      <section className="w-full relative overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{"backgroundImage": "url('/inframax/assets/images/home-featured-works-banner.webp')"}}></div>
   <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="pb-[50px] min-h-[380px] md:pb-[90px] md:min-h-[380px] flex items-end">
            <div className="will-change-transform">
              <h1 className="heading-2 text-white !mb-[10px]">Plants & Equipment</h1>
              <p className="body-text text-white/90">Inframax delivers strong, reliable construction built to last.</p>
              <a className="btn-primary mt-[30px]" href="#quote">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: High-Capacity HDD Rigs */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[40%] relative z-0">
              <img src="/inframax/assets/images/projects-gallery-image-01.webp" alt="High-Capacity HDD Rigs" className="w-full h-[450px] lg:h-[690px] object-cover shadow-lg rounded-sm" />
            </div>
            <div className="w-full lg:w-[65%] relative z-10 lg:-ml-[5%] mt-8 lg:mt-0">
              <div className="bg-[#004b87] p-8 md:p-14 text-white shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-snug">
                  High-Capacity HDD Rigs for Complex Infrastructure Crossings
                </h2>
                <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                  INFRAMAX operates a fleet of advanced Horizontal Directional Drilling (HDD) rigs designed to execute complex underground crossings across highways, waterways, urban areas, and critical infrastructure corridors. Our equipment ranges from medium to high-capacity rigs capable of delivering precise drilling operations across diverse soil conditions including sand, clay, and hard rock formations.
                </p>
                <h3 className="text-lg font-medium mb-4">Key Capabilities:</h3>
                <ul className="space-y-3">
                  {[
                    "High pullback capacity rigs up to 400 Ton HDD capacity",
                    "Capable of installing pipelines up to 50 inches diameter",
                    "Suitable for long-distance crossings",
                    "Advanced tracking and steering systems",
                    "Reliable operation in urban and offshore environments"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-sm md:text-base text-white/90 transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
                      <div className="aspect-square h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                        <svg className="aspect-square h-[16px] text-white group-hover:text-[#004b87] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="group-hover:text-white transition-colors font-medium duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Advanced Drilling Equipment */}
      <section className="bg-[#f0f0f0] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-[65%] relative z-10 lg:-mr-[5%] mt-8 lg:mt-0">
              <div className="bg-[#00a3e0] p-10 md:p-14 text-white shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-snug">
                  Advanced Drilling Equipment for Precision HDD Operations
                </h2>
                <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                  Our drilling equipment is designed to ensure accuracy, reliability, and efficiency throughout the HDD drilling process. INFRAMAX utilizes specialized drilling tools and tracking technologies that allow our operators to control drilling direction, monitor bore alignment, and execute complex crossings safely.
                </p>
                <h3 className="text-lg font-medium mb-4">Equipment List:</h3>
                <ul className="space-y-3">
                  {[
                    "PARA TRACK II Marine Tracking System",
                    "Beacon Tracking Systems",
                    "Utility Detection Equipment",
                    "GPS Survey Equipment",
                    "HDD Locators",
                    "Welding Machines",
                    "Data Loggers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-sm md:text-base text-white/90 transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
                      <div className="aspect-square h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                        <svg className="aspect-square h-[16px] text-white group-hover:text-[#00a3e0] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="group-hover:text-white transition-colors font-medium duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[40%] relative z-0">
              <img src="/inframax/assets/images/projects-gallery-image-02.webp" alt="Advanced Drilling Equipment" className="w-full h-[450px] lg:h-[750px] object-cover shadow-lg rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mud Systems */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[40%] relative z-0">
              <img src="/inframax/assets/images/projects-gallery-image-03.webp" alt="Mud Systems" className="w-full h-[450px] lg:h-[660px] object-cover shadow-lg rounded-sm" />
            </div>
            <div className="w-full lg:w-[65%] relative z-10 lg:-ml-[5%] mt-8 lg:mt-0">
              <div className="bg-[#004b87] p-10 md:p-14 text-white shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-snug">
                  High-Performance Drilling Fluid & Mud Systems
                </h2>
                <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                  Drilling fluid systems play a critical role in HDD operations. INFRAMAX utilizes advanced mud circulation systems designed to stabilize boreholes, transport cuttings to the surface, and maintain proper pressure during drilling.
                </p>
                <h3 className="text-lg font-medium mb-4">Key Functions of Mud Systems:</h3>
                <ul className="space-y-3">
                  {[
                    "Borehole stabilization",
                    "Removal of drilling cuttings",
                    "Cooling and lubricating drill tools",
                    "Maintaining borehole pressure",
                    "Improving drilling efficiency"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-sm md:text-base text-white/90 transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
                      <div className="aspect-square h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                        <svg className="aspect-square h-[16px] text-white group-hover:text-[#004b87] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="group-hover:text-white transition-colors font-medium duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Reaming Tools */}
      <section className="bg-[#f0f0f0] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-[65%] relative z-10 lg:-mr-[5%] mt-8 lg:mt-0">
              <div className="bg-[#00a3e0] p-10 md:p-14 text-white shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-snug">
                  Precision Reaming Tools for Borehole Enlargement
                </h2>
                <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                  Reaming is a critical stage of the HDD process where the pilot borehole is enlarged to accommodate the pipeline or conduit. INFRAMAX uses a range of high-quality reaming tools designed for different soil and geological conditions.
                </p>
                <h3 className="text-lg font-medium mb-4">Equipment List:</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Fly Cutter Reamers",
                    "Barrel Reamers",
                    "Rock Reamers",
                    "Hole Openers",
                    "Back Reamers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-sm md:text-base text-white/90 transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
                      <div className="aspect-square h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                        <svg className="aspect-square h-[16px] text-white group-hover:text-[#00a3e0] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="group-hover:text-white transition-colors font-medium duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-medium mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  {[
                    "Smooth borehole enlargement",
                    "Reduced drilling resistance",
                    "Protection of installed pipelines",
                    "Increased installation success rate"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-sm md:text-base text-white/90 transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
                      <div className="aspect-square h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                        <svg className="aspect-square h-[16px] text-white group-hover:text-[#00a3e0] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="group-hover:text-white transition-colors font-medium duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[40%] relative z-0">
              <img src="/inframax/assets/images/projects-gallery-image-04.webp" alt="Precision Reaming Tools" className="w-full h-[450px] lg:h-[840px] object-cover shadow-lg rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Our Capabilities */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 uppercase text-[#00a3e0]">
                Our Capabilities
              </h2>
              <p className="text-gray-700 mb-8 text-base leading-relaxed">
                We provide fully integrated trenchless construction solutions including:
              </p>
              <ul className="space-y-3">
                {[
                  "Micro-Tunneling",
                  "Pipe Jacking",
                  "Horizontal Directional Drilling (HDD)",
                  "Utility Crossings",
                  "Deep Shaft Installations",
                  "Large Diameter Installations",
                  "Complex Ground & Marine Conditions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 caption-text text-[#666666] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
                    <div className="aspect-square h-[30px] rounded-full border-2 border-[#00a3e0] flex items-center justify-center shrink-0 group-hover:bg-[#00a3e0] transition-colors duration-200">
                      <svg className="aspect-square h-[20px] text-[#00a3e0] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <span className="group-hover:text-[#004b87] transition-colors font-medium duration-200 text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="/inframax/assets/images/projects-our-capability-main.webp" alt="Our Capabilities" className="w-full h-auto object-cover shadow-xl rounded-sm border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Plant & Equipment Gallery */}
      <section className="bg-[#f4f5f7] py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="heading-2 text-[#004b87] uppercase font-bold tracking-tight mb-4">
               Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="aspect-square bg-gray-200 relative overflow-hidden rounded-sm shadow-sm group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
              >
                <img
                  src={encodeURI(`/inframax/assets/images/plant&equipment-gallery (${num}).jpeg`)}
                  alt={`Inframax Plant and Equipment Gallery ${num}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
               
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
