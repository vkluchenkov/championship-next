import { Divider } from '@/src/ui-kit/Divider';
import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from './footer.module.css';
import { emailUrl, facebookUrl, instagramUrl } from '@/src/utils/constants';

export const Footer: React.FC = () => {
  const { t, lang } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__divider}>
        <Divider />
      </div>
      <div className={styles.footer__social}>
        <Link
          href={facebookUrl}
          target='_blank'
          className={clsx(styles.social__button, styles.social__button_fb)}
        />
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
      <div className={styles.footer__copyrightWrapper}>
        <p className={styles.footer__text}>
          <Link href='/info/contacts' target='_blank' className={styles.footer__link}>
            {t('common:footerAddress')}
          </Link>
        </p>
        <p className={styles.footer__copyright}>
          ©{currentYear === 2024 ? currentYear : '2024-' + currentYear.toString()} Open Bellydance
          Championship
          <br />
          <a href='https://github.com/vkluchenkov' target='_blank'>
            {t('common:footerCopyright')}
          </a>
        </p>
      </div>
    </footer>
  );
};
