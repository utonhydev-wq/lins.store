import React, { useState } from 'react';
import { Header } from './components/Header';
import { MainButtons } from './components/MainButtons';
import { KitsShowcase } from './components/KitsShowcase';
import { DeliverySection } from './components/DeliverySection';
import { LocationHours } from './components/LocationHours';
import { ReviewSection } from './components/ReviewSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090c] text-zinc-100 flex flex-col items-center relative selection:bg-amber-400 selection:text-zinc-950">
      {/* Background Ambience / Glow */}
      <div className="fixed inset-0 pointer-events-none bg-ambient-glow" />

      {/* Subtle top ambient beam */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-0" />

      {/* Main Content Container (Mobile-first responsive shell) */}
      <main className="w-full max-w-lg min-h-screen relative z-10 flex flex-col mx-auto">
        {/* 1. Header / Presentation */}
        <Header onShare={() => setIsShareOpen(true)} />

        {/* 2. Main Action Buttons */}
        <MainButtons />

        {/* 3. Commercial Highlight — Kits Masculinos */}
        <KitsShowcase />

        {/* 4. Delivery Section */}
        <DeliverySection />

        {/* 5. Location & Operating Hours */}
        <LocationHours />

        {/* 6. Google Reviews & Trust */}
        <ReviewSection />

        {/* 7. Footer */}
        <Footer />
      </main>

      {/* Share Modal Dialog */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
