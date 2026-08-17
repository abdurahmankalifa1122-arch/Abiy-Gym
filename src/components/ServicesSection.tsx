import React, { useState } from 'react';
import { Dumbbell, ArrowRight, ShieldCheck, Zap, Info } from 'lucide-react';
import { SERVICES_DATA } from '../data/gymData';
import { ServiceProgram } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { ProgramModal } from './ProgramModal';

export const ServicesSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ServiceProgram | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#090a0f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Training Disciplines</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            WORLD-CLASS <span className="text-amber-400">SERVICES</span> & TRACKS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured fitness programs, heavy iron zones, and dedicated coaching designed for measurable results in Bole, Addis Ababa.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-[#151926]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={service.title}
                  fallbackSubtitle="Abiy Gym Bole"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111420] via-black/30 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-400 font-heading font-bold text-xs uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Equipment Highlights Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.equipment.slice(0, 3).map((eq, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`service-details-btn-${service.id}`}
                    onClick={() => setSelectedProgram(service)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 group-hover:bg-amber-500 group-hover:text-black text-slate-200 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-700/60 group-hover:border-transparent"
                  >
                    <span>View Program Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom Banner with Owner Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#141724] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              [Owner Customization]: Additional specialized fitness tracks or class schedules can be added as provided by Abiy Gym management.
            </span>
          </div>
          <a
            id="services-cta-inquire"
            href="#contact"
            className="px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold tracking-wider uppercase whitespace-nowrap transition-colors border border-amber-500/30"
          >
            Inquire for Coaching
          </a>
        </div>

      </div>

      {/* Program Details Modal */}
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </section>
  );
};
