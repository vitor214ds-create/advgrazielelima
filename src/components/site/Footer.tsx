import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl text-white">{site.name}</p>
          <div className="gold-rule my-4" />
          <p className="max-w-sm text-sm leading-relaxed">
            {site.name} — Advocacia Criminal e Direito Sucessório. Atuação em Direito
            Criminal, Direito Sucessório e Planejamento Patrimonial.
          </p>
          <p className="mt-4 text-xs text-white/45">
            OAB: {site.oab} · Endereço: {site.address}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Início</Link></li>
            <li><Link to="/" hash="sobre" className="hover:text-gold">Sobre</Link></li>
            <li><Link to="/direito-criminal" className="hover:text-gold">Direito Criminal</Link></li>
            <li><Link to="/direito-sucessorio" className="hover:text-gold">Direito Sucessório</Link></li>
            <li><Link to="/planejamento-patrimonial" className="hover:text-gold">Planejamento Patrimonial</Link></li>
            <li><Link to="/" hash="conteudos" className="hover:text-gold">Conteúdos</Link></li>
            <li><Link to="/" hash="contato" className="hover:text-gold">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Contato</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-gold">
                <Mail className="h-4 w-4 shrink-0 text-gold" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Instagram className="h-4 w-4 text-gold" /> {site.instagram.handle}
              </a>
            </li>
            <li>
              <a href={site.youtube.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Youtube className="h-4 w-4 text-gold" /> {site.youtube.name}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-gold">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-gold">Termos de Uso</Link>
            <Link to="/politica-de-privacidade" hash="lgpd" className="hover:text-gold">LGPD</Link>
            <Link to="/termos-de-uso" hash="aviso-legal" className="hover:text-gold">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
