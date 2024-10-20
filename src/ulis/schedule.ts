import { SupportedLangs } from '@/src/types';

export interface Workshop {
  id: number;
  start: string;
  end: string;
  translations: {
    [lang in SupportedLangs]: {
      title: string;
      description?: string;
    };
  };
  type: 'workshop';
  teachersPriceGroup: 'group1' | 'group2';
}

interface OtherEvent {
  id: number;
  start: string;
  end?: string;
  translations: {
    [lang in SupportedLangs]: {
      title: string;
      description?: string;
    };
  };
  type: 'show' | 'contest' | 'other';
}

type Event = Workshop | OtherEvent;

interface Day {
  translations: {
    [lang in SupportedLangs]: {
      dayTitle: string;
    };
  };
  dayEvents: Event[];
}

export const schedule: Day[] = [
  {
    translations: {
      en: {
        dayTitle: '4.04 Friday',
      },
      ru: {
        dayTitle: '4.04 Пятница',
      },
    },
    dayEvents: [
      {
        id: 1,
        start: '8:30',
        type: 'other',
        translations: {
          en: {
            title: 'Check-in',
          },
          ru: {
            title: 'Регистрация',
          },
        },
      },
      {
        id: 2,
        start: '9:00',
        end: '11:00',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Kazafy',
            description: 'Muwashahat choreography',
          },
          ru: {
            title: 'Kazafy',
            description: 'Хореография Muwashahat',
          },
        },
      },
      {
        id: 3,
        start: '11:15',
        end: '13:15',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Oscar Flores',
            description: 'Veil technique and oriental choreography',
          },
          ru: {
            title: 'Oscar Flores',
            description: 'Техника вуали и ориентальная хореография',
          },
        },
      },
      {
        id: 4,
        start: '13:30',
        end: '15:30',
        type: 'workshop',
        teachersPriceGroup: 'group2',
        translations: {
          en: {
            title: 'Mayra Huzid',
            description: 'Mejance choreography',
          },
          ru: {
            title: 'Mayra Huzid',
            description: 'Хореография Mejance',
          },
        },
      },
      {
        id: 5,
        start: '15:45',
        end: '17:45',
        type: 'workshop',
        teachersPriceGroup: 'group2',
        translations: {
          en: {
            title: 'Daryna Ilchysheva',
            description: 'Baladi choreography',
          },
          ru: {
            title: 'Daryna Ilchysheva',
            description: 'Хореография Baladi',
          },
        },
      },
      {
        id: 6,
        start: '19:00',
        type: 'show',
        translations: {
          en: {
            title: 'Gala show',
            description: 'with open stage',
          },
          ru: {
            title: 'Гала шоу',
            description: 'с открытой сценой',
          },
        },
      },
    ],
  },
  {
    translations: {
      en: {
        dayTitle: '5.04 Saturday',
      },
      ru: {
        dayTitle: '5.04 Суббота',
      },
    },
    dayEvents: [
      {
        id: 7,
        start: '10:00',
        type: 'contest',
        translations: {
          en: {
            title: 'Competition',
          },
          ru: {
            title: 'Конкурс',
          },
        },
      },
    ],
  },
  {
    translations: {
      en: {
        dayTitle: '5.04 Sunday',
      },
      ru: {
        dayTitle: '5.04 Воскресенье',
      },
    },
    dayEvents: [
      {
        id: 8,
        start: '10:00',
        end: '12:00',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Kazafy',
            description: 'Ghawazi choreography',
          },
          ru: {
            title: 'Kazafy',
            description: 'Хореография Ghawazi',
          },
        },
      },
      {
        id: 9,
        start: '12:15',
        end: '14:15',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Aliah',
            description: 'Pop song choreography',
          },
          ru: {
            title: 'Aliah',
            description: 'Хореография Pop song',
          },
        },
      },
      {
        id: 10,
        start: '14:30',
        end: '16:30',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Oscar Flores',
            description: 'Oriental tango technique and choreography',
          },
          ru: {
            title: 'Oscar Flores',
            description: 'Oriental tango техника и хореография',
          },
        },
      },
      {
        id: 11,
        start: '16:45',
        end: '18:45',
        type: 'workshop',
        teachersPriceGroup: 'group2',
        translations: {
          en: {
            title: 'Maryam',
            description: 'Drum solo choreography',
          },
          ru: {
            title: 'Maryam',
            description: 'Хореография Drum solo',
          },
        },
      },
    ],
  },
];
