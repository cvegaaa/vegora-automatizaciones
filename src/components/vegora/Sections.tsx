import { useState } from "react";
import { CalendarClock, ChevronDown, MessageCircle, Quote, X } from "lucide-react";
import logo from "@/assets/vegora-logo.png.asset.json";
import { FAQS, STEPS, TESTIMONIALS, waLink } from "@/data/vegora";

export function StepsSection() {
  return (
    <section id="proceso" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Implementación <span className="text-gradient">acompañada</span>, sin fricción
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tres pasos claros. Sin migraciones traumáticas ni meses de desarrollo.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <div key={s.title} className="glass-card group rounded-3xl p-7">
            <span className="font-display text-5xl font-bold text-gradient">0{i + 1}</span>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SocialProofSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass-card group rounded-3xl p-7">
              <Quote className="size-6 text-brand-purple" />
              <blockquote className="mt-4 text-sm leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Las dudas reales de directores y gerentes antes de automatizar.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-background">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold"
                >
                  {f.q}
                  <ChevronDown
                    className={`size-5 shrink-0 text-brand-blue transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClosingSection({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section id="contacto" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card group flex flex-col rounded-3xl p-8">
          <h3 className="font-display text-2xl font-bold">
            ¿Ya sabes qué proceso necesitas automatizar?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Escríbenos y te damos precio, alcance y tiempo de implementación hoy mismo.
          </p>
          <a
            href={waLink("Hola Vegora. Ya sé qué proceso quiero automatizar y necesito una cotización.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-display font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-5" /> Hablar por WhatsApp Ahora
          </a>
        </div>
        <div className="glass-card group flex flex-col rounded-3xl p-8">
          <h3 className="font-display text-2xl font-bold">
            ¿Tienes un proceso especial y necesitas una automatización personalizada?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Agenda un diagnóstico y salimos con un plan concreto de automatización.
          </p>
          <button
            onClick={onSchedule}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 font-display font-semibold transition-colors hover:bg-muted"
          >
            <CalendarClock className="size-5 text-brand-blue" /> Agendar Diagnóstico de 30 Minutos
          </button>
        </div>
      </div>
    </section>
  );
}

export function ScheduleModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center p-4">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-background p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-border p-2 text-muted-foreground hover:bg-muted"
          aria-label="Cerrar"
        >
          <X className="size-4" />
        </button>
        <h3 className="font-display text-2xl font-bold">Diagnóstico personalizado</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          30 minutos por videollamada. Revisamos tus procesos actuales y salimos con una ruta de
          automatización priorizada por ahorro.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          <li>· Mapa de tareas repetitivas de tu equipo</li>
          <li>· Estimación de horas y costo recuperable</li>
          <li>· Propuesta de automatizaciones y tiempos</li>
        </ul>
        <a
          href={waLink(
            "Hola Vegora. Quiero agendar el diagnóstico personalizado de 30 minutos. ¿Qué horarios tienen disponibles?",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-display font-semibold text-background"
        >
          <MessageCircle className="size-5" /> Coordinar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:flex-row">
        <img src={logo.url} alt="Vegora Automatizaciones" className="h-10 w-auto" />
        <p className="text-center text-sm text-muted-foreground">
          Automatizamos hoy. Impulsamos tu mañana.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vegora Automatizaciones
        </p>
      </div>
    </footer>
  );
}