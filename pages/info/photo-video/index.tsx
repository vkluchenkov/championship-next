import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import clsx from 'clsx';

import { Layout } from '@/src/components/Layout';
import { Hero } from '@/src/ui-kit/Hero';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/PhotoVideo.module.css';
import vladimir from '/public/images/vladimir.jpg';

const PhotoVideo: NextPage = () => {
  const { t } = useTranslation('photoVideo');

  const videographerText = (
    <Trans
      i18nKey='photoVideo:videographerText'
      components={[<span className={textStyles.accent} key={1} />]}
    />
  );

  const content = (
    <div className={styles.contentWrapper}>
      <section className={styles.section}>
        <Hero name={t('vladimir')} title={t('videographer')} image={vladimir} />
        <p className={textStyles.p}>{videographerText}</p>
      </section>
    </div>
  );

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      {content}
    </Layout>
  );
};

export default PhotoVideo;
