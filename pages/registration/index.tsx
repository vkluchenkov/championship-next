import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Version } from '@/src/types';
import { useMemo, useState } from 'react';
import { Switcher } from '@/src/ui-kit/Switcher';
import { FormRegistration } from '@/src/components/FormRegistration';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from '@/src/ulis/constants';

const Registration: NextPage = () => {
  const { t, lang } = useTranslation('registration');

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      <section className={styles.section}>
        <ThemeProvider theme={darkTheme}>
          <FormRegistration version='live' />
        </ThemeProvider>
      </section>
    </Layout>
  );
};

export default Registration;
