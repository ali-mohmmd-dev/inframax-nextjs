import React from "react";

export default function SpecializedInSection() {
  return (
  <section className="w-full bg-white pt-0 pb-16 lg:pb-20">
   <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
     <div className="w-full lg:w-1/2 flex flex-col space-y-8">
      <h2 className="heading-2 text-dark-blue uppercase max-w-md">
       Engineering &amp;
       <br/>
       Drilling Capability
      </h2>
      <ul className="flex flex-col space-y-4">
       <li className="flex items-center space-x-4 caption-text text-[#666666] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
        <div className="aspect-square h-[30px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[20px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round">
          </path>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue transition-colors font-medium duration-200">
         Horizontal Directional Drilling
        </span>
       </li>
       <li className="flex items-center space-x-4 caption-text text-[#666666] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
        <div className="aspect-square h-[30px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[20px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round">
          </path>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue transition-colors font-medium duration-200">
         Micro Tunneling Installation
        </span>
       </li>
       <li className="flex items-center space-x-4 caption-text text-[#666666] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
        <div className="aspect-square h-[30px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[20px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round">
          </path>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue transition-colors font-medium duration-200">
         Pipe Jacking Services &amp; Trenching
        </span>
       </li>
       <li className="flex items-center space-x-4 caption-text text-[#666666] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
        <div className="aspect-square h-[30px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[20px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round">
          </path>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue transition-colors font-medium duration-200">
         Customized Turnkey Solutions
        </span>
       </li>
       <li className="flex items-center space-x-4 caption-text text-[#666666] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group">
        <div className="aspect-square h-[30px] rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 group-hover:bg-light-blue transition-colors duration-200">
         <svg className="aspect-square h-[20px] text-light-blue group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round">
          </path>
         </svg>
        </div>
        <span className="group-hover:text-dark-blue transition-colors font-medium duration-200">
         Advanced Guidance &amp; Tracking Systems
        </span>
       </li>
      </ul>
     </div>
     <div className="w-full lg:w-1/2">
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shadow-sm">
       <img alt="Engineering and Drilling heavy industrial site machinery" className="w-full h-full object-cover" src="/inframax/assets/images/home-engineering-drilling-capability.jpeg"/>
      </div>
     </div>
    </div>
   </div>
  </section>
  );
}