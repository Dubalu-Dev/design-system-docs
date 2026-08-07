import { useState } from "react";
import { Card } from "@dubalu-dev/design-system";

function StaticCard() {
  return (
    <Card className="p-6 w-64">
      <p className="text-xs text-[var(--ds-color-muted)] uppercase tracking-wide">Ingresos del mes</p>
      <p className="text-2xl font-bold mt-1">$124,530</p>
      <p className="text-xs text-[var(--ds-color-muted)] mt-2">+12% vs mes anterior</p>
    </Card>
  );
}

function SelectableCards() {
  const [selected, setSelected] = useState<string | null>("pro");
  const plans = [
    { id: "basico", label: "Básico", price: "$9" },
    { id: "pro", label: "Pro", price: "$49" },
    { id: "enterprise", label: "Enterprise", price: "$199" },
  ];
  return (
    <div className="flex gap-3 flex-wrap">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          interactive
          onClick={() => setSelected(plan.id)}
          className={`p-4 w-32 text-center transition-all ${
            selected === plan.id
              ? "ring-2 ring-[var(--ds-color-primary)]"
              : ""
          }`}
        >
          <p className="text-sm font-semibold">{plan.label}</p>
          <p className="text-lg font-bold mt-1">{plan.price}</p>
          <p className="text-xs text-[var(--ds-color-muted)]">/mes</p>
        </Card>
      ))}
    </div>
  );
}

export default function CardExamples() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Estático</p>
        <StaticCard />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Interactivo — selección de plan</p>
        <SelectableCards />
      </div>
    </div>
  );
}
