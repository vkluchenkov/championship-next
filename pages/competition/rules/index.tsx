import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { contestCategories } from '@/src/ulis/contestCategories';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Rules.module.css';
import clsx from 'clsx';
import { SupportedLangs } from '@/src/types';
import { AnimatePresence, motion } from 'framer-motion';
import { motionVariants } from '@/src/ulis/constants';

const ContestRules: NextPage = () => {
  const { t, lang } = useTranslation('competitionRules');

  const currentLang = lang as SupportedLangs;

  // translations with HTML
  const championRulesText = (
    <Trans
      i18nKey='competitionRules:championRulesText'
      components={[<Link href='/competition/judging' key={1} />]}
    />
  );

  const getCatsList = () =>
    contestCategories.map((group, groupIndex) => {
      const title = group.translations[currentLang].title;
      const levels = group.levels.map((l) => t(l)).join(', ');

      const categories = group.categories?.map((cat, catIndex) => {
        const catTitle = cat.translations[currentLang].categoryTitle;
        return <li key={catTitle + catIndex}>{catTitle}</li>;
      });

      return (
        <div key={title + groupIndex} className={styles.categories}>
          <h3 className={textStyles.h3}>{title + ` (${group.age} ${t('age')})`}</h3>
          <p className={textStyles.p}>
            <span className={styles.levels}>{t('levels')}</span>
            {levels}
          </p>
          {categories && (
            <>
              <h4 className={textStyles.h4}>{t('styles')}</h4>
              <ul
                className={textStyles.list}
                key={group.translations[currentLang] + groupIndex.toString()}
              >
                {categories}
              </ul>
            </>
          )}
          {group.description && <p className={textStyles.p}>{t(group.description)}</p>}
        </div>
      );
    });

  const commonContent = (
    <>
      <p className={textStyles.p}>{t('version', { version: '3', date: '26.01.2024' })}</p>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>1. {t('categoriesTitle')}</h2>
      {getCatsList()}

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>2. {t('timingTitle')}</h2>
      <p className={textStyles.p}>{t('timingSolo')}</p>
      <p className={textStyles.p}>{t('timingGroups')}</p>
    </>
  );

  const liveContent = (
    <>
      {commonContent}
      <h2 className={clsx(textStyles.h2, textStyles.accent)}>3. {t('championRulesTitle')}</h2>
      <p className={textStyles.p}>{championRulesText}</p>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>4. {t('improvisationTitle')}</h2>
      <p className={textStyles.p}>{t('improvisationText')}</p>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>5. {t('prizesTitle')}</h2>
      <p className={textStyles.p}>{t('prizesMain')}</p>
      <p className={textStyles.p}>{t('prizesMain2')}</p>
      <p className={textStyles.p}>{t('prizesSolo')}</p>
      <p className={textStyles.p}>{t('prizesGroups')}</p>
      <p className={textStyles.p}>{t('prizesAdditional')}</p>
      <p className={textStyles.p}>{t('prizesKids')}</p>

      <h2 className={clsx(textStyles.h2, textStyles.accent)}>{t('additionalTitle')}:</h2>
      <p className={textStyles.p}>{t('additionalText')}</p>
    </>
  );

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>
      <section className={styles.section}>
        <AnimatePresence>
          <motion.div
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={motionVariants}
            transition={{ type: 'linear', duration: 0.3 }}
          >
            {liveContent}
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default ContestRules;
