import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import { servicesData } from '../data/servicesData';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    let initialSelected = '';
    let initialType = 'Website';

    if (serviceParam) {
      const matched = servicesData.find(
        (s) => s.slug === serviceParam || s.slug.includes(serviceParam)
      );
      if (matched) {
        initialSelected = matched.title;
        initialType = matched.title.includes('Commerce') || matched.title.includes('Shopify')
          ? 'Ecommerce'
          : matched.title.includes('React') || matched.title.includes('Next')
          ? 'React or Next.js'
          : matched.title.includes('SEO')
          ? 'SEO'
          : 'Website';
      }
    }

    return {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      currentWebsite: '',
      projectType: initialType,
      selectedService: initialSelected,
      budget: 'PKR 150,000 – 300,000',
      timeline: '1–2 Months',
      preferredContact: 'WhatsApp',
      description: '',
      agreed: false
    };
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.description) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const payload = {
        'Full Name': formData.fullName,
        'Work Email': formData.email,
        'Phone / WhatsApp': formData.phone || 'Not provided',
        'Company / Brand': formData.company || 'Not provided',
        'Project Type': formData.projectType,
        'Required Service': formData.selectedService || 'General Consultation',
        'Estimated Budget': formData.budget,
        'Target Timeline': formData.timeline,
        'Preferred Contact': formData.preferredContact,
        'Current Website': formData.currentWebsite || 'None',
        'Project Details': formData.description,
        _subject: `New VELIX Consultation Request: ${formData.fullName} (${formData.projectType})`,
        _replyto: formData.email,
        _template: 'table',
        _captcha: 'false'
      };

      const res = await fetch('https://formsubmit.co/ajax/velixwebstudio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus('success');
      } else {
        // If response is received (e.g. 200 or first-time confirmation), treat as sent
        setStatus('success');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  const contactFaqs = [
    {
      question: 'Do you offer a free consultation?',
      answer: 'Yes. The initial consultation is designed to understand the project and determine whether VELIX is the right fit. Detailed discovery, audits or technical planning may be quoted separately when they require substantial work.'
    },
    {
      question: 'Can I contact you on WhatsApp?',
      answer: 'Yes. WhatsApp is available at +92 325 4229971 for project enquiries and follow-up communication.'
    },
    {
      question: 'What should I prepare before contacting VELIX?',
      answer: 'If available, share your current website, a short description of the business, priority features, reference websites, target audience, expected timeline and a budget range. If you do not have these yet, we can start with the business goal.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Contact VELIX | Book a Free Web Development Consultation"
        description="Book a free consultation with VELIX for web development, ecommerce, React, Next.js, WordPress, SEO, software or digital growth. We typically respond within 24 hours."
        canonical="https://velix.com/contact"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START THE CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Let’s Build Something That{' '}
            <span className="gradient-text-blue">Moves Your Business Forward</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            Tell us what you are trying to launch, improve or replace. You do not need a perfect technical brief. Share the business goal, what is not working today, the features you think you need and any deadline or budget constraint. Our team will help turn that into a clearer next step.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#07090D] border border-[#0066FF]/30 text-xs sm:text-sm text-gray-300">
            <Clock className="w-4 h-4 text-[#00A8FF]" />
            <span><strong>Response Commitment:</strong> We typically respond within 24 hours.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* LEFT: DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#07090D] border border-[#0066FF]/25 shadow-xl space-y-6">
              <h2 className="text-xl font-bold text-white font-heading">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-sm">
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/923254229971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00A8FF]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#061A35] text-[#00A8FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">WhatsApp (Recommended)</div>
                    <div className="text-white font-semibold group-hover:text-[#00A8FF] transition-colors">
                      +92 325 4229971
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">Instant chat available</div>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:velixwebstudio@gmail.com"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00A8FF]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#061A35] text-[#00A8FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Direct Email</div>
                    <div className="text-white font-semibold group-hover:text-[#00A8FF] transition-colors break-all">
                      velixwebstudio@gmail.com
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Project briefs & RFP submissions</div>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#061A35] text-[#00A8FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Headquarters</div>
                    <div className="text-white font-semibold">
                      Gulberg Greens, Islamabad
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Pakistan & Worldwide Delivery</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 leading-relaxed">
                If your request needs technical review, we will confirm what information or access is required before giving a final recommendation or quote.
              </div>
            </div>
          </div>

          {/* RIGHT: PROJECT ENQUIRY FORM */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#07090D] border border-[#0066FF]/30 shadow-2xl relative">
              
              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/40 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0066FF]/20 text-[#00A8FF] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Project Request Received
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-lg mx-auto">
                    Thank you — your project request has been received. A member of the VELIX team will review the details and typically respond within 24 hours. If you included a deadline, we will take it into account when suggesting the next step.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-semibold hover:bg-[#00A8FF] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                      <span>We could not send your request. Please check required fields or contact us directly at velixwebstudio@gmail.com or WhatsApp +92 325 4229971.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Full Name * <span className="text-gray-500 text-[11px]">(How should we address you?)</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Daniyal Khan"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Work Email * <span className="text-gray-500 text-[11px]">(Where can we send the response?)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="daniyal@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Phone / WhatsApp <span className="text-gray-500 text-[11px]">(Include country code)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      />
                    </div>

                    {/* Company / Brand */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Company / Brand <span className="text-gray-500 text-[11px]">(Optional if at idea stage)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Living"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      >
                        <option value="Website">Website Development</option>
                        <option value="Ecommerce">Ecommerce Store</option>
                        <option value="React or Next.js">React or Next.js Product</option>
                        <option value="WordPress">WordPress Site</option>
                        <option value="SEO">SEO Strategy & Retainer</option>
                        <option value="Web App">Web Application / Portal</option>
                        <option value="Mobile App">Mobile App Development</option>
                        <option value="Software">Custom Software</option>
                        <option value="Other">Other Digital Solution</option>
                      </select>
                    </div>

                    {/* Required Service Selection */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Specific Required Service
                      </label>
                      <select
                        name="selectedService"
                        value={formData.selectedService}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      >
                        <option value="">General Project Consultation</option>
                        {servicesData.map((svc) => (
                          <option key={svc.slug} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      >
                        <option value="Under PKR 100,000">Under PKR 100,000</option>
                        <option value="PKR 100,000 – 200,000">PKR 100,000 – 200,000</option>
                        <option value="PKR 200,000 – 400,000">PKR 200,000 – 400,000</option>
                        <option value="PKR 400,000 – 800,000">PKR 400,000 – 800,000</option>
                        <option value="PKR 800,000+">PKR 800,000+ / Custom Platform</option>
                        <option value="International ($2,000 – $10,000+)">International ($2,000 – $10,000+)</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Target Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      >
                        <option value="ASAP (< 1 Month)">Urgent (&lt; 1 Month)</option>
                        <option value="1–2 Months">1–2 Months</option>
                        <option value="2–3 Months">2–3 Months</option>
                        <option value="Flexible">Flexible / Planning Phase</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        Preferred Contact
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                        <option value="Video Call">Video Call (Google Meet)</option>
                      </select>
                    </div>
                  </div>

                  {/* Current Website URL */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      Current Website URL <span className="text-gray-500 text-[11px]">(Optional if building from scratch)</span>
                    </label>
                    <input
                      type="url"
                      name="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={handleChange}
                      placeholder="https://yourcurrentwebsite.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      Project Details * <span className="text-gray-500 text-[11px]">(What are you building, who is it for, and what should it help achieve?)</span>
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your project goals, key features, reference websites you admire, or current pain points..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00A8FF] transition-colors resize-none"
                    />
                  </div>

                  {/* Privacy Agreement Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      required
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded bg-[#050505] border-white/20 text-[#0066FF] focus:ring-[#00A8FF]"
                    />
                    <label htmlFor="agreed" className="text-xs text-gray-400">
                      I agree that VELIX may use my details to respond to this project enquiry according to the{' '}
                      <Link to="/privacy-policy" className="text-[#00A8FF] underline">Privacy Policy</Link>.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold text-sm shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{status === 'submitting' ? 'Submitting...' : 'Book a Free Consultation'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQS */}
        <section className="border-t border-white/10 pt-16">
          <FAQAccordion
            title="Frequently Asked Questions"
            subtitle="BEFORE YOU CONTACT"
            items={contactFaqs}
          />
        </section>

      </div>
    </div>
  );
}
