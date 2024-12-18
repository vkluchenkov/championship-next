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
        },
      },
      // {
      //   link: '/info/bazaar',
      //   translations: {
      //     en: {
      //       title: 'Bazaar',
      //     },
      //     ru: {
      //       title: 'Базар',
      //     },
      //   },
      // },
      {
        link: '/info/faq',
        translations: {
          en: {
            title: 'FAQ',
          },
          ru: {
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
        },
      },
    ],
  },
];
