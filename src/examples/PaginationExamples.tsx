import { useState } from "react";
import { Pagination } from "@dubalu-dev/design-system";

function BasicPagination() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col gap-2">
      <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
      <p className="text-xs text-[var(--ds-color-muted)]">Página {page} de 5</p>
    </div>
  );
}

function LargePagination() {
  const [page, setPage] = useState(7);
  return (
    <div className="flex flex-col gap-2">
      <Pagination currentPage={page} totalPages={20} onPageChange={setPage} siblingCount={1} />
      <p className="text-xs text-[var(--ds-color-muted)]">Página {page} de 20 — ellipsis automático</p>
    </div>
  );
}

function WideSiblings() {
  const [page, setPage] = useState(10);
  return (
    <div className="flex flex-col gap-2">
      <Pagination currentPage={page} totalPages={20} onPageChange={setPage} siblingCount={2} />
      <p className="text-xs text-[var(--ds-color-muted)]">siblingCount=2 — más páginas alrededor</p>
    </div>
  );
}

export default function PaginationExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Básico (5 páginas)</p>
        <BasicPagination />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Con ellipsis (20 páginas)</p>
        <LargePagination />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">siblingCount ampliado</p>
        <WideSiblings />
      </div>
    </div>
  );
}
