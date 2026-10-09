import React from 'react';
import { Star, MessageSquarePlus, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const ReviewSection: React.FC = () => {
  return (
    <section className="w-full max-w-md mx-auto px-4 py-3" aria-labelledby="review-heading">
      <div className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950/90 border border-white/10 rounded-3xl p-5 shadow-lg text-center relative overflow-hidden">
        {/* Subtle decorative stars */}
        <div className="flex items-center justify-center gap-1 mb-2 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <h2
          id="review-heading"
          className="text-base sm:text-lg font-bold text-white tracking-tight uppercase font-heading"
        >
          SUA OPINIÃO É IMPORTANTE!
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-xs mx-auto mt-2 leading-relaxed">
          Já comprou na LINS STORE? Avalie sua experiência e ajude outras pessoas a conhecer nossa loja.
        </p>

        <div className="mt-4">
          <a
            href={STORE_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/90 border border-amber-400/30 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-[0.98] group"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>AVALIAR NO GOOGLE</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
