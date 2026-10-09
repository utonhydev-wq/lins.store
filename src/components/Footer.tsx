import React, { useState } from 'react';
import { Instagram, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="w-full max-w-md mx-auto px-4 pt-6 pb-12 text-center">
      <div className="border-t border-white/10 pt-8 flex flex-col items-center">
        {/* Footer Logo */}
        <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-b from-amber-400/50 to-zinc-800 mb-3 shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 flex items-center justify-center">
            {!imgError ? (
              <img
                src={STORE_INFO.logoUrl}
                alt="Logo LINS STORE OFICIAL"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <span className="text-xs font-black text-amber-400">LINS</span>
            )}
          </div>
        </div>

        {/* Brand Name & Segment */}
        <div className="text-base font-extrabold text-white tracking-tight uppercase font-heading">
          {STORE_INFO.name}
        </div>
        <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mt-0.5">
          {STORE_INFO.tagline}
        </div>

        {/* Location & Schedule summary */}
        <div className="mt-4 space-y-1.5 text-xs text-zinc-400">
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Localização: {STORE_INFO.locationShort}</span>
          </div>

          <div className="flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Horário: {STORE_INFO.hoursText}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <a
            href={STORE_INFO.mainInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white border border-white/5 transition-all"
          >
            <Instagram className="w-3.5 h-3.5 text-amber-400" />
            <span>{STORE_INFO.mainInstagram.handle}</span>
          </a>

          <a
            href={STORE_INFO.backupInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white border border-white/5 transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{STORE_INFO.backupInstagram.handle}</span>
          </a>
        </div>

        {/* Required Signature Quote */}
        <div className="mt-8 pt-5 border-t border-white/5 w-full">
          <p className="text-xs sm:text-sm font-bold text-amber-300/90 tracking-wide uppercase">
            {STORE_INFO.footerQuote}
          </p>
          <p className="text-[11px] text-zinc-500 mt-2 flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
