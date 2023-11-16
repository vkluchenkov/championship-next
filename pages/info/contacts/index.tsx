import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Contacts.module.css';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import clsx from 'clsx';
import Link from 'next/link';
import { atlasUrl, cpkUrl, emailUrl, facebookUrl, instagramUrl } from '@/src/ulis/constants';

const Contacts: NextPage = () => {
  const { t, lang } = useTranslation('contacts');

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('contactsTitle')}</h2>
      <section className={styles.section}>
        <div className={styles.contacts__social}>
          {/* <Link
            href={facebookUrl}
            target='_blank'
            className={clsx(styles.social__button, styles.social__button_fb)}
          /> */}
          <Link
            href={instagramUrl}
            target='_blank'
            className={clsx(styles.social__button, styles.social__button_insta)}
          />
          <Link
            type='button'
            href={emailUrl}
            className={clsx(styles.social__button, styles.social__button_email)}
          />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('addressesTitle')}</h2>
        <h3 className={textStyles.h3}>{t('CpkTitle')}</h3>
        <p className={textStyles.p}>
          <Link href={cpkUrl} target='_blank'>
            {t('CPK')}
          </Link>
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={textStyles.h3}>{t('AtlasTitle')}</h3>
        <p className={textStyles.p}>
          <Link href={atlasUrl} target='_blank'>
            {t('Atlas')}
          </Link>
        </p>
        {/* <p className={textStyles.p}>{t('AtlasInfo')}</p> */}
      </section>
    </Layout>
  );
};

export default Contacts;
