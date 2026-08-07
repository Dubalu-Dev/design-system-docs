import type { ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
  label?: string;
}

export function Preview({ children, label }: PreviewProps) {
  return (
    <div className="ds-preview">
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)]">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-start gap-3">{children}</div>
    </div>
  );
}
