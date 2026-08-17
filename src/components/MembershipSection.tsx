import React, { useState } from 'react';
import { Check, Phone, ShieldCheck, Sparkles, AlertCircle, Copy, CheckCircle2, MessageSquare } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { MembershipPlan } from '../types';

export const MembershipSection: React.FC = () => {
  const [selectedPlanForInquiry, setSelectedPlanForInquiry] = useState<MembershipPlan | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(GYM_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const generateInquiryMessage = (planTitle: string) => {
    return `Hello Abiy Gym! I am interested in joining your gym in Bole, Addis Ababa. Please send me current pricing and details for the "${planTitle}" in Ethiopian Birr (ETB). Thank you!`;
  };

  const handleCopyInquiry = (planTitle: string) => {
    const text = generateInquiryMessage(planTitle);
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <section id="membership" className="relative py-24 bg-[#0c0e16] border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Membership & Rates</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            TRANSPARENT <span className="text-amber-400">MEMBERSHIP</span> PLANS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Invest in your strength, health, and physical discipline. All membership rates are calculated in Ethiopian Birr (ETB).
          </p>
        </div>

        {/* Informational Notice Box (No Online Payments Disclaimer) */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-[#141726] border border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white uppercase tracking-wider text-xs">
                Direct Gym Inquiries & Registration in ETB
              </p>
              <p className="text-slate-400 mt-0.5">
                To guarantee current promotional rates, discounts, and personalized training packages, memberships are arranged directly via phone or at our Bole front desk.
              </p>
            </div>
          </div>
          <button
            id="copy-phone-notice-btn"
            onClick={handleCopyPhone}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 border border-slate-700"
          >
            {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
            <span>{copiedPhone ? 'Copied Phone!' : 'Copy Phone: ' + GYM_INFO.phone}</span>
          </button>
        </div>

        {/* Pricing Cards 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              id={`membership-card-${plan.id}`}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#181d2c] to-[#121520] border-2 border-amber-500 shadow-2xl shadow-amber-500/10 -translate-y-1'
                  : 'bg-[#121520] border border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {/* Badge if present */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-heading font-black tracking-widest uppercase shadow-md ${
                    plan.popular
                      ? 'bg-amber-500 text-black'
                      : 'bg-slate-800 text-amber-400 border border-amber-500/30'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="space-y-3 pt-2">
                <div className="text-center pb-4 border-b border-slate-800">
                  <h3 className="font-heading text-xl font-bold uppercase text-white">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {plan.duration}
                  </p>
                  
                  {/* Price Tag */}
                  <div className="mt-4 py-2 px-3 rounded-xl bg-black/40 border border-slate-800">
                    <span className="font-heading text-lg font-black uppercase text-amber-400 tracking-wide block">
                      {plan.priceDisplay}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {plan.subtext}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-4 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included Amenities:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action CTAs */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <a
                  id={`plan-call-btn-${plan.id}`}
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className={`w-full py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Contact for Pricing</span>
                </a>

                <button
                  id={`plan-inquire-btn-${plan.id}`}
                  onClick={() => setSelectedPlanForInquiry(plan)}
                  className="w-full py-2 rounded-lg bg-transparent hover:bg-slate-800 text-slate-400 hover:text-amber-400 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Create Direct Message</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Message Generator Box (When clicked) */}
        {selectedPlanForInquiry && (
          <div className="mt-8 p-6 rounded-2xl bg-[#151928] border border-amber-500/40 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="font-heading text-lg font-bold uppercase text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                  <span>Inquiry Template for {selectedPlanForInquiry.title}</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Copy this inquiry text to send via SMS or phone message to <strong className="text-white">{GYM_INFO.phone}</strong>:
                </p>
              </div>
              <button
                onClick={() => setSelectedPlanForInquiry(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Dismiss
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-black/50 border border-slate-700 text-xs sm:text-sm text-amber-200/90 font-mono mb-4">
              {generateInquiryMessage(selectedPlanForInquiry.title)}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                id="copy-inquiry-text-btn"
                onClick={() => handleCopyInquiry(selectedPlanForInquiry.title)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                {copiedMessage ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedMessage ? 'Message Copied to Clipboard!' : 'Copy Message Text'}</span>
              </button>

              <a
                id="quick-sms-inquiry-btn"
                href={`sms:${GYM_INFO.phoneRaw}?body=${encodeURIComponent(generateInquiryMessage(selectedPlanForInquiry.title))}`}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Send SMS to {GYM_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}

        {/* Footnote on Pricing Customization for the Owner */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>
            [Gym Owner Note]: You can replace "Price: Contact Gym" with your confirmed ETB figures (e.g. "2,500 ETB / Month") whenever you choose to publish them.
          </span>
        </div>

      </div>
    </section>
  );
};
