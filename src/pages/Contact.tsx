import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const SERVICES = [
  'Laundry & Ironing',
  'Dry Cleaning – Suits & Gowns',
  'Alterations',
  'Shoe Repair',
  'Carpet Cleaning',
  'General Enquiry',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Presentation: show success. In production wire to email/backend.
    const text = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/27725475041?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">Get in touch</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Us
          </h1>
          <p className="text-brand-100 max-w-xl mx-auto">
            Call, WhatsApp or send a message — we’re ready to help with all your laundry and dry cleaning needs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <a href="tel:+27725475041" className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
              <Phone className="text-brand-600" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Phone / WhatsApp</h3>
              <p className="text-brand-600 font-medium">072 547 5041</p>
              <p className="text-xs text-stone-500 mt-1">Tap to call or message</p>
            </div>
          </a>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
              <Mail className="text-brand-600" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
              <p className="text-stone-600 text-sm">info@brilliantlybrightlaundry.co.za</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
              <Clock className="text-brand-600" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Hours</h3>
              <p className="text-stone-600 text-sm">Mon – Sat: 08:00 – 17:00</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                <h3 className="font-semibold text-stone-800 mb-2">Message ready</h3>
                <p className="text-sm text-stone-500">
                  We’ve opened WhatsApp with your details. Send the message to complete your enquiry.
                </p>
                <button onClick={() => setSent(false)} className="mt-4 text-brand-600 text-sm font-medium">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-stone-800 mb-2">Send an enquiry</h2>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Name *</label>
                  <input
                    required
                    className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Phone *</label>
                    <input
                      required
                      className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Service *</label>
                  <select
                    required
                    className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need…"
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg">
                  <Send size={16} /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          <div>
            <img
              src="/images/storefront1.jpg"
              alt="Brilliantly Bright Laundry"
              className="rounded-2xl shadow-lg w-full h-64 object-cover mb-6"
            />
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-brand-600" /> Visit us
              </h3>
              <p className="text-sm text-stone-600 mb-4">
                Come through to our shop for drop-off and collection. You’ll find us in a convenient location with clear signage.
              </p>
              <p className="text-sm text-stone-500">
                Website: <a href="https://www.brilliantlybrightlaundry.co.za" className="text-brand-600 hover:underline">www.brilliantlybrightlaundry.co.za</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
