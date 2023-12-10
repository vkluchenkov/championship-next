import React, { useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useFieldArray, useFormContext } from 'react-hook-form';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import { useCallback, useEffect } from 'react';
import { Button, Collapse, MenuItem } from '@mui/material';
import { ContestGroupStepProps, FormFields, GroupContest } from './types';
import { ContestGroup } from './ContestGroup';
import { contestGroupPrice } from '@/src/ulis/price';
import { maxGroups } from '@/src/ulis/constants';
import { contestCategories } from '@/src/ulis/contestCategories';
import { FormInputCheckbox, FormInputSelect } from '@/src/ui-kit/input';
import { getContestAgeGroupsList } from './helpers';

export const ContestGroups: React.FC<ContestGroupStepProps> = ({
  setStepTotal,
  lastDirection,
  onStepSubmit,
}) => {
  const { t } = useTranslation('registration');

  const methods = useFormContext<FormFields>();
  const {
    control,
    watch,
    trigger,
    setValue,
    clearErrors,
    formState: { errors },
  } = methods;

  const { fields } = useFieldArray({
    control,
    name: 'groupContest',
    keyName: 'id',
  });

  const groupContest = watch('groupContest');
  const ageGroup = watch('ageGroup');
  const contestAgeGroup = watch('contestAgeGroup');
  const isGroupContest = watch('isGroupContest');
  const isSoloContest = watch('isSoloContest');

  const defaultGroup: GroupContest = useMemo(() => {
    return {
      type: 'duo',
      styles: [],
      style: '',
      qty: 2,
      name: '',
      price: contestGroupPrice * 2, //qty
    };
  }, []);

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...groupContest[index],
      index,
    };
  });

  // Clean contest group competition state if not empty
  // useEffect(() => {
  //   if (lastDirection) onStepSubmit(lastDirection);
  // });

  // Set first group fields and clear all group fields and errors on checkbox change
  useEffect(() => {
    if (isGroupContest && groupContest.length === 0) {
      setValue('groupContest', [defaultGroup]);
    }
    if (!isGroupContest && groupContest.length > 0) {
      setValue('groupContest', []);
      clearErrors();
    }
  }, [setValue, defaultGroup, clearErrors, groupContest, isGroupContest]);

  useEffect(() => {
    const res = controlledFields.reduce((prev, current) => {
      return prev + current.price;
    }, 0);
    setStepTotal(res);
  }, [controlledFields, setStepTotal]);

  const handleMore = useCallback(async () => {
    const isValid = await trigger();
    if (isValid) setValue('groupContest', [...groupContest, defaultGroup]);
  }, [groupContest, setValue, defaultGroup, trigger]);

  const handleDelete = useCallback(
    (id: string) => {
      const copy = controlledFields.slice();
      const index = copy.findIndex((i) => i.id === id);
      if (index >= 0) {
        copy.splice(index, 1);
        setValue('groupContest', [...copy]);
      }
    },
    [controlledFields, setValue]
  );

  const groups = controlledFields.map((field) => {
    const isDuoType = field.type === 'duo';
    const isGroupType = field.type === 'group';

    const contestCategory = contestCategories.find(
      (cat) =>
        (cat.ageGroup === contestAgeGroup && cat.isDuoCategory === isDuoType) ||
        cat.isGroupCategory === isGroupType
    );

    return (
      <ContestGroup
        field={field}
        key={field.id}
        catStyles={contestCategory?.categories}
        onDelete={() => handleDelete(field.id)}
      />
    );
  });

  const ageGroupList = getContestAgeGroupsList(ageGroup);

  return (
    <div className={styles.form}>
      <h2 className={textStyles.h2}>{t('form.contest.groups.title')}</h2>

      <>
        <FormInputCheckbox
          name='isGroupContest'
          control={control}
          label={<p className={textStyles.p}>{t('form.contest.groups.checkboxLabel')}</p>}
        />

        <Collapse in={isGroupContest} unmountOnExit>
          <div className={styles.form}>
            <Collapse in={!isSoloContest} unmountOnExit>
              <div className={styles.form}>
                {ageGroupList.length > 1 && (
                  <FormInputSelect
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
                      <MenuItem key={group} value={group}>
                        {t(`form.contest.ageGroups.${group}`)}
                      </MenuItem>
                    ))}
                  </FormInputSelect>
                )}
              </div>
            </Collapse>
            {groups}
          </div>

          {groupContest.length && groupContest.length < maxGroups && (
            <Button
              type='button'
              variant='outlined'
              fullWidth
              size='large'
              disableElevation
              onClick={handleMore}
            >
              {t('form.contest.groups.add')}
            </Button>
          )}
        </Collapse>
      </>
    </div>
  );
};
