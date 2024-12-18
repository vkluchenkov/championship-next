import useTranslation from 'next-translate/useTranslation';
import { useFormContext } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Collapse, MenuItem } from '@mui/material';

import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import { ContestSoloStepProps, FormFields } from './types';
import { FormInputCheckbox, FormInputSelect } from '@/src/ui-kit/input';
import { getContestAgeGroupsList } from './helpers';
import { ContestSoloList } from './ContestSoloList';
import { minSoloPass } from '@/src/utils/constants';

export const ContestSolo: React.FC<ContestSoloStepProps> = ({
  setStepTotal,
  soloPassPrice,
  setIsNextDisabled,
  isEligible,
}) => {
  const { t } = useTranslation('registration');

  const methods = useFormContext<FormFields>();
  const {
    control,
    watch,
    setValue,
    resetField,
    formState: { errors },
  } = methods;

  const ageGroup = watch('ageGroup');
  const contestAgeGroup = watch('contestAgeGroup');
  const contestLevels = watch('contestLevels');
  const contestLevel = watch('contestLevel');
  const isSoloPass = watch('isSoloPass');
  const isSoloContest = watch('isSoloContest');
  const soloContest = watch('soloContest');
  const soloContestSelected = soloContest.filter((cat) => cat.selected);

  const [isAgeInitialized, setIsAgeInitialized] = useState(false);
  const [isStyleInitialized, setIsStyleInitialized] = useState(false);

  // disable next if none selected or solo pass and less than minimum selected
  useEffect(() => {
    if (isSoloContest && !soloContestSelected.length) {
      setIsNextDisabled(true);
    } else if (isSoloContest && isSoloPass && soloContestSelected.length < minSoloPass) {
      setIsNextDisabled(true);
    } else setIsNextDisabled(false);
  }, [isSoloContest, soloContestSelected, isSoloPass, setIsNextDisabled]);

  const cleanup = useCallback(() => {
    // clear all stlyes
    if (soloContest.length > 0) soloContest.forEach((i) => (i.selected = false));
    // clear solo pass
    setValue('isSoloPass', false);
  }, [soloContest, setValue]);

  const resetLevel = useCallback(() => {
    // set level to default
    if (contestAgeGroup === 'baby' || contestAgeGroup === 'seniors')
      setValue('contestLevel', 'openLevel');
    else resetField('contestLevel');
  }, [contestAgeGroup, setValue, resetField]);

  // Clear all contest entries on checkbox off
  useEffect(() => {
    if (!isSoloContest) {
      // console.log('cleaning up because of checkbox');
      cleanup();
      resetLevel();
    }
    // want to run this ONLY on checkbox change
    // eslint-disable-next-line
  }, [isSoloContest]);

  // Clear all contest entries on age change
  useEffect(() => {
    // making sure it's not running on component init
    if (!isAgeInitialized) setIsAgeInitialized(true);
    else {
      // console.log('cleaning up because of age change');
      cleanup();
      resetLevel();
    }
    // want to run this ONLY on age change
    // eslint-disable-next-line
  }, [contestAgeGroup]);

  // Clear all contest entries on styles remapping
  useEffect(() => {
    // making sure it's not running on component init
    if (!isStyleInitialized) setIsStyleInitialized(true);
    else {
      // console.log('cleaning up because of styles change');
      cleanup();
      // Not resetting level, because this causes styles to remap and causes cleanup again
    }
    // want to run this ONLY on styles change
    // eslint-disable-next-line
  }, [soloContest]);

  // Set step total
  useEffect(() => {
    let total = 0;
    if (isSoloPass) total = total + soloPassPrice;
    if (soloContestSelected) {
      const catsPrice = soloContestSelected.reduce((prev, current) => prev + current.price, 0);
      total = total + catsPrice;
    }
    setStepTotal(total);
  }, [isSoloPass, soloPassPrice, soloContestSelected, setStepTotal]);

  const ageGroupList = useMemo(() => {
    return getContestAgeGroupsList(ageGroup);
  }, [ageGroup]);

  const contestLevelsList = useMemo(() => {
    return contestLevels.map((level) => (
      <MenuItem key={level} value={level} translate='no'>
        {t(`form.contest.levels.${level}`)}
      </MenuItem>
    ));
  }, [contestLevels, t]);

  return (
    <div className={styles.form}>
      <h2 className={textStyles.h2}>{t('form.contest.soloTitle')}</h2>
      {!isEligible && <p className={textStyles.p}>{t('form.contest.notEligible')}</p>}
      {isEligible && (
        <>
          <FormInputCheckbox
            control={control}
            name='isSoloContest'
            label={<p className={textStyles.p}>{t('form.contest.checkboxLabel')}</p>}
          />

          <Collapse in={isSoloContest} unmountOnExit>
            <div className={styles.form}>
              {ageGroupList.length > 1 && (
                <FormInputSelect
                  translate='no'
                  name='contestAgeGroup'
                  control={control}
                  label={t('form.contest.ageGroups.title')}
                  rules={{
                    required: t('form.common.required'),
                  }}
                  error={!!errors?.contestAgeGroup}
                  helperText={errors?.contestAgeGroup?.message as string | undefined}
                >
                  {ageGroupList.map((group) => (
                    <MenuItem key={group} value={group} translate='no'>
                      {t(`form.contest.ageGroups.${group}`)}
                    </MenuItem>
                  ))}
                </FormInputSelect>
              )}

              {contestLevels.length > 0 && (
                <FormInputSelect
                  translate='no'
                  name='contestLevel'
                  control={control}
                  label={t('form.contest.levels.title')}
                  rules={{
                    required: t('form.common.required'),
                  }}
                  error={!!errors?.contestLevel}
                  helperText={errors?.contestLevel?.message as string | undefined}
                >
                  {contestLevelsList}
                </FormInputSelect>
              )}

              {/* Solo Pass selection */}
              <Collapse in={!!contestLevel && contestLevel !== 'debut'} unmountOnExit>
                <div>
                  <h4 className={textStyles.h4}>{t('form.contest.soloPassTitle')}:</h4>
                  <p className={textStyles.p}>{t('form.contest.solosPassDescription')}</p>
                  <FormInputCheckbox
                    name='isSoloPass'
                    control={control}
                    label={
                      <p className={textStyles.p}>
                        {t('form.contest.soloPassLabel')}
                        {': '}
                        <span className={textStyles.accent}>
                          {soloPassPrice > 0 ? soloPassPrice + '€' : ''}
                        </span>
                      </p>
                    }
                  />
                </div>
              </Collapse>
              {/* Styles selection */}
              <Collapse in={!!soloContest.length} unmountOnExit>
                <h4 className={textStyles.h4}>{t('form.contest.stylesTitle')}:</h4>
                <ContestSoloList />
              </Collapse>
            </div>
          </Collapse>
        </>
      )}
    </div>
  );
};
