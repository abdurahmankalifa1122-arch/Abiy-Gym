import React from 'react';
import { ShieldCheck, Target, Flame, Check, Edit3, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#0c0e14] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5" />
            <span>About Abiy Gym</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            FORGED IN <span className="text-amber-400">DISCIPLINE</span> & STRENGTH
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Located in the heart of Bole, Addis Ababa, Abiy Gym is engineered for those who take physical conditioning, consistency, and genuine self-improvement seriously.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Stack (Equipment & Male Lifters) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-[#12151f]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80"
                alt="Male strength athlete training at Abiy Gym in Bole Addis Ababa"
                className="w-full h-80 sm:h-96 object-cover"
                fallbackTitle="Abiy Gym Heavy Strength"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090a0f]/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm uppercase font-bold text-white">Serious Training Culture</p>
                    <p className="text-xs text-slate-400">Addis Ababa · Bole District</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  Daily Access
                </span>
              </div>
            </div>

            {/* Quick Grid of Secondary Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 h-40 bg-[#12151f]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80"
                  alt="Modern gym machines at Abiy Gym Bole"
                  className="w-full h-full object-cover"
                  fallbackTitle="Machine Floor"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 h-40 bg-[#12151f]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                  alt="Squat power racks and barbells"
                  className="w-full h-full object-cover"
                  fallbackTitle="Power Cages"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Core Narrative */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
                A Dedicated Environment Designed for Real Progress
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At <strong className="text-white">Abiy Gym</strong>, we believe fitness is not a temporary trend—it is a daily discipline that refines your mental focus, physical power, and long-term vitality.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Our Bole facility is structured to provide an uncluttered, high-intensity training space. Whether you are executing heavy compound barbell lifts, targeting hypertrophy with selectorized machines, or building stamina in the cardio zone, everything is arranged to support your training momentum.
              </p>
            </div>

            {/* Owner Customization Notice */}
            <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300/90 flex items-start gap-2.5">
              <Edit3 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-400">[Owner Editable Section]:</span>
                <span className="ml-1 text-slate-300">
                  Gym story, founding milestones, and facility dimensions can be updated here when the gym owner is ready.
                </span>
              </div>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#131622] border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Strength & Power</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Olympic bars, power racks & heavy loads</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#131622] border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Daily Consistency</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Reliable hours from morning to evening</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#131622] border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Male Coaches</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Form guidance and safe spotting</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#131622] border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Prime Bole Location</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Addis Ababa fitness hub</p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="about-contact-cta"
                href="#contact"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-sm uppercase tracking-wider transition-all"
              >
                Visit Abiy Gym in Bole
              </a>
              <a
                id="about-call-cta"
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Call {GYM_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
