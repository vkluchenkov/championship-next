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
} from '@faire/mjml-react';
import { Translate } from 'next-translate';
import { defaultUrl } from '../utils/constants';
import { renderReactToMjml } from './renderReactToMjml';
import { PaymentConfirmFields, PaymentFormFields } from '../types/payment.types';

interface registrationUserEmailProps {
  form: PaymentConfirmFields;
  t: Translate;
}

const url = process.env.DEPLOY_URL || defaultUrl;

export const paymentConfirmEmail = (props: registrationUserEmailProps) => {
  const { form, t } = props;

  const accentColor = '#f9b12a!important';

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
              {t('email.title')} {form.name}!
            </MjmlText>

            {/* Order title */}
            <MjmlText mj-class='h2'>{t('email.subtitle')}</MjmlText>

            {/* Body text*/}
            <MjmlText mj-class='text'>{t('email.text')}</MjmlText>
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
