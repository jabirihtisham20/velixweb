import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  Activity,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingCart,
  Car,
  Compass,
  UtensilsCrossed,
  Scale,
  ExternalLink
} from 'lucide-react';

import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { runOnIdle, cancelIdle } from '../utils/scheduler';

// Below-the-fold and canvas components lazy-loaded
const ThreeHeroBackground = lazy(() => import('../components/ThreeHeroBackground'));
const ThreeCtaBackground = lazy(() => import('../components/ThreeCtaBackground'));
const TechMarquee = lazy(() => import('../components/TechMarquee'));
const FAQAccordion = lazy(() => import('../components/FAQAccordion'));

export default function Home() {
  const heroRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroCtasRef = useRef(null);

  useEffect(() => {
    // Skip animations if user requested reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ctx = null;
    let isCancelled = false;

    // Defer GSAP import and execution until idle to keep main thread completely unblocked during LCP
    const idleId = runOnIdle(async () => {
      if (isCancelled || !heroRef.current) return;
      const { default: gsap } = await import('gsap');
      if (isCancelled || !heroRef.current) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          heroBadgeRef.current,
          { opacity: 0.7, y: -15 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          heroTitleRef.current,
          { opacity: 0.8, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.3'
        )
        .fromTo(
          heroTextRef.current,
          { opacity: 0.8, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          heroCtasRef.current,
          { opacity: 0.8, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
      }, heroRef);
    }, 600);

    return () => {
      isCancelled = true;
      cancelIdle(idleId);
      if (ctx) ctx.revert();
    };
  }, []);

  const homeFaqs = [
    {
      question: 'How much does a website cost in Islamabad?',
      answer: 'A professional website in Islamabad can range from a focused WordPress business site to a fully custom web application. At VELIX, WordPress business websites start from PKR 75,000, custom business websites from PKR 150,000, ecommerce projects from PKR 180,000 and React/Next.js projects from PKR 200,000. The final cost depends on design, pages, features, integrations and content requirements.'
    },
    {
      question: 'Does VELIX work with clients outside Pakistan?',
      answer: 'Yes. VELIX is based in Islamabad and serves businesses in Pakistan as well as the UK, USA, UAE, Canada, Australia, Europe and other international markets. Projects can be managed remotely through structured meetings, shared documentation and milestone-based communication.'
    },
    {
      question: 'Can you build both WordPress and custom React or Next.js websites?',
      answer: 'Yes. We use WordPress when flexible content management and fast business-site delivery are the right fit, and React.js or Next.js when a project needs a more custom interface, application logic, performance model or scalable product architecture.'
    },
    {
      question: 'Do your websites include SEO?',
      answer: 'Every build includes SEO-aware technical foundations such as semantic structure, mobile responsiveness, crawlable links and metadata planning. Full keyword research, content strategy, ongoing optimization, link acquisition and reporting are available through our SEO services.'
    },
    {
      question: 'How quickly will VELIX respond to a project enquiry?',
      answer: 'We typically respond within 24 hours. After the first conversation, we may ask for requirements, examples, integrations or existing access so we can recommend the right scope and next step.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes. We offer website maintenance, performance optimization, hosting and cloud support, SEO and ongoing product development so your website can continue to improve after launch.'
    }
  ];

  // Schema for Home Page
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://velix.com/#organization',
        'name': 'VELIX',
        'url': 'https://velix.com',
        'logo': 'https://velix.com/assets/velix-logo-stacked.png',
        'description': 'Web development and digital solutions agency in Gulberg Greens, Islamabad, Pakistan.',
        'telephone': '+923254229971',
        'email': 'velixwebstudio@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Gulberg Greens',
          'addressRegion': 'Islamabad',
          'addressCountry': 'Pakistan'
        },
        'areaServed': ['Islamabad', 'Rawalpindi', 'Pakistan', 'United Kingdom', 'United States', 'United Arab Emirates', 'Canada', 'Australia', 'Europe']
      },
      {
        '@type': 'WebSite',
        '@id': 'https://velix.com/#website',
        'url': 'https://velix.com',
        'name': 'VELIX',
        'publisher': { '@id': 'https://velix.com/#organization' }
      }
    ]
  };

  const industries = [
    { name: 'Healthcare', icon: Activity, desc: 'Patient booking portals, doctor directories, and clinical trust flagships.' },
    { name: 'Education', icon: GraduationCap, desc: 'Interactive admissions portals, course finders, and student hubs.' },
    { name: 'Finance', icon: Landmark, desc: 'Corporate wealth advisory sites, loan calculators, and high-security portals.' },
    { name: 'Real Estate', icon: Building2, desc: 'Gulberg Islamabad & Hazara Enclave property showcases and transfer guides.' },
    { name: 'E-Commerce', icon: ShoppingCart, desc: 'High-converting Shopify and WooCommerce stores with automated logistics.' },
    { name: 'Automotive', icon: Car, desc: 'Vehicle inventory showrooms, test drive funnels, and fleet portals.' },
    { name: 'Travel', icon: Compass, desc: 'Destination itinerary experiences, package inquiry funnels, and tour booking.' },
    { name: 'Hospitality', icon: UtensilsCrossed, desc: 'Direct commission-free table reservations and interactive mobile menus.' },
    { name: 'Legal', icon: Scale, desc: 'Corporate law firm flagships, practice-area guides, and attorney profiles.' }
  ];

  const whyChooseUs = [
    { title: 'Performance First', desc: 'We plan for speed, responsiveness and Core Web Vitals from the beginning.' },
    { title: 'SEO-Aware Development', desc: 'Crawlability, metadata, semantic structure, internal linking and technical foundations are considered during the build.' },
    { title: 'Custom Development', desc: 'Your business does not have to fit a generic template or plugin stack.' },
    { title: 'Transparent Communication', desc: 'Milestones, requirements, dependencies and decisions are explained in practical language.' },
    { title: 'Scalable Architecture', desc: 'We build with future features, content growth and integrations in mind.' },
    { title: 'Quality Assurance', desc: 'Responsive testing, browser checks, forms, key flows and launch readiness are part of delivery.' },
    { title: 'Long-Term Support', desc: 'Maintenance, hosting, cloud, SEO and product improvements can continue after launch.' }
  ];

  return (
    <div className="bg-[#050505] text-[#9CA3AF] relative overflow-hidden">
      <SEO
        title="Web Development Company in Islamabad | VELIX"
        description="VELIX is a web development company in Islamabad building custom websites, React and Next.js applications, ecommerce stores, WordPress sites and SEO-ready digital experiences for businesses worldwide."
        canonical="https://velix.com"
        schema={homeSchema}
      />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="absolute inset-0 pointer-events-none" aria-hidden="true" />}>
          <ThreeHeroBackground />
        </Suspense>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div ref={heroBadgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(0,102,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WEB DEVELOPMENT COMPANY IN ISLAMABAD</span>
          </div>

          <h1 ref={heroTitleRef} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 font-heading">
            Design. Develop.{' '}
            <span className="gradient-text-blue">Dominate</span>
          </h1>

          <div ref={heroTextRef} className="space-y-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            <p>
              VELIX is a premier web development agency in Islamabad crafting high-performance websites, e-commerce platforms, and custom React or Next.js products. Based in Gulberg Greens, we deliver strategy, design, development, SEO, and ongoing support to help businesses scale across Pakistan and global markets.
            </p>
          </div>

          <div ref={heroCtasRef} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_45px_rgba(0,168,255,0.7)] hover:scale-105 transition-all duration-300"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#07090D] border border-[#0066FF]/30 hover:border-[#00A8FF] text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP & TECHNOLOGY */}
      <section className="py-14 border-y border-[#0066FF]/15 bg-[#07090D]/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-sm font-mono font-bold tracking-widest text-[#00A8FF] uppercase mb-3">
            MODERN TECHNOLOGY. PRACTICAL BUSINESS THINKING.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our team works across React.js, Next.js, Node.js, TypeScript, Tailwind CSS, Laravel, WordPress, Shopify, PostgreSQL, MySQL, MongoDB, AWS and Vercel. We choose technology based on your goals, content workflow, integrations, budget and future growth — not because one framework is fashionable.
          </p>
        </div>
        <Suspense fallback={<div className="w-full h-[96px] bg-[#07090D]/80 border-y border-[#0066FF]/15" />}>
          <TechMarquee />
        </Suspense>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
              <span>ABOUT VELIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              A Web Development Partner for Businesses That Want to Move Forward
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              <p>
                Going digital is no longer about having a page online. Customers compare, research and decide before they ever contact a business. VELIX was created to help companies move beyond old, limited ways of reaching customers and build a stronger presence in the global digital economy. We make modern technology more accessible, practical and useful for businesses that are ready to grow.
              </p>
              <p>
                VELIX is a new agency built around a team with 10 years of combined experience. Our 15 specialists include developers, UI/UX designers, project managers, SEO specialists and QA engineers. That mix helps us think beyond code: how a page communicates, how a customer moves through it, how search engines understand it, and how the platform can evolve after launch.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A8FF] hover:underline"
            >
              <span>Learn more about our team and values</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-[#07090D] border border-[#0066FF]/30 shadow-[0_0_50px_rgba(0,102,255,0.15)] space-y-6">
              <div className="border-b border-white/10 pb-4">
                <div className="text-3xl font-extrabold text-white font-heading">15</div>
                <div className="text-xs text-gray-400">Multidisciplinary Specialists in Islamabad</div>
              </div>
              <div className="border-b border-white/10 pb-4">
                <div className="text-3xl font-extrabold text-[#00A8FF] font-heading">10 Years</div>
                <div className="text-xs text-gray-400">Combined Industry Engineering Experience</div>
              </div>
              <div className="border-b border-white/10 pb-4">
                <div className="text-3xl font-extrabold text-white font-heading">Gulberg Greens</div>
                <div className="text-xs text-gray-400">Headquarters in Islamabad, Pakistan</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#00A8FF] font-heading">Global Reach</div>
                <div className="text-xs text-gray-400">Pakistan, UK, USA, UAE, Canada, Australia & Europe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <span>OUR CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Web Development Services Built Around Real Business Goals
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Every project starts with the problem you need to solve. Some businesses need a fast, professional website that builds trust. Others need an ecommerce system, web application, CMS, mobile app, custom software or long-term SEO growth. VELIX brings those capabilities together so you can build with fewer handoffs and a clearer strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.slice(0, 9).map((svc) => (
            <div
              key={svc.slug}
              className="p-8 rounded-3xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00A8FF] transition-colors font-heading">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {svc.shortDesc}
                </p>
              </div>

              <Link
                to={`/services/${svc.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A8FF] hover:underline"
              >
                <span>Explore {svc.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07090D] border border-[#0066FF]/40 text-white hover:border-[#00A8FF] text-sm font-semibold transition-all"
          >
            <span>View All 19 Dedicated Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY VELIX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>THE VELIX ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Why Businesses Choose VELIX
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            A successful digital project is not just a design handoff or a code delivery. It is a business asset. Our approach is structured around clarity, performance and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#00A8FF] flex items-center justify-center text-xs font-mono font-bold mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO / SELECTED WORK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Our portfolio reflects a mix of WordPress and modern JavaScript development. Each project is published with verified scope and real-world commercial intent.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {projectsData.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-[#07090D] border border-[#0066FF]/25 hover:border-[#00A8FF]/50 transition-all flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className="lg:w-1/2 w-full aspect-video rounded-2xl overflow-hidden bg-[#061A35]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#00A8FF] text-xs font-semibold mb-3">
                  {project.industry} • {project.platform}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {project.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A8FF] hover:underline"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07090D] border border-[#0066FF]/40 text-white hover:border-[#00A8FF] text-sm font-semibold transition-all"
          >
            <span>Explore All Projects & Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>DELIVERY METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            A Clear Process From Idea to Launch
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            We keep projects structured so clients always know what is happening and why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { num: '01', name: 'Discovery', desc: 'Understand your business, audience, goals, current challenges and success criteria.' },
            { num: '02', name: 'Strategy', desc: 'Define scope, content structure, technology, integrations, timeline and measurement plan.' },
            { num: '03', name: 'UI/UX', desc: 'Map journeys and design interfaces that make important actions obvious.' },
            { num: '04', name: 'Development', desc: 'Build the front end, back end, CMS, ecommerce or integrations with maintainable code.' },
            { num: '05', name: 'Testing', desc: 'Review functionality, responsiveness, performance, forms, content and key user journeys.' },
            { num: '06', name: 'Launch', desc: 'Deploy, configure analytics and search essentials, validate the live experience and hand over access.' },
            { num: '07', name: 'Support', desc: 'Maintain, optimize and evolve the product as your business grows.' }
          ].map((s) => (
            <div key={s.num} className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20">
              <div className="text-xl font-bold text-[#00A8FF] font-mono mb-2">{s.num}</div>
              <h3 className="text-base font-bold text-white mb-2">{s.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A8FF] hover:underline"
          >
            <span>Read full delivery process & scope policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>SECTOR EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Digital Solutions for Businesses Across Industries
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            VELIX supports businesses in healthcare, education, finance, real estate, ecommerce, automotive, travel, hospitality and legal services. Each sector has different customer expectations, workflows and trust requirements, so we adapt the user experience, content structure and technology to the context rather than applying the same formula everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#061A35] text-[#00A8FF] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A8FF] hover:underline"
          >
            <span>Explore full industry breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>TRANSPARENT PRICING PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Clear Starting Points, Custom Scope
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Website pricing changes with pages, integrations, design complexity, content, ecommerce functionality and custom development. VELIX uses transparent starting ranges so businesses can plan a realistic budget before a detailed proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { name: 'WordPress Websites', price: 'from PKR 75,000' },
            { name: 'Custom Business Websites', price: 'from PKR 150,000' },
            { name: 'Ecommerce Websites', price: 'from PKR 180,000' },
            { name: 'React / Next.js Projects', price: 'from PKR 200,000' },
            { name: 'SEO Retainers', price: 'from PKR 45,000 / mo' }
          ].map((tier, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#07090D] border border-[#0066FF]/30 text-center flex flex-col justify-between">
              <h3 className="text-sm font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-base font-extrabold text-[#00A8FF] font-heading">{tier.price}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-gray-500 italic mb-8 max-w-2xl mx-auto">
          These are planning ranges, not fixed quotes. Final pricing is confirmed after discovery and a written scope.
        </p>

        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(0,102,255,0.4)]"
          >
            <span>View Complete Pricing Tiers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS & REVIEWS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>CLIENT REVIEWS & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            Feedback & Working Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#07090D]/80 border border-[#0066FF]/20 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-white font-semibold block">{t.role}</span>
                  <span className="text-gray-500">{t.industry}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#0066FF]/15 text-[#00A8FF] text-[10px] font-mono">
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <Suspense fallback={<div className="w-full min-h-[360px]" />}>
          <FAQAccordion
            title="Frequently Asked Questions"
            subtitle="QUESTIONS FROM PROSPECTIVE CLIENTS"
            items={homeFaqs}
          />
        </Suspense>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_60px_rgba(0,102,255,0.25)]">
          <Suspense fallback={<div className="absolute inset-0 pointer-events-none" aria-hidden="true" />}>
            <ThreeCtaBackground />
          </Suspense>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-heading">
              Ready to Build Something That Moves Your Business Forward?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Book a free consultation with VELIX. Tell us what you are building, what is getting in the way, and what success should look like. We typically respond within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold text-base shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:scale-105 transition-all"
              >
                <span>Book a Free Consultation</span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#07090D] border border-[#0066FF]/40 text-white font-semibold text-base hover:bg-white/5 transition-all"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
