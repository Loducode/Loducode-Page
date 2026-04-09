# Loducode S.A.S. - Landing Page

Landing page estática para [loducode.com](https://loducode.com), construida con Astro y Tailwind CSS v4.

## Tech Stack

- **Astro 6** — Static site generator
- **Tailwind CSS v4** — Styling (via `@tailwindcss/vite`)
- **Astro Content Collections** — Blog y proyectos en Markdown
- **CSS Animations** — Scroll-reveal, glassmorphism, 3D tilt, gradientes animados

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`.

## Preview del build

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── app.css                 # Theme Tailwind v4, keyframes, utilidades
├── content.config.ts       # Definición de Content Collections
├── content/
│   ├── blog/               # Artículos en Markdown
│   └── projects/           # Proyectos en Markdown
├── components/
│   ├── Header.astro        # Navbar sticky con mobile menu
│   ├── Hero.astro          # Sección principal con gradiente animado
│   ├── Servicios.astro     # Grid de 12 servicios
│   ├── SobreNosotros.astro # Sobre la empresa + stats
│   ├── BlogSection.astro   # Últimos 3 posts
│   ├── Equipo.astro        # Miembros del equipo
│   ├── Proyectos.astro     # Portafolio de proyectos
│   ├── Testimonios.astro   # Carousel de testimonios
│   ├── Contacto.astro      # WhatsApp CTA + datos de contacto
│   ├── Footer.astro        # Footer con nav y social links
│   ├── WhatsAppButton.astro# Botón flotante de WhatsApp
│   └── icons/              # Iconos SVG (social + servicios)
├── data/
│   ├── services.ts         # Datos de servicios
│   ├── team.ts             # Miembros del equipo
│   ├── testimonials.ts     # Testimonios
│   └── social-links.ts     # Enlaces a redes sociales
├── layouts/
│   └── Layout.astro        # Layout base con SEO y scripts globales
└── pages/
    ├── index.astro         # Landing principal
    ├── blog/               # Listado y detalle de blog
    └── projects/           # Listado y detalle de proyectos
```

## Agregar contenido

### Blog

Crea un archivo `.md` en `src/content/blog/`:

```markdown
---
title: "Título del artículo"
date: 2024-01-15
author: "Nombre del autor"
image: "/images/blog/imagen.jpg"
excerpt: "Descripción corta del artículo."
category: "Desarrollo"
---

Contenido del artículo en Markdown...
```

### Proyectos

Crea un archivo `.md` en `src/content/projects/`:

```markdown
---
title: "Nombre del proyecto"
date: 2024-01-15
image: "/images/projects/imagen.jpg"
category: "Web - App"
description: "Descripción corta del proyecto."
---

Contenido detallado del proyecto...
```

## Personalización

- **Colores y tema**: `src/app.css` (sección `@theme`)
- **Servicios**: `src/data/services.ts`
- **Equipo**: `src/data/team.ts`
- **Testimonios**: `src/data/testimonials.ts`
- **Redes sociales**: `src/data/social-links.ts`
- **Imágenes**: `public/images/`

## Despliegue

El build genera archivos estáticos en `dist/`, compatibles con cualquier hosting:

- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages
- Cualquier servidor web estático
