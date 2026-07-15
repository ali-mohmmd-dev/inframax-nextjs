"use client";
import React, { useState, useEffect, useRef } from "react";

function AnimatedStatCounter({ valueStr, duration = 2000 }: { valueStr: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const cleaned = valueStr.replace(/,/g, "");
  const numMatch = cleaned.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;
  const index = numMatch ? cleaned.indexOf(numMatch[0]) : 0;
  const prefix = numMatch ? cleaned.substring(0, index) : "";
  const suffix = numMatch ? cleaned.substring(index + numMatch[0].length) : valueStr;

  useEffect(() => {
    const element = ref.current;
    if (!element || !numMatch) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * targetNum));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNum);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [targetNum, duration, numMatch]);

  if (!numMatch) {
    return <div className="text-5xl md:text-5xl font-semibold text-light-blue">{valueStr}</div>;
  }

  return (
    <div ref={ref} className="text-5xl md:text-5xl font-semibold text-light-blue">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const statsData = [
  { value: "77+", unit: "Million AED", label: "Total Projects Value" },
  { value: "100+", unit: "Million AED Annual Project Capacity", label: "Financial Capability" },
  { value: "79+", unit: "HDD & Infrastructure Projects", label: "Completed Projects" },
  { value: "53+", unit: "Million AED", label: "Ongoing Projects Value" },
  { value: "35+", unit: "KM HDD Installations", label: "Pipeline Installed" },
  { value: "1,730+", unit: "meter", label: "Longest HDD Crossing" },
  { value: "50\"", unit: "inch", label: "Max Pipe Diameter" },
  { value: "15+", unit: "Years Industry Experience", label: "Years of Experience" }
];

const projectTabs = [
  "Road Crossing",
  "Water Channel Crossing",
  "Gas Pipeline",
  "Utility Crossing",
  "Highway Crossing"
];

const projectsData = [
  // Road Crossing
  { title: "ADNOC Gas Pipeline Crossing – Sahil & Asab", desc: "Installation of 500mm CS Pipeline by HDD", length: "2,700 LM", client: "ADNOC", location: "Abu Dhabi", contractor: null, category: "Road Crossing" },
  { title: "Road E311 Infrastructure Crossing", desc: "Installation of HDPE Utility Lines by HDD", length: "2,925 LM across 114 locations", client: "MCC / House Engineering", location: "Abu Dhabi", contractor: null, category: "Road Crossing" },
  { title: "Saadiyat Island Water Channel Crossing", desc: "Installation of 9W / 200mm HDPE pipelines", length: "432 LM", client: "ADM", location: null, contractor: "Hilalco", category: "Road Crossing" },
  { title: "Ramhan Island Infrastructure Crossing", desc: "Installation of 225mm HDPE pipelines", length: "737 LM", client: "ADM", location: null, contractor: null, category: "Road Crossing" },
  { title: "EL SEWEDY POWER", desc: "Installation of 4W/200MM HDPE by HDD High Way Crossing 6 Nos Abu Dhabi / Al Ain Road", length: "1,553 LM", client: "LITE", location: "Al Raha, Abu Dhabi", contractor: null, category: "Road Crossing" },
  { title: "MERIT MARINE INTERNATIONAL", desc: "Installation of 4W/110MM HDPE by HDD Water Channel Crossing", length: "2,831 LM", client: "ADNOC", location: "Fujairah – Kalba", contractor: null, category: "Road Crossing" },
  { title: "HILALCO", desc: "Installation of 9W/200MM HDPE by HDD Water Channel Crossing", length: "432 LM", client: "ADM", location: "Saadiyat Island", contractor: null, category: "Road Crossing" },
  { title: "HILALCO", desc: "Installation of 4W/225MM HDPE by HDD Water Channel Crossing", length: "737 LM", client: "ADM", location: "Ramhan Island", contractor: null, category: "Road Crossing" },
  { title: "HILALCO", desc: "Installation of 4W/110MM HDPE by HDD Water Channel Crossing", length: "200 LM", client: "ADM", location: "Ramhan Island", contractor: null, category: "Road Crossing" },
  { title: "Abu Dhabi International Airport Road Crossing", desc: "HDD Installation of 6W/250mm HDPE Utility Lines", length: "1,140 LM", client: "ADAC", location: "Abu Dhabi", contractor: null, category: "Road Crossing" },
  { title: "Khalifa City Road Infrastructure Crossing", desc: "Installation of 300mm Steel Pipeline by HDD", length: "880 LM", client: "ADM", location: "Khalifa City, Abu Dhabi", contractor: null, category: "Road Crossing" },
  { title: "Al Maryah Island Road Crossing", desc: "HDD Installation of 200mm HDPE Utility Conduits", length: "530 LM", client: "TDIC", location: "Abu Dhabi", contractor: null, category: "Road Crossing" },

  // Water Channel Crossing
  { title: "Dubai Creek Water Channel Crossing", desc: "Installation of 300mm HDPE pipelines by HDD", length: "1,200 LM", client: "DEWA", location: "Dubai", category: "Water Channel Crossing" },
  { title: "Khor Fakkan Channel Crossing", desc: "Installation of 6W/250mm HDPE by HDD", length: "980 LM", client: "SEWA", location: "Sharjah", category: "Water Channel Crossing" },
  { title: "Al Maqta Channel Crossing", desc: "Installation of 400mm Steel Pipeline by HDD", length: "560 LM", client: "ADM", location: "Abu Dhabi", category: "Water Channel Crossing" },
  { title: "Yas Island Water Crossing", desc: "Installation of 200mm HDPE Utility Lines", length: "320 LM", client: "Aldar Properties", location: "Abu Dhabi", category: "Water Channel Crossing" },
  { title: "Reem Island Waterway Crossing", desc: "Installation of 8W/315mm HDPE by HDD", length: "740 LM", client: "Sorouh", location: "Abu Dhabi", category: "Water Channel Crossing" },
  { title: "Khalid Lagoon Crossing", desc: "Installation of 4W/160mm HDPE Water Lines", length: "415 LM", client: "SEWA", location: "Sharjah", category: "Water Channel Crossing" },
  { title: "Umm Al Quwain Creek Crossing", desc: "HDD Installation of 250mm HDPE Waterline", length: "490 LM", client: "UAQ Municipality", location: "Umm Al Quwain", category: "Water Channel Crossing" },
  { title: "Ajman Corniche Channel Crossing", desc: "Installation of 4W/200mm HDPE by HDD", length: "380 LM", client: "Ajman Municipality", location: "Ajman", category: "Water Channel Crossing" },
  { title: "Al Bateen Marina Crossing", desc: "HDD Pipeline Installation - Marina Infrastructure", length: "275 LM", client: "ADM", location: "Abu Dhabi", category: "Water Channel Crossing" },
  { title: "Lulu Island Waterway Crossing", desc: "Installation of 350mm Steel Pipeline by HDD", length: "640 LM", client: "ADDA", location: "Abu Dhabi", category: "Water Channel Crossing" },
  { title: "Deira Island Canal Crossing", desc: "HDD Installation of 6W/225mm HDPE Lines", length: "720 LM", client: "Nakheel", location: "Dubai", category: "Water Channel Crossing" },
  { title: "Hamriyah Port Channel Crossing", desc: "Installation of 300mm HDPE Utility Lines", length: "510 LM", client: "SEWA", location: "Sharjah", category: "Water Channel Crossing" },

  // Gas Pipeline
  { title: "ADNOC Gas Transmission Pipeline", desc: "Installation of 600mm CS Gas Pipeline by HDD", length: "3,400 LM", client: "ADNOC", location: "Ruwais, Abu Dhabi", category: "Gas Pipeline" },
  { title: "Emirates Gas Pipeline Extension", desc: "Installation of 450mm Steel Pipeline", length: "2,100 LM", client: "ENOC", location: "Dubai", category: "Gas Pipeline" },
  { title: "Sharjah Gas Distribution Network", desc: "Installation of MDPE Gas Lines by HDD", length: "1,850 LM", client: "SEWA", location: "Sharjah", category: "Gas Pipeline" },
  { title: "Al Ain Gas Supply Pipeline", desc: "HDD Installation of 300mm Steel Gas Pipe", length: "1,200 LM", client: "ADNOC Distribution", location: "Al Ain", category: "Gas Pipeline" },
  { title: "Jebel Ali Gas Pipeline", desc: "Installation of 500mm CS Pipeline - Industrial Zone", length: "2,600 LM", client: "DEWA", location: "Jebel Ali, Dubai", category: "Gas Pipeline" },
  { title: "Musaffah Gas Network Upgrade", desc: "HDD Installation of 250mm HDPE Gas Lines", length: "870 LM", client: "ADM", location: "Musaffah, Abu Dhabi", category: "Gas Pipeline" },
  { title: "Takreer Refinery Gas Pipeline", desc: "HDD Installation of 400mm CS High Pressure Line", length: "1,650 LM", client: "Takreer", location: "Ruwais, Abu Dhabi", category: "Gas Pipeline" },
  { title: "RAK Gas Distribution Pipeline", desc: "HDPE Gas Line Installation by HDD", length: "1,030 LM", client: "RAKIA", location: "Ras Al Khaimah", category: "Gas Pipeline" },
  { title: "Fujairah Power Plant Gas Feed", desc: "HDD Installation of 350mm CS Gas Pipeline", length: "920 LM", client: "FEWA", location: "Fujairah", category: "Gas Pipeline" },
  { title: "Habshan Gas Compression Station", desc: "HDD Pipeline Tie-in - 500mm CS Main Line", length: "2,200 LM", client: "ADNOC Gas", location: "Habshan, Abu Dhabi", category: "Gas Pipeline" },
  { title: "Umm Al Nar Gas Loop Pipeline", desc: "Installation of 600mm CS Pipeline by HDD", length: "1,780 LM", client: "ADNOC", location: "Abu Dhabi", category: "Gas Pipeline" },
  { title: "Kalba Gas Supply Extension", desc: "HDD Installation of 200mm MDPE Gas Network", length: "640 LM", client: "SEWA", location: "Kalba, Sharjah", category: "Gas Pipeline" },

  // Utility Crossing
  { title: "Sheikh Zayed Road Utility Crossing", desc: "Multi-utility HDD Installation - Power & Telecom", length: "450 LM across 18 locations", client: "RTA", location: "Dubai", category: "Utility Crossing" },
  { title: "Abu Dhabi Corniche Utility Duct", desc: "Installation of 200mm HDPE Conduit by HDD", length: "620 LM", client: "ADDC", location: "Abu Dhabi", category: "Utility Crossing" },
  { title: "Etisalat Fiber Duct Crossing", desc: "HDD Installation of Telecom Ducts - 4W/110mm", length: "1,100 LM", client: "Etisalat (e&)", location: "Dubai & Abu Dhabi", category: "Utility Crossing" },
  { title: "DEWA Power Cable Crossing", desc: "HDD Installation of 132kV Cable Conduits", length: "380 LM", client: "DEWA", location: "Dubai", category: "Utility Crossing" },
  { title: "Du Telecom Duct Network", desc: "Installation of 6W/110mm HDPE Telecom Ducts", length: "920 LM", client: "Du Telecom", location: "Sharjah", category: "Utility Crossing" },
  { title: "Masdar City Utility Corridors", desc: "HDD Multi-service Utility Installation", length: "760 LM", client: "Masdar", location: "Abu Dhabi", category: "Utility Crossing" },
  { title: "Dubai Silicon Oasis Utility Crossing", desc: "HDD Installation of 4W/160mm HDPE Conduits", length: "480 LM", client: "DSO Authority", location: "Dubai", category: "Utility Crossing" },
  { title: "ADNOC HQ Utility Tie-In", desc: "Multi-bore HDD Utility Crossing - Water & Power", length: "310 LM", client: "ADNOC", location: "Abu Dhabi", category: "Utility Crossing" },
  { title: "RAK Media City Utility Network", desc: "Installation of 200mm HDPE Utility Lines by HDD", length: "570 LM", client: "RAKEZ", location: "Ras Al Khaimah", category: "Utility Crossing" },
  { title: "Expo City Dubai Utility Crossing", desc: "HDD Installation of 8W/110mm HDPE Conduits", length: "860 LM", client: "Expo Authority", location: "Dubai", category: "Utility Crossing" },
  { title: "Al Quoz Industrial Utility Duct", desc: "HDD Installation of 6W/200mm HDPE Lines", length: "430 LM", client: "RTA", location: "Dubai", category: "Utility Crossing" },
  { title: "Zayed University Campus Utility", desc: "HDD Multi-utility Crossing - Telecom & Water", length: "290 LM", client: "Zayed University", location: "Abu Dhabi", category: "Utility Crossing" },

  // Highway Crossing
  { title: "E11 Highway Crossing - Dubai-Abu Dhabi", desc: "HDD Installation of 500mm Water Main", length: "1,800 LM", client: "ADWEA", location: "Abu Dhabi", category: "Highway Crossing" },
  { title: "E66 Al Ain - Dubai Highway Crossing", desc: "Installation of 8W/200mm HDPE by HDD", length: "2,240 LM", client: "ADNOC", location: "Al Ain", category: "Highway Crossing" },
  { title: "Abu Dhabi Ring Road Crossing", desc: "Multi-bore HDD Pipeline Installation", length: "960 LM", client: "ADM", location: "Abu Dhabi", category: "Highway Crossing" },
  { title: "Sharjah-Ajman Expressway Crossing", desc: "HDD Installation of 350mm CS Pipeline", length: "1,050 LM", client: "SEWA", location: "Sharjah", category: "Highway Crossing" },
  { title: "Mohammed Bin Zayed Road Crossing", desc: "4W/225mm HDPE Utility Crossing by HDD", length: "680 LM", client: "RTA", location: "Dubai", category: "Highway Crossing" },
  { title: "Fujairah Coastal Highway Crossing", desc: "Installation of 300mm Steel Pipeline by HDD", length: "520 LM", client: "FEWA", location: "Fujairah", category: "Highway Crossing" },
  { title: "E311 Bypass Highway Crossing", desc: "HDD Installation of 6W/200mm HDPE Lines", length: "1,350 LM", client: "MCC", location: "Sharjah", category: "Highway Crossing" },
  { title: "Hatta Road Highway Crossing", desc: "HDD Installation of 250mm CS Pipeline", length: "790 LM", client: "Dubai Municipality", location: "Hatta, Dubai", category: "Highway Crossing" },
  { title: "Al Dhafra Highway Crossing", desc: "HDD Installation of 400mm HDPE Waterline", length: "1,100 LM", client: "ADWEA", location: "Al Dhafra, Abu Dhabi", category: "Highway Crossing" },
  { title: "E75 Northern Emirates Highway", desc: "HDD Installation of 4W/250mm HDPE Utility Lines", length: "1,480 LM", client: "MoPW", location: "Ras Al Khaimah", category: "Highway Crossing" },
  { title: "Dubai-Al Ain Expressway Crossing", desc: "HDD Installation of 500mm CS Pipeline", length: "1,260 LM", client: "ADNOC", location: "Al Ain", category: "Highway Crossing" },
  { title: "Khor Fakkan Bypass Crossing", desc: "HDD Installation of 6W/200mm HDPE Gas Lines", length: "670 LM", client: "SEWA", location: "Khor Fakkan, Sharjah", category: "Highway Crossing" }
];

const galleryData = [
  { src: "/inframax/assets/images/project-grid-images (1).jpeg", alt: "Inframax project showcase 1" },
  { src: "/inframax/assets/images/project-grid-images (2).jpeg", alt: "Inframax project showcase 2" },
  { src: "/inframax/assets/images/project-grid-images (3).jpeg", alt: "Inframax project showcase 3" },
  { src: "/inframax/assets/images/project-grid-images (4).jpeg", alt: "Inframax project showcase 4" },
  { src: "/inframax/assets/images/project-grid-images (5).jpeg", alt: "Inframax project showcase 5" },
  { src: "/inframax/assets/images/project-grid-images (6).jpeg", alt: "Inframax project showcase 6" },
  { src: "/inframax/assets/images/project-grid-images (7).jpeg", alt: "Inframax project showcase 7" },
  { src: "/inframax/assets/images/project-grid-images (8).jpeg", alt: "Inframax project showcase 8" },
  { src: "/inframax/assets/images/project-grid-images (9).jpeg", alt: "Inframax project showcase 9" },
  { src: "/inframax/assets/images/project-grid-images (10).jpeg", alt: "Inframax project showcase 10" },
  { src: "/inframax/assets/images/project-grid-images (11).jpeg", alt: "Inframax project showcase 11" },
  { src: "/inframax/assets/images/project-grid-images (12).jpeg", alt: "Inframax project showcase 12" },
  { src: "/inframax/assets/images/project-grid-images (13).jpeg", alt: "Inframax project showcase 13" },
  { src: "/inframax/assets/images/project-grid-images (14).jpeg", alt: "Inframax project showcase 14" },
  { src: "/inframax/assets/images/project-grid-images (15).jpeg", alt: "Inframax project showcase 15" }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on the active tab
  const currentCategory = projectTabs[activeTab];
  const categoryProjects = projectsData.filter(p => p.category === currentCategory);

  // Display only 6 cards by default, or all if "Show More" is clicked
  const displayedProjects = showAll ? categoryProjects : categoryProjects.slice(0, 6);

  const handleTabSwitch = (idx: number) => {
    setActiveTab(idx);
    setShowAll(false); // Reset to showing just the first 6 when switching tabs
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full relative overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{"backgroundImage": "url('/inframax/assets/images/home-hero-slide-01.jpg')"}}></div>
   <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="pb-[50px] min-h-[550px] md:pb-[90px] md:min-h-[500px] flex items-end">
            <div className="will-change-transform w-full">
              <h1 className="heading-1 !mb-[10px] max-w-[1200px] text-white font-semibold">
                Precision Trenchless Infrastructure Solutions
              </h1>
              <p className="body-text text-white/90 max-w-[900px] font-semibold mt-4">
                Over 89 Infrastructure Projects Successfully Delivered Across the UAE Specialists in Horizontal Directional Drilling (HDD) &amp; Micro-Tunneling
              </p>
              <p className="caption-text text-white/80 mt-2 tracking-wide font-medium">
                Road Crossings • Highway Crossings • Marine Crossings • Railway Crossings • Utility Infrastructure
              </p>
              <a className="btn-primary mt-[30px]" href="#quote">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO & STATS SECTION */}
      <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container mx-auto px-4">
          <p className="caption-text text-gray-600 max-w-6xl mx-auto text-left leading-relaxed">
            Inframax has successfully delivered trenchless pipeline installations across the UAE using Horizontal Directional Drilling (HDD) and micro-tunneling technologies. Our portfolio includes road crossings, water channel crossings, gas pipeline installations, and complex infrastructure projects executed for government authorities and private sector clients.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16 max-w-6xl mx-auto">
            {statsData.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center group ${idx > 3 ? "mt-4" : ""}`}>
                <AnimatedStatCounter valueStr={stat.value} />
                <div className="text-xs font-bold text-light-blue uppercase tracking-wider mt-1">{stat.unit}</div>
                <div className="text-xs font-black text-black uppercase tracking-wider mt-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID SECTION */}
      <section className="w-full bg-[#004b87] pt-16 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden" style={{ backgroundImage: "url('/inframax/assets/images/home-featured-works-background.jpg')" }}>
        

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="heading-2 text-white text-center uppercase tracking-wide font-bold mb-12">
            Our Projects
          </h2>

          {/* Navigation Tabs */}
          <div className="w-full mb-8 overflow-x-auto whitespace-nowrap scrollbar-none flex justify-start md:justify-center items-center gap-3 lg:gap-4 pb-2">
            {projectTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabSwitch(idx)}
                className={`px-5 py-3 mt-[2px] rounded-full text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 font-bold outline-2 ${activeTab === idx ? "bg-white text-[#004b87] outline-white shadow-lg shadow-black/10 scale-105" : "bg-transparent text-white outline-white/30 hover:bg-white/10 hover:outline-white/60"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch transition-all duration-500">
            {displayedProjects.map((project, idx) => (
              <div key={idx} className="bg-white p-8 flex flex-col justify-between shadow-md relative overflow-hidden rounded-none">
                <div>
                  <h3 className="body-text !font-bold text-[#004b87] leading-snug mb-2 pr-2">{project.title}</h3>
                  <p className="caption-text text-gray-600 mb-6 font-medium">{project.desc}</p>
                </div>
                <div className="space-y-1.5 border-t border-gray-100 pt-4 mt-auto text-sm">
                  <div className="text-black font-medium"><span className="font-bold text-black">Length:</span> {project.length}</div>
                  <div className="text-black font-medium"><span className="font-bold text-black">Client:</span> {project.client}</div>
                  {project.location && <div className="text-black font-medium"><span className="font-bold text-black">Location:</span> {project.location}</div>}
                  {project.contractor && <div className="text-black font-medium"><span className="font-bold text-black">Contractor:</span> {project.contractor}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {categoryProjects.length > 6 && (
            <div className="w-full flex justify-center items-center mt-12">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="bg-[#0055a5] hover:bg-[#00a8e1] text-white px-8 py-2.5 text-xs font-bold uppercase transition-all duration-300 tracking-wider shadow-md select-none cursor-pointer rounded-none"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="heading-2 text-[#004b87] text-center font-bold tracking-wide mb-12">
            Our Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.map((img, idx) => (
              <div key={idx} className="w-full aspect-square bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img alt={img.alt} className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" src={img.src} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
