import React, { useCallback, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useFieldArray, useFormContext } from 'react-hook-form';
import textStyles from '@/styles/Text.module.css';
import { FormControlLabel } from '@mui/material';
import { SupportedLangs } from '@/src/types';
import { InputCheckbox } from '@/src/ui-kit/input/InputCheckbox';
import { FormFields } from './types';
import { contestSoloPrice } from '@/src/ulis/price';
import clsx from 'clsx';
import Trans from 'next-translate/Trans';
import Link from 'next/link';

export const ContestSoloList: React.FC = () => {
  const { t, lang } = useTranslation('registration');
  const methods = useFormContext<FormFields>();

  const { setValue, control, watch } = methods;

  const { fields } = useFieldArray({
    control,
    name: 'soloContest',
    keyName: 'id',
  });

  const championText = (
    <Trans
      i18nKey='registration:form.contest.championText'
      components={[
        <Link href='/competition/judging' target='_blank' className={textStyles.accent} key={1} />,
      ]}
    />
  );

  const currentLang = lang as SupportedLangs;

  const soloContest = watch('soloContest');
  const contestAgeGroup = watch('contestAgeGroup');
  const contestLevel = watch('contestLevel');

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...soloContest[index],
    };
  });

  const handleChange = (
    catId: string,
    price: number,
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const index = soloContest.findIndex((cat) => cat.id === catId);
    setValue(`soloContest.${index}.selected`, checked, { shouldTouch: true });
    setValue(`soloContest.${index}.price`, price, { shouldTouch: true });
  };

  const getCategoryPrice = useCallback((): number => {
    const priceKids = contestSoloPrice.kids.price;
    const pricerRisingStar = contestSoloPrice.risingStar.price;
    const pricerProfessionals = contestSoloPrice.professionals.price;

    // Price for Kids
    if (contestAgeGroup === 'kids' || contestAgeGroup === 'baby') return priceKids.priceNormal;
    // Price for everyone else
    else {
      // Price for Professionals and Queen
      if (contestLevel === 'professionals') return pricerProfessionals.priceNormal;
      // Price for Rising star / open level
      return pricerRisingStar.priceNormal;
    }
  }, [contestAgeGroup, contestLevel]);

  // Re-set prices when fields change
  useEffect(() => {
    controlledFields.forEach((i) => {
      const price = getCategoryPrice();
      const index = soloContest.findIndex((cat) => cat.id === i.id);
      setValue(`soloContest.${index}.price`, price, { shouldTouch: true });
    });
  }, [soloContest, contestLevel]);

  const championshipCategories = controlledFields.map((cat) => {
    if (cat.isChampionship)
      return (
        <div key={cat.id}>
          <FormControlLabel
            control={
              <InputCheckbox
                checked={cat.selected}
                onChange={handleChange.bind(null, cat.id, cat.price)}
              />
            }
            label={
              <p className={textStyles.p}>
                {cat.translations[currentLang].categoryTitle}
                {cat.price > 0 && (
                  <>
                    : <span className={textStyles.accent}>{cat.price}zł</span>
                  </>
                )}
              </p>
            }
          />
        </div>
      );
  });

  const nonChampoionsipCategories = controlledFields.map((cat) => {
    if (!cat.isChampionship)
      return (
        <div key={cat.id}>
          <FormControlLabel
            control={
              <InputCheckbox
                checked={cat.selected}
                onChange={handleChange.bind(null, cat.id, cat.price)}
              />
            }
            label={
              <p className={textStyles.p}>
                {cat.translations[currentLang].categoryTitle}
                {cat.price > 0 && (
                  <>
                    : <span className={textStyles.accent}>{cat.price}zł</span>
                  </>
                )}
              </p>
            }
          />
        </div>
      );
  });

  const allCategories = controlledFields.map((cat) => {
    return (
      <div key={cat.id}>
        <FormControlLabel
          control={
            <InputCheckbox
              checked={cat.selected}
              onChange={handleChange.bind(null, cat.id, cat.price)}
            />
          }
          label={
            <p className={textStyles.p}>
              {cat.translations[currentLang].categoryTitle}
              {cat.price > 0 && (
                <>
                  : <span className={textStyles.accent}>{cat.price}zł</span>
                </>
              )}
            </p>
          }
        />
      </div>
    );
  });

  if (contestLevel === 'professionals')
    return (
      <>
        <p className={clsx(textStyles.p)}>{championText}</p>
        <h4 className={clsx(textStyles.h4, textStyles.accent)}>
          {t('form.contest.championTitle')}:
        </h4>
        <div>{championshipCategories}</div>
        <h4 className={clsx(textStyles.h4, textStyles.accent)}>{t('form.contest.restTitle')}:</h4>
        <div>{nonChampoionsipCategories}</div>
      </>
    );
  else return <div>{allCategories}</div>;
};
