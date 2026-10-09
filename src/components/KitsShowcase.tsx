import React, { useState } from 'react';
import { Sparkles, Instagram, ArrowRight, Layers } from 'lucide-react';
import { FEATURED_KITS, STORE_INFO } from '../data/storeData';

export const KitsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="w-full max-w-md mx-auto px-4 py-5" aria-labelledby="kits-heading">
      <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 rounded-3xl p-5 shadow-xl relative overflow-hidden">
        {/* Subtle decorative accent */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Destaque Exclusivo</span>
          </div>

          <h2
            id="kits-heading"
            className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-heading uppercase"
          >
            OS MELHORES KITS MASCULINOS
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            Renove seu visual e encontre combinações para diferentes ocasiões. Acesse nosso Instagram e confira os modelos disponíveis.
          </p>
        </div>

        {/* Kits Interactive Preview */}
        <div className="space-y-3">
          {/* Main Selected Kit Card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 group">
            <img
              src={FEATURED_KITS[activeTab].imageUrl}
              alt={FEATURED_KITS[activeTab].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

            {/* Overlay metadata */}
            <div className="absolute bottom-0 inset-x-0 p-4 text-left">
              <span className="text-[11px] font-semibold text-amber-400 tracking-wider uppercase mb-1 block">
                {FEATURED_KITS[activeTab].category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {FEATURED_KITS[activeTab].title}
              </h3>
              <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                {FEATURED_KITS[activeTab].description}
              </p>
            </div>
          </div>

          {/* Quick Selector Tabs */}
          <div className="grid grid-cols-4 gap-2 pt-1" role="tablist" aria-label="Seletor de Kits">
            {FEATURED_KITS.map((kit, idx) => (
              <button
                key={kit.id}
                role="tab"
                aria-selected={activeTab === idx}
                onClick={() => setActiveTab(idx)}
                className={`relative rounded-xl overflow-hidden aspect-square border transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'border-amber-400 ring-2 ring-amber-400/30 scale-100'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img
                  src={kit.imageUrl}
                  alt={kit.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {activeTab === idx && (
                  <div className="absolute inset-0 bg-amber-400/10 pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1 pt-1">
            <span className="flex items-center gap-1 text-zinc-400">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Combinações completas na loja</span>
            </span>
            <span className="text-zinc-500">Toque para alternar</span>
          </div>
        </div>

        {/* CTA to Instagram */}
        <div className="mt-5">
          <a
            href={STORE_INFO.mainInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm tracking-wide border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-md group"
          >
            <Instagram className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>VER KITS E NOVIDADES NO INSTAGRAM</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 group-hover:text-amber-400 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};
