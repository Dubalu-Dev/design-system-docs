import { Checkbox, CheckboxField, Switch, SwitchField } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

export default function CheckboxSwitchExamples() {
  return (
    <>
      <Preview label="Checkbox — estados">
        <Checkbox defaultChecked={false} />
        <Checkbox defaultChecked />
        <Checkbox checked="indeterminate" onCheckedChange={() => {}} />
        <Checkbox disabled />
        <Checkbox defaultChecked disabled />
      </Preview>

      <Preview label="CheckboxField">
        <CheckboxField
          label="Acepto los términos y condiciones"
          description="Al marcar esta casilla, aceptas nuestra política de privacidad."
        />
      </Preview>

      <Preview label="CheckboxField con error">
        <CheckboxField
          label="Acepto los términos"
          error="Debes aceptar los términos para continuar."
        />
      </Preview>

      <Preview label="Switch — estados">
        <Switch defaultChecked={false} />
        <Switch defaultChecked />
        <Switch disabled />
        <Switch defaultChecked disabled />
      </Preview>

      <Preview label="SwitchField">
        <SwitchField
          label="Notificaciones por email"
          description="Recibe resúmenes semanales de actividad."
          defaultChecked
        />
      </Preview>

      <Preview label="SwitchField deshabilitado">
        <SwitchField
          label="Modo oscuro"
          description="Próximamente disponible."
          disabled
        />
      </Preview>
    </>
  );
}
