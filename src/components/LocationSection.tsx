import React, { useState } from 'react';
import { MapPin, Navigation, Phone, ExternalLink, ShieldCheck, CheckCircle2, Copy } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${GYM_INFO.name}, ${GYM_INFO.location}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="relative py-24 bg-[#0c0e16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Addis Ababa Facility</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            LOCATION & <span className="text-amber-400">DIRECTIONS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Centrally located in Bole, Addis Ababa, Ethiopia. Easy access for morning, afternoon, and evening workout sessions.
          </p>
        </div>

        {/* Location 2-Column Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Fast CTAs */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#111420] border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-black uppercase text-white">
                    {GYM_INFO.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                    Bole District · Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Abiy Gym is situated in Bole, one of Addis Ababa&apos;s most active commercial and residential districts. Whether you work nearby or commute, our gym offers ample training space, locker storage, and a serious lifting atmosphere.
              </p>

              <div className="p-4 rounded-xl bg-[#161a28] border border-slate-700/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider">Gym Name:</span>
                  <span className="text-white font-bold">{GYM_INFO.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider">Location:</span>
                  <span className="text-white font-bold">{GYM_INFO.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider">Direct Phone:</span>
                  <a href={`tel:${GYM_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                    {GYM_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider">Currency:</span>
                  <span className="text-slate-200">{GYM_INFO.currency}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="location-google-maps-btn"
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  id="location-call-gym-btn"
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {GYM_INFO.phone}</span>
                </a>
              </div>

              <button
                id="copy-address-btn"
                onClick={handleCopyAddress}
                className="w-full py-2 rounded-lg bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Address Copied!' : 'Copy Location Text to Clipboard'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Map Simulation & Directions Guidance */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-[#111420] border border-slate-800 p-8 flex flex-col justify-between shadow-xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-lg font-bold uppercase text-white flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  <span>Bole Arrival & Directions</span>
                </h4>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  Addis Ababa
                </span>
              </div>

              {/* Stylized Dark Map Graphic Preview */}
              <div className="relative h-60 rounded-xl overflow-hidden bg-[#090b10] border border-slate-800 flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 animate-bounce">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h5 className="font-heading text-base font-black uppercase text-white tracking-wide">
                      ABIY GYM · BOLE
                    </h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                  <a
                    href={GYM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-amber-500 hover:text-black text-amber-400 text-xs font-bold uppercase tracking-wider transition-all border border-amber-500/30"
                  >
                    <span>Launch Live GPS Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Guidance Tips */}
              <div className="space-y-2 text-xs text-slate-400">
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>Call <strong>+251 91 214 30 91</strong> for specific building landmarks or parking directions.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>[Owner Note]: The Google Maps button uses a live Addis Ababa search query and can be linked to your exact building pin.</span>
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              <span>Abiy Gym · Bole, Addis Ababa, Ethiopia · +251 91 214 30 91</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
