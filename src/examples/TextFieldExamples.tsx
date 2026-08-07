import { TextField, TextAreaField } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export default function TextFieldExamples() {
  return (
    <>
      <Preview label="TextField básico">
        <div className="w-72">
          <TextField label="Nombre completo" placeholder="Ej. Fernanda Ramírez" />
        </div>
      </Preview>

      <Preview label="Con ícono">
        <div className="w-72">
          <TextField
            label="Buscar"
            placeholder="Buscar influencer..."
            icon={<SearchIcon />}
            iconPosition="left"
          />
        </div>
        <div className="w-72">
          <TextField
            label="URL"
            placeholder="https://..."
            icon={<SearchIcon />}
            iconPosition="right"
          />
        </div>
      </Preview>

      <Preview label="Estado de error">
        <div className="w-72">
          <TextField
            label="Email"
            placeholder="tu@email.com"
            defaultValue="noesvalido"
            error="Ingresa un email válido."
          />
        </div>
      </Preview>

      <Preview label="Deshabilitado">
        <div className="w-72">
          <TextField label="ID de referencia" value="REF-00423" disabled />
        </div>
      </Preview>

      <Preview label="TextAreaField">
        <div className="w-72">
          <TextAreaField
            label="Descripción del producto"
            placeholder="Describe el producto..."
            rows={4}
          />
        </div>
      </Preview>

      <Preview label="TextAreaField con error">
        <div className="w-72">
          <TextAreaField
            label="Descripción"
            defaultValue="Corto"
            error="Mínimo 20 caracteres."
          />
        </div>
      </Preview>
    </>
  );
}
