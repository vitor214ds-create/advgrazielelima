import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { site, whatsappLink } from "@/lib/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  area: z.string().trim().min(1, "Selecione uma área"),
  mensagem: z.string().trim().min(10, "Descreva brevemente sua situação").max(1000),
});

const areas = [
  "Direito Criminal",
  "Direito Sucessório",
  "Planejamento Patrimonial",
  "Inventário",
  "Conflito entre herdeiros",
  "Outro",
];

const field =
  "w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (data["website"]) return; // honeypot anti-spam

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const message = `Olá, Dra. Graziele. Meu nome é ${v.nome}.\nÁrea de interesse: ${v.area}\nTelefone: ${v.telefone}\nE-mail: ${v.email}\n\n${v.mensagem}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    toast.success("Mensagem preparada. Finalize o envio pelo WhatsApp.");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-graphite">Nome</label>
          <input id="nome" name="nome" maxLength={100} className={field} placeholder="Seu nome completo" />
          {errors["nome"] && <p className="mt-1 text-xs text-bordeaux">{errors["nome"]}</p>}
        </div>
        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-graphite">Telefone</label>
          <input id="telefone" name="telefone" maxLength={20} inputMode="tel" className={field} placeholder="(00) 00000-0000" />
          {errors["telefone"] && <p className="mt-1 text-xs text-bordeaux">{errors["telefone"]}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-graphite">E-mail</label>
          <input id="email" name="email" maxLength={255} inputMode="email" className={field} placeholder="seu@email.com" />
          {errors["email"] && <p className="mt-1 text-xs text-bordeaux">{errors["email"]}</p>}
        </div>
        <div>
          <label htmlFor="area" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-graphite">Área de interesse</label>
          <select id="area" name="area" defaultValue="" className={field}>
            <option value="" disabled>Selecione</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          {errors["area"] && <p className="mt-1 text-xs text-bordeaux">{errors["area"]}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-graphite">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={5} maxLength={1000} className={field} placeholder="Descreva brevemente sua situação." />
        {errors["mensagem"] && <p className="mt-1 text-xs text-bordeaux">{errors["mensagem"]}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-bordeaux px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-bordeaux-soft"
      >
        Enviar mensagem
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Os dados enviados serão utilizados exclusivamente para contato e atendimento,
        conforme a Política de Privacidade. Em caso de dúvida, escreva para {site.email}.
      </p>
    </form>
  );
}
