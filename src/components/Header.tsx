"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const pathname = usePathname(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? "bg-light-blue/90 backdrop-blur-[10px] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-white/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="site-header flex items-center justify-between w-full py-4">
          <div className="logo max-w-[180px] shrink-0">
            <Link href="/">
              <Image
                src="/inframax/assets/images/global-logo.webp"
                alt="INFRAMAX GENERAL CONTRACTING LLC"
                width={180}
                height={60}
                className="h-auto w-full block"
                priority
              />
            </Link>
          </div>
          <nav className="main-nav hidden md:block">
            <ul className="flex space-x-6 items-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className={`relative group ${item.hasDropdown ? "has-dropdown" : ""}`}>
                  <Link
                    href={item.id}
                    className={`inline-flex items-center py-2 ${
                      pathname === item.id || (item.id !== "/" && pathname.startsWith(item.id)) ? "active" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <i className="fa-solid fa-chevron-down text-[10px] ml-1.5 transition-transform duration-200 group-hover:rotate-180 opacity-80"></i>
                    )}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[240px]">
                      <div className="bg-[#111827]/95 backdrop-blur-md border border-white/10 shadow-2xl">
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.id}
                            href={child.id}
                            className={`block px-5 py-3 text-base text-white/90 hover:text-white hover:bg-white/10 transition-colors ${
                              idx > 0 ? "border-t border-white/10" : ""
                            } border-t border-b border-white/20`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <button
            aria-label="Toggle Menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out border-b border-white/10 overflow-hidden bg-[#003769] ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={item.hasDropdown ? "has-dropdown" : ""}>
                <Link
                  href={item.id}
                  className={`flex items-center justify-between py-2 ${
                    pathname === item.id || (item.id !== "/" && pathname.startsWith(item.id)) ? "active" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <i className="fa-solid fa-chevron-down text-xs opacity-80"></i>
                  )}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 border-l-2 border-light-blue flex flex-col space-y-2 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.id}
                        className="block py-1 text-base text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
