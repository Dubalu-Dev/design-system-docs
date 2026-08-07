import { SectionHeading, Button } from "@dubalu-dev/design-system";

export default function SectionHeadingExamples() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-lg">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Accents</p>
        <div className="space-y-4">
          <SectionHeading accent="primary">Influencers destacados</SectionHeading>
          <SectionHeading accent="secondary">Campañas activas</SectionHeading>
          <SectionHeading accent="tertiary">Historial de pagos</SectionHeading>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Con eyebrow y subtitle</p>
        <SectionHeading
          eyebrow="Temporada 2026"
          subtitle="Métricas de rendimiento de los últimos 30 días."
        >
          Resumen de campaña
        </SectionHeading>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Con action</p>
        <SectionHeading
          action={<Button size="sm" variant="outline">Ver todos</Button>}
        >
          Últimas transacciones
        </SectionHeading>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Centrado (as h3)</p>
        <SectionHeading align="center" as="h3" eyebrow="Planes" subtitle="Sin contrato mínimo.">
          Elige tu plan
        </SectionHeading>
      </div>
    </div>
  );
}
