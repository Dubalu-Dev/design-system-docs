import { useState } from "react";
import { Alert } from "@dubalu-dev/design-system";

export default function AlertExamples() {
  const [dismissed, setDismissed] = useState<string[]>([]);

  const dismiss = (id: string) => setDismissed((prev) => [...prev, id]);
  const visible = (id: string) => !dismissed.includes(id);

  return (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert tone="info" title="Nueva versión disponible">
        La versión 2.4.0 ya está disponible. Actualiza para acceder a las últimas mejoras.
      </Alert>

      <Alert tone="success" title="Cambios guardados">
        Tu perfil se actualizó correctamente.
      </Alert>

      <Alert tone="warning" title="Límite próximo">
        Has usado el 90% de tu cuota mensual de publicaciones.
      </Alert>

      <Alert tone="error" title="Error al procesar pago">
        No pudimos cobrar el monto. Verifica tu método de pago.
      </Alert>

      {visible("dismissible") && (
        <Alert
          tone="info"
          title="Tip del día"
          onDismiss={() => dismiss("dismissible")}
        >
          Usa atajos de teclado para navegar más rápido. Presiona <kbd>?</kbd> para verlos.
        </Alert>
      )}

      {!visible("dismissible") && (
        <p className="text-xs text-[var(--ds-color-muted)]">
          Alerta descartada.{" "}
          <button
            type="button"
            className="underline"
            onClick={() => setDismissed((p) => p.filter((x) => x !== "dismissible"))}
          >
            Mostrar de nuevo
          </button>
        </p>
      )}
    </div>
  );
}
