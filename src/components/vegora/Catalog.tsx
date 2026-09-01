import { useMemo, useState } from "react";
import {
  Bot,
  Clock,
  MessageCircle,
  Sparkles,
  X,
  Zap,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import { AREAS, AUTOMATIONS, SECTORS, TAGS, waLink, type Automation } from "@/data/vegora";

const accentVar: Record<Automation["accent"], string> = {
  blue: "var(--brand-blue)",
  cyan: "var(--brand-cyan)",
  purple: "var(--brand-purple)",
  orange: "var(--brand-orange)",
  pink: "var(--brand-pink)",
};

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-transparent bg-gradient-brand text-background shadow-[var(--shadow-soft)]"
          : "border-border bg-background text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Drawer({ item, onClose }: { item: Automation | null; onClose: () => void }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-border bg-background p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted"
          aria-label="Cerrar"
        >
          <X className="size-4" />
        </button>
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-background"
          style={{ background: accentVar[item.accent] }}
        >
          {item.category}
        </span>
        <h3 className="mt-4 pr-8 text-2xl font-bold">{item.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>

        <h4 className="mt-8 font-display text-sm font-semibold tracking-wide uppercase">
          Flujo técnico simplificado
        </h4>
        <ol className="mt-3 space-y-3">
          {item.detail.flow.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-xl border border-border bg-muted/40 p-3">
              <span className="font-display text-sm font-bold text-gradient">0{i + 1}</span>
              <span className="text-sm">{s}</span>
            </li>
          ))}
        </ol>

        <h4 className="mt-8 font-display text-sm font-semibold tracking-wide uppercase">
          Plataformas compatibles
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.detail.platforms.map((p) => (
            <span key={p} className="rounded-full border border-border px-3 py-1 text-xs">
              {p}
            </span>
          ))}
        </div>

        <h4 className="mt-8 font-display text-sm font-semibold tracking-wide uppercase">
          Requerimientos mínimos
        </h4>
        <ul className="mt-3 space-y-2">
          {item.detail.requirements.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
              {r}
            </li>
          ))}
        </ul>

        <a
          href={waLink(
            `Hola Vegora. Me interesa implementar la automatización ${item.name}. Quisiera conocer la cotización y el proceso de implementación.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-display font-semibold text-background"
        >
          <MessageCircle className="size-5" />
          Solicitar por WhatsApp
        </a>
      </aside>
    </div>
  );
}

function Card({ item, onDetail }: { item: Automation; onDetail: () => void }) {
  return (
    <article className="glass-card group flex flex-col rounded-3xl p-6">
      <span
        className="node-pulse absolute top-4 right-4 size-2.5 rounded-full"
        style={{ background: accentVar[item.accent] }}
      />
      <div className="flex items-center gap-3">
        <span
          className="grid size-11 place-items-center rounded-2xl"
          style={{ background: `color-mix(in oklab, ${accentVar[item.accent]} 15%, transparent)` }}
        >
          <Bot className="size-5" style={{ color: accentVar[item.accent] }} />
        </span>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            color: accentVar[item.accent],
            background: `color-mix(in oklab, ${accentVar[item.accent]} 12%, transparent)`,
          }}
        >
          {item.category}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg leading-snug font-semibold">{item.name}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
      <ul className="mt-5 space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <Zap className="size-4 text-brand-orange" />
          {item.benefit}
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <Clock className="size-4 text-brand-blue" />
          {item.time}
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <MessageCircle className="size-4 text-brand-purple" />
          Cotización personalizada por WhatsApp
        </li>
      </ul>
      <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan">
        <span className="size-2 rounded-full bg-brand-cyan" /> Disponible para implementación
      </p>
      <div className="mt-6 flex flex-col gap-2 pt-4 sm:flex-row">
        <a
          href={waLink(
            `Hola Vegora. Me interesa implementar la automatización ${item.name}. Quisiera conocer la cotización y el proceso de implementación.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-display font-semibold text-background transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="size-4" />
          Solicitar por WhatsApp
        </a>
        <button
          onClick={onDetail}
          className="flex items-center justify-center gap-1 rounded-full border border-border px-4 py-2.5 text-sm font-display font-semibold transition-colors hover:bg-muted"
        >
          Ver Detalles <ArrowRight className="size-4" />
        </button>
      </div>
    </article>
  );
}

export function CatalogSection() {
  const [area, setArea] = useState("Todos");
  const [sector, setSector] = useState("Todos");
  const [tag, setTag] = useState("Todas");
  const [detail, setDetail] = useState<Automation | null>(null);

  const items = useMemo(
    () =>
      AUTOMATIONS.filter(
        (a) =>
          (area === "Todos" || a.area === area) &&
          (sector === "Todos" || a.sectors.includes(sector)) &&
          (tag === "Todas" || a.tags.includes(tag)),
      ),
    [area, sector, tag],
  );

  return (
    <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Automatizaciones <span className="text-gradient">listas para implementar</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Elige la solución que necesitas. Nosotros nos encargamos del resto.
        </p>
      </div>

      <div className="mt-10 space-y-4 rounded-3xl border border-border bg-muted/40 p-5">
        {(
          [
            ["Área", AREAS, area, setArea],
            ["Sector", SECTORS, sector, setSector],
            ["Etiqueta", TAGS, tag, setTag],
          ] as const
        ).map(([label, options, value, set]) => (
          <div key={label} className="flex flex-wrap items-center gap-2">
            <span className="mr-1 w-16 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {label}
            </span>
            {options.map((o) => (
              <Chip key={o} active={value === o} onClick={() => set(o)}>
                {o}
              </Chip>
            ))}
          </div>
        ))}
      </div>

      {items.length ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <Card key={i.id} item={i} onDetail={() => setDetail(i)} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-border p-14 text-center">
          <Sparkles className="mx-auto size-8 text-brand-purple" />
          <p className="mt-4 font-display text-lg font-semibold">
            No hay automatizaciones con esos filtros
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            La diseñamos a medida para tu caso de uso.
          </p>
          <a
            href={waLink(
              "Hola Vegora. No encontré la automatización que necesito en el catálogo y quiero una solución personalizada.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-display font-semibold text-background"
          >
            <MessageCircle className="size-4" /> Solicitar automatización a medida
          </a>
        </div>
      )}

      <Drawer item={detail} onClose={() => setDetail(null)} />
    </section>
  );
}