import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Below-the-fold and non-critical global components lazy loaded
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const Footer = lazy(() => import('./components/Footer'));
const StickyWhatsApp = lazy(() => import('./components/StickyWhatsApp'));

// Code-split secondary pages
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Industries = lazy(() => import('./pages/Industries'));
const Process = lazy(() => import('./pages/Process'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Lightweight route fallback to prevent layout shifts while lazy chunks load
 */
function RouteFallback() {
  return (
    <div className="min-h-[65vh] w-full flex items-center justify-center bg-[#050505]">
      <div
        className="w-9 h-9 rounded-full border-2 border-[#0066FF] border-t-transparent animate-spin"
        role="status"
        aria-label="Loading page content"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Resets scroll position on navigation */}
      <ScrollToTop />

      {/* Desktop interactive custom trailing cursor (lazy deferred) */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      <div className="min-h-screen flex flex-col bg-[#050505] text-[#9CA3AF] overflow-x-hidden selection:bg-[#0066FF]/30 selection:text-white relative">
        {/* Sticky blurred glass navbar */}
        <Navbar />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/process" element={<Process />} />
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Insights & Blog Routes */}
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/blog" element={<Insights />} />
              <Route path="/blog/:slug" element={<InsightDetail />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Sticky bottom-right WhatsApp consultation link (lazy deferred) */}
        <Suspense fallback={null}>
          <StickyWhatsApp />
        </Suspense>

        {/* Global agency footer with fixed min-height placeholder for CLS = 0 */}
        <Suspense fallback={<div className="min-h-[420px] w-full bg-[#030406]" />}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
