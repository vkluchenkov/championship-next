import styles from '@/styles/Home.module.css';
import { Layout } from '@/src/components/Layout';
import { Divider } from '@/src/ui-kit/Divider';
import { Cta } from '@/src/components/CTA';
import Image from 'next/image';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Schedule } from '@/src/components/Schedule';
import socialPoster from 'public/images/teachers.png';

export default function Home() {
  const { t } = useTranslation();

  // Translations with HTML
  const welcomeTitle = <Trans i18nKey='home:welcomeTitle' components={[<br key={1} />]} />;
  const welcomeText = (
    <Trans
      i18nKey='home:welcomeText'
      components={[
        <p className={styles.content__text} key={0} />,
        <span className={styles.content__text_accent} key={1} />,
      ]}
    />
  );

  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Cta />
        <section className={styles.content}>
          <h1 className={styles.content__title}>{welcomeTitle}</h1>
          <div className={styles.teachersContainer}>
            <Image src={socialPoster} alt={t('home:coverImageAlt')} fill priority />
          </div>
          {welcomeText}
        </section>
        <section className={styles.schedule}>
          <Schedule />
        </section>
      </div>
    </Layout>
  );
}
