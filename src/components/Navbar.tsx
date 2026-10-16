import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? 'bg-white/98 shadow-lg backdrop-blur-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Brilliantly Bright Laundry"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className={`font-bold text-base leading-tight ${scrolled || !isHome ? 'text-brand-700' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Brilliantly Bright
              </p>
              <p className={`text-[10px] tracking-widest uppercase font-medium ${scrolled || !isHome ? 'text-teal-600' : 'text-teal-300'}`}>
                Laundry & Dry Cleaning
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === link.to
                    ? scrolled || !isHome
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-white bg-white/15'
                    : scrolled || !isHome
                      ? 'text-stone-600 hover:text-brand-600 hover:bg-brand-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+27725475041"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={14} />
              <span>072 547 5041</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
                scrolled || !isHome ? 'text-stone-800' : 'text-white'
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <button onClick={() => setMenuOpen(false)} className="text-stone-600 hover:text-brand-600">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    pathname === link.to ? 'bg-brand-50 text-brand-600' : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+27725475041"
                className="mt-4 px-4 py-3 bg-brand-600 text-white rounded-lg text-sm font-semibold text-center"
              >
                Call 072 547 5041
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
