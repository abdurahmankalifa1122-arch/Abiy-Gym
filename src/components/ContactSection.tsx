import React, { useState } from 'react';
import { Phone, MapPin, Send, MessageSquare, Copy, CheckCircle2, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';
import { GYM_INFO, FAQ_DATA } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('Monthly Membership');
  const [userNote, setUserNote] = useState('');
  const [generatedSuccess, setGeneratedSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(GYM_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleGenerateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Hello Abiy Gym! My name is ${name.trim() || 'a future member'}. I am inquiring about "${interest}" at your gym in Bole, Addis Ababa. ${userNote.trim() ? `Note: ${userNote.trim()}` : ''} Please let me know your current rates in ETB. Thank you!`;
    navigator.clipboard.writeText(formattedText);
    setGeneratedSuccess(true);
    setTimeout(() => setGeneratedSuccess(false), 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#090a0f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with Abiy Gym</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            START YOUR <span className="text-amber-400">TRAINING</span> TODAY
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Reach out directly to our team in Bole, Addis Ababa to discuss memberships, personal training, and visit times.
          </p>
        </div>

        {/* 2-Column Contact & Inquiry Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Phone & Gym Info Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Hero Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#161a28] to-[#10131d] border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold shadow-lg shadow-amber-500/20">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">
                    Direct Phone Line
                  </h3>
                  <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold">
                    Bole, Addis Ababa
                  </p>
                </div>
              </div>

              <div>
                <a
                  id="primary-contact-phone-link"
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="font-heading text-3xl sm:text-4xl font-black text-white hover:text-amber-400 transition-colors block tracking-wide"
                >
                  {GYM_INFO.phone}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Tap on mobile to call immediately
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="contact-call-now-cta"
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-black text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Now</span>
                </a>

                <button
                  id="contact-copy-phone-cta"
                  onClick={handleCopyPhone}
                  className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>
            </div>

            {/* Quick Gym Specs */}
            <div className="p-6 rounded-2xl bg-[#111420] border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Facility Location</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{GYM_INFO.name}</p>
                  <p className="text-xs text-slate-400">{GYM_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Hours of Operation</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{GYM_INFO.operatingHours.weekdays}</p>
                  <p className="text-xs text-slate-400">{GYM_INFO.operatingHours.saturday} · {GYM_INFO.operatingHours.sunday}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form (Pure client-side) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-2xl bg-[#111420] border border-slate-800 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold uppercase text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-amber-400" />
                  <span>Quick Membership Inquiry Builder</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Select your program and click below to generate an instant, formatted inquiry ready to send or mention to Abiy Gym.
                </p>
              </div>

              <form onSubmit={handleGenerateInquiry} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="inquiry-name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name (e.g. Dawit, Samuel, Yohannes)"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0c12] border border-slate-700/80 text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-interest-select" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Program / Membership of Interest
                  </label>
                  <select
                    id="inquiry-interest-select"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0c12] border border-slate-700/80 text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Monthly Membership">Monthly Membership (1 Month)</option>
                    <option value="3-Month Membership">3-Month Membership (Popular)</option>
                    <option value="6-Month / Annual Membership">6-Month / Annual Membership</option>
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training with Male Coach</option>
                    <option value="Strength & Powerlifting">Strength & Powerlifting Zone Access</option>
                    <option value="General Facility Walkthrough">General Facility Walkthrough & Visit</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-notes-textarea" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Questions or Specific Goals (Optional)
                  </label>
                  <textarea
                    id="inquiry-notes-textarea"
                    rows={3}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="e.g. Inquiring about morning slots, student rates in ETB, or coach availability..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0c12] border border-slate-700/80 text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    id="generate-inquiry-btn"
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Inquiry Message</span>
                  </button>

                  <a
                    id="inquiry-call-trigger-btn"
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call {GYM_INFO.phone}</span>
                  </a>
                </div>

                {generatedSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Inquiry message copied to clipboard! You can paste it into SMS or mention it on your call to Abiy Gym.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="mt-20 max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8 space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-400" />
              <span>Frequently Asked Questions</span>
            </h3>
            <p className="text-xs text-slate-400">
              Clear answers regarding Abiy Gym memberships, location in Bole, and training access.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${index}`}
                  className="rounded-xl bg-[#111420] border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wide hover:text-amber-400 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
