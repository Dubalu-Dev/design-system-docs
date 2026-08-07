import {
  Tooltip, TooltipProvider, Button,
  Popover, PopoverTrigger, PopoverContent,
} from "@dubalu-dev/design-system";
import { Preview } from "../components/Preview";

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

export default function TooltipPopoverExamples() {
  return (
    <>
      <Preview label="Tooltip — lados">
        <TooltipProvider>
          <Tooltip content="Arriba" side="top">
            <Button variant="outline" size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="Derecha" side="right">
            <Button variant="outline" size="sm">Right</Button>
          </Tooltip>
          <Tooltip content="Abajo" side="bottom">
            <Button variant="outline" size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="Izquierda" side="left">
            <Button variant="outline" size="sm">Left</Button>
          </Tooltip>
        </TooltipProvider>
      </Preview>

      <Preview label="Tooltip en ícono informativo">
        <TooltipProvider>
          <Tooltip content="La comisión se calcula sobre el precio final sin impuestos.">
            <button type="button" className="text-gray-400 hover:text-gray-600">
              <InfoIcon />
            </button>
          </Tooltip>
        </TooltipProvider>
      </Preview>

      <Preview label="Popover con contenido rico">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Ver detalles</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="start">
            <p className="mb-1 text-sm font-semibold">Comisión estimada</p>
            <p className="text-xs text-gray-500">Basada en las últimas 30 ventas de este influencer.</p>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between"><span>Ventas</span><span className="font-medium">34</span></div>
              <div className="flex justify-between"><span>Total</span><span className="font-medium">$1,870</span></div>
              <div className="flex justify-between"><span>Comisión (10%)</span><span className="font-semibold text-violet-600">$187</span></div>
            </div>
          </PopoverContent>
        </Popover>
      </Preview>

      <Preview label="Popover alineación">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">align=start</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <p className="text-sm">Alineado al inicio del trigger.</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">align=end</Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <p className="text-sm">Alineado al final del trigger.</p>
          </PopoverContent>
        </Popover>
      </Preview>
    </>
  );
}
