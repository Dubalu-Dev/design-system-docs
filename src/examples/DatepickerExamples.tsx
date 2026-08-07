import { useState } from "react";
import { Datepicker } from "@dubalu-dev/design-system";

function BasicDatepicker() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col gap-2">
      <Datepicker value={date} onChange={setDate} placeholder="Selecciona una fecha" />
      {date && (
        <p className="text-xs text-[var(--ds-color-muted)]">
          Seleccionada: <strong>{date.toLocaleDateString("es-MX", { dateStyle: "long" })}</strong>
        </p>
      )}
    </div>
  );
}

function RangeRestrictedDatepicker() {
  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-2">
      <Datepicker
        value={date}
        onChange={setDate}
        minDate={minDate}
        maxDate={maxDate}
        placeholder="Solo meses actuales"
      />
      <p className="text-xs text-[var(--ds-color-muted)]">
        Rango: {minDate.toLocaleDateString("es-MX")} → {maxDate.toLocaleDateString("es-MX")}
      </p>
    </div>
  );
}

function CustomFormatDatepicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Datepicker
      value={date}
      onChange={setDate}
      formatDate={(d) =>
        d.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long" })
      }
    />
  );
}

export default function DatepickerExamples() {
  return (
    <div className="flex flex-col gap-10 w-full max-w-xs">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Básico</p>
        <BasicDatepicker />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Con minDate y maxDate</p>
        <RangeRestrictedDatepicker />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Formato personalizado</p>
        <CustomFormatDatepicker />
      </div>
    </div>
  );
}
