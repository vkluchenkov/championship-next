import { createTheme } from '@mui/material';
import { montserrat } from '@/src/utils/font';

// Age groups
export const babyMinAge = 4;
export const babyMaxAge = 6;
export const kidsMinAge = 7;
export const kidsMaxAge = 11;
export const juniorsMinAge = 12;
export const juniorsMaxAge = 15;
export const adultsMinAge = 16;
export const adultsMaxAge = 39;

// Minimum numbers of workshops to be eligible for competition or Show
export const minWsKids = 1;
export const minWsAdults = 2;

// Number of performances for solo pass to be profitable (blocks the form if less)
export const minSoloPass = 4;

// Maximum number of groups to register for one person
export const maxGroups = 3;

// Music limits (sec)
export const soloLimit = 180;
export const soloProfessionalsLimit = 240;
export const groupsLimit = 210;
export const worldShowLimit = 240;
export const margin = 1.1; //percent

// Photo file size limit in bytes
export const photoFileSizeLimit = 10485760;

// Default website url
export const defaultUrl = 'https://championship.dance';

// emails
export const senderEmail = 'danceweekend@aliah.dance';
export const senderName = 'Open Bellydance Championship';

// telegram
export const telegramUrl = 'https://t.me/+eyMB-THBxdwyNDJk';

// Social links
export const facebookUrl = 'https://www.facebook.com/championship.dance';
export const instagramUrl = 'https://www.instagram.com/championship.dance';
export const emailUrl = 'mailto:danceweekend@aliah.dance';

// map links
export const cpkUrl = 'https://goo.gl/maps/SnjPT318FQs6SeTW8';
export const atlasUrl = 'https://maps.app.goo.gl/ZMpBgh8sb3sPhiEe6';

// Revolut payment link
export const revolutUrl = 'https://revolut.me/aliahbellydance/eur/';

// Animation preset for all transitions
export const motionVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

// Forms theme
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#f9b12a',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export const currencySymbol = '€';

type CurrencyCodes = 'PLN' | 'EUR';
export const currencyCode: CurrencyCodes = 'EUR';
