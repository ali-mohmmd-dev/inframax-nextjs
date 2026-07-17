"use client";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = new FormData(e.currentTarget);

    try {
      let targetUrl = e.currentTarget.getAttribute("action") || "/contact-form-handler.php";
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        const match = path.match(/^\/([^\/]+)/);
        if (match && match[1].toLowerCase().includes("inframax")) {
          targetUrl = `/${match[1]}/contact-form-handler.php`;
        } else if (!targetUrl.startsWith("/") && !targetUrl.startsWith("http")) {
          targetUrl = `/${targetUrl}`;
        }
      }

      await fetch(targetUrl, {
        method: "POST",
        body: payload,
        headers: {
          "Accept": "application/json",
        },
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 800);
    }
  };

  return (
    <>
      {/* HEADER — injected by components.js */}

      {/* HERO BANNER SECTION */}
      <section className="w-full relative overflow-hidden bg-black flex items-center">
       <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{"backgroundImage": "url('/inframax/assets/images/contact-header-image.webp')"}}></div>
       <div className="hero-overlay"></div>
       <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="pt-[80px] pb-[130px] md:pb-[150px] min-h-[440px] md:min-h-[700px] flex items-center justify-center text-center">
         <div className="will-change-transform">
          <h1 className="heading-1 !mb-[10px] text-white font-bold tracking-tight">Contact Us</h1>
          <p className="body-text text-white/90 max-w-xl mx-auto font-medium">
           Let's Discuss your next project
          </p>
         </div>
        </div>
       </div>
      </section>

      {/* OVERLAPPING THREE-COLUMN CONTACT CARDS SECTION */}
      <section className="bg-[#f8fafc] pb-16">
       <div className="container mx-auto px-4  ">
        <div className="w-full bg-white -mt-[90px] relative z-30 md:-mt-[110px] shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-14">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          
          {/* Block Item 1: Address Info Details */}
          <div className="flex flex-col items-center pt-2 md:pt-0 md:px-4">
           <div className="w-12 h-12 flex items-center justify-center text-[#00a3e0] mb-3">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 384 512" aria-hidden="true">
             <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
           </div>
           <h3 className="text-base md:text-lg font-bold text-black mb-3">Address</h3>
           <div className="caption-text text-gray-600 space-y-1 font-medium leading-relaxed">
            <p>Ascorp Holdings,</p>
            <p>Industrial City, ICAD I – Abu Dhabi,</p>
            <p>United Arab Emirates</p>
           </div>
          </div>

          {/* Block Item 2: Telephony Dialing Directories */}
          <div className="flex flex-col items-center pt-6 md:pt-0 md:px-4">
           <div className="w-12 h-12 flex items-center justify-center text-[#00a3e0] mb-3">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512" aria-hidden="true">
             <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
           </div>
           <h3 className="text-base md:text-lg font-bold text-black mb-3">Call Us</h3>
           <div className="caption-text text-gray-600 space-y-1 font-medium leading-relaxed">
            <p>Land line: 02 513 2222</p>
            <p>Direct Line: 02 513 4594</p>
            <p>FAX: 02 551 1221</p>
           </div>
          </div>

          {/* Block Item 3: Digital Communication Inboxes */}
          <div className="flex flex-col items-center pt-6 md:pt-0 md:px-4">
           <div className="w-12 h-12 flex items-center justify-center text-[#00a3e0] mb-3">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512" aria-hidden="true">
             <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
           </div>
           <h3 className="text-base md:text-lg font-bold text-black mb-3">Email Us</h3>
           <div className="caption-text text-gray-600 space-y-1 font-medium leading-relaxed break-all">
            <p>info@inframaxuae.com</p>
            <p>mohamed.gaber@inframaxuae.com</p>
            <p>sumjith@inframaxuae.com</p>
           </div>
          </div>

         </div>
        </div>
       </div>
      </section>

      {/* MAP SECTION FRAMEWORK */}
      <section className="w-full bg-white py-4">
       <div className="max-w-6xl mx-auto px-4">
        <div className="w-full h-[350px] md:h-[450px] bg-gray-100 shadow-sm border border-gray-200 overflow-hidden relative">
         <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.8118029524024!2d54.4845532!3d24.3181823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e39626e27cb17%3A0x6b80145c85b46e33!2sNMDC%20Energy!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae" 
          className="absolute inset-0 w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
       </div>
      </section>

      {/* INTERACTIVE QUOTE SUBMISSION FORM */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-24">
       <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="heading-2 text-black text-center font-bold tracking-tight mb-12">
         Get a Free Quote
        </h2>

        {isSuccess ? (
          <div className="py-14 px-6 bg-[#f8fafc] border-t-[4px] border-[#004b87] text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-blue mb-3">
              Message Sent Successfully!
            </h3>
            <p className="caption-text text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
              Thank you for reaching out. Your quote request has been dispatched directly to Info@inframaxuae.com. Our engineering and estimating team will review your specifications and get in touch with you shortly.
            </p>
            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form action="contact-form-handler.php" method="POST" onSubmit={handleSubmit} className="space-y-6">
           
           {/* Dual Column Row Inputs */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Name Input Field */}
            <div className="flex flex-col space-y-2">
             <label htmlFor="form-name" className="text-xs font-semibold text-gray-700 tracking-wide">Name:</label>
             <input 
              type="text" 
              id="form-name" 
              name="name" 
              required
              className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 shadow-inner"
             />
            </div>

            {/* Email Input Field */}
            <div className="flex flex-col space-y-2">
             <label htmlFor="form-email" className="text-xs font-semibold text-gray-700 tracking-wide">Email:</label>
             <input 
              type="email" 
              id="form-email" 
              name="email" 
              required
              className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 shadow-inner"
             />
            </div>

           </div>

           {/* Subject Input Field */}
           <div className="flex flex-col space-y-2">
            <label htmlFor="form-subject" className="text-xs font-semibold text-gray-700 tracking-wide">Subject:</label>
            <input 
             type="text" 
             id="form-subject" 
             name="subject" 
             required
             className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 shadow-inner"
            />
           </div>

           {/* Message Area Input Block */}
           <div className="flex flex-col space-y-2">
            <label htmlFor="form-message" className="text-xs font-semibold text-gray-700 tracking-wide">Message:</label>
            <textarea 
             id="form-message" 
             name="message" 
             rows={6} 
             required
             className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 resize-y shadow-inner"
            ></textarea>
           </div>

           {/* Checkbox Policy Aggregation Layer */}
           <div className="flex items-center space-x-3 pt-2">
            <input 
             type="checkbox" 
             id="form-policy" 
             name="policy_agreement" 
             required
             className="w-4 h-4 text-light-blue border-gray-200 rounded-none focus:ring-0 focus:outline-none cursor-pointer"
            />
            <label htmlFor="form-policy" className="text-xs text-gray-600 font-medium select-none cursor-pointer">
             I agree to the <a href="#" className="text-light-blue hover:underline transition-all">privacy policy</a>.
            </label>
           </div>

           {/* Submission Button Element */}
           <div className="pt-4 flex justify-start">
            <button 
             type="submit" 
             disabled={isSubmitting}
             className="btn-primary tracking-wide disabled:opacity-50"
            >
             {isSubmitting ? "Sending..." : "Send Message"}
            </button>
           </div>

          </form>
        )}

       </div>
      </section>

      {/* FOOTER — injected by components.js */}
    </>
  );
}
