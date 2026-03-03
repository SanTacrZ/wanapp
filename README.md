# Wanapp — Saberes Ancestrales del Pueblo Wanano

Una aplicación web para preservar y difundir el conocimiento cultural e indígena del pueblo Wanano del Vaupés, Amazonia colombiana.

## Módulos

| Módulo | Descripción |
|--------|-------------|
| **Lengua Wanano** | Lecciones de vocabulario con tarjetas interactivas y pronunciación |
| **Historias Ancestrales** | Mitos, leyendas, rituales y ley de origen |
| **Encarta Cultural** | Enciclopedia de geografía, historia, arte y territorio |
| **Botánica Ancestral** | Plantas medicinales, alimenticias, rituales y más |
| **Panel Administrativo** | Gestión de contenido (contraseña: `wanano2024`) |

## Stack tecnológico

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3** con paleta de colores personalizada (selva, tierra, rio, sol, flor)
- **React Router 6** para navegación SPA
- **Framer Motion 11** para animaciones de página
- **Lucide React** para iconografía

## Instalación y uso

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # compilación para producción
npm run preview  # previsualización del build
```

## Paleta de colores

| Nombre | Descripción |
|--------|-------------|
| `selva` | Verdes de selva amazónica |
| `tierra` | Cafés de tierra y corteza |
| `rio` | Azules del río Vaupés |
| `sol` | Dorados de luz solar |
| `flor` | Rojos y rosas de flores tropicales |

## Estructura del proyecto

```
src/
  components/   Layout, Navbar, Sidebar, Card, PageTransition, AudioPlayer
  pages/        Home, Lengua, Historias, Encarta, Botanica, Admin
  data/         lengua.ts, historias.ts, encarta.ts, botanica.ts
```
