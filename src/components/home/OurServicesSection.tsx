import React from "react";
import Link from "next/link";

const MACHINERY_DATA = [
  {
    title: "DWTX 360 Ton HDD Rig - 1 No.",
    capacity: "360 Ton HDD Rig Capacity",
    image: "/inframax/assets/images/home-machinery-rig-full.webp",
    href: "/plant-and-equipment",
  },
  {
    title: "DWTX 240 Ton HDD Rig - 1 No.",
    capacity: "240 Ton HDD Rig Capacity",
    image: "/inframax/assets/images/home-machinery-rig-full.webp",
    href: "/plant-and-equipment",
  },
  {
    title: "DWTX 160 Ton HDD Rig - 2 Nos.",
    capacity: "160 Ton HDD Rig Capacity",
    image: "/inframax/assets/images/home-machinery-rig-full.webp",
    href: "/plant-and-equipment",
  },
  {
    title: "Vermeer 130x150 HDD Rig - 2 Nos.",
    capacity: "60,000 kg Pullback Capacity",
    image: "/inframax/assets/images/home-machinery-vermeer-rig.webp",
    href: "/plant-and-equipment",
  },
  {
    title: "Vermeer 36x50 HDD Rig - 2 Nos.",
    capacity: "180 kN Pullback Capacity",
    image: "/inframax/assets/images/home-machinery-vermeer-rig.webp",
    href: "/plant-and-equipment",
  },
];

export default function OurServicesSection() {
  return (
    <section className="w-full bg-[#f8fafc] pt-16 pb-16 lg:pt-20 lg:pb-20">
      <div className="container mx-auto">
        <h2 className="heading-2 text-dark-blue text-center uppercase mb-8 lg:mb-16">
          Machinery Power Section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {MACHINERY_DATA.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative bg-white border border-gray-100 p-6 flex flex-col justify-between rounded-none shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md cursor-pointer block"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-dark-blue-bg transition-all duration-300 ease-out group-hover:w-full">
              </div>
              <div className="w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
                <img alt={item.title} className="max-h-full max-w-full object-contain filter grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" src={item.image} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-auto">
                <h3 className="caption-text !font-bold text-[#222222] leading-snug group-hover:text-dark-blue transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="caption-text text-[#888888]">
                  {item.capacity}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}