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
        dayTitle: '19.01 Friday',
      },
      ru: {
        dayTitle: '19.01 Пятница',
      },
      pl: {
        dayTitle: '19.01 Пятница',
      },
    },
    dayEvents: [
      {
        id: 1,
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
          pl: {
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
        dayTitle: '20.01 Saturday',
      },
      ru: {
        dayTitle: '20.01 Суббота',
      },
      pl: {
        dayTitle: '20.01 Суббота',
      },
    },
    dayEvents: [
      {
        id: 2,
        start: '9:00',
        type: 'contest',
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
      },
    ],
  },
  {
    translations: {
      en: {
        dayTitle: '21.01 Sunday',
      },
      ru: {
        dayTitle: '21.01 Воскресенье',
      },
      pl: {
        dayTitle: '21.01 Воскресенье',
      },
    },
    dayEvents: [
      {
        id: 3,
        start: '10:00',
        end: '12:00',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Ramile',
            description: 'Pop song choreography',
          },
          ru: {
            title: 'Ramile',
            description: 'Хореография Pop song',
          },
          pl: {
            title: 'Ramile',
            description: 'Хореография',
          },
        },
      },
      {
        id: 4,
        start: '12:15',
        end: '14:15',
        type: 'workshop',
        teachersPriceGroup: 'group2',
        translations: {
          en: {
            title: 'Pablo Acosta',
            description: 'Mejance choreography',
          },
          ru: {
            title: 'Pablo Acosta',
            description: 'Хореография Mejance',
          },
          pl: {
            title: 'Pablo Acosta',
            description: 'Хореография',
          },
        },
      },
      {
        id: 5,
        start: '14:30',
        end: '16:30',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Suraiya',
            description: 'Tarab choreography',
          },
          ru: {
            title: 'Suraiya',
            description: 'Хореография Tarab',
          },
          pl: {
            title: 'Suraiya',
            description: 'Хореография',
          },
        },
      },
      {
        id: 6,
        start: '16:45',
        end: '18:45',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Polina Ostrovska',
            description: 'Drum solo choreography',
          },
          ru: {
            title: 'Полина Островская',
            description: 'Хореография табла соло',
          },
          pl: {
            title: 'Polina Ostrovska',
            description: 'Хореография',
          },
        },
      },
    ],
  },
];
