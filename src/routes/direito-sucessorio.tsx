import { createFileRoute } from "@tanstack/react-router";
import { PracticePage } from "@/components/site/PracticePage";
import { waMessages } from "@/lib/site";
import hero from "@/assets/image-3.png.asset.json";

export const Route = createFileRoute("/direito-sucessorio")({
  head: () => ({
    meta: [
      { title: "Direito Sucessório e Inventário — Graziele Cristina Lima" },
      {
        name: "description",
        content:
          "Atuação em questões sucessórias: inventário, partilha, conflitos entre herdeiros, planejamento sucessório e discussões patrimoniais.",
      },
      { property: "og:title", content: "Direito Sucessório — Graziele Cristina Lima" },
      {
        property: "og:description",
        content:
          "Questões sucessórias e litígios entre herdeiros conduzidos com estratégia e análise individualizada.",
      },
      { property: "og:url", content: "/direito-sucessorio" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/direito-sucessorio" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PracticePage
      eyebrow="Direito Sucessório"
      title="Sucessão, patrimônio e conflitos entre herdeiros tratados com responsabilidade."
      image={hero.url}
      intro={[
        "Atuação especializada em questões sucessórias, especialmente em situações que envolvem conflitos e litígios entre herdeiros.",
        "Cada sucessão possui particularidades: documentos, composição do patrimônio, número de herdeiros, relações familiares e decisões tomadas antes e depois da abertura da sucessão.",
        "A orientação jurídica busca esclarecer direitos, identificar riscos e apresentar caminhos possíveis, considerando tanto o aspecto patrimonial quanto a delicadeza das relações envolvidas.",
      ]}
      itemsTitle="Demandas atendidas"
      items={[
        "Inventário",
        "Partilha",
        "Conflitos entre herdeiros",
        "Planejamento sucessório",
        "Discussões patrimoniais",
        "Direitos sucessórios",
        "Estratégias preventivas",
        "Questões relacionadas à divisão patrimonial",
      ]}
      note="Nenhum resultado é prometido: as possibilidades jurídicas dependem dos documentos, dos fatos e das particularidades de cada sucessão."
      ctaLabel="Falar sobre uma questão sucessória"
      waMessage={waMessages.sucessorio}
    />
  );
}
