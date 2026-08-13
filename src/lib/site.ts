// Dados da profissional — edite aqui para atualizar o site inteiro.
export const site = {
  name: "Graziele Cristina Lima",
  role: "Advocacia Criminal | Direito Sucessório",
  experienceYears: 12,
  whatsapp: "5532988281815",
  whatsappDisplay: "(32) 98828-1815",
  email: "grazielelimaadvogada@gmail.com",
  instagram: {
    handle: "@advogadagraziele_lima_",
    url: "https://instagram.com/advogadagraziele_lima_",
  },
  youtube: {
    name: "Adv. Criminalista Graziele Lima",
    url: "https://www.youtube.com/@advogadagrazielelima",
  },
  address: "[INSERIR ENDEREÇO DO ESCRITÓRIO]",
  oab: "[INSERIR NÚMERO DA OAB]",
} as const;

export const waMessages = {
  geral:
    "Olá, Dra. Graziele. Encontrei seu site e gostaria de agendar um atendimento.",
  criminal:
    "Olá, Dra. Graziele. Gostaria de falar sobre uma questão relacionada ao Direito Criminal.",
  sucessorio:
    "Olá, Dra. Graziele. Gostaria de orientação sobre uma questão sucessória.",
  patrimonial:
    "Olá, Dra. Graziele. Gostaria de conversar sobre planejamento patrimonial.",
} as const;

export function whatsappLink(message: string = waMessages.geral) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Vídeos do canal — adicione manualmente os IDs quando disponíveis.
export const videos: { id: string; title: string }[] = [];
