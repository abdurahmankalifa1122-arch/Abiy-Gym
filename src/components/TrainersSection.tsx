import React from 'react';
import { ShieldCheck, Dumbbell, Award, Edit3, Phone } from 'lucide-react';
import { TRAINERS_DATA, GYM_INFO } from '../data/gymData';
import { ImageWithFallback } from './ImageWithFallback';

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="relative py-24 bg-[#090a0f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Dedicated Coaching</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            EXPERT <span className="text-amber-400">MALE</span> TRAINERS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experienced coaching staff dedicated to lifting biomechanics, safety, strength progression, and relentless motivation in Bole.
          </p>
        </div>

        {/* Trainers 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1"
            >
              {/* Trainer Photo (Strictly Male Fitness Coach) */}
              <div className="relative h-80 w-full overflow-hidden bg-[#151928]">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={trainer.role}
                  fallbackSubtitle="Abiy Gym Bole"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111420] via-black/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-400 font-heading font-bold text-xs uppercase tracking-wider">
                    {trainer.experience}
                  </span>
                </div>

                {/* Editable Indicator */}
                {trainer.isEditablePlaceholder && (
                  <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-md border border-amber-500/40 px-2 py-0.5 rounded text-[10px] text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Edit3 className="w-3 h-3" />
                    <span>Editable</span>
                  </div>
                )}
              </div>

              {/* Trainer Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block">
                    {trainer.role}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                {/* Specialties Chips */}
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-2">
                    Core Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trainer.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-semibold text-slate-300 border border-slate-700/60"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <a
                    id={`book-trainer-btn-${trainer.id}`}
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-200 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-700/60"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Book 1-on-1 Coaching</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trainer Owner Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#141724] border border-amber-500/20 text-xs text-slate-400 flex items-start gap-3 max-w-3xl mx-auto">
          <Edit3 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-amber-400">[Gym Owner Customization Notice]:</strong> Trainer names, photos, bio summaries, and certifications shown here are high-end editable placeholders. Replace them with Abiy Gym&apos;s exact coaching staff profiles upon launch.
          </p>
        </div>

      </div>
    </section>
  );
};
