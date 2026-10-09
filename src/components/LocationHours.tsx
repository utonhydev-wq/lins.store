import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Copy, Check } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getStoreStatus } from '../utils/storeStatus';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const status = getStoreStatus();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText('Prazeres, Jaboatão dos Guararapes — PE');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="w-full max-w-md mx-auto px-4 py-3" aria-labelledby="location-heading">
      <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-5 shadow-lg relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h2
              id="location-heading"
              className="text-base sm:text-lg font-bold text-white tracking-tight"
            >
              Estamos em Prazeres!
            </h2>
            <p className="text-xs text-zinc-400">Jaboatão dos Guararapes — PE</p>
          </div>
        </div>

        {/* Schedule box */}
        <div className="bg-zinc-950/60 rounded-2xl p-4 border border-white/5 mb-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-zinc-200 block uppercase tracking-wider">
                  Horário de funcionamento
                </span>
                <span className="text-sm font-semibold text-white block mt-0.5">
                  Segunda a sábado
                </span>
                <span className="text-xs text-zinc-400">10h às 19h</span>
              </div>
            </div>

            <div className="text-right">
              <span
                className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                  status.isOpen
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-zinc-800 text-zinc-400 border border-white/5'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    status.isOpen ? 'bg-emerald-400' : 'bg-zinc-500'
                  }`}
                />
                {status.isOpen ? 'Aberto' : 'Fechado'}
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs tracking-wide shadow-md transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>ABRIR NO GOOGLE MAPS</span>
          </a>

          <button
            onClick={handleCopyAddress}
            type="button"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white font-medium text-xs border border-white/10 transition-all active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Endereço Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>Copiar Endereço</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
