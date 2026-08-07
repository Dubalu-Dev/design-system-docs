import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@dubalu-dev/design-system";

const faqs = [
  {
    id: "q1",
    question: "¿Cómo cancelo mi suscripción?",
    answer: "Desde Configuración → Facturación → Cancelar plan. El acceso se mantiene hasta el fin del período pagado.",
  },
  {
    id: "q2",
    question: "¿Hay período de prueba gratuito?",
    answer: "Sí, 14 días gratis sin tarjeta de crédito. Al vencer puedes elegir un plan o tu cuenta pasa a free.",
  },
  {
    id: "q3",
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí. Los cambios se aplican inmediatamente; el monto se proratea en el siguiente ciclo de facturación.",
  },
];

function SingleAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      {faqs.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function MultipleAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["detalles"]} className="w-full max-w-md">
      <AccordionItem value="detalles">
        <AccordionTrigger>Detalles del producto</AccordionTrigger>
        <AccordionContent>
          Talla S–XXL, 100% algodón orgánico, lavable a máquina. Peso: 180 g/m².
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="envio">
        <AccordionTrigger>Envío y devoluciones</AccordionTrigger>
        <AccordionContent>
          Envío gratis en pedidos mayores a $500 MXN. Devoluciones gratuitas en 30 días.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cuidado">
        <AccordionTrigger animated={false}>Cuidado (sin animación)</AccordionTrigger>
        <AccordionContent animated={false}>
          No usar secadora. Planchar a temperatura media. No usar blanqueador.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function AccordionExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Single — FAQ (uno abierto a la vez)</p>
        <SingleAccordion />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Multiple — varios abiertos + sin animación</p>
        <MultipleAccordion />
      </div>
    </div>
  );
}
