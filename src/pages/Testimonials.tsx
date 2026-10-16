import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Thandi M.',
    text: 'Excellent service! My suits came back looking brand new. The team is friendly and professional.',
    rating: 5,
  },
  {
    name: 'Johan K.',
    text: 'Great laundry and ironing. Clothes always come back fresh and neatly pressed. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    text: 'They altered my dress perfectly and the dry cleaning is top quality. Will definitely use them again.',
    rating: 5,
  },
  {
    name: 'David R.',
    text: 'Convenient location, quick turnaround and fair prices. Carpet cleaning made a huge difference at home.',
    rating: 5,
  },
  {
    name: 'Lerato N.',
    text: 'Shoe repair and alterations done with care. Very happy with the results and the friendly staff.',
    rating: 5,
  },
  {
    name: 'Michael B.',
    text: 'Reliable dry cleaning for my work suits. Always on time and clothes look brilliant.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">Reviews</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our Customers Say
          </h1>
          <p className="text-brand-100 max-w-xl mx-auto">
            Real feedback from people who trust us with their laundry, dry cleaning and alterations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">“{t.text}”</p>
              <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
