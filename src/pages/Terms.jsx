import React from 'react';
import { FileText, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Terms() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Terms & Conditions | VELIX"
        description="Read the general terms governing use of the VELIX website, website content, enquiries and links. Project-specific services are governed by separate written agreements."
        canonical="https://velix.com/terms"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        {/* HEADER */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Terms & Conditions
          </h1>

          <p className="text-xs text-gray-500 font-mono">
            Last updated: September 2026
          </p>
        </div>

        {/* CONTENT BODY */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
          <p>
            These Terms & Conditions govern general use of the VELIX website. They are not a substitute for a project proposal, statement of work, service agreement or other contract. Client services, payment terms, milestones, intellectual property, support, confidentiality and project-specific obligations should be documented separately in writing. These terms should be reviewed by qualified legal counsel before publication.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              1. Website Use
            </h2>
            <p>
              You may use this website for lawful informational and business enquiry purposes. You must not attempt to disrupt the website, gain unauthorized access, introduce malicious code, scrape restricted areas, misrepresent your identity or use the site in a way that violates applicable law or the rights of others.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              2. Information on the Website
            </h2>
            <p>
              We aim to keep service descriptions, pricing indications and general information accurate. Content is provided for general information and may change. Indicative prices are not binding quotations. A final project scope, price and timeline are confirmed only through written agreement.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#07090D] border border-[#0066FF]/25 space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              3. No Guarantee of Search Rankings or Business Results
            </h2>
            <p>
              Web development, SEO and marketing can improve technical quality, visibility and customer experience, but VELIX does not guarantee specific Google rankings, traffic, sales, revenue, conversion rates or other business outcomes unless a written agreement expressly defines a measurable commitment that is within VELIX’s control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              4. Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, the VELIX name, website design, text, graphics and original website materials are protected by applicable intellectual property rights. You may not reproduce substantial portions for commercial use without permission. Client project ownership and licensing are governed by the relevant project agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              5. Third-Party Services and Links
            </h2>
            <p>
              The website may refer or link to third-party platforms, technologies or websites. VELIX does not control third-party availability, policies, pricing or content. Use of those services may be subject to separate terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              6. Project Enquiries
            </h2>
            <p>
              Submitting a form, sending a WhatsApp message or requesting a consultation does not create a client relationship or obligate either party to proceed. A project begins only after the required agreement, scope and payment arrangements are accepted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              7. Limitation of Website Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, VELIX is not responsible for indirect or consequential loss arising solely from use of or inability to use this informational website. Nothing in these terms excludes liability that cannot lawfully be excluded.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              8. Changes to These Terms
            </h2>
            <p>
              VELIX may update these website terms from time to time. The version published on the site should show the latest update date.
            </p>
          </section>

          {/* CONTACT INFO CARD */}
          <div className="mt-12 p-8 rounded-3xl bg-[#07090D] border border-[#0066FF]/30 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">
              Questions Regarding Terms
            </h3>
            <p className="text-sm text-gray-400">
              For legal or contracting questions regarding these website terms:
            </p>
            <div className="space-y-2 text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#00A8FF]" />
                <span>VELIX, Gulberg Greens, Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00A8FF]" />
                <a href="mailto:velixwebstudio@gmail.com" className="hover:text-[#00A8FF] transition-colors">velixwebstudio@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
