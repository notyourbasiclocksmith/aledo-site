import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Calendar, ArrowLeft } from 'lucide-react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { blogPosts } from '@/data/blog';
import { services } from '@/data/services';
import { business } from '@/data/business';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: { title: post.metaTitle, description: post.metaDescription, url: `https://aledolocksmith.net/blog/${post.slug}` },
  };
}

function generateBlogContent(post: typeof blogPosts[0]): string[] {
  const paragraphs = [
    `When it comes to ${post.title.toLowerCase().replace(/in aledo.*$/i, '').trim()} in Aledo, Texas, local vehicle owners need reliable information they can trust. As the leading mobile automotive locksmith serving Parker County, we have compiled this comprehensive guide to help Aledo drivers navigate this important topic with confidence.`,

    `Understanding ${post.title.toLowerCase().replace(/in aledo.*$/i, '').replace(/for aledo.*$/i, '').trim()} is essential for every vehicle owner in the Aledo area. Whether you drive a domestic truck along Interstate 20 or a luxury sedan through the neighborhoods near FM 1187, the information in this guide applies to your situation. Our technicians encounter these scenarios daily while serving Parker County motorists.`,

    `The automotive locksmith industry has evolved significantly in recent years, and Aledo drivers benefit from these advances. Modern mobile locksmith technology allows our team to provide services that were previously only available at dealerships. We bring this technology directly to your location anywhere in Aledo, Weatherford, Annetta, Willow Park, or Hudson Oaks.`,

    `One of the most common questions we receive from Parker County vehicle owners relates to pricing and value. The cost of automotive locksmith services in Aledo depends on several factors including your vehicle make and model, the type of key system your car uses, and the specific service required. Our mobile approach eliminates dealership markups and towing costs, saving Aledo drivers an average of 30 to 60 percent.`,

    `For Aledo drivers dealing with this situation for the first time, it helps to understand the technology involved. Modern vehicles use sophisticated electronic key systems including transponder chips, rolling codes, and encrypted communications between your key and your vehicle. These security features protect your car from theft but require professional equipment and training to service properly.`,

    `Our mobile locksmith team serves the entire Aledo community and surrounding Parker County areas. We regularly respond to calls throughout the 76008 and 76087 ZIP code regions, along Interstate 20, FM 1187, US 377, and all connecting roads. Our average response time in the Aledo area is 15 to 30 minutes, and most services are completed within an additional 20 to 45 minutes.`,

    `When choosing an automotive locksmith service in Aledo, Texas, it is important to verify that the company is licensed, insured, and experienced with your specific vehicle brand. Our technicians maintain current certifications and training on all major vehicle makes including Toyota, Honda, Ford, Chevrolet, Nissan, BMW, Mercedes-Benz, Hyundai, Kia, and many more.`,

    `The convenience of mobile locksmith service cannot be overstated for Aledo residents. Rather than arranging a tow to a dealership and waiting days for an appointment, our mobile workshop arrives at your exact location fully equipped to handle the job. Whether you are at home, at work, in a parking lot, or on the side of the road, we bring the solution to you.`,

    `Preventive measures can save Aledo drivers significant time and money. We recommend keeping a spare key in a secure location, replacing key fob batteries proactively when the signal range decreases, and addressing any ignition issues before they worsen. These simple steps can prevent emergency situations and the higher costs associated with urgent service calls.`,

    `Technology continues to advance in the automotive key industry, and our team stays current with every development. From traditional metal keys to transponder chips, smart keys with push-button start, and the latest proximity entry systems, we invest in the equipment and training needed to service every generation of vehicle key technology.`,

    `For Parker County motorists who want the best combination of speed, quality, and value for automotive locksmith services, our mobile team delivers on all three. We have built our reputation in the Aledo community through consistent, professional service and fair, transparent pricing. Every job comes with our satisfaction guarantee.`,

    `If you are currently dealing with a car key issue in Aledo, Texas, do not hesitate to call our 24/7 service line. Whether it is a lost key emergency at midnight, a broken key fob on a Saturday morning, or a planned spare key appointment during the week, our mobile locksmith team is ready to help. We serve all of Aledo, Parker County, and surrounding communities with the same dedication and professionalism.`,
  ];
  return paragraphs;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const content = generateBlogContent(post);
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const otherPosts = relatedPosts.length < 3
    ? [...relatedPosts, ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 3 - relatedPosts.length)]
    : relatedPosts;

  const blogFaqs = [
    {
      question: `How can I get help with ${post.title.toLowerCase().replace(/in aledo.*$/i, '').replace(/for aledo.*$/i, '').trim()} in Aledo?`,
      answer: `Call our 24/7 mobile locksmith service at ${business.phone}. Our certified technicians serve all of Aledo, Texas and Parker County with fast, professional automotive locksmith services delivered directly to your location.`,
    },
    {
      question: 'Do you offer free estimates for locksmith services in Aledo?',
      answer: 'Yes, we provide free phone estimates for all automotive locksmith services. Call us and describe your situation, vehicle make and model, and location. We will give you an upfront price before dispatching a technician.',
    },
    {
      question: 'What is the fastest way to get locksmith help in Parker County?',
      answer: `Call our emergency line at ${business.phone}. We maintain mobile units throughout Parker County for rapid response. Average arrival time in Aledo is 15-30 minutes.`,
    },
  ];

  return (
    <>
      <SchemaMarkup
        pageType="blog"
        articleTitle={post.title}
        articleDate={post.date}
        articleDescription={post.metaDescription}
        faqItems={blogFaqs}
      />

      <Hero title={post.title} subtitle={post.excerpt} showBadges={false} />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-gold-400/10 text-gold-600 text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-dark-900 mb-4">
                  Understanding {post.title.replace(/in Aledo.*$/i, '').replace(/for Aledo.*$/i, '').trim()}
                </h2>
                {content.slice(0, 3).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}

                <h2 className="text-2xl font-bold text-dark-900 mt-10 mb-4">
                  What Aledo Drivers Need to Know
                </h2>
                {content.slice(3, 6).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}

                <div className="my-8 p-6 bg-gradient-to-br from-dark-950 to-primary-700 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-gray-300 mb-4">Our mobile locksmith team is available 24/7 in Aledo and Parker County.</p>
                  <a href={business.phoneHref} className="btn-primary inline-flex">
                    <Phone className="w-5 h-5 mr-2" />
                    Call {business.phone}
                  </a>
                </div>

                <h2 className="text-2xl font-bold text-dark-900 mt-10 mb-4">
                  Expert Advice for Parker County Vehicle Owners
                </h2>
                {content.slice(6, 9).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}

                <h2 className="text-2xl font-bold text-dark-900 mt-10 mb-4">
                  Getting Professional Help in Aledo, Texas
                </h2>
                {content.slice(9).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={business.phoneHref} className="btn-primary text-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Service
                </a>
                <Link href="/blog" className="btn-outline text-center">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card-elevated border border-gold-400/20 bg-gradient-to-br from-dark-950 to-primary-700 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Our mobile locksmith is ready to help Aledo drivers 24/7.
                </p>
                <a href={business.phoneHref} className="btn-primary w-full justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {business.phone}
                </a>
              </div>

              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">Our Services</h3>
                <div className="space-y-2">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-sm text-gray-700 group-hover:text-primary-500">{s.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500" />
                    </Link>
                  ))}
                </div>
              </div>

              {otherPosts.length > 0 && (
                <div className="card-elevated border border-gray-100">
                  <h3 className="text-lg font-bold text-dark-900 mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <span className="text-sm font-medium text-dark-900 group-hover:text-primary-500 leading-snug block">
                          {p.title}
                        </span>
                        <span className="text-xs text-gray-400 mt-1 block">{p.category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <FAQ items={blogFaqs} title="Questions About This Topic" />
      <CTABanner />
    </>
  );
}
