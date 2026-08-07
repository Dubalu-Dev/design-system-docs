import { Button } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

export default function ButtonExamples() {
  return (
    <>
      <Preview label="Variantes">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </Preview>

      <Preview label="Tamaños">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Preview>

      <Preview label="Estado deshabilitado">
        <Button disabled>Deshabilitado</Button>
        <Button variant="outline" disabled>Outline deshabilitado</Button>
      </Preview>
    </>
  );
}
