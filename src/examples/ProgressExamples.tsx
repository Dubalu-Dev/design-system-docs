import { useEffect, useState } from "react";
import { Progress } from "@dubalu-dev/design-system";

const metrics = [
  { label: "Ventas completadas", value: 78 },
  { label: "Leads calificados", value: 54 },
  { label: "Conversiones", value: 23 },
];

function StaticProgress() {
  return (
    <div className="w-full max-w-sm space-y-4">
      {metrics.map(({ label, value }) => (
        <div key={label}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[var(--ds-color-muted)]">{label}</span>
            <span className="font-medium">{value}%</span>
          </div>
          <Progress value={value} />
        </div>
      ))}
    </div>
  );
}

function AnimatedProgress() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setValue(72), 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-[var(--ds-color-muted)]">Procesando exportación…</span>
        <span className="font-medium">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

function CustomMaxProgress() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-[var(--ds-color-muted)]">Publicaciones usadas</span>
          <span className="font-medium">43 / 60</span>
        </div>
        <Progress value={43} max={60} />
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-[var(--ds-color-muted)]">Almacenamiento</span>
          <span className="font-medium">3.2 GB / 5 GB</span>
        </div>
        <Progress value={3.2} max={5} />
      </div>
    </div>
  );
}

export default function ProgressExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Múltiples métricas</p>
        <StaticProgress />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Animado al montar</p>
        <AnimatedProgress />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Con max personalizado</p>
        <CustomMaxProgress />
      </div>
    </div>
  );
}
