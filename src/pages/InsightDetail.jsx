import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  User, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';

export default function InsightDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.metaDescription,
    'author': {
      '@type': 'Person',
      'name': post.author,
      'jobTitle': post.authorRole
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'VELIX',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://velix.com/assets/velix-logo-stacked.png'
      }
    },
    'datePublished': '2026-09-01',
    'dateModified': '2026-09-05',
    'mainEntityOfPage': `https://velix.com/insights/${post.slug}`
  };

  const relatedServices = post.relatedServices
    ? servicesData.filter((s) => post.relatedServices.includes(s.slug))
    : [];

  const otherArticles = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        canonical={`https://velix.com/insights/${post.slug}`}
        ogType="article"
        schema={articleSchema}
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Insights', path: '/insights' },
            { label: post.title }
          ]}
        />

        {/* HEADER */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#00A8FF]" />
                <span className="text-white font-medium">{post.author}</span>
                <span className="text-gray-500">({post.authorRole})</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT BODY */}
        <div className="prose prose-invert max-w-none mb-16 text-gray-300 leading-relaxed space-y-6">
          <div
            className="space-y-6 text-base sm:text-lg leading-relaxed [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:font-heading [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/### (.*?)\n/g, '<h3>$1</h3>')
                .replace(/\n\n/g, '<p></p>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
            }}
          />
        </div>

        {/* FAQS IF ANY */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mb-16 border-t border-white/10 pt-12">
            <FAQAccordion
              title="Key Takeaway FAQs"
              subtitle="DIRECT QUESTIONS"
              items={post.faqs}
            />
          </div>
        )}

        {/* RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <div className="mb-16 border-t border-white/10 pt-12">
            <h3 className="text-xl font-bold text-white mb-6 font-heading">
              Relevant VELIX Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="p-5 rounded-2xl bg-[#07090D] border border-[#0066FF]/25 hover:border-[#00A8FF] transition-all group"
                >
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#00A8FF] transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-3">
                    {svc.shortDesc}
                  </p>
                  <span className="text-xs text-[#00A8FF] font-medium flex items-center gap-1">
                    <span>Learn More</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* READ OTHER INSIGHTS */}
        <div className="mb-16 border-t border-white/10 pt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white font-heading">
              More Insights & Guides
            </h3>
            <Link
              to="/insights"
              className="text-xs text-[#00A8FF] hover:underline font-semibold flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherArticles.map((other) => (
              <Link
                key={other.slug}
                to={`/insights/${other.slug}`}
                className="p-5 rounded-2xl bg-[#07090D] border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all flex flex-col justify-between"
              >
                <h4 className="text-sm font-bold text-white mb-2 line-clamp-2">
                  {other.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-3 border-t border-white/5">
                  <span>{other.category}</span>
                  <span>{other.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.2)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-heading">
            Need Expert Execution on Your Project?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
            VELIX brings modern engineering, strategic SEO, and transparent communication together. Schedule a free consultation to discuss your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold text-sm shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:scale-105 transition-all"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
