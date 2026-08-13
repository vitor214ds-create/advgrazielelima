import { createFileRoute } from "@tanstack/react-router";
import { PracticePage } from "@/components/site/PracticePage";
import { waMessages } from "@/lib/site";
import hero from "@/assets/image-2.png.asset.json";

export const Route = createFileRoute("/direito-criminal")({
  head: () => ({
    meta: [
      { title: "Direito Criminal — Graziele Cristina Lima | Advocacia Criminal" },
      {
        name: "description",
        content:
          "Advocacia criminal com análise estratégica de cada caso: defesa criminal, inquéritos, medidas cautelares, audiências, recursos e habeas corpus.",
      },
      { property: "og:title", content: "Direito Criminal — Graziele Cristina Lima" },
      {
        property: "og:description",
        content:
          "Defesa dos direitos e garantias fundamentais em questões criminais, com acompanhamento jurídico individualizado.",
      },
      { property: "og:url", content: "/direito-criminal" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/direito-criminal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PracticePage
      eyebrow="Direito Criminal"
      title="Defesa criminal com estratégia, técnica e acompanhamento individualizado."
      image={hero.url}
      intro={[
        "Atuação especializada na defesa dos direitos e garantias fundamentais em questões criminais, com análise estratégica de cada caso e acompanhamento jurídico individualizado.",
        "Questões criminais exigem atenção aos detalhes, leitura cuidadosa dos autos, compreensão do contexto e definição de uma estratégia adequada a cada etapa do procedimento.",
        "O trabalho é conduzido com comunicação transparente, respeito à confidencialidade e orientação clara sobre as possibilidades jurídicas aplicáveis à situação apresentada.",
      ]}
      itemsTitle="Demandas atendidas"
      items={[
        "Defesa criminal",
        "Inquéritos",
        "Investigações",
        "Processos criminais",
        "Medidas cautelares",
        "Audiências",
        "Recursos",
        "Habeas corpus",
        "Prisões e liberdade",
        "Orientação jurídica preventiva",
      ]}
      note="A viabilidade e o formato do atendimento são avaliados caso a caso, após a análise das informações e documentos apresentados."
      ctaLabel="Preciso de defesa criminal"
      waMessage={waMessages.criminal}
    />
  );
}
