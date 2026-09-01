import { useMemo, useState } from "react";
import { MessageCircle, TrendingUp } from "lucide-react";
import { waLink } from "@/data/vegora";

const ERROR_FACTOR = { Bajo: 0.08, Medio: 0.16, Alto: 0.28 } as const;
type ErrorLevel = keyof typeof ERROR_FACTOR;

function Slider({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="font-display font-semibold text-gradient">
          {value} {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-brand-blue"
      />
    </div>
  );
}

export function RoiCalculatorSection() {
  const [people, setPeople] = useState(6);
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(25000);
  const [currency, setCurrency] = useState<"COP" | "USD">("COP");
  const [level, setLevel] = useState<ErrorLevel>("Medio");

  const r = useMemo(() => {
    const monthlyHours = people * hours * 4.33;
    const savedHours = Math.round(monthlyHours * 0.72);
    const errorCost = monthlyHours * rate * ERROR_FACTOR[level];
    const savedMoney = Math.round(savedHours * rate + errorCost);
    const investment = currency === "COP" ? 2500000 : 640;
    const roi = Math.max(120, Math.round(((savedMoney * 3 - investment) / investment) * 100));
    return { savedHours, savedMoney, roi };
  }, [people, hours, rate, level, currency]);

  const money = (n: number) =>
    new Intl.NumberFormat(currency === "COP" ? "es-CO" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section id="calculadora" className="scroll-mt-20 bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Cuánto te cuesta hoy <span className="text-gradient">lo manual</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Calcula en segundos las horas y el dinero que tu empresa puede liberar automatizando.
          </p>
        </div>

        <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-9 lg:grid-cols-2">
          <div className="space-y-8">
            <Slider
              label="¿Cuántas personas realizan tareas operativas y repetitivas?"
              value={people}
              min={1}
              max={50}
              suffix="personas"
              onChange={setPeople}
            />
            <Slider
              label="¿Cuántas horas por semana invierte cada persona en esto?"
              value={hours}
              min={1}
              max={40}
              suffix="hrs/sem"
              onChange={setHours}
            />
            <div>
              <label className="text-sm font-medium">Costo promedio por hora</label>
              <div className="mt-3 flex gap-2">
                <input
                  type="number"
                  value={rate}
                  min={0}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 outline-none focus:border-brand-blue"
                />
                <div className="flex shrink-0 overflow-hidden rounded-xl border border-border">
                  {(["COP", "USD"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setRate(c === "COP" ? 25000 : 8);
                      }}
                      className={`px-4 text-sm font-semibold ${
                        currency === c ? "bg-gradient-brand text-background" : "text-muted-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">
                ¿Qué porcentaje de errores o retrasos ocurren al mes?
              </label>
              <div className="mt-3 flex gap-2">
                {(Object.keys(ERROR_FACTOR) as ErrorLevel[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                      level === l
                        ? "border-transparent bg-gradient-brand text-background"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-brand p-[1.5px]">
            <div className="flex h-full flex-col rounded-3xl bg-background p-7">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                <TrendingUp className="size-4 text-brand-cyan" /> Resultados en vivo
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground">Horas ahorradas al mes</p>
                  <p className="font-display text-4xl font-bold text-gradient">
                    {r.savedHours} hrs
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Costo operativo reducido</p>
                  <p className="font-display text-4xl font-bold text-gradient">
                    {money(r.savedMoney)}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-border pt-5">
                  <div>
                    <p className="text-sm text-muted-foreground">ROI estimado</p>
                    <p className="font-display text-2xl font-bold">{r.roi}%</p>
                    <p className="text-xs text-muted-foreground">en el primer trimestre</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Recuperación</p>
                    <p className="font-display text-2xl font-bold">30-45</p>
                    <p className="text-xs text-muted-foreground">días estimados</p>
                  </div>
                </div>
              </div>
              <p className="mt-7 text-sm text-muted-foreground">
                Tu empresa podría ahorrar más de <strong>{r.savedHours} horas</strong> y{" "}
                <strong>{money(r.savedMoney)}</strong> al mes. Descubre cómo implementarlo con
                Vegora.
              </p>
              <a
                href={waLink(
                  `Hola Vegora. Usé la calculadora de ahorro: ${people} personas, ${hours} horas/semana, costo hora ${rate} ${currency}, nivel de errores ${level}. Resultado: ${r.savedHours} horas y ${money(r.savedMoney)} de ahorro mensual estimado. Quiero saber cómo implementarlo.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-display font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="size-5" /> Enviar mi cálculo por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}