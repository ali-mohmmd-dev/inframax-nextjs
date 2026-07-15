import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
  hasDropdown?: boolean;
  children?: { id: string; label: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About Us" },
  { id: "/services", label: "Our Services" },
  { id: "/projects", label: "Our Projects" },
  { 
    id: "/plant-and-equipment", 
    label: "Plant & Equipment", 
    hasDropdown: true,
    children: [
      { id: "/paratrack-systems", label: "ParaTrack System" }
    ]
  },
  { id: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-dark-blue-bg pt-16 pb-8 text-white relative overflow-hidden bg-cover bg-left"
      style={{ backgroundImage: "url('/inframax/assets/images/home_footer_bg.jpg')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 lg:mb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
          <div className="w-full lg:w-[55%] flex flex-col space-y-6 shrink-0">
            <div className="flex flex-col space-y-2 items-start">
              <Image
                src="/inframax/assets/images/global-logo.png"
                alt="INFRAMAX GENERAL CONTRACTING LLC Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="caption-text text-white/80 max-w-xl">
              INFRAMAX Drilling is an ADNOC pre-qualified NDRC–HDD contractor
              specializing in HDD. We operate rigs up to 500-ton capacity,
              installing pipelines up to 48 inches using advanced trenchless
              technology. We deliver safe, precise, and zero-disruption solutions
              for oil &amp; gas, water, sewerage, electricity, and telecom
              projects.
            </p>
          </div>
          <div className="w-full lg:w-[45%] flex flex-col sm:flex-row gap-8 lg:gap-4">
            <div className="w-full sm:w-1/2 flex flex-col space-y-4">
              <ul className="flex flex-col space-y-3 caption-text !font-medium text-white/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className="relative group">
                    {item.hasDropdown ? (
                      <div className="flex flex-col">
                        <Link
                          href={item.id}
                          className="flex items-center space-x-1.5 cursor-pointer hover:text-white transition-colors"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs text-white/60">▼</span>
                        </Link>
                        {item.children && (
                          <div className="pl-3 mt-2 flex flex-col space-y-1.5 border-l-2 border-light-blue">
                            {item.children.map((child) => (
                              <Link
                                key={child.id}
                                href={child.id}
                                className="text-sm text-white/75 hover:text-white transition-colors py-0.5"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.id}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col space-y-3 caption-text !font-medium text-white/80 leading-relaxed">
              <p className="text-white font-semibold">Ascorp Holdings,</p>
              <p>Industrial City, ICAD I ,</p>
              <p>Abu Dhabi,</p>
              <p>United Arab Emirates</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-white/20 pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-6">
            <div className="flex flex-wrap items-center justify-start gap-[20px] caption-text !font-medium text-white/90">
              <div className="whitespace-nowrap">
                <span className="text-white/60 font-normal">Direct Line:</span>
                <span className="font-semibold ml-1">02 513 4594</span>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-white/60 font-normal">Land Line:</span>
                <span className="font-semibold ml-1">+971 2 513 4954</span>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-white/60 font-normal">FAX:</span>
                <span className="font-semibold ml-1">02 551 1221</span>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-white/60 font-normal">info@inframaxuae.ae</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 shrink-0">
              <span className="caption-text !font-bold uppercase text-white/90">
                Follow Us:
              </span>
              <div className="flex space-x-2">
                <a
                  href="#"
                  aria-label="LinkedIn profile"
                  className="w-8 h-8 bg-white flex items-center justify-center text-dark-blue-bg font-bold text-xs hover:bg-white/90 transition-colors rounded-none shadow-sm"
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label="X profile"
                  className="w-8 h-8 bg-white flex items-center justify-center text-dark-blue-bg font-black text-xs hover:bg-white/90 transition-colors rounded-none shadow-sm"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  aria-label="Facebook profile"
                  className="w-8 h-8 bg-white flex items-center justify-center text-dark-blue-bg font-extrabold text-sm hover:bg-white/90 transition-colors rounded-none shadow-sm"
                >
                  f
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
