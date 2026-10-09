import React, { useState } from 'react';
import { X, Copy, Check, Share2, Instagram } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: STORE_INFO.name,
          text: `${STORE_INFO.name} — ${STORE_INFO.subtitle}`,
          url: window.location.href,
        });
        onClose();
      } catch {
        // Ignored if cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-sm bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
            <Share2 className="w-6 h-6" />
          </div>
          <h2 id="share-title" className="text-lg font-bold text-white">
            Compartilhar Bio da Loja
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Envie o link oficial da {STORE_INFO.name} para amigos e clientes.
          </p>
        </div>

        <div className="space-y-2.5">
          <button
            onClick={handleCopyLink}
            type="button"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs sm:text-sm border border-white/5 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Link Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-300" />
                <span>Copiar Link da Página</span>
              </>
            )}
          </button>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Compartilhar via Celular</span>
            </button>
          )}

          <a
            href={STORE_INFO.mainInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
          >
            <Instagram className="w-4 h-4 text-amber-400" />
            <span>Visitar @lins.store.principal</span>
          </a>
        </div>
      </div>
    </div>
  );
};
