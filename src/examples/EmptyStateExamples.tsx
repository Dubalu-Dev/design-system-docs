// EmptyState will be available from @dubalu-dev/design-system once v0.12.1 publishes (PR #445).
// Using an inline implementation with identical API for the docs build in the interim.
import type { ComponentType, ReactNode } from "react";
import { Button } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

interface EmptyStateProps {
  icon?: ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-10 px-6 text-center ${className ?? ""}`}>
      {Icon && <Icon className="h-10 w-10 text-[var(--ds-color-muted)]" />}
      <p className="text-sm font-semibold text-[var(--ds-color-surface-fg)]">{title}</p>
      {description && <p className="text-sm text-[var(--ds-color-muted)] max-w-xs">{description}</p>}
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}

function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

export default function EmptyStateExamples() {
  return (
    <>
      <Preview label="Sin CTA">
        <EmptyState
          icon={PackageIcon}
          title="Sin productos"
          description="Aún no has agregado ningún producto a tu catálogo."
        />
      </Preview>

      <Preview label="Con CTA">
        <EmptyState
          icon={UsersIcon}
          title="Sin influencers"
          description="Invita a tu primer influencer para comenzar a vender."
          action={<Button>Agregar influencer</Button>}
        />
      </Preview>
    </>
  );
}
