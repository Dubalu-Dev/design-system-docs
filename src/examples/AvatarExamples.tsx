import { Avatar } from "@dubalu-dev/design-system";

const users = [
  { alt: "María López", src: undefined },
  { alt: "Juan García", src: undefined },
  { alt: "Ana Torres", src: undefined },
];

export default function AvatarExamples() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Fallback de iniciales</p>
        <div className="flex gap-3 items-center">
          {users.map((u) => (
            <Avatar key={u.alt} alt={u.alt} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Tamaños</p>
        <div className="flex gap-4 items-end">
          <div className="flex flex-col items-center gap-1">
            <Avatar alt="Ana Torres" size={32} />
            <span className="text-xs text-[var(--ds-color-muted)]">32</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Avatar alt="Ana Torres" size={48} />
            <span className="text-xs text-[var(--ds-color-muted)]">48 (default)</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Avatar alt="Ana Torres" size={64} />
            <span className="text-xs text-[var(--ds-color-muted)]">64</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Avatar alt="Ana Torres" size={80} />
            <span className="text-xs text-[var(--ds-color-muted)]">80</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Con ring (usuario activo / seleccionado)</p>
        <div className="flex gap-3 items-center">
          <Avatar alt="María López" ring />
          <Avatar alt="Juan García" />
          <Avatar alt="Ana Torres" />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Stack de avatares</p>
        <div className="flex -space-x-3">
          {users.map((u) => (
            <div key={u.alt} className="ring-2 ring-white rounded-full">
              <Avatar alt={u.alt} size={36} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
