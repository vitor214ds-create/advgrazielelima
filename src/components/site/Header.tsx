import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { label: "Início", to: "/", hash: undefined },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Áreas de Atuação", to: "/", hash: "areas" },
  { label: "Atuação Estratégica", to: "/", hash: "estrategia" },
  { label: "Experiência", to: "/", hash: "experiencia" },
  { label: "Perguntas Frequentes", to: "/", hash: "faq" },
  { label: "Contato", to: "/", hash: "contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_0_var(--gold)]/20"
          : "bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Link to="/" className="group flex flex-col leading-tight">
          <span className="font-display text-base tracking-wide text-white sm:text-lg">
            {site.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-gold sm:text-[11px]">
            {site.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className="relative text-[13px] text-white/75 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm border border-gold/60 bg-bordeaux px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-bordeaux-soft md:inline-block"
          >
            Falar com a Advogada
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="rounded-sm border border-white/15 p-2 text-white transition-colors hover:border-gold/60 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ink/98 transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-sm border border-gold/60 bg-bordeaux px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-white"
          >
            Falar com a Advogada
          </a>
        </nav>
      </div>
    </header>
  );
}
