import React, { useState } from 'react';
import { MapPin, CheckCircle2, Share2, Clock, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getStoreStatus } from '../utils/storeStatus';

interface HeaderProps {
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare }) => {
  const [imgError, setImgError] = useState(false);
  const status = getStoreStatus();

  return (
    <header className="relative pt-6 pb-4 px-4 text-center flex flex-col items-center">
      {/* Top utility row: share button */}
      <div className="w-full flex items-center justify-between max-w-md mb-4 px-2">
        <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Moda Masculina Oficial</span>
        </div>

        <button
          onClick={onShare}
          type="button"
          aria-label="Compartilhar perfil"
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 text-zinc-300 hover:text-white transition-all border border-white/10 flex items-center justify-center cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Official Logo */}
      <div className="relative group mb-4">
        {/* Subtle decorative glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-600/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500" />

        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-amber-400/60 via-zinc-800 to-amber-600/40 shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 flex items-center justify-center border-2 border-zinc-900">
            {!imgError ? (
              <img
                src={STORE_INFO.logoUrl}
                alt="Logo oficial da LINS STORE OFICIAL"
                className="w-full h-full object-cover object-center scale-100 transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
                loading="eager"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-xl font-black tracking-wider text-amber-400">LINS</span>
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">STORE</span>
              </div>
            )}
          </div>
        </div>

        {/* Verified Badge */}
        <div
          title="Loja Oficial Verificada"
          className="absolute bottom-1 right-1 bg-zinc-950 text-amber-400 rounded-full p-1 shadow-lg border border-amber-500/40"
        >
          <CheckCircle2 className="w-4 h-4 fill-amber-400 text-zinc-950" />
        </div>
      </div>

      {/* Brand Title */}
      <div className="space-y-1 mb-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
          {STORE_INFO.name}
        </h1>
        <div className="text-xs sm:text-sm font-semibold tracking-widest text-amber-400/90 uppercase">
          {STORE_INFO.tagline}
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-zinc-200 font-medium max-w-sm leading-snug mb-2">
        {STORE_INFO.subtitle}
      </p>

      {/* Supporting Text */}
      <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed mb-4 px-2">
        {STORE_INFO.description}
      </p>

      {/* Location visual tag */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full mb-3 shadow-inner">
        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="font-medium">{STORE_INFO.locationShort}</span>
      </div>

      {/* Live Store Hours Indicator */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${
              status.isOpen
                ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                : 'bg-zinc-500'
            }`}
          />
          <span className={`font-semibold ${status.isOpen ? 'text-emerald-400' : 'text-zinc-400'}`}>
            {status.statusText}
          </span>
        </span>
        <span className="text-zinc-600">·</span>
        <span className="flex items-center gap-1 text-zinc-400">
          <Clock className="w-3 h-3 text-zinc-500" />
          <span>{status.nextChangeText}</span>
        </span>
      </div>
    </header>
  );
};
