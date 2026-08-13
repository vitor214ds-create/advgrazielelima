import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gavel,
  Scale,
  ShieldCheck,
  Landmark,
  Users,
  Eye,
  Lock,
  Compass,
  GraduationCap,
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Play,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { site, waMessages, whatsappLink, videos } from "@/lib/site";
import heroImg from "@/assets/image-2.png.asset.json";
import aboutImg from "@/assets/image-3.png.asset.json";
import portraitImg from "@/assets/image-4.png.asset.json";
import suitImg from "@/assets/image.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Graziele Cristina Lima — Advocacia Criminal e Direito Sucessório",
      },
      {
        name: "description",
        content:
          "Advogada criminalista com 12 anos de experiência. Atuação em Direito Criminal, Direito Sucessório, inventário, conflitos entre herdeiros e planejamento patrimonial.",
      },
      {
        property: "og:title",
        content: "Graziele Cristina Lima — Advocacia Criminal e Direito Sucessório",
      },
      {
        property: "og:description",
        content:
          "Estratégia jurídica, experiência e defesa dos seus direitos. Direito Criminal, Direito Sucessório e Planejamento Patrimonial.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const areas = [
  {
    icon: Gavel,
    title: "Direito Criminal",
    text: "Defesa dos direitos e garantias fundamentais em questões criminais, com análise estratégica de cada caso e acompanhamento individualizado.",
    to: "/direito-criminal" as const,
  },
  {
    icon: Scale,
    title: "Direito Sucessório",
    text: "Atuação em questões sucessórias, especialmente em situações que envolvem conflitos e litígios entre herdeiros.",
    to: "/direito-sucessorio" as const,
  },
  {
    icon: Landmark,
    title: "Planejamento Patrimonial",
    text: "Organização do patrimônio, prevenção de conflitos e estruturação adequada às particularidades jurídicas de cada família.",
    to: "/planejamento-patrimonial" as const,
  },
];

const timeline = [
  {
    title: "Graduação em Direito",
    org: "Universidade Iguaçu — UNIG",
  },
  {
    title: "Pós-graduação em Ciências Penais",
    org: "Universidade Anhanguera — UNIDERP",
  },
  {
    title: "Ciências Criminológico-Forenses",
    org: "Universidad de Ciencias Empresariales y Sociales — UCES, Argentina",
  },
  {
    title: "Comissões da OAB/MG",
    org: "Participação registrada em currículo, com atuação na área de Advocacia Criminal",
  },
];

const steps = [
  { n: "01", t: "Primeiro contato", d: "O cliente apresenta brevemente sua situação." },
  { n: "02", t: "Análise inicial", d: "São identificados os principais pontos jurídicos e documentos necessários." },
  { n: "03", t: "Avaliação estratégica", d: "O caso é estudado de forma individualizada." },
  { n: "04", t: "Definição da estratégia", d: "São apresentadas as possibilidades jurídicas aplicáveis ao caso." },
  { n: "05", t: "Acompanhamento", d: "O cliente recebe orientação e acompanhamento durante as etapas necessárias." },
];

const diferenciais = [
  { icon: GraduationCap, t: "Experiência", d: "12 anos de advocacia." },
  { icon: Gavel, t: "Atuação Criminal", d: "Especialização e experiência na área criminal." },
  { icon: Scale, t: "Direito Sucessório", d: "Atuação voltada a questões sucessórias e conflitos entre herdeiros." },
  { icon: Compass, t: "Estratégia", d: "Análise individualizada de cada situação." },
  { icon: Users, t: "Atendimento Personalizado", d: "Comunicação próxima e transparente." },
  { icon: Lock, t: "Confidencialidade", d: "Tratamento responsável das informações compartilhadas pelo cliente." },
];

const situacoes: { text: string; wa: string }[] = [
  { text: "Estou respondendo a uma investigação.", wa: waMessages.criminal },
  { text: "Preciso de defesa em um processo criminal.", wa: waMessages.criminal },
  { text: "Minha família está enfrentando um conflito envolvendo herança.", wa: waMessages.sucessorio },
  { text: "Existem conflitos entre os herdeiros.", wa: waMessages.sucessorio },
  { text: "Preciso organizar meu patrimônio.", wa: waMessages.patrimonial },
  { text: "Quero entender meus direitos em um inventário.", wa: waMessages.sucessorio },
  { text: "Preciso de orientação sobre planejamento sucessório.", wa: waMessages.patrimonial },
];

const faq = [
  {
    q: "Como funciona a primeira consulta?",
    a: "O atendimento começa pela compreensão da situação apresentada. São ouvidos os fatos, analisadas as informações disponíveis e, quando necessário, solicitados documentos complementares para uma avaliação inicial responsável.",
  },
  {
    q: "O atendimento pode ser online?",
    a: "A estrutura permite atendimento online e presencial. O formato é definido conforme a natureza do caso e a disponibilidade profissional, sendo confirmado no primeiro contato.",
  },
  {
    q: "Quais documentos devo apresentar?",
    a: "A documentação depende da natureza do caso. Após o primeiro contato, o cliente é orientado sobre quais documentos são necessários para a análise da situação.",
  },
  {
    q: "Como funciona um inventário?",
    a: "De forma geral, o inventário é o procedimento em que se identificam os bens, direitos e dívidas deixados, os herdeiros envolvidos e a forma de partilha. Pode seguir a via extrajudicial ou judicial, conforme os requisitos legais. Cada sucessão possui particularidades que influenciam prazos, custos e o caminho adequado.",
  },
  {
    q: "O que fazer quando existem conflitos entre herdeiros?",
    a: "É importante buscar orientação jurídica individualizada para compreender direitos, reunir a documentação necessária e avaliar as estratégias possíveis, considerando tanto os aspectos patrimoniais quanto as relações familiares envolvidas.",
  },
  {
    q: "O que é planejamento patrimonial?",
    a: "É a organização jurídica do patrimônio ainda em vida, com o objetivo de estruturar bens e direitos, esclarecer situações e reduzir a probabilidade de conflitos futuros, sempre observando a legislação aplicável e as particularidades de cada família.",
  },
  {
    q: "Posso procurar uma advogada antes de existir um processo?",
    a: "Sim. A atuação preventiva permite compreender riscos, organizar documentos e avaliar caminhos antes que a situação se torne litigiosa.",
  },
  {
    q: "Como entrar em contato?",
    a: `O canal mais direto é o WhatsApp ${site.whatsappDisplay}. Também é possível escrever para ${site.email} ou utilizar o formulário desta página.`,
  },
];

const categorias = [
  "Direito Criminal",
  "Direito Sucessório",
  "Inventário",
  "Herança",
  "Planejamento Patrimonial",
  "Conflitos entre Herdeiros",
  "Direitos e Garantias",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-28 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" /> Advocacia Criminal | Direito Sucessório
            </p>
            <h1 className="font-display text-[2.1rem] leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
              Estratégia Jurídica, Experiência e{" "}
              <span className="text-gold">Defesa dos Seus Direitos.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/65">
              Atuação especializada em Direito Criminal, Direito Sucessório e Planejamento
              Patrimonial, com atenção individualizada para situações que exigem estratégia,
              conhecimento técnico e segurança jurídica.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-bordeaux px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-bordeaux-soft"
              >
                Falar pelo WhatsApp
              </a>
              <Link
                to="/"
                hash="areas"
                className="rounded-sm border border-gold/50 px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10"
              >
                Conheça minha atuação
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
              {[
                `${site.experienceYears} anos de advocacia`,
                "Advocacia Criminal",
                "Direito Sucessório",
                "Planejamento Patrimonial",
              ].map((t) => (
                <div key={t} className="bg-ink px-4 py-4 text-[11px] uppercase tracking-[0.12em] text-white/70">
                  {t}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="absolute -inset-3 border border-gold/25 lg:-inset-5" />
            <img
              src={heroImg.url}
              alt="Graziele Cristina Lima, advogada criminalista, em ambiente jurídico"
              className="relative h-[420px] w-full object-cover object-top sm:h-[520px] lg:h-[620px]"
              fetchPriority="high"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
              <p className="font-display text-lg text-white">{site.name}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Advogada · OAB {site.oab}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FRASE DE IMPACTO */}
      <section className="relative bg-bordeaux">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:py-20">
          <Reveal>
            <span className="font-display text-5xl leading-none text-gold/60">“</span>
            <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
              Cada caso exige uma estratégia. Cada história merece ser tratada com
              responsabilidade.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-28">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -bottom-4 -left-4 h-40 w-40 border-b border-l border-gold/50" />
            <img
              src={aboutImg.url}
              alt="Retrato profissional da advogada Graziele Cristina Lima"
              loading="lazy"
              className="relative h-[440px] w-full object-cover object-top sm:h-[560px]"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bordeaux">Sobre a advogada</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Uma advocacia construída com experiência, estratégia e compromisso.
            </h2>
            <div className="gold-rule my-6" />
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Sou Graziele Cristina Lima, advogada criminalista e especialista em Direito
                Sucessório e Planejamento Patrimonial, especialmente em situações que
                envolvem litígios entre herdeiros.
              </p>
              <p>Atualmente, conto com 12 anos de experiência na advocacia.</p>
              <p>
                Minha atuação é pautada pela análise individualizada de cada caso, pela busca
                de estratégias jurídicas adequadas e pelo compromisso com uma relação
                transparente e próxima com cada cliente.
              </p>
              <p>
                Acredito que a advocacia exige muito mais do que conhecimento técnico. Exige
                capacidade de compreender a realidade de cada pessoa, identificar riscos,
                antecipar conflitos e construir caminhos jurídicos responsáveis.
              </p>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-bordeaux transition-colors hover:text-gold"
            >
              Falar com a advogada <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* EXPERIÊNCIA / TIMELINE */}
      <section id="experiencia" className="scroll-mt-24 bg-offwhite">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Formação e experiência</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Uma trajetória dedicada ao Direito Criminal e Sucessório.
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>
          <div className="mt-12 space-y-0 border-l border-gold/40 pl-8">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="relative pb-10">
                  <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-bordeaux ring-4 ring-offwhite" />
                  <p className="font-display text-xl text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Áreas de atuação</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Atuação concentrada em questões que exigem técnica e estratégia.
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 110}>
                <Link
                  to={a.to}
                  className="group flex h-full flex-col border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-30px_rgba(17,17,17,0.5)]"
                >
                  <a.icon className="h-8 w-8 text-bordeaux transition-colors group-hover:text-gold" />
                  <p className="mt-6 font-display text-2xl text-ink">{a.title}</p>
                  <div className="gold-rule my-4" />
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-bordeaux">
                    Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LITÍGIOS ENTRE HERDEIROS */}
      <section id="estrategia" className="scroll-mt-24 relative overflow-hidden bg-graphite">
        <img
          src={suitImg.url}
          alt=""
          loading="lazy"
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-20 lg:block"
          style={{ objectPosition: "50% 70%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/60" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Litígios entre herdeiros
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
              Quando o patrimônio se transforma em conflito, a estratégia jurídica faz
              diferença.
            </h2>
            <div className="gold-rule mt-6" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                Conflitos familiares envolvendo patrimônio e sucessão podem envolver questões
                jurídicas complexas e relações pessoais delicadas.
              </p>
              <p>
                A atuação profissional deve considerar não apenas os aspectos patrimoniais,
                mas também os documentos, direitos envolvidos, histórico familiar e
                consequências jurídicas de cada decisão.
              </p>
            </div>
            <a
              href={whatsappLink(waMessages.sucessorio)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-sm border border-gold/60 bg-bordeaux px-8 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-bordeaux-soft"
            >
              Quero orientação sobre uma questão sucessória
            </a>
          </Reveal>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Como funciona</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Um atendimento conduzido por etapas claras.
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80} className="bg-white">
                <div className="h-full bg-white p-7">
                  <p className="font-display text-3xl text-gold">{s.n}</p>
                  <p className="mt-3 font-display text-lg text-ink">{s.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Diferenciais</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              O que orienta a condução de cada caso.
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} delay={i * 70}>
                <div className="group h-full border border-border bg-white p-7 transition-colors duration-500 hover:border-gold/60">
                  <d.icon className="h-6 w-6 text-bordeaux" />
                  <p className="mt-5 font-display text-xl text-ink">{d.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SITUAÇÕES */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Identifique sua situação</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Você está passando por uma destas situações?
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {situacoes.map((s, i) => (
              <Reveal key={s.text} delay={i * 60}>
                <a
                  href={whatsappLink(s.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between border border-white/12 bg-white/[0.03] p-7 transition-all duration-500 hover:border-gold/50 hover:bg-white/[0.06]"
                >
                  <p className="font-display text-lg leading-snug text-white">“{s.text}”</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gold">
                    Entenda como podemos ajudar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Perguntas frequentes</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Dúvidas comuns antes do primeiro contato.
            </h2>
            <div className="gold-rule mt-5" />
            <img
              src={portraitImg.url}
              alt="Graziele Cristina Lima"
              loading="lazy"
              className="mt-10 hidden h-72 w-full object-cover object-top lg:block"
            />
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-lg text-ink hover:text-bordeaux hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTEÚDOS */}
      <section id="conteudos" className="scroll-mt-24 bg-offwhite">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Conteúdos jurídicos</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Informação jurídica de forma clara, responsável e acessível.
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Espaço preparado para artigos e vídeos sobre Direito Criminal, sucessões e
              patrimônio. Os conteúdos serão publicados em breve.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-2">
              {categorias.map((c) => (
                <span
                  key={c}
                  className="border border-border bg-white px-4 py-2 text-xs uppercase tracking-[0.12em] text-graphite"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <h3 className="font-display text-2xl text-ink">Conteúdo Jurídico em Vídeo</h3>
              <div className="gold-rule mt-4" />
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.length === 0 ? (
                <Reveal className="sm:col-span-2 lg:col-span-3">
                  <a
                    href={site.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-start gap-4 border border-border bg-white p-8 transition-colors hover:border-gold/60 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bordeaux text-white">
                        <Play className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-lg text-ink">{site.youtube.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Acompanhe os vídeos publicados no canal do YouTube.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.16em] text-bordeaux">
                      Assistir no YouTube
                    </span>
                  </a>
                </Reveal>
              ) : (
                videos.map((v, i) => (
                  <Reveal key={v.id} delay={i * 80}>
                    <a
                      href={`https://www.youtube.com/watch?v=${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block border border-border bg-white transition-colors hover:border-gold/60"
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                        alt={v.title}
                        loading="lazy"
                        className="aspect-video w-full object-cover"
                      />
                      <div className="p-6">
                        <p className="font-display text-lg text-ink">{v.title}</p>
                        <span className="mt-3 inline-block text-xs uppercase tracking-[0.16em] text-bordeaux">
                          Assistir
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-bordeaux">Contato</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Precisa de orientação jurídica?
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Entre em contato para apresentar sua situação e verificar as possibilidades de
              atendimento.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border p-5 transition-colors hover:border-gold/60"
              >
                <MessageCircle className="h-5 w-5 text-bordeaux" />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</span>
                  <span className="font-display text-lg text-ink">{site.whatsappDisplay}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 border border-border p-5 transition-colors hover:border-gold/60"
              >
                <Mail className="h-5 w-5 text-bordeaux" />
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">E-mail</span>
                  <span className="block truncate font-display text-lg text-ink">{site.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 border border-border p-5">
                <ShieldCheck className="h-5 w-5 text-bordeaux" />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Escritório</span>
                  <span className="font-display text-lg text-ink">{site.address}</span>
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center border border-border text-bordeaux transition-colors hover:border-gold/60"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={site.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center border border-border text-bordeaux transition-colors hover:border-gold/60"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-offwhite p-7 sm:p-9">
              <p className="mb-6 flex items-center gap-3 font-display text-xl text-ink">
                <Eye className="h-5 w-5 text-gold" /> Apresente sua situação
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
