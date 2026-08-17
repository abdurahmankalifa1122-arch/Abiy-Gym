import React from 'react';
import { X, Check, Dumbbell, Clock, Users, ArrowRight } from 'lucide-react';
import { ServiceProgram } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { GYM_INFO } from '../data/gymData';

interface ProgramModalProps {
  program: ServiceProgram | null;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111420] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-slate-200">
        
        {/* Close Button */}
        <button
          id="close-program-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black flex items-center justify-center text-white transition-colors"
          aria-label="Close program details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-[#12151f] shrink-0">
          <ImageWithFallback
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            fallbackTitle={program.title}
            fallbackSubtitle="Abiy Gym Bole"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111420] via-black/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-500 text-black font-black text-xs uppercase tracking-wider mb-1.5">
              {program.category}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
              {program.title}
            </h3>
            <p className="text-xs sm:text-sm text-amber-300 font-medium">{program.tagline}</p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
              Program Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
              Included Program Elements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#171b29] border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <div className="w-5 h-5 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2 flex items-center gap-1.5">
              <Dumbbell className="w-4 h-4 text-amber-400" />
              <span>Dedicated Equipment Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.equipment.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-xl bg-[#161a27] border border-amber-500/20">
            <h4 className="text-xs font-bold uppercase text-amber-400 mb-1 flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>Ideal For</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {program.targetAudience}
            </p>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              <span>Ready to start this program in Bole, Addis Ababa?</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                id="modal-call-gym-btn"
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-sm uppercase tracking-wider transition-all text-center"
              >
                Call {GYM_INFO.phone}
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
