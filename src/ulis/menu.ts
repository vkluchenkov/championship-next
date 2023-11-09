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
        title: 'Регистрация',
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
        title: 'Цены',
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
        title: 'Конкурс',
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
            title: 'Положение конкурса',
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
            title: 'Судейство',
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
        title: 'Гала Шоу',
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
        title: 'Информация',
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
            title: 'Schedule',
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
            title: 'Фото и видео съемка',
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
            title: 'Базар',
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
            title: 'Контакты',
          },
        },
      },
    ],
  },
];
