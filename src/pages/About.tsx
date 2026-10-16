import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">Who we are</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Brilliantly Bright
          </h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            Your trusted local experts for laundry, dry cleaning, alterations and more.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/interior1.jpg"
            alt="Inside Brilliantly Bright Laundry"
            className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Fresh. Bright. Professional.</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Brilliantly Bright Laundry is a full-service laundry and dry cleaning business dedicated to keeping your clothes and home textiles looking their best. We combine modern equipment with careful hand finishing and experienced staff.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Whether you need everyday laundry and ironing, specialist dry cleaning for suits and gowns, precise alterations, shoe repairs or deep carpet cleaning, we deliver quality results with friendly service.
          </p>
          <ul className="space-y-2 mb-8">
            {['Experienced team', 'Attention to detail', 'Convenient WhatsApp booking', 'Quality you can see'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
                <CheckCircle className="text-teal-500" size={18} />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-brand">Contact Us</Link>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <img src="/images/sewing-work.jpg" alt="Alterations at work" className="rounded-2xl shadow-md w-full h-64 object-cover" />
          <img src="/images/storefront3.jpg" alt="Our storefront" className="rounded-2xl shadow-md w-full h-64 object-cover" />
        </div>
      </section>
    </div>
  );
}
