import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/PhotoVideo.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Hero } from '@/src/ui-kit/Hero';
import vladimir from '/public/images/vladimir.jpg';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import clsx from 'clsx';

const PhotoVideo: NextPage = () => {
  const { t } = useTranslation('photoVideo');

  const videographerText = (
    <Trans
      i18nKey='photoVideo:videographerText'
      components={[<Link href='https://www.bestpicture.pro' target='_blank' key={1} />]}
    />
  );

  const content = (
    <div className={styles.contentWrapper}>
      <section className={styles.section}>
        <Hero name={t('vladimir')} title={t('videographer')} image={vladimir} />
        <p className={textStyles.p}>{videographerText}</p>
        <h3 className={clsx(textStyles.h3, textStyles.accent)}>{t('price')}:</h3>
        <ul className={textStyles.list}>
          <li>{t('photoPack')}</li>
          <li>{t('videoPrice')}</li>
          <li>{t('offer')}</li>
        </ul>
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
