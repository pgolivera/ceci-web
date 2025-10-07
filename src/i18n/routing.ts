import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],

  // Used when no locale matches
  defaultLocale: 'es',

  // The prefix for the locale in the URL
  localePrefix: 'as-needed',

  // Pathnames for internationalized routes
  pathnames: {
    '/': '/',
    '/about': {
      es: '/acerca',
      en: '/about'
    },
    '/services': {
      es: '/servicios',
      en: '/services'
    },
    '/shop': {
      es: '/tienda',
      en: '/shop'
    },
    '/cart': {
      es: '/carrito',
      en: '/cart'
    },
    '/checkout': {
      es: '/pago',
      en: '/checkout'
    },
    '/contact': {
      es: '/contacto',
      en: '/contact'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
