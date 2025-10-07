import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations({ locale: 'es', namespace: 'meta.home' });

  return {
    title: {
      default: t('title'),
      template: '%s | Lic. María Cecilia Inzaugarat'
    },
    description: t('description'),
    keywords: ['desarrollo infantil', 'psicopedagogía', 'familia', 'crianza', 'child development', 'family counseling'],
    authors: [{ name: 'Lic. María Cecilia Inzaugarat' }],
    creator: 'Lic. María Cecilia Inzaugarat',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      alternateLocale: ['en_US'],
      siteName: 'Lic. María Cecilia Inzaugarat',
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}
