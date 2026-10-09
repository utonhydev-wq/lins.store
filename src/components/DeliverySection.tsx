import React from 'react';
import { Truck, MessageCircle, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const DeliverySection: React.FC = () => {
  return (
    <section className="w-full max-w-md mx-auto px-4 py-2" aria-labelledby="delivery-heading">
      <div className="bg-gradient-to-r from-zinc-900/90 via-zinc-900/80 to-zinc-950/90 border border-white/10 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-lg">
        <div className="flex items-start gap-3.5">
          {/* Delivery Icon Badge */}
          <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Truck className="w-5 h-5" />
          </div>

          <div className="flex-1 text-left">
            <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-0.5">
              Serviço de Entrega
            </div>
            <h2
              id="delivery-heading"
              className="text-base font-bold text-white tracking-tight uppercase font-heading"
            >
              LEVAMOS ATÉ VOCÊ!
            </h2>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              Fazemos entregas. Entre em contato com a loja para consultar disponibilidade, regiões atendidas e condições de entrega.
            </p>

            <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between">
              <a
                href={STORE_INFO.mainInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar entrega no Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
