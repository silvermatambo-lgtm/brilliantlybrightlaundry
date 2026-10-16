import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What services do you offer?',
    a: 'We offer laundry & ironing, dry cleaning (including suits and gowns), alterations, shoe repair and carpet cleaning.',
  },
  {
    q: 'How do I book or drop off items?',
    a: 'You can visit our shop, call 072 547 5041, or message us on WhatsApp. We’re happy to arrange collection where possible.',
  },
  {
    q: 'How long does laundry or dry cleaning take?',
    a: 'Turnaround depends on the service and volume. Everyday laundry is often ready within a few days; dry cleaning and alterations may take a little longer. We’ll confirm when you drop off or enquire.',
  },
  {
    q: 'Do you clean wedding gowns and formal suits?',
    a: 'Yes. Dry cleaning of suits and gowns is one of our specialist services. We handle formal and delicate garments with care.',
  },
  {
    q: 'Can you do alterations and repairs?',
    a: 'Absolutely. Our alterations service covers hems, fittings, repairs and adjustments. We also offer shoe repair.',
  },
  {
    q: 'Do you clean carpets?',
    a: 'Yes, we provide professional carpet cleaning to remove dirt, stains and odours.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are typically open Monday to Saturday, 08:00 – 17:00. Please call or WhatsApp to confirm if you plan to visit outside usual hours.',
  },
  {
    q: 'How can I get a quote?',
    a: 'Call or WhatsApp 072 547 5041, use the contact form on this website, or visit us in person. We’ll be happy to advise on pricing.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">Help</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="border border-stone-200 rounded-xl overflow-hidden bg-white">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-stone-800 hover:bg-stone-50"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <ChevronDown size={18} className={`transition-transform shrink-0 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
