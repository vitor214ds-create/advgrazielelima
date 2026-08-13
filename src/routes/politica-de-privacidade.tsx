import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Graziele Cristina Lima" },
      {
        name: "description",
        content:
          "Como os dados enviados por meio deste site são tratados, em conformidade com a LGPD (Lei nº 13.709/2018).",
      },
      { property: "og:title", content: "Política de Privacidade — Graziele Cristina Lima" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais e conformidade com a LGPD.",
      },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 lg:px-8">
      <h1 className="font-display text-4xl text-ink">Política de Privacidade</h1>
      <div className="gold-rule my-6" />
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Esta política descreve como as informações enviadas por meio deste site são
          tratadas. Ao utilizar o formulário de contato ou o WhatsApp, o usuário
          compartilha dados que serão utilizados exclusivamente para contato e
          avaliação da possibilidade de atendimento.
        </p>
        <h2 className="pt-4 font-display text-xl text-ink">Dados coletados</h2>
        <p>
          Nome, telefone, e-mail, área de interesse e o conteúdo da mensagem enviada
          voluntariamente pelo usuário. Não há coleta de dados sensíveis por meio deste
          site, nem é recomendável o envio de informações sigilosas antes do início
          formal do atendimento.
        </p>
        <h2 className="pt-4 font-display text-xl text-ink">Finalidade</h2>
        <p>
          Os dados são utilizados apenas para responder ao contato, compreender a
          situação apresentada e verificar as possibilidades de atendimento. Não há
          venda, cessão ou compartilhamento comercial das informações.
        </p>
        <h2 id="lgpd" className="pt-4 font-display text-xl text-ink">LGPD</h2>
        <p>
          O tratamento observa a Lei nº 13.709/2018 (LGPD). O titular pode solicitar,
          a qualquer momento, confirmação do tratamento, acesso, correção ou exclusão
          de seus dados pelo e-mail {site.email}.
        </p>
        <h2 className="pt-4 font-display text-xl text-ink">Sigilo profissional</h2>
        <p>
          As informações compartilhadas no âmbito do atendimento jurídico são
          protegidas pelo sigilo profissional previsto no Estatuto da Advocacia e no
          Código de Ética e Disciplina da OAB.
        </p>
      </div>
    </article>
  );
}
