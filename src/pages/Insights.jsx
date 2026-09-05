import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Search as SearchIcon,
  Tag,
  ChevronRight
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cost & Pricing', 'Technology & Architecture', 'E-Commerce', 'SEO & Organic Growth', 'Business & Strategy', 'Performance & Speed'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Web Development & SEO Insights | VELIX"
        description="Practical web development, ecommerce, SEO, performance and digital growth insights from VELIX for businesses in Pakistan and international markets."
        canonical="https://velix.com/insights"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Insights' }]} />

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE & RESEARCH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Practical Digital Insights for{' '}
            <span className="gradient-text-blue">Better Business Decisions</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            The VELIX Insights section explains web development, ecommerce, SEO and digital technology in plain language. The goal is to help business owners make better decisions before they choose a platform, approve a redesign, invest in SEO or commission custom software.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* CATEGORIES */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${selectedCategory === cat
                  ? 'bg-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,0.4)]'
                  : 'bg-[#07090D] border border-[#0066FF]/20 text-gray-400 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-72">
            <SearchIcon className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07090D] border border-[#0066FF]/25 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-[#00A8FF]"
            />
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl p-6 sm:p-8 bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00A8FF] transition-colors leading-snug font-heading">
                  <Link to={`/insights/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <User className="w-3.5 h-3.5 text-[#00A8FF]" />
                  <span>{post.author}</span>
                </div>

                <Link
                  to={`/insights/${post.slug}`}
                  className="flex items-center gap-1 text-[#00A8FF] font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* EDITORIAL CREDITS */}
        <div className="text-center text-xs text-gray-500 mb-16">
          Developed by: <span className="text-gray-300 font-medium">Ihtisham Jabar</span>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Have Questions About Your Web Strategy?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free consultation with VELIX. We will discuss your goals, explain your technology choices, and recommend a clear path forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:scale-105 transition-all"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
