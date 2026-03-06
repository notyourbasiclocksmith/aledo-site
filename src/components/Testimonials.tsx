import { Star } from 'lucide-react';
import { testimonials } from '@/data/business';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mt-3 mb-4">
            Trusted by Aledo Drivers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from local vehicle owners who chose our mobile locksmith service in Parker County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-elevated border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-dark-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
