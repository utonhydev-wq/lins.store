import React from 'react';
import { Instagram, MapPin, Star, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const MainButtons: React.FC = () => {
  const buttons = [
    {
      id: 'main-instagram',
      title: 'CONHEÇA NOSSO INSTAGRAM',
      subtitle: 'Confira as novidades, lançamentos e kits do dia',
      url: STORE_INFO.mainInstagram.url,
      icon: Instagram,
      primary: true,
      highlightLabel: 'Destaque Oficial',
    },
    {
      id: 'store-location',
      title: 'VER LOCALIZAÇÃO DA LOJA',
      subtitle: 'Prazeres, Jaboatão dos Guararapes — Como chegar',
      url: STORE_INFO.googleMapsUrl,
      icon: MapPin,
      primary: false,
      highlightLabel: null,
    },
    {
      id: 'google-review',
      title: 'AVALIE NOSSA LOJA NO GOOGLE',
      subtitle: 'Sua opinião fortalece nosso atendimento e história',
      url: STORE_INFO.googleReviewsUrl,
      icon: Star,
      primary: false,
      highlightLabel: 'Avaliações',
    },
    {
      id: 'backup-instagram',
      title: 'INSTAGRAM RESERVA',
      subtitle: STORE_INFO.backupInstagram.handle + ' — Fique sempre conectado',
      url: STORE_INFO.backupInstagram.url,
      icon: ShieldCheck,
      primary: false,
      highlightLabel: 'Canal Oficial',
    },
  ];

  return (
    <section aria-label="Acessos Rápidos" className="w-full max-w-md mx-auto px-4 py-2 space-y-3">
      {buttons.map((btn, index) => {
        const Icon = btn.icon;

        if (btn.primary) {
          return (
            <a
              key={btn.id}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-full p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-900/80 block">
                      {btn.highlightLabel}
                    </span>
                    <h2 className="text-sm sm:text-base font-extrabold tracking-tight leading-snug text-zinc-950">
                      {btn.title}
                    </h2>
                    <p className="text-xs font-medium text-zinc-900/85 line-clamp-1">
                      {btn.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-zinc-950/10 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
                </div>
              </div>
            </a>
          );
        }

        return (
          <a
            key={btn.id}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block w-full p-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-amber-400/40 text-white transition-all duration-300 transform active:scale-[0.98] shadow-md shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-zinc-800/90 border border-white/5 text-amber-400 flex items-center justify-center shrink-0 group-hover:border-amber-400/30 group-hover:scale-105 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  {btn.highlightLabel && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-0.5">
                      {btn.highlightLabel}
                    </span>
                  )}
                  <h2 className="text-sm font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    {btn.title}
                  </h2>
                  <p className="text-xs font-normal text-zinc-400 line-clamp-1">
                    {btn.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};
