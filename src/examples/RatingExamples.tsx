import { useState } from "react";
import { Rating } from "@dubalu-dev/design-system";

function DisplayRatings() {
  const examples = [
    { value: 5, label: "Excelente" },
    { value: 4.5, label: "Muy bueno" },
    { value: 3.7, label: "Bueno" },
    { value: 2, label: "Regular" },
    { value: 0.5, label: "Muy malo" },
  ];
  return (
    <div className="space-y-2">
      {examples.map(({ value, label }) => (
        <div key={label} className="flex items-center gap-3">
          <Rating value={value} />
          <span className="text-xs text-[var(--ds-color-muted)] w-20">{label}</span>
          <span className="text-xs font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
}

function InteractiveRating() {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs text-[var(--ds-color-muted)] mb-2">Tamaño sm</p>
        <Rating value={value} size="sm" onChange={setValue} />
      </div>
      <div>
        <p className="text-xs text-[var(--ds-color-muted)] mb-2">Tamaño md</p>
        <Rating value={value} size="md" onChange={setValue} />
      </div>
      <div>
        <p className="text-xs text-[var(--ds-color-muted)] mb-2">Tamaño lg</p>
        <Rating value={value} size="lg" onChange={setValue} />
      </div>
      <p className="text-sm">
        Calificación seleccionada: <strong>{value || "—"}</strong>
      </p>
    </div>
  );
}

export default function RatingExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Display — con estrellas parciales</p>
        <DisplayRatings />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Interactivo — los 3 tamaños comparten estado</p>
        <InteractiveRating />
      </div>
    </div>
  );
}
