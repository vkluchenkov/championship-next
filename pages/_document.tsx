import { SupportedLangs } from '@/src/types';
import useTranslation from 'next-translate/useTranslation';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const { lang } = useTranslation();
  const currentLang = lang as SupportedLangs;

  return (
    <Html lang={currentLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
