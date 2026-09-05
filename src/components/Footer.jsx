import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const priorityServices = [
    { name: 'Custom Web Development', path: '/services/custom-web-development' },
    { name: 'E-Commerce Development', path: '/services/ecommerce-development' },
    { name: 'React.js Development', path: '/services/react-js-development' },
    { name: 'Next.js Development', path: '/services/next-js-development' },
    { name: 'WordPress Development', path: '/services/wordpress-development' },
    { name: 'SEO Services in Islamabad', path: '/services/seo' },
    { name: 'Web Application Development', path: '/services/web-application-development' },
    { name: 'UI/UX Design Services', path: '/services/ui-ux-design' }
  ];

  const industryLinks = [
    { name: 'Real Estate & Property', path: '/industries' },
    { name: 'Healthcare & Medical', path: '/industries' },
    { name: 'Education & EdTech', path: '/industries' },
    { name: 'E-Commerce & Retail', path: '/industries' },
    { name: 'Legal Practices', path: '/industries' },
    { name: 'Hospitality & Dining', path: '/industries' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About VELIX', path: '/about' },
    { name: 'Services Overview', path: '/services' },
    { name: 'Projects / Portfolio', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    { name: 'Our Process', path: '/process' },
    { name: 'Pricing & Scope', path: '/pricing' },
    { name: 'Insights / Blog', path: '/insights' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="w-full bg-[#030406] border-t border-[#0066FF]/15 pt-16 pb-12 relative overflow-hidden text-sm">
      {/* Glow ambient circle in footer background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#0066FF]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <BrandLogo variant="horizontal" size="lg" />
            </div>

            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-sm mb-6 leading-relaxed">
              VELIX is a web development and digital growth agency in Gulberg Greens, Islamabad, helping businesses build custom websites, ecommerce stores, React and Next.js applications, WordPress sites, software and search-ready digital experiences for Pakistan and international markets.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <a
                href="https://wa.me/923254229971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00A8FF] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A8FF]" />
                <span>WhatsApp: +92 325 4229971</span>
              </a>

              <a
                href="mailto:velixwebstudio@gmail.com"
                className="flex items-center gap-2 hover:text-[#00A8FF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A8FF]" />
                <span>Email: velixwebstudio@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#00A8FF]" />
                <span>Gulberg Greens, Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Col 2: Priority Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
              Important Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF]">
              {priorityServices.map((svc) => (
                <li key={svc.name}>
                  <Link
                    to={svc.path}
                    className="hover:text-white transition-colors block"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF]">
              {industryLinks.map((ind) => (
                <li key={ind.name}>
                  <Link
                    to={ind.path}
                    className="hover:text-white transition-colors block"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-3 text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
              Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9CA3AF]">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF] mb-6">
              {quickLinks.slice(0, 7).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white text-xs font-semibold shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:scale-105 transition-all"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar: Copyright & SEO Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 VELIX. All Rights Reserved.</p>

          <div className="text-center sm:text-right text-gray-400 font-medium space-y-0.5">
            <p>Powered by Velix</p>
            <p>Founder : <span className="text-white font-semibold">Ihtisham Jabar</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}
