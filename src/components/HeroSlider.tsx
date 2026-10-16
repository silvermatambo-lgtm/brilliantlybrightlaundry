import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, FileText } from 'lucide-react';

const SLIDES = [
  {
    image: '/images/sewing-work.jpg',
    tag: 'Precision Alterations',
    heading: 'The Perfect Fit Starts With',
    highlight: 'Professional Alterations',
    sub: 'Quality tailoring and alterations done with care by our experienced team.',
  },
  {
    image: '/images/services-banner.jpg',
    tag: 'Brilliantly Bright Laundry',
    heading: 'Fresh. Clean. Brilliantly Bright.',
    highlight: 'Laundry & Ironing',
    sub: 'Professional laundry and ironing services with careful attention to every garment.',
  },
  {
    image: '/images/interior2.jpg',
    tag: 'Professional Garment Care',
    heading: 'Your Clothes Deserve',
    highlight: 'Expert Care',
    sub: 'Dry cleaning, alterations, shoe repair and carpet cleaning — all under one roof.',
  },
];

const TYPING_INTERVAL = 65;
const SLIDE_DURATION = 6500;

function useTypingEffect(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed('');
      setDone(false);
      return;
    }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, TYPING_INTERVAL);
    return () => clearInterval(id);
  }, [text, active]);

  return { displayed, done };
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  const goTo = useCallback((idx: number) => {
    setAnimating(false);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(true);
    }, 80);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];
  const { displayed, done } = useTypingEffect(slide.highlight, animating);

  return (
    <section className="relative w-full h-[78vh] min-h-[560px] max-h-[820px] overflow-hidden bg-stone-900">
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={s.image}
            alt={s.tag}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 z-10" />

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div key={`tag-${current}`} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm mb-5 ${animating ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
              <span className="text-white text-xs font-semibold tracking-widest uppercase">{slide.tag}</span>
            </div>

            <h1 key={`h-${current}`} className={`text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2 ${animating ? 'animate-slide-left' : 'opacity-0'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
              {slide.heading}
            </h1>

            <h2 className="text-teal-300 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span>{displayed}</span>
              {!done && <span className="typing-cursor" />}
            </h2>

            <p key={`sub-${current}`} className={`text-white/95 text-base md:text-lg leading-relaxed mb-8 max-w-xl ${animating ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
              {slide.sub}
            </p>

            <div key={`cta-${current}`} className={`flex flex-wrap gap-3 ${animating ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
              <a href="tel:+27725475041" className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/27725475041" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                WhatsApp
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-white/60 hover:border-teal-300 text-white hover:text-teal-200 font-semibold rounded-lg text-sm transition-all duration-300 backdrop-blur-sm">
                <FileText size={16} /> Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/25 hover:bg-teal-600/70 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm">
        <ChevronLeft size={22} />
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/25 hover:bg-teal-600/70 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm">
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2 bg-teal-300' : 'w-2 h-2 bg-white/60 hover:bg-white'}`} />
        ))}
      </div>
    </section>
  );
}
