import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import useTranslation from 'next-translate/useTranslation';
import { FormRegistration } from '@/src/components/FormRegistration';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from '@/src/ulis/constants';

const Registration: NextPage = () => {
  const { t, lang } = useTranslation('registration');

  return (
    <Layout title={t('pageTitle')}>
      {/* <h1 className={textStyles.h1}>{t('pageTitle')}</h1> */}
      <h1 className={textStyles.h1}>{t('allClosed')}</h1>
      {/* <section className={styles.section}>
        <ThemeProvider theme={darkTheme}>
          <FormRegistration />
        </ThemeProvider>
      </section> */}
    </Layout>
  );
};

export default Registration;
