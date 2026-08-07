import { Skeleton, Spinner } from "@dubalu-dev/design-system";

function CardSkeleton() {
  return (
    <div className="border border-[var(--ds-color-border)] rounded-lg p-4 w-64 space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-3/4 rounded" />
          <Skeleton className="h-3 w-1/2 rounded" />
        </div>
      </div>
      <Skeleton className="h-3 w-full rounded" />
      <Skeleton className="h-3 w-full rounded" />
      <Skeleton className="h-3 w-2/3 rounded" />
      <Skeleton className="h-8 w-full rounded" />
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex gap-3">
        <Skeleton className="h-3 w-1/4 rounded" />
        <Skeleton className="h-3 w-1/3 rounded" />
        <Skeleton className="h-3 w-1/4 rounded" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <Skeleton className="h-4 w-1/4 rounded" />
          <Skeleton className="h-4 w-1/3 rounded" />
          <Skeleton className="h-4 w-1/4 rounded" />
        </div>
      ))}
    </div>
  );
}

export default function SkeletonSpinnerExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Skeleton — tarjeta de carga</p>
        <CardSkeleton />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Skeleton — tabla de carga</p>
        <TableSkeleton />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Spinner — inline y en botón</p>
        <div className="flex items-center gap-6">
          <Spinner />
          <Spinner label="Guardando cambios…" />
          <button
            type="button"
            disabled
            className="flex items-center gap-2 px-4 py-2 rounded bg-[var(--ds-color-primary)] text-[var(--ds-color-primary-fg)] text-sm opacity-80"
          >
            <Spinner label="Enviando…" />
            Enviando…
          </button>
        </div>
      </div>
    </div>
  );
}
