import { useState } from "react";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  Button,
} from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

function BasicDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Acciones ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Ver perfil</DropdownMenuItem>
        <DropdownMenuItem>Editar</DropdownMenuItem>
        <DropdownMenuItem>Exportar datos</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>Eliminar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CheckboxDropdown() {
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">Columnas ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mostrar columnas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showEmail} onCheckedChange={setShowEmail}>
          Email
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPhone} onCheckedChange={setShowPhone}>
          Teléfono
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function RadioDropdown() {
  const [periodo, setPeriodo] = useState("mes");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">Período: {periodo} ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={periodo} onValueChange={setPeriodo}>
          <DropdownMenuRadioItem value="semana">Esta semana</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mes">Este mes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="año">Este año</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function DropdownMenuExamples() {
  return (
    <>
      <Preview label="Menú básico con items y separadores">
        <BasicDropdown />
      </Preview>
      <Preview label="CheckboxItems — visibilidad de columnas">
        <CheckboxDropdown />
      </Preview>
      <Preview label="RadioItems — selección exclusiva">
        <RadioDropdown />
      </Preview>
    </>
  );
}
