import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog | Automotive Locksmith Tips & Guides | Aledo TX',
  description: 'Expert automotive locksmith tips, guides, and advice for Aledo, Texas drivers. Learn about car key replacement, programming, lockout prevention, and more.',
};

export default function BlogPage() {
  return (
    <>
      <SchemaMarkup pageType="blog" />

      <Hero
        title="Automotive Locksmith Blog"
        subtitle="Expert tips, guides, and advice for Aledo drivers and Parker County motorists. Stay informed about car key technology, replacement options, and locksmith services."
        showBadges={false}
      />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-elevated border border-gray-100 hover:-translate-y-1 transition-all duration-300 hover:border-gold-400/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-gold-400/10 text-gold-600 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-500 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-gold-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
