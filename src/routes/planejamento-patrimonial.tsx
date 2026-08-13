import { createFileRoute } from "@tanstack/react-router";
import { PracticePage } from "@/components/site/PracticePage";
import { waMessages } from "@/lib/site";
import hero from "@/assets/image.png.asset.json";

export const Route = createFileRoute("/planejamento-patrimonial")({
  head: () => ({
    meta: [
      { title: "Planejamento Patrimonial — Graziele Cristina Lima" },
      {
        name: "description",
        content:
          "Planejamento patrimonial e sucessório: organização do patrimônio, prevenção de conflitos familiares e estruturação jurídica adequada a cada família.",
      },
      { property: "og:title", content: "Planejamento Patrimonial — Graziele Cristina Lima" },
      {
        property: "og:description",
        content:
          "Organização, prevenção de conflitos e estruturação do patrimônio com análise jurídica individualizada.",
      },
      { property: "og:url", content: "/planejamento-patrimonial" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/planejamento-patrimonial" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PracticePage
      eyebrow="Planejamento Patrimonial"
      title="Organizar hoje para evitar conflitos amanhã."
      image={hero.url}
      intro={[
        "O planejamento patrimonial pode contribuir para a organização do patrimônio, para a prevenção de conflitos e para uma estruturação adequada às particularidades jurídicas de cada família.",
        "O trabalho começa pela compreensão da realidade familiar e patrimonial, seguida da análise dos documentos e da identificação de pontos que possam gerar controvérsias futuras.",
        "A partir dessa leitura, são apresentadas as possibilidades jurídicas aplicáveis, com explicações claras sobre efeitos, limites e cuidados de cada alternativa.",
      ]}
      itemsTitle="Pontos analisados"
      items={[
        "Mapeamento do patrimônio e da documentação",
        "Composição familiar e sucessória",
        "Identificação de pontos de possível conflito",
        "Alternativas jurídicas aplicáveis ao caso",
        "Prevenção de disputas entre herdeiros",
        "Organização de documentos e registros",
      ]}
      note="Não há promessa de economia tributária, proteção absoluta ou resultado garantido. Cada estrutura depende da legislação aplicável e da realidade de cada família."
      ctaLabel="Quero orientação jurídica"
      waMessage={waMessages.patrimonial}
    />
  );
}
