import React from 'react';
import { Clock, Sun, Moon, Zap, Edit3, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="relative py-20 bg-[#090a0f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Operating Hours</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            TRAINING <span className="text-amber-400">HOURS</span> & SLOTS
          </h2>
          <p className="text-slate-400 text-base">
            Structured for early morning lifters and late evening power sessions in Bole, Addis Ababa.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Weekdays */}
          <div className="p-6 rounded-2xl bg-[#111420] border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Monday – Friday
              </h3>
              <p className="text-xs text-slate-400">Regular Workday Schedule</p>
              <div className="py-3 px-4 rounded-xl bg-black/40 border border-slate-800 text-amber-400 font-heading text-xl font-black">
                6:00 AM – 10:00 PM
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4">
              Peak Hours: 6:00 AM – 8:30 AM & 5:30 PM – 8:30 PM
            </p>
          </div>

          {/* Saturday */}
          <div className="p-6 rounded-2xl bg-[#111420] border border-amber-500/40 flex flex-col justify-between shadow-lg shadow-amber-500/5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Saturday
              </h3>
              <p className="text-xs text-slate-400">Weekend Heavy Lift Day</p>
              <div className="py-3 px-4 rounded-xl bg-black/40 border border-slate-800 text-amber-400 font-heading text-xl font-black">
                6:00 AM – 9:00 PM
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4">
              Prime morning sparring & power sessions
            </p>
          </div>

          {/* Sunday */}
          <div className="p-6 rounded-2xl bg-[#111420] border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Sunday
              </h3>
              <p className="text-xs text-slate-400">Recovery & Maintenance</p>
              <div className="py-3 px-4 rounded-xl bg-black/40 border border-slate-800 text-amber-400 font-heading text-xl font-black">
                8:00 AM – 8:00 PM
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4">
              Open floor & recovery conditioning
            </p>
          </div>

        </div>

        {/* Schedule Customization Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-3.5 rounded-xl bg-[#141724] border border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>[Owner Editable]: Operating hours can be updated in data settings.</span>
          </div>
          <a
            id="schedule-confirm-call-btn"
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="text-amber-400 font-bold hover:underline"
          >
            Confirm Today&apos;s Hours
          </a>
        </div>

      </div>
    </section>
  );
};
