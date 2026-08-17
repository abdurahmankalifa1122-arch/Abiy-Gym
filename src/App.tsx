import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MembershipSection } from './components/MembershipSection';
import { TrainersSection } from './components/TrainersSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OwnerGuideModal } from './components/OwnerGuideModal';
import { Phone, MapPin, Dumbbell } from 'lucide-react';
import { GYM_INFO } from './data/gymData';

export default function App() {
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MembershipSection />
        <TrainersSection />
        <GallerySection />
        <WhyChooseUs />
        <ScheduleSection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Floating Bottom Quick Action Bar on Mobile */}
      <div className="fixed bottom-3 left-3 right-3 sm:hidden z-40">
        <div className="p-2 rounded-2xl bg-[#090a0f]/95 backdrop-blur-xl border border-amber-500/40 shadow-2xl flex items-center justify-between gap-2">
          <a
            id="floating-mobile-call-btn"
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="flex-1 py-3 px-3 rounded-xl bg-amber-500 text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {GYM_INFO.phone}</span>
          </a>

          <a
            id="floating-mobile-map-btn"
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl bg-[#141724] border border-slate-700 text-amber-400 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <MapPin className="w-4 h-4" />
            <span>Map</span>
          </a>
        </div>
      </div>

      {/* Owner Demo & Customization Guide Modal */}
      <OwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />
    </div>
  );
}
