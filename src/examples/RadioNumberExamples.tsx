import { RadioGroup, RadioGroupItem, RadioGroupField, NumberField } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

const PLAN_OPTIONS = [
  { value: "basico", label: "Básico", description: "Hasta 5 influencers, 100 productos." },
  { value: "pro", label: "Pro", description: "Hasta 50 influencers, productos ilimitados." },
  { value: "enterprise", label: "Enterprise", description: "Sin límites, soporte dedicado." },
];

export default function RadioNumberExamples() {
  return (
    <>
      <Preview label="RadioGroupField — vertical">
        <RadioGroupField
          label="Plan de suscripción"
          options={PLAN_OPTIONS}
          defaultValue="pro"
        />
      </Preview>

      <Preview label="RadioGroupField — horizontal">
        <RadioGroupField
          label="Período"
          options={[
            { value: "mensual", label: "Mensual" },
            { value: "anual", label: "Anual" },
          ]}
          orientation="horizontal"
          defaultValue="anual"
        />
      </Preview>

      <Preview label="RadioGroup + RadioGroupItem (composición manual)">
        <RadioGroup defaultValue="b" orientation="horizontal">
          <div className="flex items-center gap-1.5">
            <RadioGroupItem value="a" />
            <span className="text-sm">Opción A</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RadioGroupItem value="b" />
            <span className="text-sm">Opción B</span>
          </div>
        </RadioGroup>
      </Preview>

      <Preview label="NumberField">
        <div className="w-48">
          <NumberField label="Comisión (%)" min={0} max={100} step={0.5} defaultValue={10} />
        </div>
      </Preview>

      <Preview label="NumberField con error">
        <div className="w-48">
          <NumberField
            label="Stock"
            min={0}
            defaultValue={-1}
            error="El stock no puede ser negativo."
          />
        </div>
      </Preview>
    </>
  );
}
