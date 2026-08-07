import {
  Table, TableHead, TableBody, TableRow,
  TableHeadCell, TableCell,
} from "@dubalu-dev/design-system";

const invoices = [
  { id: "INV-001", client: "Acme Corp", amount: "$12,400", status: "Pagado", date: "1 ago 2026" },
  { id: "INV-002", client: "Beta SA", amount: "$3,200", status: "Pendiente", date: "3 ago 2026" },
  { id: "INV-003", client: "Gamma Inc", amount: "$8,750", status: "Vencido", date: "15 jul 2026" },
];

const statusColor: Record<string, string> = {
  Pagado: "text-green-600",
  Pendiente: "text-yellow-600",
  Vencido: "text-red-600",
};

export default function TablePrimitivesExamples() {
  return (
    <div className="w-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Factura</TableHeadCell>
            <TableHeadCell>Cliente</TableHeadCell>
            <TableHeadCell>Monto</TableHeadCell>
            <TableHeadCell>Estado</TableHeadCell>
            <TableHeadCell>Fecha</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-mono text-xs">{inv.id}</TableCell>
              <TableCell>{inv.client}</TableCell>
              <TableCell className="font-medium">{inv.amount}</TableCell>
              <TableCell className={`font-medium ${statusColor[inv.status]}`}>
                {inv.status}
              </TableCell>
              <TableCell className="text-[var(--ds-color-muted)]">{inv.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
