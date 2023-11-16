import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import { telegramUrl } from '@/src/ulis/constants';
import clsx from 'clsx';

const PaymentThankYou: NextPage = () => {
  const { t, lang } = useTranslation('payment');

  const telegram = (
    <Trans
      i18nKey='payment:thanks.telegram'
      components={[
        <Link href={telegramUrl} target='_blank' className={textStyles.accent} key={1} />,
      ]}
    />
  );

  return (
    <Layout title={t('thanks.pageTitle')}>
      <h1 className={textStyles.h1}>{t('thanks.pageTitle')}</h1>
      <h2 className={textStyles.h2}>{t('thanks.subtitle')}</h2>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('thanks.telegramTitle')}</h2>
      <p className={textStyles.p}>{telegram}</p>
    </Layout>
  );
};

export default PaymentThankYou;
