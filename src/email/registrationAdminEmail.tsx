import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlFont,
  MjmlAttributes,
  MjmlAll,
  MjmlClass,
  MjmlText,
  MjmlDivider,
} from '@faire/mjml-react';
import { Translate } from 'next-translate';
import { OrderPayload } from '../components/FormRegistration/types';
import { currencySymbol, defaultUrl } from '../utils/constants';
import { contestCategories } from '../utils/contestCategories';

import { renderReactToMjml } from './renderReactToMjml';

interface registrationUserEmailProps {
  form: OrderPayload;
  t: Translate;
}

const url = process.env.DEPLOY_URL || defaultUrl;

export const registrationAdminEmail = (props: registrationUserEmailProps) => {
  const { form, t } = props;

  const accentColor = '#f9b12a!important';
  const h4Style = {
    fontSize: '16px',
    lineHeight: '1.2',
    fontWeight: 600,
    padding: '0',
    margin: '0',
  };

  // Personal
  const personal = ['name', 'surname', 'stageName', 'age'].map((i) => ({
    key: i,
    value: form[i as keyof OrderPayload],
  }));

  const personalData = personal.map((i) => {
    if (!i.value) return <></>;
    const value = i.value as string;
    return (
      <li key={i.key}>
        {t(`form.personal.${i.key}`)}: <span style={{ color: accentColor }}>{value.trim()}</span>
      </li>
    );
  });

  // Contacts
  const contacts = ['social', 'country', 'city', 'tel', 'email'].map((i) => ({
    key: i,
    value: form[i as keyof OrderPayload],
  }));

  const contactsData = contacts.map((i) => {
    const value = i.value as string;
    if (!i.value) return <></>;
    if (i.key === 'email')
      return (
        <li key={i.key}>
          {t(`form.personal.${i.key}`)}:{' '}
          <a
            href={`mailto:${value.trim()}`}
            target='_blank'
            rel='noreferrer'
            style={{ color: accentColor }}
          >
            {value.trim()}
          </a>
        </li>
      );
    if (i.key === 'social')
      return (
        <li key={i.key}>
          {t(`form.personal.${i.key}`)}:{' '}
          <a
            href='#'
            style={{
              color: accentColor,
              cursor: 'default',
              textDecoration: 'none',
              pointerEvents: 'none',
            }}
          >
            {value.trim()}
          </a>
        </li>
      );
    return (
      <li key={i.key}>
        {t(`form.personal.${i.key}`)}: <span style={{ color: accentColor }}>{value.trim()}</span>
      </li>
    );
  });

  // Workshops
  const isFullPass = form.isFullPass;
  const workshops = form.workshops.filter((ws) => ws.selected);

  const workshopsData = () => {
    if (isFullPass) {
      return (
        <>
          <MjmlText mj-class='h3'>{t('form.workshops.title')}</MjmlText>
          <MjmlText mj-class='text'>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>
              <li>
                {t('form.workshops.fullPass')}:{' '}
                <span style={{ color: accentColor }}>
                  {form.fullPassPrice}
                  {currencySymbol}
                </span>
              </li>

              <li>
                {t('form.workshops.discounts.title')}:{' '}
                <span style={{ color: accentColor }}>
                  {t(`form.workshops.discounts.${form.fullPassDiscount}`)}
                </span>
              </li>
              {form.fullPassDiscount !== 'none' && (
                <li>
                  {t('form.workshops.discounts.details')}:{' '}
                  <span style={{ color: accentColor }}>{form.fullPassDiscountSource}</span>
                </li>
              )}
            </ul>
          </MjmlText>
        </>
      );
    }
    if (workshops.length) {
      const wsList = workshops.map((ws) => {
        const price = form.wsPrices?.[ws.teachersPriceGroup].price;
        return (
          <li key={ws.id}>
            <span style={{ color: accentColor }}>{ws.translations[form.currentLang].title}</span>
            <br />
            {ws.translations[form.currentLang].description}
            <br />
            <span style={{ color: accentColor }}>
              {price}
              {currencySymbol}
            </span>
          </li>
        );
      });

      return (
        <>
          <MjmlText mj-class='h3'>{t('form.workshops.title')}</MjmlText>
          <MjmlText mj-class='text'>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>{wsList}</ul>
          </MjmlText>
        </>
      );
    }
  };

  // Contest solo
  const contestSoloData = () => {
    const soloSelected = form.soloContest.filter((cat) => cat.selected);

    const stylesData = (
      <li>
        <p style={h4Style}>{t('form.contest.stylesTitle')}:</p>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>
          {soloSelected.map((cat) => (
            <li key={cat.id}>
              - {cat.translations[form.currentLang].categoryTitle}
              {cat.price > 0 && (
                <>
                  :{' '}
                  <span style={{ color: accentColor }}>
                    {cat.price}
                    {currencySymbol}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </li>
    );

    if (form.isSoloContest) {
      return (
        <>
          <MjmlText mj-class='h3'>{t('form.contest.soloTitle')}</MjmlText>
          <MjmlText mj-class='text'>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>
              <li>
                {t('form.contest.ageGroups.title')}:{' '}
                <span style={{ color: accentColor }}>
                  {t(`form.contest.ageGroups.${form.contestAgeGroup}`)}
                </span>
              </li>
              {form.contestLevel && (
                <li>
                  {t('form.contest.levels.title')}:{' '}
                  <span style={{ color: accentColor }}>
                    {t(`form.contest.levels.${form.contestLevel}`)}
                  </span>
                </li>
              )}
              {stylesData}
            </ul>
          </MjmlText>
        </>
      );
    } else return <></>;
  };

  // Contest groups
  const contestGroupsData = () => {
    const isGroups = form.groupContest.length > 0;

    if (isGroups)
      return (
        <>
          <MjmlText mj-class='h3 margin'>{t('form.contest.groups.title')}</MjmlText>

          <MjmlText mj-class='text'>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>
              {!form.isSoloContest && (
                <li>
                  {t('form.contest.ageGroups.title')}:{' '}
                  <span style={{ color: accentColor }}>
                    {t(`form.contest.ageGroups.${form.contestAgeGroup}`)}
                  </span>
                </li>
              )}
              {form.groupContest.map((group, index) => {
                // Category style translation
                const isDuoType = group.type === 'duo';
                const isGroupType = group.type === 'group';
                const contestCategory = contestCategories.find(
                  (cat) =>
                    (cat.ageGroup === form.contestAgeGroup && cat.isDuoCategory === isDuoType) ||
                    cat.isGroupCategory === isGroupType
                );
                const catStyle = contestCategory?.categories.find(
                  (style) => style.translations.en.categoryTitle === group.style
                );

                return (
                  <li key={group.name}>
                    <p style={{ ...h4Style, padding: '15px 0 0' }}>
                      {t('form.contest.groups.group')}/{t('form.contest.groups.duo')} #{index + 1} :
                      <span style={{ color: accentColor }}>
                        {' '}
                        {group.price}
                        {currencySymbol}
                      </span>
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>
                      <li>
                        {t('form.contest.groups.groupOrDuo')}:{' '}
                        <span style={{ color: accentColor }}>
                          {t(`form.contest.groups.${group.type}`)}
                        </span>
                      </li>

                      <li>
                        {t('form.contest.groups.style')}:{' '}
                        <span style={{ color: accentColor }}>
                          {catStyle?.translations[form.currentLang].categoryTitle}
                        </span>
                      </li>

                      <li>
                        {t('form.contest.groups.name')}:{' '}
                        <span style={{ color: accentColor }}>{group.name}</span>
                      </li>

                      {group.type === 'group' && (
                        <li>
                          {t('form.contest.groups.qty')}:{' '}
                          <span style={{ color: accentColor }}>{group.qty}</span>
                        </li>
                      )}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </MjmlText>
        </>
      );
    else return <></>;
  };

  // WorldShow
  const worldShowData = () => {
    const soloPrice = form.settings?.price.worldShow?.solo;

    if (form.isWorldShowSolo || form.isWorldShowGroup)
      return (
        <>
          <MjmlText mj-class='h3'>{t('form.worldShow.title')}</MjmlText>

          {form.isWorldShowSolo && (
            <MjmlText mj-class='text'>
              {t('form.worldShow.solo')}:{' '}
              <span style={{ color: accentColor }}>
                {soloPrice}
                {currencySymbol}
              </span>
            </MjmlText>
          )}

          {form.isWorldShowGroup && (
            <MjmlText mj-class='text'>
              {t('form.summary.worldShowGroup')}:{' '}
              <span style={{ color: accentColor }}>
                {form.worldShowGroup?.price}
                {currencySymbol}
              </span>
              <br />
              {t('form.contest.groups.name')}:{' '}
              <span style={{ color: accentColor }}>{form.worldShowGroup?.name}</span>
              <br />
              {t('form.contest.groups.qty')}:{' '}
              <span style={{ color: accentColor }}>{form.worldShowGroup?.qty}</span>
            </MjmlText>
          )}
        </>
      );
  };

  return renderReactToMjml(
    <Mjml>
      <MjmlHead>
        <MjmlFont
          name='Montserrat'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600'
        />
        <MjmlAttributes>
          <MjmlAll
            font-family='Montserrat, Helvetica, Arial, sans-serif'
            font-weight='400'
            color='white'
          />

          {/* Classes */}
          <MjmlClass name='accent' color={accentColor} />
          <MjmlClass name='divider' border-width='1px' padding='25px 0 25px' border-color='white' />
          <MjmlClass
            name='h1'
            font-size='24px'
            line-height='1.2'
            font-weight='600'
            align='center'
          />
          <MjmlClass
            name='h2'
            font-size='21px'
            line-height='1.2'
            font-weight='500'
            align='center'
          />
          <MjmlClass
            name='h3'
            font-size='18px'
            line-height='1.2'
            font-weight='500'
            align='center'
          />
          <MjmlClass name='margin' margin='0 0 -15px' />
          <MjmlClass name='h4' font-size='18px' line-height='1.2' font-weight='600' padding='0' />
          <MjmlClass
            name='text'
            font-size='16px'
            line-height='1.2'
            font-weight='400'
            padding='10px 0 5px'
          />
          <MjmlClass
            name='copyright'
            font-size='14px'
            align='center'
            line-height='1.2'
            font-weight='400'
            padding='0'
          />
        </MjmlAttributes>
      </MjmlHead>

      {/* Body */}
      <MjmlBody background-color='#000'>
        {/* Divider */}
        <MjmlSection padding='10px' />

        {/* Header image */}
        <MjmlSection
          background-url={`${url}/images/email-header1.jpg`}
          background-size='cover'
          background-repeat='no-repeat'
          border-radius='15px'
          padding-bottom='190px'
        ></MjmlSection>

        {/* Divider */}
        <MjmlSection padding='10px' />

        {/* Main section */}
        <MjmlSection background-color='#1f0b15' padding='20px 30px 30px' border-radius='15px'>
          <MjmlColumn>
            {/* Title */}
            <MjmlText mj-class='h1 accent'>
              {t('email.adminTitle')} {form.name} {form.surname}
            </MjmlText>

            {/* Order title */}
            <MjmlText mj-class='h2'>{t('email.adminOrderTitle')}:</MjmlText>

            {/* Personal data*/}
            <MjmlText mj-class='h3'>{t('form.summary.personalTitle')}</MjmlText>
            <MjmlText mj-class='text'>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>{personalData}</ul>
            </MjmlText>

            {/* Contacts data*/}
            <MjmlText mj-class='h3'>{t('form.personal.contacts')}</MjmlText>
            <MjmlText mj-class='text'>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.5 }}>{contactsData}</ul>
            </MjmlText>

            {/* Workshops data*/}
            {workshopsData()}

            {/* Competition solo */}
            {contestSoloData()}

            {/* Competition groups */}
            {contestGroupsData()}

            {/* World show */}
            {worldShowData()}

            {/* Money */}
            <MjmlText mj-class='h3'>{t('form.summary.money.title')}</MjmlText>

            <MjmlText mj-class='text'>
              {t('form.summary.money.total')}:{' '}
              <span style={{ color: accentColor }}>
                {form.total}
                {currencySymbol}
              </span>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        {/* Divider */}
        <MjmlSection padding='10px' />

        {/* Footer */}
        <MjmlSection background-color='#1f0b15' padding='20px 10px' border-radius='15px'>
          <MjmlColumn>
            <MjmlText mj-class='copyright'>{t('email.copyright')}</MjmlText>
          </MjmlColumn>
        </MjmlSection>
        {/* Divider */}
        <MjmlSection padding='10px' />
      </MjmlBody>
    </Mjml>
  );
};
