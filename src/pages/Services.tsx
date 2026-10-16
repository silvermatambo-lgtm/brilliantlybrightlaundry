import { Link } from 'react-router-dom';
import { Shirt, Sparkles, Scissors, Footprints, Sofa, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Shirt,
    title: 'Laundry & Ironing',
    desc: 'We wash, dry and iron your everyday clothes and household linens with care. Fresh, neatly pressed garments ready when you need them.',
    image: '/images/storefront2.jpg',
  },
  {
    icon: Sparkles,
    title: 'Dry Cleaning – Suits & Gowns',
    desc: 'Specialist dry cleaning for formal wear, suits, evening gowns and delicate fabrics. We restore the look and feel of your best clothes.',
    image: '/images/services-banner.jpg',
  },
  {
    icon: Scissors,
    title: 'Alterations',
    desc: 'Professional alterations and tailoring — hems, fittings, repairs and adjustments so your clothes fit perfectly.',
    image: '/images/sewing.jpg',
  },
  {
    icon: Footprints,
    title: 'Shoe Repair',
    desc: 'Quality shoe repairs including soles, heels, stitching and general restoration to extend the life of your footwear.',
    image: '/images/interior2.jpg',
  },
  {
    icon: Sofa,
    title: 'Carpet Cleaning',
    desc: 'Thorough carpet and rug cleaning that removes dirt, stains and odours, leaving your floors fresh and bright.',
    image: '/images/interior3.jpg',
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">What we do</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            From everyday laundry to specialist dry cleaning, alterations, shoe repair and carpet cleaning — we’ve got you covered.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <img
                src={s.image}
                alt={s.title}
                className="rounded-2xl shadow-md w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                <s.icon className="text-brand-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-3">{s.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-6">{s.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-500">
                Enquire now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-stone-50 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Need a quote or collection?</h2>
          <p className="text-stone-600 mb-6">Get in touch — we’re happy to help with any of our services.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+27725475041" className="btn-brand">Call 072 547 5041</a>
            <a href="https://wa.me/27725475041" target="_blank" rel="noopener noreferrer" className="btn-outline-brand">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
