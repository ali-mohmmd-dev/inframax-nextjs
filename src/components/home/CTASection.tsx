import React from "react";

export default function CTASection() {
  return (
  <section className="w-full relative overflow-hidden bg-slate-900 bg-cover bg-center bg-no-repeat" style={{"backgroundImage":"linear-gradient(rgba(0, 50, 95, 0.75), rgba(0, 35, 70, 0.85)), url('/inframax/assets/images/services-trenchless-solutions-banner.webp')"}}>
   <div className="absolute inset-0 bg-[#002346]/30 mix-blend-multiply pointer-events-none">
   </div>
   <div className="container mx-auto px-4 pt-16 pb-16 lg:pt-20 lg:pb-20 relative z-10 flex flex-col items-center justify-center text-center">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
     <h2 className="heading-2 text-white uppercase text-center">
      Trenchless Solutions For Critical Infrastructure
     </h2>
     <p className="body-text !font-medium text-white/90 my-[10px_10px] md:my-[10px] max-w-2xl text-center">
      Partner with a contractor equipped for complex crossings.
     </p>
     <div className="pt-6 text-center">
      <a className="btn-primary tracking-wide uppercase cursor-pointer" href="#quote" data-quote-btn="true">
       Get a Quote
      </a>
     </div>
    </div>
   </div>
  </section>
  );
}