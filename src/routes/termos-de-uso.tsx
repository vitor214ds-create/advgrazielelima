import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso e Aviso Legal — Graziele Cristina Lima" },
      {
        name: "description",
        content:
          "Condições de uso deste site e aviso legal sobre o caráter meramente informativo do conteúdo publicado.",
      },
      { property: "og:title", content: "Termos de Uso — Graziele Cristina Lima" },
      {
        property: "og:description",
        content: "Condições de uso e aviso legal do site.",
      },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Page,
});

function Page() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 lg:px-8">
      <h1 className="font-display text-4xl text-ink">Termos de Uso</h1>
      <div className="gold-rule my-6" />
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          O acesso e a utilização deste site implicam concordância com as condições
          descritas nesta página. O conteúdo pode ser atualizado a qualquer momento.
        </p>
        <h2 id="aviso-legal" className="pt-4 font-display text-xl text-ink">Aviso legal</h2>
        <p>
          As informações publicadas neste site possuem caráter meramente informativo e
          não constituem consulta, parecer ou orientação jurídica para casos concretos.
          Cada situação exige análise individualizada.
        </p>
        <p>
          O site observa as normas do Estatuto da Advocacia, do Código de Ética e
          Disciplina da OAB e do Provimento nº 205/2021, não configurando captação de
          clientela, mercantilização da profissão ou promessa de resultado.
        </p>
        <h2 className="pt-4 font-display text-xl text-ink">Propriedade intelectual</h2>
        <p>
          Textos, marca, identidade visual e materiais publicados são protegidos e não
          podem ser reproduzidos sem autorização prévia.
        </p>
        <h2 className="pt-4 font-display text-xl text-ink">Contato inicial</h2>
        <p>
          O envio de mensagem por este site ou por WhatsApp não cria, por si só,
          relação de cliente e advogada, que se formaliza apenas após aceitação
          expressa do atendimento.
        </p>
      </div>
    </article>
  );
}
