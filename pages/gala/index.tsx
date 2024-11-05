import { Layout } from '@/src/components/Layout';
import { GetStaticProps, NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/WorldShow.module.css';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { currencySymbol, worldShowLimit } from '@/src/utils/constants';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { WordpressApi } from '@/src/api/wordpressApi';
import { formatTime } from '@/src/utils/formatTime';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['settings'],
    queryFn: WordpressApi.getSettings,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
};

const GalaShow: NextPage = () => {
  const { t, lang } = useTranslation('gala');

  const { data, isLoading, status, error } = useQuery({
    queryKey: ['settings'],
    queryFn: WordpressApi.getSettings,
    refetchOnMount: false,
  });

  const [worldShowPrice, setWorldShowPrice] = useState(data?.price.worldShow);

  useEffect(() => {
    if (data?.price) setWorldShowPrice(data.price.worldShow);
  }, [data]);

  const content = (
    <>
      {/* <div className={styles.logoWrapper}>
        <Image src={worldShowLogo} alt={t('pageTitle')} fill />
      </div> */}
      <p className={textStyles.p}>
        <span className={textStyles.accent}>{t('dateTitle')}:</span> 4.04.2025 / 19:00
      </p>
      <p className={textStyles.p}>{t('freeEntrance')}</p>
      <p className={textStyles.p}>{t('description')}</p>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('videoTitle')}</h2>
      <p className={textStyles.p}>{t('videoDescription')}</p>
      <div className={styles.playerWrapper}>
        <iframe
          src='https://player.vimeo.com/video/1017509833'
          width='100%'
          height='100%'
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        />
      </div>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('conditionsTitle')}</h2>
      <p className={textStyles.p}>{t('conditionsGeneral')}</p>
      <p className={textStyles.p}>
        {t('conditionsSolo')}
        <span className={textStyles.accent}>
          {' '}
          {worldShowPrice?.solo}
          {currencySymbol}
        </span>
      </p>
      <p className={textStyles.p}>
        {t('conditionsGroup')}{' '}
        <span className={textStyles.accent}>
          {worldShowPrice?.groups}
          {currencySymbol}
        </span>{' '}
        {t('perPerson')}.
      </p>
      <p className={textStyles.p}>
        {t('musicLimit')} <span className={textStyles.accent}> {formatTime(worldShowLimit)}</span>
      </p>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('mediaTitle')}</h2>
      <p className={textStyles.p}>{t('mediaDescription')}</p>
    </>
  );

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      {content}
    </Layout>
  );
};

export default GalaShow;
