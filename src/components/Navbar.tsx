import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, MapPin, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenOwnerGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOwnerGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'services', 'membership', 'trainers', 'gallery', 'why-us', 'location', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Membership', href: '#membership', id: 'membership' },
    { name: 'Trainers', href: '#trainers', id: 'trainers' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Why Abiy Gym', href: '#why-us', id: 'why-us' },
    { name: 'Location', href: '#location', id: 'location' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0b0e17] border-b border-amber-500/20 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bole, Addis Ababa, Ethiopia</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:inline-block text-slate-400">
              Open Daily: 6:00 AM – 10:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button
              id="owner-guide-badge-btn"
              onClick={onOpenOwnerGuide}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 rounded-full transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Demo / Owner Guide</span>
            </button>
            <a
              id="top-bar-phone-link"
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{GYM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-[#090a0f]/80 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <img
                src={GYM_INFO.logoUrl}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== GYM_INFO.logoCdnUrl) {
                    target.src = GYM_INFO.logoCdnUrl;
                  }
                }}
                alt={`${GYM_INFO.name} Logo`}
                className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(245,158,11,0.15)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-black tracking-wider uppercase text-white group-hover:text-amber-400 transition-colors leading-none">
                {GYM_INFO.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-400/90 leading-tight mt-1">
                BOLE · ADDIS ABABA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Gym</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="p-2.5 rounded-lg bg-amber-500 text-black font-bold flex items-center justify-center sm:hidden"
              aria-label="Call Abiy Gym"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800/80 text-slate-200 hover:text-amber-400 hover:bg-slate-800 border border-slate-700/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-[#090a0f]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-heading font-bold uppercase tracking-wider transition-colors ${
                    activeSection === link.id
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-3">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-500 text-black font-heading font-bold text-base uppercase tracking-wider shadow-lg shadow-amber-500/20"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {GYM_INFO.phone}</span>
              </a>

              <button
                id="mobile-drawer-owner-guide-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOwnerGuide();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800/70 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>View Owner Customization Guide</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
