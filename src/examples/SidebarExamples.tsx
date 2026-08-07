import { useState } from "react";
import {
  Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarSection, SidebarItem,
} from "@dubalu-dev/design-system";

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);
const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);

const navItems = ["Dashboard", "Influencers", "Reportes", "Configuración"];

export default function SidebarExamples() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div
      className="border border-[var(--ds-color-border)] rounded-lg overflow-hidden flex"
      style={{ height: 340 }}
    >
      <Sidebar>
        <SidebarHeader>
          <span className="font-semibold text-sm">TvNotas Admin</span>
        </SidebarHeader>

        <SidebarContent>
          <SidebarSection>
            <SidebarItem
              label="Dashboard"
              icon={<HomeIcon />}
              active={active === "Dashboard"}
              onClick={() => setActive("Dashboard")}
            />
            <SidebarItem
              label="Influencers"
              icon={<UsersIcon />}
              active={active === "Influencers"}
              onClick={() => setActive("Influencers")}
              badge={
                <span
                  className="text-xs rounded px-1.5 py-0.5 font-medium"
                  style={{ background: "var(--ds-color-primary)", color: "var(--ds-color-primary-fg)" }}
                >
                  12
                </span>
              }
            />
            <SidebarItem
              label="Reportes"
              icon={<ChartIcon />}
              active={active === "Reportes"}
              onClick={() => setActive("Reportes")}
            />
          </SidebarSection>

          <SidebarSection label="Sistema">
            <SidebarItem
              label="Configuración"
              icon={<SettingsIcon />}
              active={active === "Configuración"}
              onClick={() => setActive("Configuración")}
              disabled
            />
          </SidebarSection>
        </SidebarContent>

        <SidebarFooter>
          <SidebarItem label="Cerrar sesión" icon={<LogoutIcon />} onClick={() => {}} />
        </SidebarFooter>
      </Sidebar>

      <div className="flex-1 p-6 text-sm text-[var(--ds-color-muted)] overflow-hidden">
        <p className="font-semibold text-[var(--ds-color-surface-fg)] mb-1">{active}</p>
        <p>Contenido del panel seleccionado.</p>
      </div>
    </div>
  );
}
