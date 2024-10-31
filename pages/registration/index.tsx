import { GetStaticProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ThemeProvider } from '@mui/material';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { WordpressApi } from '@/src/api/wordpressApi';
import { useEffect, useMemo, useState } from 'react';

import { Layout } from '@/src/components/Layout';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import { FormRegistration } from '@/src/components/FormRegistration';
import { darkTheme } from '@/src/utils/constants';

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
    revalidate: 60,
  };
};

const Registration: NextPage = () => {
  const { t, lang } = useTranslation('registration');

  const { data, isLoading, status, error } = useQuery({
    queryKey: ['settings'],
    queryFn: WordpressApi.getSettings,
    refetchOnMount: false,
  });

  const [regState, setRegState] = useState(data?.registrationState);

  useEffect(() => {
    if (data?.registrationState) setRegState(data.registrationState);
  }, [data]);

  const isRegOpen = useMemo(() => {
    if (process.env.NODE_ENV === 'development')
      return regState?.isLiveOpenDev.toLowerCase() === 'true' ? true : false;
    if (process.env.NODE_ENV === 'production')
      return regState?.isLiveOpen.toLowerCase() === 'true' ? true : false;
    else return false;
  }, [regState]);

  return (
    <Layout title={t('pageTitle')}>
      {isRegOpen && <h1 className={textStyles.h1}>{t('pageTitle')}</h1>}
      {!isRegOpen && <h1 className={textStyles.h1}>{t('allClosed')}</h1>}
      <section className={styles.section}>
        <ThemeProvider theme={darkTheme}>
          {isRegOpen && <FormRegistration priceData={data} />}
        </ThemeProvider>
      </section>
    </Layout>
  );
};

export default Registration;
