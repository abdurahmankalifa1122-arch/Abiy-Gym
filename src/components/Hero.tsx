import React from 'react';
import { ArrowRight, Phone, MapPin, Shield, Zap, Flame, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#090a0f] py-16 lg:py-24">
      {/* Background Graphic Patterns & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a26] border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Bole, Addis Ababa, Ethiopia</span>
            </div>

            {/* Main Bold Headline */}
            <div className="space-y-2">
              <span className="block font-heading text-lg sm:text-xl font-bold tracking-[0.25em] text-amber-400 uppercase">
                {GYM_INFO.name}
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
                BUILD STRENGTH. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  BUILD YOURSELF.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Step into Bole&apos;s premier strength and fitness destination. We combine heavy iron, calibrated resistance machines, and an elite discipline-focused culture to help you master consistency, athletic performance, and personal transformation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                id="hero-view-membership-btn"
                href="#membership"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-black text-base uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Membership</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-call-gym-btn"
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#151926] hover:bg-[#1c2233] text-white hover:text-amber-400 border border-slate-700/80 font-heading font-bold text-base uppercase tracking-wider transition-all hover:border-amber-500/40 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {GYM_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Trust Pillars / Key Specs */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-heading text-sm">Heavy Iron</p>
                  <p className="text-slate-400">Racks, Barbells & Dumbbells</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-heading text-sm">Male Coaches</p>
                  <p className="text-slate-400">1-on-1 Lifting Guidance</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-heading text-sm">Bole Central</p>
                  <p className="text-slate-400">Convenient Addis Ababa Hub</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card (Only Male Athletes & Gym Equipment) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-amber-500/10 to-transparent blur-lg opacity-75" />

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#12151f] shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
                  alt="Male strength athlete lifting heavy barbell at Abiy Gym in Bole Addis Ababa"
                  className="w-full h-[460px] sm:h-[520px] object-cover"
                  fallbackTitle="Abiy Gym Bole"
                  fallbackSubtitle="Build Strength. Build Yourself."
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/20 pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 right-4 bg-[#090a0f]/90 backdrop-blur-md border border-amber-500/30 px-3.5 py-1.5 rounded-xl shadow-lg">
                  <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    ETHIOPIAN BIRR (ETB)
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e111a]/95 backdrop-blur-md border border-slate-700/60 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading text-lg font-black uppercase text-white tracking-wide">
                        Abiy Gym · Bole
                      </p>
                      <p className="text-xs text-slate-400">
                        Discipline · Power · Pure Performance
                      </p>
                    </div>
                    <a
                      id="hero-badge-contact-btn"
                      href="#contact"
                      className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Inquire
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
