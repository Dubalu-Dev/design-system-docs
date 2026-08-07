import { Label, FloatingTextField, FloatingTextAreaField, FloatingNumberField } from "@dubalu-dev/design-system";

function LabelExamples() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-1">
        <Label htmlFor="nombre">Nombre completo</Label>
        <input
          id="nombre"
          type="text"
          placeholder="Escribe tu nombre"
          className="border border-[var(--ds-color-border)] rounded px-3 py-2 text-sm w-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="disabled-input">Campo deshabilitado</Label>
        <input
          id="disabled-input"
          type="text"
          disabled
          placeholder="No editable"
          className="border border-[var(--ds-color-border)] rounded px-3 py-2 text-sm w-full opacity-50"
        />
      </div>
    </div>
  );
}

function FloatingVariants() {
  return (
    <div className="space-y-4 w-full max-w-xs">
      <FloatingTextField label="Nombre (outlined)" variant="outlined" />
      <FloatingTextField label="Email (filled)" variant="filled" type="email" />
      <FloatingTextField label="Usuario (standard)" variant="standard" />
    </div>
  );
}

function FloatingWithErrors() {
  return (
    <div className="space-y-4 w-full max-w-xs">
      <FloatingTextField label="Correo electrónico" error="El correo no es válido." defaultValue="noesvalido" />
      <FloatingTextAreaField label="Descripción" error="Máximo 200 caracteres." />
      <FloatingNumberField label="Monto (MXN)" min={0} max={999999} step={100} error="El monto mínimo es $100." />
    </div>
  );
}

export default function LabelFloatingExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Label — con input nativo</p>
        <div className="max-w-xs">
          <LabelExamples />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">FloatingTextField — tres variantes</p>
        <FloatingVariants />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">FloatingField con error</p>
        <FloatingWithErrors />
      </div>
    </div>
  );
}
