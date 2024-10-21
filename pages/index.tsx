import Image from 'next/image';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

import styles from '@/styles/Home.module.css';
import textStyles from '@/styles/Text.module.css';
import { Layout } from '@/src/components/Layout';
import { Cta } from '@/src/components/CTA';
import { Schedule } from '@/src/components/Schedule';
import socialPoster from 'public/images/teachers.png';
import { Partners } from '@/src/components/Partners';
import { WordpressApi } from '@/src/api/wordpressApi';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['cta'],
    queryFn: () => WordpressApi.getCta(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

export default function Home() {
  const { t } = useTranslation('home');

  // Translations with HTML
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
          <h1 className={styles.content__title}>{t('home:welcomeTitle')}</h1>
          <div className={styles.teachersContainer}>
            <Image src={socialPoster} alt={t('home:coverImageAlt')} fill priority />
          </div>
          {welcomeText}
        </section>
        <section className={styles.schedule}>
          <h2 className={clsx(textStyles.h2, textStyles.uppercase, textStyles.glow)}>
            {t('common:schedule')}
          </h2>
          <Schedule />
        </section>
        <section className={styles.partners}>
          <h2 className={clsx(textStyles.h2, textStyles.uppercase, textStyles.glow)}>
            {t('partnersTitle')}
          </h2>
          <Partners />
        </section>
      </div>
    </Layout>
  );
}
