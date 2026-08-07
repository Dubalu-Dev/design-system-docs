import { useState } from "react";
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, Button,
} from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

function DefaultAlert() {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Publicar cambios</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        title="¿Publicar cambios?"
        description="Los cambios serán visibles para todos los usuarios de la plataforma."
        confirmLabel="Publicar"
        cancelLabel="Cancelar"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </AlertDialog>
  );
}

function DestructiveAlert() {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Eliminar cuenta</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        title="¿Eliminar cuenta?"
        description="Esta acción es permanente. Se eliminarán todos tus datos, ventas e historial."
        confirmLabel="Sí, eliminar"
        cancelLabel="Cancelar"
        variant="destructive"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </AlertDialog>
  );
}

export default function AlertDialogExamples() {
  return (
    <>
      <Preview label="Confirmación estándar">
        <DefaultAlert />
      </Preview>
      <Preview label="Acción destructiva">
        <DestructiveAlert />
      </Preview>
    </>
  );
}
