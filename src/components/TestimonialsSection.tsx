import React from 'react';
import { MessageSquareQuote, Star, Edit3, UserCheck, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0c0e16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Member Community Voice</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            COMMUNITY <span className="text-amber-400">SPOTLIGHT</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dedicated testimonials highlighting consistency, lifting culture, and progress at Abiy Gym in Bole.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-[#121522] border border-slate-800 flex flex-col justify-between shadow-xl"
            >
              {/* Top rating & editable indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Edit3 className="w-3 h-3" />
                  <span>Sample Placeholder</span>
                </span>
              </div>

              {/* Quote text */}
              <div className="space-y-4 my-2">
                <MessageSquareQuote className="w-8 h-8 text-amber-500/25" />
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                  <p className="text-[10px] text-amber-400/80 font-mono mt-0.5">{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Guidance Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#141724] border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <p>
            <strong className="text-white">[Owner Verification Note]:</strong> These cards are pre-formatted templates. Once you collect authentic reviews from your registered members in Bole, simply replace the placeholder text with their genuine feedback!
          </p>
        </div>

      </div>
    </section>
  );
};
