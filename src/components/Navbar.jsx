import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  const featuredServices = [
    { name: 'Custom Web Development', path: '/services/custom-web-development', desc: 'Bespoke high-performance websites' },
    { name: 'React.js Development', path: '/services/react-js-development', desc: 'Fast, interactive web applications' },
    { name: 'Next.js Development', path: '/services/next-js-development', desc: 'Server-rendered, search-ready platforms' },
    { name: 'E-Commerce Development', path: '/services/ecommerce-development', desc: 'Shopify, WooCommerce & custom stores' },
    { name: 'WordPress Development', path: '/services/wordpress-development', desc: 'Custom themes & manageable CMS' },
    { name: 'SEO Services in Islamabad', path: '/services/seo', desc: 'Technical & on-page organic growth' },
    { name: 'Web Application Development', path: '/services/web-application-development', desc: 'Portals, SaaS & dashboards' },
    { name: 'UI/UX Design Services', path: '/services/ui-ux-design', desc: 'User-centric product design systems' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#0066FF]/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* VELIX Brand Logo */}
          <BrandLogo variant="horizontal" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#07090D]/70 border border-[#0066FF]/20 backdrop-blur-md">
            <Link
              to="/"
              className={`px-3 py-1 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
                location.pathname === '/'
                  ? 'text-white bg-[#0066FF]/25 text-[#00A8FF]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-1 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
                  location.pathname.startsWith('/services')
                    ? 'text-white bg-[#0066FF]/25 text-[#00A8FF]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#00A8FF]' : ''}`} />
              </button>

              {/* DROPDOWN MENU */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px]">
                  <div className="rounded-2xl p-4 bg-[#07090D]/95 backdrop-blur-2xl border border-[#0066FF]/30 shadow-[0_15px_50px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-2">
                    {featuredServices.map((svc) => (
                      <Link
                        key={svc.path}
                        to={svc.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-[#0066FF]/30 transition-all block group"
                      >
                        <div className="text-xs font-semibold text-white group-hover:text-[#00A8FF] transition-colors">
                          {svc.name}
                        </div>
                        <div className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                          {svc.desc}
                        </div>
                      </Link>
                    ))}

                    <div className="col-span-2 pt-2 mt-1 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                      <span className="text-gray-400">19 Dedicated Service Pages</span>
                      <Link
                        to="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[#00A8FF] font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white bg-[#0066FF]/25 text-[#00A8FF]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,168,255,0.45)] hover:scale-105 flex items-center gap-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center gap-3">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white text-xs font-semibold"
            >
              Consultation
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#07090D] border border-[#0066FF]/30 text-gray-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`xl:hidden fixed inset-x-0 top-full bg-[#050505]/98 backdrop-blur-2xl border-b border-[#0066FF]/25 shadow-2xl transition-all duration-300 overflow-y-auto ${
          mobileMenuOpen ? 'max-h-[85vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 overflow-hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2 text-sm">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-gray-200 hover:bg-white/5 font-medium"
          >
            Home
          </Link>

          {/* Collapsible Mobile Services */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-gray-200 hover:bg-white/5 font-medium"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#00A8FF]' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-[#0066FF]/30 ml-4 my-1">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold text-[#00A8FF] py-1"
                >
                  → All 19 Services Overview
                </Link>
                {featuredServices.map((svc) => (
                  <Link
                    key={svc.path}
                    to={svc.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-gray-300 hover:text-white py-1"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'text-[#00A8FF] bg-[#0066FF]/15 border border-[#0066FF]/30 font-semibold'
                    : 'text-gray-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 mt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.35)]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
