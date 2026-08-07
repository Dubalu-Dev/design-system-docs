import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "@dubalu-dev/design-system";

function FilterCollapsible() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm border border-[var(--ds-color-border)] rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Filtros avanzados</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">{open ? "Ocultar" : "Mostrar"}</Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent animated className="mt-3 space-y-2 text-sm text-[var(--ds-color-muted)]">
        <p>• Rango de fechas</p>
        <p>• Categoría de producto</p>
        <p>• Estado del pedido</p>
        <p>• Monto mínimo / máximo</p>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CodeCollapsible() {
  const [open, setOpen] = useState(false);
  const lines = [
    "const resultado = datos",
    "  .filter(d => d.activo)",
    '  .map(d => ({ ...d, label: d.nombre.trim() }))',
    "  .sort((a, b) => a.label.localeCompare(b.label));",
  ];
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm">
      <div className="flex items-center gap-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">{open ? "▲ Ocultar código" : "▼ Ver código"}</Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent animated className="mt-2">
        <pre className="text-xs bg-[var(--sl-color-gray-6)] rounded p-3 overflow-x-auto">
          {lines.join("\n")}
        </pre>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function CollapsibleExamples() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Filtros opcionales</p>
        <FilterCollapsible />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Toggle de código</p>
        <CodeCollapsible />
      </div>
    </div>
  );
}
