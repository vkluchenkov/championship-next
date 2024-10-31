import { SupportedLangs } from '@/src/types';

interface MenuItem {
  link: string;
  translations: {
    [lang in SupportedLangs]: {
      title: string;
    };
  };
  subItems?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    link: '/registration',
    translations: {
      en: {
        title: 'Registration',
      },
      ru: {
        title: 'Регистрация',
      },
      pl: {
        title: 'Rejestracja',
      },
    },
  },
  {
    link: '/price',
    translations: {
      en: {
        title: 'Prices',
      },
      ru: {
        title: 'Цены',
      },
      pl: {
        title: 'Ceny',
      },
    },
  },
  {
    link: '/competition',
    translations: {
      en: {
        title: 'Competition',
      },
      ru: {
        title: 'Конкурс',
      },
      pl: {
        title: 'Konkurs',
      },
    },
    subItems: [
      {
        link: '/competition/rules',
        translations: {
          en: {
            title: 'Rules',
          },
          ru: {
            title: 'Положение конкурса',
          },
          pl: {
            title: 'Zasady',
          },
        },
      },
      {
        link: '/competition/judging',
        translations: {
          en: {
            title: 'Judging',
          },
          ru: {
            title: 'Судейство',
          },
          pl: {
            title: 'Ocenianie',
          },
        },
      },
    ],
  },
  {
    link: '/gala',
    translations: {
      en: {
        title: 'Gala show',
      },
      ru: {
        title: 'Гала Шоу',
      },
      pl: {
        title: 'Gala',
      },
    },
  },
  {
    link: '/info',
    translations: {
      en: {
        title: 'Info',
      },
      ru: {
        title: 'Информация',
      },
      pl: {
        title: 'Informacje',
      },
    },
    subItems: [
      {
        link: '/info/schedule',
        translations: {
          en: {
            title: 'Schedule',
          },
          ru: {
            title: 'Расписание',
          },
          pl: {
            title: 'Harmonogram',
          },
        },
      },
      {
        link: '/info/photo-video',
        translations: {
          en: {
            title: 'Photo & video',
          },
          ru: {
            title: 'Фото и видео съемка',
          },
          pl: {
            title: 'Zdjęcia i filmy',
          },
        },
      },
      {
        link: '/info/bazaar',
        translations: {
          en: {
            title: 'Bazaar',
          },
          ru: {
            title: 'Базар',
          },
          pl: {
            title: 'Bazaar',
          },
        },
      },
      {
        link: '/info/faq',
        translations: {
          en: {
            title: 'FAQ',
          },
          ru: {
            title: 'FAQ',
          },
          pl: {
            title: 'FAQ',
          },
        },
      },
      {
        link: '/info/contacts',
        translations: {
          en: {
            title: 'Contacts',
          },
          ru: {
            title: 'Контакты',
          },
          pl: {
            title: 'Kontakt',
          },
        },
      },
    ],
  },
];
