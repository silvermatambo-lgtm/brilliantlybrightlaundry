const IMAGES = [
  { src: '/images/storefront1.jpg', alt: 'Storefront' },
  { src: '/images/storefront2.jpg', alt: 'Shop exterior' },
  { src: '/images/storefront3.jpg', alt: 'Entrance' },
  { src: '/images/interior1.jpg', alt: 'Reception area' },
  { src: '/images/interior2.jpg', alt: 'Service counter' },
  { src: '/images/interior3.jpg', alt: 'Garment storage' },
  { src: '/images/services-banner.jpg', alt: 'Services display' },
  { src: '/images/sewing.jpg', alt: 'Alterations workstation' },
  { src: '/images/sewing-work.jpg', alt: 'Sewing in progress' },
  { src: '/images/aboard1.jpg', alt: 'A-board signage' },
  { src: '/images/aboard2.jpg', alt: 'Services A-board' },
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">See our space</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Gallery
          </h1>
          <p className="text-brand-100 max-w-xl mx-auto">
            A look inside Brilliantly Bright Laundry — our shop, workstations and service displays.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGES.map((img) => (
            <div key={img.src} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
