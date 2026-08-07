import { Separator } from "@dubalu-dev/design-system";

export default function SeparatorExamples() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Horizontal — entre filas de datos</p>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-[var(--ds-color-muted)]">Plan</span>
            <span className="font-medium">Pro</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span className="text-[var(--ds-color-muted)]">Ciclo</span>
            <span className="font-medium">Mensual</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span className="text-[var(--ds-color-muted)]">Próximo cobro</span>
            <span className="font-medium">1 sep 2026</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$49.00 USD</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Vertical — breadcrumb / nav</p>
        <div className="flex items-center gap-3 text-sm h-5">
          <span className="text-[var(--ds-color-muted)]">Inicio</span>
          <Separator orientation="vertical" />
          <span className="text-[var(--ds-color-muted)]">Anunciantes</span>
          <Separator orientation="vertical" />
          <span className="font-medium">Acme Corp</span>
        </div>
      </div>
    </div>
  );
}
