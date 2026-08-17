import React from 'react';
import { X, CheckCircle2, Phone, MapPin, Globe, Sparkles, AlertCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#11141f] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-200">
        <button
          id="close-owner-guide-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-amber-500 hover:text-black flex items-center justify-center text-slate-400 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
              Abiy Gym — Owner Demo Guide
            </h3>
            <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold">
              Bole, Addis Ababa · Ready for Deployment
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Welcome! This website was custom-designed for <strong className="text-white">Abiy Gym</strong> in Bole, Addis Ababa. It is completely self-contained, high-performance, and ready for instant deployment to <span className="text-amber-400 font-semibold">GitHub Pages</span> or any web host without requiring a backend server or database.
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-[#161a27] border border-slate-700/60">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              1. 100% Static & GitHub Pages Ready
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Built with relative paths and client-side code. To deploy on GitHub Pages, just upload the files or run <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300">npm run build</code> and publish the <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300">dist/</code> folder.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161a27] border border-slate-700/60">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-amber-400" />
              2. Real Phone & Bole Location Integrated
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Direct call buttons and mobile tap-to-call links are connected directly to <span className="text-white font-semibold">{GYM_INFO.phone}</span>. Direct Google Maps navigation is also linked for visitors in Addis Ababa.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161a27] border border-slate-700/60">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              3. Strictly No Women Imagery & Authentic Aesthetic
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Strictly adheres to using only male strength athletes, male coaches, and professional gym equipment (power racks, dumbbells, machines) with zero female images.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161a27] border border-slate-700/60">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-sky-400" />
              4. Tasteful Editable Placeholders
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Pricing cards display <span className="text-white">"Price: Contact Gym"</span> in ETB, and trainer cards have clear editable tags so you never display unconfirmed prices or names until you provide them.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>Abiy Gym · Bole, Addis Ababa</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20"
          >
            Explore Website Demo
          </button>
        </div>
      </div>
    </div>
  );
};
