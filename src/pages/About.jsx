import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Globe,
  Users
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import { valuesData, teamOverview } from '../data/teamData';
import BrandLogo from '../components/BrandLogo';

export default function About() {
  const aboutFaqs = [
    {
      question: 'Is VELIX a new company?',
      answer: 'Yes. VELIX is a new agency built around a multidisciplinary team with 10 years of combined experience. We present the company honestly while using the team’s real technical and project experience to guide delivery.'
    },
    {
      question: 'Where is VELIX located?',
      answer: 'VELIX is based in Gulberg Greens, Islamabad, Pakistan, and serves clients in Islamabad, Rawalpindi, across Pakistan and internationally.'
    },
    {
      question: 'What types of businesses does VELIX work with?',
      answer: 'We work with startups, small and growing businesses, ecommerce brands, real estate companies, law firms, restaurants, educational institutes and other organizations that need websites, applications, software or digital growth support.'
    },
    {
      question: 'What makes VELIX different from a freelance developer?',
      answer: 'A freelancer can be the right fit for a small task. VELIX is structured as a multidisciplinary team, which means development can be supported by UI/UX, project management, SEO and quality assurance. This is particularly useful for projects that involve multiple workflows, ongoing growth or business-critical delivery.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="About VELIX | Web Development Agency in Islamabad"
        description="Learn about VELIX, a web development agency in Gulberg Greens, Islamabad with a 15-member team and 10 years of combined experience in websites, software, ecommerce, SEO and digital growth."
        canonical="https://velix.com/about"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'About VELIX' }]} />

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Built to Help Businesses Grow in a{' '}
            <span className="gradient-text-blue">Digital-First World</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            VELIX exists for a simple reason: businesses should not be limited by old ways of reaching customers. Technology has changed how people discover brands, compare options, buy, book, learn and build trust. We help companies use that change to their advantage with digital products that are practical, modern and built for growth.
          </p>
        </section>

        {/* OUR STORY */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-8 bg-gradient-to-br from-[#061A35]/70 to-[#07090D] border border-[#0066FF]/30 shadow-[0_0_50px_rgba(0,102,255,0.2)] flex flex-col items-center justify-center group overflow-hidden">
              <div className="relative z-10 p-8 rounded-2xl bg-[#050505]/90 border border-[#00A8FF]/30 shadow-[0_0_50px_rgba(0,102,255,0.4)] flex items-center justify-center">
                <BrandLogo variant="stacked" size="xl" withLink={false} />
              </div>

              <div className="mt-8 text-center relative z-10">
                <div className="text-xs font-mono text-[#00A8FF] font-bold tracking-widest uppercase">
                  NEW AGENCY • 10 YRS COMBINED EXPERIENCE
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Gulberg Greens, Islamabad, Pakistan
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider">
              <span>OUR STORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              From Traditional Reach to Global Opportunity
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                For many businesses, standing out through traditional methods has become harder, slower and more expensive. Customers now search before they call, compare before they visit and expect a smooth digital experience on every device. At the same time, even a small company can now reach customers far beyond its local market when the right technology is in place.
              </p>
              <p>
                VELIX was created to close that gap. We bring web development, ecommerce, software, design, SEO and digital growth together so businesses can move confidently into the global digital economy. We are a new agency, but our 15-member team brings 10 years of combined experience across planning, design, development, quality assurance and optimization.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#07090D]/90 border border-[#0066FF]/25 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#061A35] border border-[#0066FF]/30 flex items-center justify-center text-[#00A8FF] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              To make modern digital technology useful and accessible for ambitious businesses — helping them build stronger brands, reach wider markets, improve customer experiences and create digital systems that support measurable growth.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#07090D]/90 border border-[#0066FF]/25 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#061A35] border border-[#0066FF]/30 flex items-center justify-center text-[#00A8FF] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              To become a trusted technology partner for businesses in Pakistan and around the world by combining modern engineering with clear communication, responsible delivery and long-term digital thinking.
            </p>
          </div>
        </section>

        {/* VALUES (7 CORE VALUES) */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
              Our Working Values
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Trust is earned through the way a project is handled, not through slogans. Our working principles are designed to make collaboration clearer and outcomes stronger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesData.map((val, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#00A8FF] flex items-center justify-center text-xs font-mono font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM & EXPERIENCE */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider">
                <span>TEAM STRUCTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                A Multidisciplinary 15-Member Team
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                VELIX brings developers, UI/UX designers, project managers, SEO specialists and QA engineers into one delivery team. That means the same project can be evaluated from several important angles: engineering, usability, search visibility, content, quality and business growth.
              </p>
              <div className="space-y-3 pt-2">
                {teamOverview.roles.map((role, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8FF] shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider">
                <span>TECHNICAL FOUNDATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                10 Years of Combined Experience
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our team experience spans custom websites, WordPress, ecommerce, React.js, Next.js, Node.js, Laravel, databases, APIs, cloud deployment, SEO and performance optimization. We use that experience to choose solutions based on what the project needs, rather than forcing every business into one stack.
              </p>
              <div className="p-6 rounded-2xl bg-[#07090D] border border-[#0066FF]/30 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <strong className="text-white block mb-2">Honest Experience Statement:</strong>
                "Our team brings extensive industry experience across web development, design, SEO and digital technology. While VELIX operates as an agile, modern agency, our leadership and developers bring a decade of tested execution to your build."
              </div>
            </div>
          </div>
        </section>

        {/* MARKETS (LOCAL + INTERNATIONAL) */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#07090D] border border-[#0066FF]/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>GEOGRAPHIC REACH</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
              Based in Islamabad. Built to Work Globally.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl mb-6">
              Our home base is Gulberg Greens, Islamabad, Pakistan. We serve businesses in Islamabad and Rawalpindi while also working with international clients across the UK, USA, UAE, Canada, Australia, Europe and beyond. Remote delivery is supported with documented scope, milestone reviews and practical communication across time zones.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Islamabad', 'Rawalpindi', 'Pakistan', 'United Kingdom', 'United States', 'United Arab Emirates', 'Canada', 'Australia', 'Europe'].map((m) => (
                <span key={m} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-200">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* A MESSAGE FROM VELIX */}
        <section className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061A35]/80 to-[#07090D] border border-[#0066FF]/40 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
              A Message From VELIX
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 italic">
              "Choosing a development partner means trusting someone with your brand, customer experience and often the systems your team depends on. We do not expect that trust automatically. Our goal is to earn it through clear communication, thoughtful work, realistic commitments and the quality of what we deliver. Start with a conversation — we will listen first, then recommend the path that makes sense for your business."
            </p>
            <span className="text-xs font-mono text-[#00A8FF] font-bold tracking-widest uppercase">
              THE VELIX TEAM • GULBERG GREENS, ISLAMABAD
            </span>
          </div>
        </section>

        {/* ABOUT FAQS */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <FAQAccordion
            title="Questions About VELIX"
            subtitle="TRANSPARENCY & CREDENTIALS"
            items={aboutFaqs}
          />
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Want a Digital Partner That Can Grow With Your Business?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free consultation with VELIX. Tell us what you are building, what is getting in the way, and what success should look like. We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:scale-105 transition-all"
            >
              <span>Book a Free Consultation</span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#07090D] border border-[#0066FF]/40 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
