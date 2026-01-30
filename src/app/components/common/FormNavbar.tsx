"use client";
import React, { useEffect, useRef, useState }  from 'react';
import Link from 'next/link';
import { Check, ChevronDown, Headphones, Menu, X  } from 'lucide-react';

type ServiceItem = {
  href: string;
  title: string;
  desc?: string;
};
interface NavLink {
  href: string;
  label: string;
  isWarning?: boolean;
}
const FormNavbar: React.FC = () => {

    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
    const servicesRef = useRef<HTMLDivElement>(null);
  
  const navLinks:NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#tools', label: 'Tools' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];
  const services: ServiceItem[] = [
    { href: "/formSubmission", title: "Form Submission", },
    { href: "/", title : "home page",},
    { href: "#services", title : "Our services",},

  ];


    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
          setIsServicesOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    // When mobile menu closes, close mobile services too
    useEffect(() => {
      if (!isMobileOpen) setIsMobileServicesOpen(false);
    }, [isMobileOpen]);
  
    const closeAllMenus = () => {
      setIsServicesOpen(false);
      setIsMobileOpen(false);
      setIsMobileServicesOpen(false);
    };

  return (
    <>
      <div className="bg-yellow-50 border-b border-yellow-200 py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center text-yellow-800">
          <span className="mr-2">⚠️</span>
          <span className="font-medium">
            DISCLAIMER: Results may vary based on project complexity. All case studies represent actual client outcomes. Services subject to availability and terms of service.
          </span>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown (desktop) */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="block px-4 py-3 hover:bg-green-50 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-semibold text-gray-900">{s.title}</div>
                      {s.desc ? <div className="text-sm text-gray-600">{s.desc}</div> : null}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition ${link.isWarning
                    ? "text-yellow-700 hover:text-yellow-800 font-medium"
                    : "text-gray-700 hover:text-green-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact button */}
            <Link
              href="/formSubmission"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Contact Us
            </Link>
          </div>
          {/* <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
              >
                <Check className="w-4 h-4 mr-1 text-blue-600" />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default FormNavbar;