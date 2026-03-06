'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions', subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mt-3 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gold-400/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="font-semibold text-dark-900 text-base md:text-lg pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
