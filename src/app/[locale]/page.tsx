import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '../components/LanguageSwitcher';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      canonical: '/',
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              {t('common.siteName')}
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
                {t('nav.home')}
              </Link>
              <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
                {t('nav.about')}
              </Link>
              <Link href="/services" className="hover:text-gray-600 dark:hover:text-gray-300">
                {t('nav.services')}
              </Link>
              <Link href="/shop" className="hover:text-gray-600 dark:hover:text-gray-300">
                {t('nav.shop')}
              </Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">
                {t('nav.contact')}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            {t('home.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500">
            {t('home.description')}
          </p>
          <div className="flex gap-4 items-center justify-center pt-4">
            <Link
              href="/about"
              className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              {t('home.cta')}
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('home.ctaShop')}
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
}
