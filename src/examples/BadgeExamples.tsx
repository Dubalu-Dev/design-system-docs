import { Badge } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

export default function BadgeExamples() {
  return (
    <>
      <Preview label="Tones">
        <Badge tone="primary">Primary</Badge>
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="info">Info</Badge>
        <Badge tone="warning">Warning</Badge>
        <Badge tone="dark">Dark</Badge>
        <Badge tone="outline">Outline</Badge>
        <Badge tone="brand">Brand</Badge>
      </Preview>

      <Preview label="En contexto">
        <span className="flex items-center gap-2 text-sm">
          Estado de orden <Badge tone="warning">Pendiente</Badge>
        </span>
        <span className="flex items-center gap-2 text-sm">
          Nivel influencer <Badge tone="primary">Top</Badge>
        </span>
      </Preview>
    </>
  );
}
