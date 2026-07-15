"use client";
import React, { useState, useEffect } from "react";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Exact same form fields as src/app/contact/page.tsx for 1:1 backend compatibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "HDD & Trenchless Quote Request",
    message: "",
    policy_agreement: true,
  });

  // Global event listener: open modal whenever any "Get a Quote" / "Free Quote" element is clicked
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const clickable = target.closest("a, button, [data-quote-btn]") as HTMLElement | null;
      if (!clickable) return;

      const text = (clickable.textContent || "").trim().toLowerCase();
      const href = clickable.getAttribute("href") || "";

      // Check for quote trigger text or link attributes
      const isQuoteText =
        text === "get a quote" ||
        text === "get a free quote" ||
        text === "request a quote" ||
        text === "get quote";

      const isQuoteHref =
        href === "/quote/" ||
        href === "/quote" ||
        href === "#quote" ||
        href === "/#quote";

      const isQuoteDataAttr = clickable.hasAttribute("data-quote-btn");

      if (isQuoteText || isQuoteHref || isQuoteDataAttr) {
        e.preventDefault();
        e.stopPropagation();
        setIsSuccess(false);
        setIsOpen(true);
      }
    };

    const handleCustomOpen = () => {
      setIsSuccess(false);
      setIsOpen(true);
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    window.addEventListener("openQuoteModal", handleCustomOpen);

    // Also open if URL hash is #quote on load
    if (typeof window !== "undefined" && window.location.hash === "#quote") {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
      window.removeEventListener("openQuoteModal", handleCustomOpen);
    };
  }, []);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare exactly the same form data payload that contact/page.tsx sends
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
      // Complete submission state
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "HDD & Trenchless Quote Request",
          message: "",
          policy_agreement: true,
        });
      }, 800);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 text-white">
         
          <button
            type="button"
            onClick={closeModal}
            className="text-white/80 hover:text-white transition-colors p-1  bg-[#004b87]"
            aria-label="Close quote modal"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="py-12 px-4 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="text-2xl font-bold text-dark-blue mb-3">
                Quote Request Submitted
              </h4>
              <p className="caption-text text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                Thank you! Your inquiry has been routed directly to our HDD engineering and estimating team at Info@inframaxuae.com. We will review your specifications and contact you shortly.
              </p>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-primary"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Heading 1:1 matching contact page */}
              <h2 className="heading-2 text-black text-center font-bold tracking-tight mb-8">
                Get a Free Quote
              </h2>

              {/* Form connected to PHP mail handler */}
              <form action="contact-form-handler.php" method="POST" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Dual Column Row Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input Field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="popup-name" className="text-xs font-semibold text-gray-700 tracking-wide">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="popup-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 shadow-inner"
                    />
                  </div>

                  {/* Email Input Field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="popup-email" className="text-xs font-semibold text-gray-700 tracking-wide">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject Input Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="popup-subject" className="text-xs font-semibold text-gray-700 tracking-wide">
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="popup-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Quote Request"
                    className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 shadow-inner"
                  />
                </div>

                {/* Message Area Input Block */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="popup-message" className="text-xs font-semibold text-gray-700 tracking-wide">
                    Message:
                  </label>
                  <textarea
                    id="popup-message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please detail your project requirements, location, crossing specifications, and estimated timeline..."
                    className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-sm text-black focus:outline-none focus:border-light-blue transition-colors duration-200 resize-y shadow-inner"
                  />
                </div>

                {/* Checkbox Policy Agreement Layer */}
                <div className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="popup-policy"
                    name="policy_agreement"
                    required
                    checked={formData.policy_agreement}
                    onChange={handleChange}
                    className="w-4 h-4 text-light-blue border-gray-200 rounded-none focus:ring-0 focus:outline-none cursor-pointer"
                  />
                  <label htmlFor="popup-policy" className="text-xs text-gray-600 font-medium select-none cursor-pointer">
                    I agree to the <a href="#" className="text-light-blue hover:underline transition-all">privacy policy</a>.
                  </label>
                </div>

                {/* Submission Button Element */}
                <div className="pt-4 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary tracking-wide cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
