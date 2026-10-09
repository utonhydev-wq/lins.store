export interface StoreKit {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export const STORE_INFO = {
  name: "LINS STORE OFICIAL",
  tagline: "ROUPA MASCULINA",
  subtitle: "Estilo masculino, qualidade e os melhores kits para você.",
  description:
    "Encontre seu estilo com a LINS STORE. Confira nossas novidades, conheça nossos produtos e descubra as opções disponíveis para você.",
  locationShort: "Prazeres, Jaboatão dos Guararapes — PE",
  city: "Jaboatão dos Guararapes",
  neighborhood: "Prazeres",
  state: "PE",
  hoursText: "Segunda a sábado, das 10h às 19h",
  hoursSchedule: {
    startHour: 10,
    endHour: 19,
    openDays: [1, 2, 3, 4, 5, 6], // 1=Mon, ..., 6=Sat
  },
  logoUrl: "https://i.postimg.cc/RFKbR5pp/logo-2.jpg",
  mainInstagram: {
    handle: "@lins.store.principal",
    url: "https://www.instagram.com/lins.store.principal/",
  },
  backupInstagram: {
    handle: "@linsstore.reseeva5",
    url: "https://www.instagram.com/linsstore.reseeva5/",
  },
  googleMapsUrl: "https://share.google/82vUdI2mF7tJucda1",
  googleReviewsUrl:
    "https://search.google.com/local/writereview?placeid=ChIJUxTCmr7hqgcR-qVc4B0fPvQ",
  footerQuote: "LINS STORE OFICIAL — Seu estilo começa aqui.",
};

export const FEATURED_KITS: StoreKit[] = [
  {
    id: "kit-street-casual",
    title: "Kit Casual Urbano",
    category: "Combinações Essenciais",
    description: "T-shirt premium com modelagem alinhada e bermuda de alto conforto para o dia a dia.",
    imageUrl:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kit-polo-linho",
    title: "Kit Polo & Alfaiataria",
    category: "Visual Elegante",
    description: "Polo texturizada gola estruturada combinada com bermuda ou calça slim elegante.",
    imageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kit-streetwear-black",
    title: "Kit All Black Street",
    category: "Streetwear Premium",
    description: "Estética contemporânea, caimento moderno e presença marcante para a noite.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kit-weekend-vibe",
    title: "Kit Weekend & Lazer",
    category: "Linha Fim de Semana",
    description: "Cores coordenadas, tecidos leves e cortes que valorizam a silhueta masculina.",
    imageUrl:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
  },
];
