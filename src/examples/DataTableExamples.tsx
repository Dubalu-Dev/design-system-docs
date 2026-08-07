import { DataTable, Badge } from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

const headers = ["Influencer", "Ventas", "Comisión", "Estado"];

const rows = [
  ["Fernanda R.", "34", "$1,870", <Badge key="s1" tone="primary">Activa</Badge>],
  ["Carlos M.", "51", "$2,805", <Badge key="s2" tone="primary">Activa</Badge>],
  ["Paola G.", "8", "$440", <Badge key="s3" tone="warning">Inactiva</Badge>],
  ["Diego V.", "22", "$1,210", <Badge key="s4" tone="primary">Activa</Badge>],
  ["Sofía L.", "19", "$1,045", <Badge key="s5" tone="neutral">Pendiente</Badge>],
];

export default function DataTableExamples() {
  return (
    <>
      <Preview label="Con datos">
        <div className="w-full">
          <DataTable headers={headers} rows={rows} />
        </div>
      </Preview>

      <Preview label="Sin datos (tabla vacía)">
        <div className="w-full">
          <DataTable headers={headers} rows={[]} />
        </div>
      </Preview>
    </>
  );
}
