import Link from 'next/link';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import { Layout } from '@/src/components/Layout';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Faq.module.css';
import { StyledAccordeon } from '@/src/ui-kit/StyledAccordeon';

const FAQ: NextPage = () => {
  const { t, lang } = useTranslation('faq');

  const a2 = (
    <Trans
      i18nKey='faq:a2'
      components={[<Link href='/competition/rules/' target='_blank' key={1} />]}
    />
  );

  const a3 = (
    <Trans
      i18nKey='faq:a3'
      components={[<Link href='/info/contacts/' target='_blank' key={1} />]}
    />
  );

  const a5 = (
    <Trans i18nKey='faq:a5' components={[<Link href='/price/' target='_blank' key={1} />]} />
  );

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      <section className={styles.section}>
        <p className={textStyles.p}>{t('description')}</p>

        <StyledAccordeon summary={t('q1')} details={<p className={textStyles.p}>{t('a1')}</p>} />
        <StyledAccordeon summary={t('q2')} details={<p className={textStyles.p}>{a2}</p>} />
        <StyledAccordeon summary={t('q3')} details={<p className={textStyles.p}>{a3}</p>} />
        <StyledAccordeon summary={t('q4')} details={<p className={textStyles.p}>{t('a4')}</p>} />
        <StyledAccordeon summary={t('q5')} details={<p className={textStyles.p}>{a5}</p>} />
      </section>
    </Layout>
  );
};

export default FAQ;
