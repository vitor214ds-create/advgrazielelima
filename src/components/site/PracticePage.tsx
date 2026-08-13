import { Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/site";

export function PracticePage({
  eyebrow,
  title,
  intro,
  image,
  items,
  itemsTitle,
  note,
  ctaLabel,
  waMessage,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  image: string;
  items: string[];
  itemsTitle: string;
  note: string;
  ctaLabel: string;
  waMessage: string;
}) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-25">
          <img src={image} alt="" className="h-full w-full object-cover"
            style={{ objectPosition: "50% 35%" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-gold">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{eyebrow}</span>
          </nav>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <div className="gold-rule mt-6" />
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Reveal className="space-y-5">
            {intro.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <p className="border-l-2 border-gold pl-4 text-sm italic text-graphite">{note}</p>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-sm bg-bordeaux px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-bordeaux-soft"
            >
              {ctaLabel}
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-offwhite p-8">
              <p className="font-display text-xl text-ink">{itemsTitle}</p>
              <div className="gold-rule my-4" />
              <ul className="space-y-3">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-graphite">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bordeaux" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
