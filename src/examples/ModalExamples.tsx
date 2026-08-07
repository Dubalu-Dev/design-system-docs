import { useState } from "react";
import {
  Modal, ModalTrigger, ModalContent, ModalFooter, Button, TextField,
} from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

function BasicModal() {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <Button variant="outline">Abrir modal</Button>
      </ModalTrigger>
      <ModalContent
        title="Confirmar acción"
        description="¿Estás seguro de que deseas continuar?"
        onClose={() => setOpen(false)}
      >
        <p className="text-sm text-gray-600">Esta acción no se puede deshacer.</p>
        <ModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={() => setOpen(false)}>Confirmar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function FormModal() {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <Button>Nuevo influencer</Button>
      </ModalTrigger>
      <ModalContent
        title="Agregar influencer"
        description="Completa los datos para invitar a la red."
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-4">
          <TextField label="Nombre completo" placeholder="Ej. Fernanda Ramírez" />
          <TextField label="Email" type="email" placeholder="fer@email.com" />
        </div>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={() => setOpen(false)}>Guardar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default function ModalExamples() {
  return (
    <>
      <Preview label="Modal básico con confirmación">
        <BasicModal />
      </Preview>
      <Preview label="Modal con formulario">
        <FormModal />
      </Preview>
    </>
  );
}
