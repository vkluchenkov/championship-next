import { useState, useCallback } from 'react';
import { Layout } from '@/src/components/Layout';
import { NextPage } from 'next';
import textStyles from '@/styles/Text.module.css';
import styles from '@/styles/Registration.module.css';
import useTranslation from 'next-translate/useTranslation';
import { FormInputField } from '@/src/ui-kit/input';
import { FormProvider, useForm } from 'react-hook-form';
import { ThemeProvider, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { Loader } from '@/src/components/Loader';
import { darkTheme } from '@/src/ulis/constants';
import { PaymentConfirmFields, PaymentConfirmPayload } from '@/src/types/payment.types';
import { SupportedLangs } from '@/src/types';

const PaymentConfirm: NextPage = () => {
  const { t, lang } = useTranslation('paymentConfirm');
  const currentLang = lang as SupportedLangs;

  const router = useRouter();

  const methods = useForm<PaymentConfirmFields>({
    mode: 'onChange',
  });
  const {
    handleSubmit,
    watch,
    trigger,
    reset,
    control,
    formState: { errors },
  } = methods;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Handle snackbar close
  const handleClose = useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    // if (reason === 'clickaway') return;
    setIsError(false);
    setIsSuccess(false);
  }, []);

  const onSubmit = useCallback(
    async (data: PaymentConfirmFields) => {
      setIsLoading(true);
      try {
        const payload: PaymentConfirmPayload = { ...data, currentLang: currentLang };
        await axios.post('/api/payment-confirm', payload);
        setIsSuccess(true);
        reset();
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [reset, currentLang]
  );

  return (
    <Layout title={t('pageTitle')}>
      <h1 className={textStyles.h1}>{t('pageTitle')}</h1>

      <section className={styles.section}>
        <ThemeProvider theme={darkTheme}>
          <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <FormInputField
                name='name'
                control={control}
                rules={{
                  required: t('form.required'),
                }}
                label={t('form.name')}
                error={!!errors.name}
                helperText={errors.name?.message as string | undefined}
              />

              <FormInputField
                name='email'
                type='email'
                control={control}
                rules={{
                  required: t('form.required'),
                }}
                label={t('form.email')}
                error={!!errors.email}
                helperText={errors.email?.message as string | undefined}
              />

              <FormInputField
                name='password'
                type='password'
                control={control}
                rules={{
                  required: t('form.required'),
                }}
                label={t('form.password')}
                error={!!errors.password}
                helperText={errors.password?.message as string | undefined}
              />

              <Button
                type='submit'
                variant='outlined'
                size='large'
                disableElevation
                fullWidth
                disabled={false}
              >
                {t('form.submit')}
              </Button>

              <Snackbar
                open={isError}
                onClose={handleClose}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              >
                <Alert severity='warning' onClose={handleClose} variant='filled'>
                  {t('form.error')}
                </Alert>
              </Snackbar>

              <Snackbar
                open={isSuccess}
                onClose={handleClose}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              >
                <Alert severity='success' onClose={handleClose} variant='filled'>
                  {t('form.success')}
                </Alert>
              </Snackbar>
            </form>
            {isLoading && <Loader />}
          </FormProvider>
        </ThemeProvider>
      </section>
    </Layout>
  );
};

export default PaymentConfirm;
