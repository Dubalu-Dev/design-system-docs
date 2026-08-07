import { SelectField, NativeSelect } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

const ROLES = [
  { value: "influencer", label: "Influencer" },
  { value: "anunciante", label: "Anunciante" },
  { value: "cliente", label: "Cliente" },
  { value: "admin", label: "Administrador" },
];

const ESTADOS = [
  { value: "activo", label: "Activo" },
  { value: "inactivo", label: "Inactivo" },
  { value: "pendiente", label: "Pendiente" },
];

export default function SelectExamples() {
  return (
    <>
      <Preview label="SelectField (Radix)">
        <div className="w-64">
          <SelectField
            label="Rol de usuario"
            options={ROLES}
            placeholder="Selecciona un rol..."
          />
        </div>
      </Preview>

      <Preview label="SelectField con valor por defecto">
        <div className="w-64">
          <SelectField
            label="Estado"
            options={ESTADOS}
            defaultValue="activo"
          />
        </div>
      </Preview>

      <Preview label="SelectField con error">
        <div className="w-64">
          <SelectField
            label="Categoría"
            options={ROLES}
            placeholder="Selecciona..."
            error="Este campo es requerido."
          />
        </div>
      </Preview>

      <Preview label="NativeSelect">
        <div className="w-64">
          <NativeSelect defaultValue="influencer">
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </NativeSelect>
        </div>
      </Preview>
    </>
  );
}
