import { useState } from "react";
import {
  Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerFooter,
  Button, TextField,
} from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

function RightDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Panel lateral →</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        title="Detalles del influencer"
        description="Información completa y métricas."
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border p-4 text-sm">
            <p className="font-semibold">Fernanda Ramírez</p>
            <p className="text-gray-500">@fernanda_r · 34 ventas</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-500">Comisión total</span><span className="font-semibold">$1,870</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Nivel</span><span className="font-semibold">Plata</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Activo desde</span><span>Ene 2025</span></div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DrawerClose>
          <Button>Editar perfil</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function BottomDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Filtros ↑</Button>
      </DrawerTrigger>
      <DrawerContent
        side="bottom"
        title="Filtrar resultados"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-3 pb-2">
          <TextField label="Buscar por nombre" placeholder="Fernanda..." />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Limpiar</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>Aplicar filtros</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function DrawerExamples() {
  return (
    <>
      <Preview label="Drawer lateral derecho">
        <RightDrawer />
      </Preview>
      <Preview label="Drawer desde abajo (mobile-friendly)">
        <BottomDrawer />
      </Preview>
    </>
  );
}
