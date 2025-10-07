# 🌐 Website for Lic. María Cecilia Inzaugarat

**Available languages:**  
🇺🇸 [English version](#-english-version) | 🇦🇷 [Versión en Español](#-versión-en-español)

---

## 🇺🇸 English Version

A professional, scalable website built with Next.js, optimized for SEO, and integrated with Mercado Pago.
This project focuses on performance, accessibility, and maintainability to ensure a seamless user experience.

### 🚀 Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS v4
- **Internationalization:** next-intl
- **Payments:** Mercado Pago SDK (coming soon)
- **Deployment:** Vercel
- **SEO Optimization:** Built-in Next.js SEO features
- **Version Control:** GitHub

### 🧩 Features

✅ **Implemented:**
- Fully responsive and accessible design
- **Multilingual support (Spanish/English)** with localized URLs
- SEO best practices with dynamic metadata
- Type-safe development with TypeScript
- Modular architecture for future growth

🚧 **In Progress:**
- Light/Dark theme mode
- Shopping cart & e-commerce functionality
- Secure Mercado Pago payment integration
- File-based content management system
- Enhanced SEO (JSON-LD, sitemaps, etc.)

### 🛠️ Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser:
- Spanish (default): [http://localhost:3000](http://localhost:3000)
- English: [http://localhost:3000/en](http://localhost:3000/en)

### 🌍 Multilingual Support

The site is available in Spanish and English with localized URLs:

| Page | Spanish URL | English URL |
|------|-------------|-------------|
| Home | `/` | `/en` |
| About | `/acerca` | `/en/about` |
| Services | `/servicios` | `/en/services` |
| Shop | `/tienda` | `/en/shop` |
| Contact | `/contacto` | `/en/contact` |

#### Editing Translations

Edit content directly in JSON files:
- Spanish: `src/messages/es.json`
- English: `src/messages/en.json`

See [i18n documentation](docs/i18n-structure.md) for details.

### 🧪 Development Notes

- Edit pages in `src/app/[locale]/`
- Changes are reflected in real-time
- All text must use translation keys (no hardcoded text)
- Full documentation in `/docs/` directory

### 📦 Deployment

Deploy easily with [Vercel](https://vercel.com), the creators of Next.js.

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### 📚 Documentation

- [Quick Start Guide](docs/QUICK_START.md) - Implementation status and next steps
- [i18n Structure](docs/i18n-structure.md) - Complete internationalization guide
- [Project Requirements](docs/requirements/promp.md) - Full project specifications

---

## 🇦🇷 Versión en Español

Sitio profesional y escalable desarrollado con Next.js, optimizado para SEO e integrado con Mercado Pago.
El proyecto prioriza el rendimiento, la accesibilidad y la mantenibilidad para ofrecer una experiencia fluida y moderna.

### 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (React 19)
- **Estilos:** Tailwind CSS v4
- **Internacionalización:** next-intl
- **Pagos:** SDK de Mercado Pago (próximamente)
- **Despliegue:** Vercel
- **Optimización SEO:** Funcionalidades integradas de Next.js
- **Control de versiones:** GitHub

### 🧩 Características

✅ **Implementado:**
- Diseño totalmente responsive y accesible
- **Soporte multilenguaje (Español/Inglés)** con URLs localizadas
- Buenas prácticas SEO con metadata dinámica
- Desarrollo con seguridad de tipos usando TypeScript
- Arquitectura modular preparada para crecimiento futuro

🚧 **En Progreso:**
- Modo de tema claro/oscuro
- Carrito de compras y funcionalidad e-commerce
- Integración de pagos segura con Mercado Pago
- Sistema de gestión de contenido basado en archivos
- SEO mejorado (JSON-LD, sitemaps, etc.)

### 🛠️ Cómo empezar

1. Instalá las dependencias:
```bash
npm install
```

2. Ejecutá el servidor de desarrollo:
```bash
npm run dev
```

3. Abrí tu navegador:
- Español (predeterminado): [http://localhost:3000](http://localhost:3000)
- Inglés: [http://localhost:3000/en](http://localhost:3000/en)

### 🌍 Soporte Multilenguaje

El sitio está disponible en español e inglés con URLs localizadas:

| Página | URL en Español | URL en Inglés |
|--------|----------------|---------------|
| Inicio | `/` | `/en` |
| Acerca | `/acerca` | `/en/about` |
| Servicios | `/servicios` | `/en/services` |
| Tienda | `/tienda` | `/en/shop` |
| Contacto | `/contacto` | `/en/contact` |

#### Editar Traducciones

Editá el contenido directamente en los archivos JSON:
- Español: `src/messages/es.json`
- Inglés: `src/messages/en.json`

Consultá la [documentación de i18n](docs/i18n-structure.md) para más detalles.

### 🧪 Notas de desarrollo

- Editá las páginas en `src/app/[locale]/`
- Los cambios se actualizan automáticamente
- Todo el texto debe usar claves de traducción (sin texto hardcodeado)
- Documentación completa en el directorio `/docs/`

### 📦 Despliegue

Podés desplegar fácilmente el proyecto con [Vercel](https://vercel.com), los creadores de Next.js.

Para más información, consultá la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

### 📚 Documentación

- [Guía de Inicio Rápido](docs/QUICK_START.md) - Estado de implementación y próximos pasos
- [Estructura i18n](docs/i18n-structure.md) - Guía completa de internacionalización
- [Requisitos del Proyecto](docs/requirements/promp.md) - Especificaciones completas del proyecto