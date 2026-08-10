# @dubalu-dev/design-system — Docs

Documentación oficial de [`@dubalu-dev/design-system`](https://github.com/Dubalu-Dev/dubalu-libs/tree/main/packages/design-system), construida con [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

**Sitio publicado:** https://dubalu-dev.github.io/design-system-docs

---

## ¿Qué es este repositorio?

`design-system-docs` aloja el sitio de documentación del design system compartido entre los proyectos de Dubalu (TvNotas, EquipoStars, LadyMultitask). Aquí viven las guías de instalación, la referencia de componentes y los ejemplos interactivos.

La librería en sí vive en [`dubalu-libs/packages/design-system`](https://github.com/Dubalu-Dev/dubalu-libs/tree/main/packages/design-system). Este repo solo contiene la documentación.

## Stack

| Herramienta | Rol |
|---|---|
| [Astro 7](https://astro.build) | Framework del sitio estático |
| [Starlight](https://starlight.astro.build) | Tema de documentación |
| [React 19](https://react.dev) | Ejemplos interactivos |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos |
| `@dubalu-dev/design-system` | Componentes documentados |

## Desarrollo local

```bash
# Requisitos: Node 20, pnpm
pnpm install
pnpm dev        # http://localhost:4321/design-system-docs
```

> **Token requerido.** `@dubalu-dev/design-system` se instala desde GitHub Packages.
> Necesitas `DUBALU_NPM_TOKEN` en tu entorno:
>
> ```bash
> export DUBALU_NPM_TOKEN=$(gh auth token)
> ```
>
> El `.npmrc` del repo ya apunta al registry correcto.

## Build y preview

```bash
pnpm build      # genera dist/
pnpm preview    # sirve el build estático localmente
```

## Estructura

```
src/
├── content/
│   └── docs/
│       ├── index.mdx           # Página de inicio
│       ├── guides/             # Instalación, primeros pasos
│       └── components/         # Una página por componente
├── components/                 # Componentes Astro/React del sitio
├── examples/                   # Ejemplos interactivos embebidos
└── styles/                     # CSS global y overrides de Starlight
```

## Agregar documentación

1. Para un **componente nuevo**: crea `src/content/docs/components/<nombre>.mdx`.
2. Para una **guía nueva**: crea `src/content/docs/guides/<nombre>.mdx`.
3. Starlight genera la sidebar automáticamente desde el directorio `components/`.

## Deploy

El sitio se publica automáticamente a GitHub Pages al hacer push a `main` (vía GitHub Actions en `.github/workflows/`).

## Ownership

- **Primary:** @DreamFloydDev (Miguel Jiménez)
- **Deputy:** @OGonaAyala (Omar)
- **Librería fuente:** [`dubalu-libs`](https://github.com/Dubalu-Dev/dubalu-libs) — issues y PRs de la librería van allá, no aquí.
