import React from "react";

const crossingProjects = [
  {
    title: "2,700 LM Gas Pipeline Crossing",
    subtitle: "ADNOC (Sahil & Asab)",
    icon: "/inframax/assets/images/home-major-crossing-icon-01.webp",
    alt: "Gas Pipeline Crossing icon",
  },
  {
    title: "1,553 LM Highway Crossing",
    subtitle: "Abu Dhabi / Al Ain Road",
    icon: "/inframax/assets/images/home-major-crossing-icon-02.webp",
    alt: "Highway Crossing icon",
  },
  {
    title: "2,925 LM Road E311",
    subtitle: "Abu Dhabi",
    icon: "/inframax/assets/images/home-major-crossing-icon-03.webp",
    alt: "Road E311 icon",
  },
  {
    title: "1,373 LM Road Crossing",
    subtitle: "Abu Dhabi",
    icon: "/inframax/assets/images/home-major-crossing-icon-04.webp",
    alt: "Road Crossing icon",
  },
  {
    title: "Saadiyat & Ramhan Island",
    subtitle: "Water Crossings",
    icon: "/inframax/assets/images/home-major-crossing-icon-05.webp",
    alt: "Saadiyat & Ramhan Island icon",
  },
];

export default function FeaturedWorksSection() {
  return (
  <section className="w-full bg-dark-blue-bg pt-16 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('/inframax/assets/images/home-featured-works-background.webp')"}}>
   <div className="container mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
     <div className="w-full h-full flex items-center">
      <div className="w-full h-auto lg:h-full relative shadow-xl overflow-hidden rounded-sm">
       <img alt="Major pipeline and infrastructure construction crossing project site" className="w-full h-full object-cover" src="/inframax/assets/images/home-featured-works-banner.webp"/>
      </div>
     </div>
     <div className="w-full lg:pl-4">
      <h2 className="heading-2 mb-3 text-white uppercase">
       Major Crossing Projects
      </h2>
      <div className="flex flex-col">
       {crossingProjects.map((project, index) => (
        <div
         key={index}
         className="flex items-center space-x-6 py-4 px-5 -mx-5 border-b border-white/50  group transition-all duration-300 rounded-xl hover:bg-white/5  mt-2 hover:-translate-y-1 hover:shadow-xl hover:z-10 cursor-pointer"
        >
         <div className="w-14 h-14 bg-white flex items-center justify-center shrink-0 rounded-none shadow-md group-hover:scale-105 transition-transform duration-200">
          <img alt={project.alt} className="w-8 h-8 object-contain" src={project.icon}/>
         </div>
         <div className="flex flex-col space-y-1">
          <h3 className="body-text !font-semibold text-white tracking-wide leading-snug">
           {project.title}
          </h3>
          <p className="caption-text text-white/70">
           {project.subtitle}
          </p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
  );
}