import React from 'react';
import { Dumbbell, Phone, MapPin, Clock, ArrowUp, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FooterProps {
  onOpenOwnerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center flex-shrink-0">
              <img
                src={GYM_INFO.logoUrl}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== GYM_INFO.logoCdnUrl) {
                    target.src = GYM_INFO.logoCdnUrl;
                  }
                }}
                alt={`${GYM_INFO.name} Logo`}
                className="w-14 h-14 object-contain drop-shadow-[0_4px_12px_rgba(245,158,11,0.15)]"
              />
            </div>
            <div>
              <span className="font-heading text-xl font-black uppercase text-white tracking-wider block">
                {GYM_INFO.name}
              </span>
              <span className="text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                BOLE · ADDIS ABABA, ETHIOPIA
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center">
            <a
              id="footer-call-btn"
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call {GYM_INFO.phone}</span>
            </a>

            <button
              id="footer-owner-guide-btn"
              onClick={onOpenOwnerGuide}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-amber-500/30"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Owner Demo Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Philosophy */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              About Abiy Gym
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Bole&apos;s dedicated strength and conditioning facility in Addis Ababa. Heavy free weights, selectorized machinery, cardio systems, and dedicated male trainers.
            </p>
            <p className="text-amber-400 font-bold uppercase font-heading text-xs tracking-wider">
              {GYM_INFO.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Facility</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Services & Programs</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-amber-400 transition-colors">Membership in ETB</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-amber-400 transition-colors">Male Coaching Staff</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Visual Photo Tour</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Operating Hours</span>
            </h4>
            <div className="space-y-1 text-xs">
              <p className="text-white font-medium">Monday – Friday</p>
              <p className="text-slate-400">6:00 AM – 10:00 PM</p>
              
              <p className="text-white font-medium pt-1.5">Saturday</p>
              <p className="text-slate-400">6:00 AM – 9:00 PM</p>
              
              <p className="text-white font-medium pt-1.5">Sunday</p>
              <p className="text-slate-400">8:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Bole Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Facility Contact</span>
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300">
                <strong className="text-white">Abiy Gym</strong><br />
                Bole, Addis Ababa, Ethiopia
              </p>
              <p>
                <a href={`tel:${GYM_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                  {GYM_INFO.phone}
                </a>
              </p>
              <p className="text-slate-500 text-[11px]">
                Membership rates calculated in Ethiopian Birr (ETB).
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Abiy Gym. Bole, Addis Ababa, Ethiopia. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Static GitHub Pages Ready</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-300 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
