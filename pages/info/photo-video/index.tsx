import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/PhotoVideo.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Hero } from '@/src/ui-kit/Hero';
import tba from '/public/images/tba.png';
import vladimir from '/public/images/vladimir.jpg';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import clsx from 'clsx';

const PhotoVideo: NextPage = () => {
  const { t, lang } = useTranslation('photoVideo');

  // Translations with HTML
  const photographerText = (
    <Trans
      i18nKey='photoVideo:photographerText'
      components={[<Link href='http://www.andre-elbing.de' target='_blank' key={1} />]}
    />
  );

  const videographerText = (
    <Trans
      i18nKey='photoVideo:videographerText'
      components={[<Link href='https://www.bestpicture.pro' target='_blank' key={1} />]}
    />
  );

  const photoshootBooking = (
    <Trans
      i18nKey='photoVideo:photoshootBooking'
      components={[<Link href='https://facebook.com/andre.elbing' target='_blank' key={1} />]}
    />
  );

  const content = (
    <div className={styles.contentWrapper}>
      <section className={styles.section}>
        <Hero name={t('vladimir')} title={t('videographer')} image={vladimir} />
        <p className={textStyles.p}>{videographerText}</p>
        <h3 className={clsx(textStyles.h3, textStyles.accent)}>{t('price')}:</h3>
        <ul className={textStyles.list}>
          <li>{t('videoPrice')}</li>
        </ul>
      </section>
      <section className={styles.section}>
        <Hero name={t('tba')} title={t('photographer')} image={tba} />
        {/* <p className={textStyles.p}>{photographerText}</p> */}
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
