import useTranslation from 'next-translate/useTranslation';
import { useFormContext } from 'react-hook-form';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import { useEffect, useState } from 'react';
import {
  Collapse,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
} from '@mui/material';
import { FormFields, WorkshopsField, WorkshopsStepProps, WorkshopsType } from './types';
import { WorkshopsList } from './WorkshopsList';
import { FormInputCheckbox, FormInputField, FormInputSelect } from '@/src/ui-kit/input';
import { schedule } from '@/src/ulis/schedule';
import { SupportedLangs } from '@/src/types';
import { isFullPassSoldOut } from '@/src/ulis/price';

export const Workshops: React.FC<WorkshopsStepProps> = ({
  setStepTotal,
  currentPricePeriod,
  fullPassPrice,
  fullPassDiscountList,
  setIsNextDisabled,
}) => {
  const { t, lang } = useTranslation('registration');
  const currentLang = lang as SupportedLangs;

  const methods = useFormContext<FormFields>();
  const {
    setValue,
    resetField,
    control,
    watch,
    trigger,
    formState: { errors },
  } = methods;

  const [isDiscount, setIsDiscount] = useState(false);

  const isFullPass = watch('isFullPass');
  const isFullPassDiscount = watch('fullPassDiscount');
  const workshopsType = watch('workshopsType');
  const workshops = watch('workshops');
  const isWorkshops = watch('isWorkshops');

  const isSoldOut = isFullPassSoldOut;

  const selectedWorkshops = workshops.filter((ws) => ws.selected);

  // Handle Full Pass sold out
  useEffect(() => {
    if (isSoldOut) setValue('workshopsType', 'single');
    else resetField('workshopsType');
  }, [setValue, resetField, isSoldOut]);

  // Disable next if no selection made after checking initial checkbox
  useEffect(() => {
    if (isWorkshops) {
      if (isFullPass || selectedWorkshops.length) setIsNextDisabled(false);
      else setIsNextDisabled(true);
    } else setIsNextDisabled(false);
  });

  useEffect(() => {
    if (isFullPassDiscount != 'none') {
      setIsDiscount(true);
    }
    if (isFullPassDiscount === 'none' || !isFullPassDiscount) {
      setIsDiscount(false);
    }
  }, [isFullPassDiscount]);

  // Clear all selection if isWorkshops unchecked
  useEffect(() => {
    if (!isWorkshops) {
      const newWorkshops: WorkshopsField = [];
      schedule.forEach((day) => {
        day.dayEvents.forEach((event) => {
          event.type === 'workshop' &&
            newWorkshops.push({
              ...event,
              selected: false,
              day: day.translations[currentLang].dayTitle,
            });
        });
      });
      setValue('workshops', newWorkshops);

      setValue('isFullPass', false);
      setValue('workshopsType', '');
      setValue('fullPassDiscount', 'none');
      setValue('fullPassDiscountSource', '');
    }
  }, [isWorkshops, resetField, setValue, currentLang]);

  // Set step total
  useEffect(() => {
    if (isFullPass && fullPassPrice) setStepTotal(fullPassPrice);
    else if (!selectedWorkshops) setStepTotal(0);
    else {
      const wsPrice = selectedWorkshops.reduce((prev, current) => {
        const price: number | undefined =
          currentPricePeriod?.price[`${current.teachersPriceGroup!}Price`];
        return prev + price!;
      }, 0);
      setStepTotal(wsPrice);
    }
  }, [selectedWorkshops, isFullPass, currentPricePeriod, fullPassPrice, setStepTotal]);

  const handleFullPass = (event: React.ChangeEvent<HTMLInputElement>, value: WorkshopsType) => {
    setValue('isFullPass', value === 'fullPass', { shouldTouch: true });
    setValue('workshopsType', value, { shouldTouch: true });

    // Reset selection if option has changed
    if (value === 'fullPass') {
      const res: WorkshopsField = [];
      schedule.forEach((day) => {
        day.dayEvents.forEach((event) => {
          event.type === 'workshop' &&
            res.push({ ...event, selected: false, day: day.translations[currentLang].dayTitle });
        });
      });
      setValue('workshops', res);
    } else {
      setValue('fullPassDiscount', 'none', { shouldTouch: true });
      setValue('fullPassDiscountSource', '');
    }
  };

  const workshopsDescription = isSoldOut ? (
    <>
      <p className={textStyles.p}>{t('form.workshops.fullPassDescriptionSoldOut')}</p>
    </>
  ) : (
    <>
      <p className={textStyles.p}>{t('form.workshops.fullPassDescription1')}</p>
    </>
  );

  return (
    <div className={styles.form}>
      <h2 className={textStyles.h2}>{t('form.workshops.title')}</h2>
      {workshopsDescription}

      <FormInputCheckbox
        control={control}
        name='isWorkshops'
        label={<p className={textStyles.p}>{t('form.workshops.checkboxLabel')}</p>}
      />

      <Collapse in={isWorkshops} unmountOnExit>
        <div className={styles.form}>
          {!isSoldOut && (
            <FormControl component='fieldset'>
              <h4 className={textStyles.h4}>{t('form.workshops.selectTitle')}</h4>
              <RadioGroup
                row
                name='workshops-selection'
                value={workshopsType || ''}
                onChange={(event, value) => handleFullPass(event, value as WorkshopsType)}
              >
                <FormControlLabel
                  value='fullPass'
                  control={<Radio />}
                  label={
                    <p className={textStyles.p}>
                      {t('form.workshops.fullPass')}{' '}
                      <span className={textStyles.accent}>
                        {fullPassPrice ? fullPassPrice + 'zł' : ''}
                      </span>
                    </p>
                  }
                />
                <FormControlLabel
                  value='single'
                  control={<Radio />}
                  label={<p className={textStyles.p}>{t('form.workshops.singleWs')}</p>}
                />
              </RadioGroup>
            </FormControl>
          )}

          <Collapse in={workshopsType === 'single'} unmountOnExit>
            <WorkshopsList currentPricePeriod={currentPricePeriod} />
          </Collapse>

          <Collapse in={workshopsType === 'fullPass'} unmountOnExit>
            <div className={styles.form}>
              <FormInputSelect
                name='fullPassDiscount'
                control={control}
                label={t('form.workshops.discounts.title')}
                rules={{
                  required: t('form.common.required'),
                }}
                error={!!errors.fullPassDiscount}
                helperText={errors?.fullPassDiscount?.message as string | undefined}
              >
                {fullPassDiscountList.map((i) => (
                  <MenuItem key={i} value={i}>
                    {t(`form.workshops.discounts.${i}`)}
                  </MenuItem>
                ))}
              </FormInputSelect>

              <Collapse in={isDiscount} unmountOnExit>
                <div className={styles.form}>
                  <p className={textStyles.p}>{t('form.workshops.discounts.detailsDescription')}</p>
                  <FormInputField
                    name='fullPassDiscountSource'
                    label={t('form.workshops.discounts.details')}
                    control={control}
                    rules={{
                      required: t('form.common.required'),
                    }}
                    error={!!errors.fullPassDiscountSource}
                    helperText={errors?.fullPassDiscountSource?.message as string | undefined}
                  />
                </div>
              </Collapse>
            </div>
          </Collapse>
        </div>
      </Collapse>
    </div>
  );
};
