import React from 'react';
import { MapPin, Dumbbell, Flame, Users, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_REASONS } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#090a0f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Abiy Gym Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            WHY TRAIN AT <span className="text-amber-400">ABIY GYM</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We provide the tools, the atmosphere, and the discipline needed to build lasting strength and athletic performance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_REASONS.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#111420] border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  {getIcon(reason.iconName)}
                </div>

                <h3 className="font-heading text-xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">Pillar 0{index + 1}</span>
                <span className="text-amber-400/80 font-semibold uppercase">Bole Addis Ababa</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
