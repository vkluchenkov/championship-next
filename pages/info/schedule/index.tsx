import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import styles from '@/styles/Faq.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Schedule } from '@/src/components/Schedule';

const SchedulePage: NextPage = () => {
  const { t, lang } = useTranslation('schedule');

  return (
    <Layout title={t('pageTitle')}>
      {/* <h1 className={textStyles.h1}>{t('pageTitle')}</h1> */}
      <section className={styles.section}>
        <Schedule />
      </section>
    </Layout>
  );
};

export default SchedulePage;
