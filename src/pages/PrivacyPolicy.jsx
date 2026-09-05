import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Privacy Policy | VELIX"
        description="Read how VELIX handles personal information submitted through website forms, communications, analytics and project enquiries."
        canonical="https://velix.com/privacy-policy"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        {/* HEADER */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DATA PROTECTION & PRIVACY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-xs text-gray-500 font-mono">
            Last updated: September 2026
          </p>
        </div>

        {/* CONTENT BODY */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
          <p>
            This Privacy Policy explains how VELIX (“VELIX”, “we”, “our” or “us”) handles information when you visit our website, contact us, request a consultation or use forms and related website features. This is general website privacy wording and should be reviewed by qualified legal counsel before publication, particularly if VELIX begins serving regulated sectors, running advertising pixels, processing payments or storing client data in additional jurisdictions.
          </p>

          <section className="p-6 rounded-2xl bg-[#07090D] border border-[#0066FF]/20 space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              1. Information We May Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong>Contact information:</strong> such as name, email address, phone or WhatsApp number, and company name.</li>
              <li><strong>Project information:</strong> requirements, budget range, timeline, website URL, uploaded project brief files, and messages you choose to submit.</li>
              <li><strong>Technical and usage information:</strong> device type, browser, pages viewed, referral source, approximate location derived from IP address, and interactions with the website where analytics tools are enabled.</li>
              <li><strong>Communication records:</strong> records and notes when you contact VELIX by email, WhatsApp, project forms, or other agreed channels.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              2. How We Use Information
            </h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Respond to your enquiries and provide requested consultations, quotes, or proposals.</li>
              <li>Understand project requirements and determine whether VELIX can provide the requested service.</li>
              <li>Operate, secure, maintain, and improve the website and overall user experience.</li>
              <li>Measure website performance and marketing effectiveness where analytics tools are active.</li>
              <li>Maintain legitimate business records, prevent misuse or fraud, and comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              3. Legal Bases and Consent
            </h2>
            <p>
              Depending on where you are located and the context, we may process information because you requested a service or response, because it is necessary for a contract, because we have a legitimate business interest that does not override your rights, because you have provided consent, or because processing is required by law. Where consent is the appropriate basis, you may withdraw it subject to applicable legal requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              4. Cookies and Analytics
            </h2>
            <p>
              The website may use essential cookies and, if enabled, analytics or performance measurement technologies. Non-essential technologies should be configured with consent controls where required by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              5. Sharing of Information
            </h2>
            <p>
              VELIX may use trusted third-party service providers for cloud hosting (e.g. Vercel, AWS), analytics, communications, project management, or technical operations. Information is shared only as reasonably necessary for those operational services and subject to appropriate technical safeguards. <strong>We do not sell personal information to third-party advertisers.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              6. International Processing
            </h2>
            <p>
              VELIX is based in Pakistan and works with clients and service providers across international markets including the UK, USA, UAE, Canada, Australia, and Europe. Information may therefore be processed outside the country where you reside. Where required, appropriate safeguards are implemented for international transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              7. Data Retention & Security
            </h2>
            <p>
              We retain information only for as long as reasonably necessary for the purpose it was collected, to maintain business records, resolve disputes, meet contractual obligations, and comply with applicable law. We employ reasonable technical and organizational measures intended to protect your information. However, no online transmission can be guaranteed completely secure, so users should avoid transmitting highly sensitive personal credentials through general web forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              8. Your Choices and Rights
            </h2>
            <p>
              Depending on applicable privacy legislation, you may have rights to request access, correction, deletion, restriction, objection, or portability of your personal data. To make a privacy request, contact us directly at <a href="mailto:velixwebstudio@gmail.com" className="text-[#00A8FF] underline">velixwebstudio@gmail.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-heading">
              9. Third-Party Links & Children's Privacy
            </h2>
            <p>
              Our website may link to third-party websites or services. Their privacy practices are governed by their own independent policies, and VELIX is not responsible for third-party practices. Furthermore, VELIX services and websites are not directed to children, and we do not knowingly collect personal information from minors.
            </p>
          </section>

          {/* CONTACT INFO CARD */}
          <div className="mt-12 p-8 rounded-3xl bg-[#07090D] border border-[#0066FF]/30 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">
              Contact Regarding Privacy
            </h3>
            <p className="text-sm text-gray-400">
              For any questions, clarifications, or privacy data requests:
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
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00A8FF]" />
                <a href="https://wa.me/923254229971" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A8FF] transition-colors">+92 325 4229971</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
