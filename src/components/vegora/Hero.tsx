import { ArrowRight, CalendarClock, CheckCircle2, MessageCircle } from "lucide-react";
import logo from "@/assets/vegora-logo.png.asset.json";
import { waLink } from "@/data/vegora";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const links = [
    ["Catálogo", "catalogo"],
    ["Calculadora", "calculadora"],
    ["Cómo funciona", "proceso"],
    ["FAQ", "faq"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <img src="https://i.ibb.co/ym5dLMn4/Chat-GPT-Image-31-jul-2026-10-43-40-p-m.png" alt="Vegora Automatizaciones" className="h-10 w-auto" />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </nav>
        <a
          href={waLink("Hola Vegora. Quiero automatizar procesos en mi empresa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-background shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Hablar por WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function WorkflowGraphic() {
  const nodes = [
    { label: "WhatsApp", color: "var(--brand-cyan)" },
    { label: "IA Vegora", color: "var(--brand-purple)" },
    { label: "CRM", color: "var(--brand-blue)" },
  ];
  return (
    <div className="glass-card group relative rounded-3xl p-6 sm:p-8">
      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
        <span>Flujo activo</span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-brand-cyan node-pulse opacity-100" />
          En ejecución
        </span>
      </div>
      <div className="mt-8 space-y-5">
        {nodes.map((n, i) => (
          <div key={n.label} className="relative">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 px-4 py-3">
              <span
                className="size-9 shrink-0 rounded-xl"
                style={{ background: n.color, opacity: 0.85 }}
              />
              <div>
                <p className="font-display text-sm font-semibold">{n.label}</p>
                <p className="text-xs text-muted-foreground">
                  {i === 0
                    ? "Consulta entrante del cliente"
                    : i === 1
                      ? "Interpreta, responde y califica"
                      : "Registro y alerta al asesor"}
                </p>
              </div>
            </div>
            {i < nodes.length - 1 && (
              <svg className="ml-8 h-6 w-2" viewBox="0 0 2 24">
                <line
                  className="flow-line"
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="24"
                  stroke="var(--brand-purple)"
                  strokeWidth="2"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="mt-7 flex items-center gap-3 rounded-2xl border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-3">
        <CheckCircle2 className="size-5 text-brand-cyan" />
        <p className="text-sm font-semibold text-foreground">Tarea completada · 0 errores</p>
      </div>
    </div>
  );
}

export function Hero({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div
        className="hero-blob-a pointer-events-none absolute -top-40 left-[8%] h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--brand-purple)" }}
      />
      <div
        className="hero-blob-b pointer-events-none absolute top-10 right-[5%] h-[380px] w-[380px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--brand-cyan)" }}
      />
      <div
        className="hero-blob-c pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            El futuro ya esta aqui | No te quedes atrás, automatiza tus procesos con IA
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Optimiza los procesos repetitivos de tu empresa con{" "}
            <span className="text-gradient">soluciones de IA listas para implementar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Ahorra tiempo operativo, elimina errores de digitación y escala sin desarrollar software
            desde cero. Resultados en tu negocio desde el primer día.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollTo("catalogo")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-display font-semibold text-background shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-5" />
              Explorar Automatizaciones
              <ArrowRight className="size-4" />
            </button>
            <button
              onClick={onSchedule}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 font-display font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <CalendarClock className="size-5 text-brand-blue" />
              Agendar Diagnóstico Personalizado
            </button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
            {[
              ["3-10 días", "Implementación"],
              ["+40%", "Conversión promedio"],
              ["0", "Errores de digitación"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-gradient">{v}</dt>
                <dd className="text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="float-soft">
          <WorkflowGraphic />
        </div>
      </div>
    </section>
  );
}

export function TechStackBar({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Construimos sobre plataformas líderes e integramos con tus sistemas actuales:
      </p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max gap-12 pr-12">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-lg font-semibold text-muted-foreground/70 grayscale transition-all hover:text-foreground hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}