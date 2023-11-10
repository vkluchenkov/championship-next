import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Price.module.css';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import {
  contestGroupPrice,
  contestSoloPrice,
  teachersWsGroups,
  workshopsPrice,
  worldShowPrice,
  isFullPassSoldOut,
} from '@/src/ulis/price';
import { motion, AnimatePresence } from 'framer-motion';
import { motionVariants } from '@/src/ulis/constants';

console.log(textStyles);
const Price: NextPage = () => {
  const { t, lang } = useTranslation('price');

  const isSoldOut = isFullPassSoldOut;

  const group1Names = teachersWsGroups.group1.map((n) => t(`workshops.teachers.${n}`)).join(', ');
  const group2Names = teachersWsGroups.group2.map((n) => t(`workshops.teachers.${n}`)).join(', ');

  const workshops = workshopsPrice.map((period, index) => {
    const getTitle = () => {
      const startDate = period.startDate?.toLocaleDateString('pl');
      const endDate = period.endDate?.toLocaleDateString('pl');
      if (period.isPromo) return t('workshops.promo');
      if (!period.startDate && !period.endDate && !period.isPromo) return '';
      else return `${startDate} – ${endDate}`;
    };

    return (
      <div
        key={period.price.fullPassPrice + index}
        className={clsx(styles.period, styles.period_active)}
      >
        <h4 className={styles.period__title}>{getTitle()}</h4>

        <p className={clsx(textStyles.p, styles.period__fullPass)}>
          {isSoldOut
            ? `${t('workshops.fullPass')}: ${t('workshops.soldOut')}`
            : `${t('workshops.fullPass')}: ${period.price.fullPassPrice}zł`}
        </p>

        {period.description && (
          <p className={clsx(textStyles.p, styles.period__description)}>
            {t(`workshops.${period.description}`)}
          </p>
        )}
        <h5 className={styles.period__singleTitle}>{t('workshops.singleTitle')}:</h5>
        <p className={textStyles.p}>
          {group1Names}:
          <span className={textStyles.accent}>&nbsp;{period.price.group1Price}zł</span>
        </p>

        <p className={textStyles.p}>
          {group2Names}:<span className={textStyles.accent}> {period.price.group2Price}zł</span>
        </p>
      </div>
    );
  });

  const workshopsContent = (
    <>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('workshops.title')}</h2>
      <p className={textStyles.p}>{t('workshops.description')}</p>
      <div className={styles.workshopsContainer}>{workshops}</div>
    </>
  );

  const competitionContent = (
    <>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('competition.title')}</h2>

      {/* Price table */}
      <div className={styles.table}>
        <div className={styles.table__row}>
          <h4 className={clsx(textStyles.h4, styles.table__header, styles.table__cell)}>
            {t('competition.categoryTitle')}
          </h4>
          <h4 className={clsx(textStyles.h4, styles.table__header, styles.table__cell)}>
            {t('competition.price')}
          </h4>
        </div>

        <div className={styles.table__row}>
          <h3 className={clsx(textStyles.h3, styles.table__cell, styles.table__cell_fullWidth)}>
            {t('competition.kids')}
          </h3>
        </div>

        <div className={styles.table__row}>
          <p className={clsx(textStyles.p, styles.table__cell)}>{t('competition.allLevels')}</p>
          <p className={clsx(textStyles.p, textStyles.accent, styles.table__cell)}>
            {contestSoloPrice.kids.price.priceNormal}zł
          </p>
        </div>

        <div className={styles.table__row}>
          <h3 className={clsx(textStyles.h3, styles.table__cell, styles.table__cell_fullWidth)}>
            {t('competition.juniors+')}
          </h3>
        </div>

        <div className={styles.table__row}>
          <p className={clsx(textStyles.p, styles.table__cell)}>{t('competition.notPro')}</p>
          <p className={clsx(textStyles.p, textStyles.accent, styles.table__cell)}>
            {contestSoloPrice.risingStar.price.priceNormal}zł
          </p>
        </div>

        <div className={styles.table__row}>
          <p className={clsx(textStyles.p, styles.table__cell)}>{t('competition.professionals')}</p>
          <p className={clsx(textStyles.p, textStyles.accent, styles.table__cell)}>
            {contestSoloPrice.professionals.price.priceNormal}zł
          </p>
        </div>

        <div className={styles.table__row}>
          <div className={clsx(styles.table__cell, styles.table__cell_fullWidth)}>
            <h3 className={clsx(textStyles.h3)}>{t('competition.groups')}</h3>
          </div>
        </div>

        <div className={styles.table__row}>
          <p className={clsx(textStyles.p, styles.table__cell)}>{t('competition.perPerson')}</p>
          <p className={clsx(textStyles.p, textStyles.accent, styles.table__cell)}>
            {contestGroupPrice}zł
          </p>
        </div>
      </div>
    </>
  );

  const worldShowContent = (
    <>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('show.title')}</h2>
      <ul className={textStyles.list}>
        <li>
          {t('show.soloNormal')}:{' '}
          <span className={textStyles.accent}>{worldShowPrice.soloPriceNormal}zł</span>
        </li>
        <li>
          {t('show.groups')}: <span className={textStyles.accent}>{worldShowPrice.groups}zł</span>{' '}
          {t('show.perPerson')}
        </li>
      </ul>
    </>
  );

  const paymentContent = (
    <>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('payment.title')}</h2>

      <h3 className={clsx(textStyles.h3)}>{t('payment.conditionsTitle')}</h3>
      <p className={textStyles.p}>{t('payment.conditionsText')}</p>

      <h3 className={clsx(textStyles.h3)}>{t('payment.optionsTitle')}</h3>
      <ul className={textStyles.list}>
        <li>
          <span className={textStyles.accent}>{t('payment.optionsCards')}</span> (
          {t('payment.ImmediateArrival')})
        </li>
        <li>
          <span className={textStyles.accent}>{t('payment.optionsPayPal')}</span> (
          {t('payment.ImmediateArrival')})
        </li>
        <li>
          <span className={textStyles.accent}>{t('payment.optionsBank')}</span> (
          {t('payment.bankeArrival')})
        </li>
      </ul>
      <p className={textStyles.p}>{t('payment.optionsDescription')}</p>

      <h3 className={clsx(textStyles.h3)}>{t('payment.termsTitle')}</h3>
      <ul className={textStyles.list}>
        <li>{t('payment.term1')}</li>
        <li>{t('payment.term2')}</li>
        <li>{t('payment.term3')}</li>
      </ul>
    </>
  );

  const privacyPolicy = (
    <>
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('privacyPolicy.title')}</h2>
      <p className={textStyles.p}>{t('privacyPolicy.p1')}</p>
      <p className={textStyles.p}>{t('privacyPolicy.p2')}</p>
      <p className={textStyles.p}>{t('privacyPolicy.p3')}</p>
    </>
  );

  const content = (
    <AnimatePresence>
      <motion.section
        className={styles.section}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={motionVariants}
        transition={{ type: 'linear', duration: 0.3 }}
      >
        {workshopsContent}
        {competitionContent}
        {worldShowContent}
        {paymentContent}
        {privacyPolicy}
      </motion.section>
    </AnimatePresence>
  );

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      {content}
    </Layout>
  );
};

export default Price;
