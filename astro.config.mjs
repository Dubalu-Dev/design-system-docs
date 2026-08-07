import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://dubalu-dev.github.io",
  base: "/design-system-docs",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      title: "@dubalu-dev/design-system",
      description: "Documentación oficial del design system de Dubalu.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Dubalu-Dev/dubalu-libs",
        },
      ],
      sidebar: [
        {
          label: "Introducción",
          items: [
            { label: "Inicio", slug: "" },
            { label: "Instalación", slug: "guides/installation" },
          ],
        },
        {
          label: "Componentes",
          items: [{ autogenerate: { directory: "components" } }],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
    react(),
  ],
});
