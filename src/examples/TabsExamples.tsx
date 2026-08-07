import { Tabs, TabsList, TabsTrigger, TabsContent } from "@dubalu-dev/design-system";

function HorizontalTabs() {
  return (
    <Tabs defaultValue="general" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="billing">Facturación</TabsTrigger>
        <TabsTrigger value="team">Equipo</TabsTrigger>
        <TabsTrigger value="api" disabled>API</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="mt-4 text-sm text-[var(--ds-color-muted)]">
        Configuración general de la cuenta: nombre, zona horaria y preferencias.
      </TabsContent>
      <TabsContent value="billing" className="mt-4 text-sm text-[var(--ds-color-muted)]">
        Historial de pagos, método de pago y plan activo.
      </TabsContent>
      <TabsContent value="team" className="mt-4 text-sm text-[var(--ds-color-muted)]">
        Miembros del equipo, roles y permisos.
      </TabsContent>
    </Tabs>
  );
}

function VerticalTabs() {
  return (
    <Tabs defaultValue="perfil" orientation="vertical" className="flex gap-4 w-full max-w-md">
      <TabsList className="flex-col h-auto w-36 shrink-0">
        <TabsTrigger value="perfil" className="w-full justify-start">Perfil</TabsTrigger>
        <TabsTrigger value="seguridad" className="w-full justify-start">Seguridad</TabsTrigger>
        <TabsTrigger value="notifs" className="w-full justify-start" disabled>Notificaciones</TabsTrigger>
      </TabsList>
      <div className="flex-1 min-h-[80px]">
        <TabsContent value="perfil" className="text-sm text-[var(--ds-color-muted)]">
          Nombre, foto y datos del perfil público.
        </TabsContent>
        <TabsContent value="seguridad" className="text-sm text-[var(--ds-color-muted)]">
          Contraseña, sesiones activas y autenticación en dos pasos.
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default function TabsExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Horizontal</p>
        <HorizontalTabs />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Vertical (con tab deshabilitado)</p>
        <VerticalTabs />
      </div>
    </div>
  );
}
