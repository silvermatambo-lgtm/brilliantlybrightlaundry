import { Link } from 'react-router-dom';
import { Shirt, Sparkles, Scissors, Footprints, Sofa, ArrowRight, Phone, CheckCircle } from 'lucide-react';

const SERVICES = [
  { icon: Shirt, title: 'Laundry & Ironing', desc: 'Fresh, crisp results for everyday wear and household linens.' },
  { icon: Sparkles, title: 'Dry Cleaning', desc: 'Expert care for suits, gowns, formal wear and delicate fabrics.' },
  { icon: Scissors, title: 'Alterations', desc: 'Professional tailoring and adjustments for the perfect fit.' },
  { icon: Footprints, title: 'Shoe Repair', desc: 'Quality repairs to keep your footwear looking and feeling great.' },
  { icon: Sofa, title: 'Carpet Cleaning', desc: 'Deep cleaning that restores freshness to carpets and rugs.' },
];

const BENEFITS = [
  'Professional garment care',
  'Convenient location',
  'Friendly, experienced team',
  'Quick turnaround times',
  'WhatsApp booking available',
  'Quality guaranteed',
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/storefront1.jpg"
            alt="Brilliantly Bright Laundry storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/75 to-brand-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-28 w-full">
          <div className="max-w-2xl">
            <p className="text-teal-300 text-sm font-bold uppercase tracking-widest mb-4 animate-fade-up">
              Laundry • Dry Cleaning • Alterations
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up"
              style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.1s' }}
            >
              Brilliantly Bright<br />
              <span className="text-teal-300">Laundry</span>
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Professional laundry, dry cleaning for suits & gowns, ironing, alterations, shoe repair and carpet cleaning. Fresh results you’ll love.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="btn-brand bg-white text-brand-700 hover:bg-teal-50">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+27725475041" className="btn-outline-brand border-white text-white hover:bg-white hover:text-brand-700">
                <Phone size={16} /> 072 547 5041
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-tag">What we offer</p>
            <h2 className="section-heading">Our Services</h2>
            <div className="brand-bar mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-stone-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-stone-100">
                <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="text-brand-600" size={26} />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-500">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us + image */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/services-banner.jpg"
              alt="Our services"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]"
            />
          </div>
          <div>
            <p className="section-tag">Why choose us</p>
            <h2 className="section-heading mb-6">Care that shows in every garment</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              At Brilliantly Bright Laundry we treat every item with professional attention — from everyday laundry and crisp ironing to delicate dry cleaning, precise alterations, shoe repair and thorough carpet cleaning.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-stone-700">
                  <CheckCircle className="text-teal-500 shrink-0" size={18} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-brand">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* Store CTA */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready for brilliantly bright results?
          </h2>
          <p className="text-brand-100 mb-8">
            Call or WhatsApp us today — we’re happy to help with laundry, dry cleaning, alterations and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+27725475041" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
              <Phone size={18} /> 072 547 5041
            </a>
            <a
              href="https://wa.me/27725475041"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
