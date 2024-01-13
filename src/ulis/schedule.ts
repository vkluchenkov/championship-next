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
        dayTitle: '2.02 Friday',
      },
      ru: {
        dayTitle: '2.02 Пятница',
      },
      pl: {
        dayTitle: '2.02 Piątek',
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
            title: 'Gala',
            description: 'z otwartą sceną',
          },
        },
      },
    ],
  },
  {
    translations: {
      en: {
        dayTitle: '3.02 Saturday',
      },
      ru: {
        dayTitle: '3.02 Суббота',
      },
      pl: {
        dayTitle: '3.02 Sobota',
      },
    },
    dayEvents: [
      {
        id: 2,
        start: '11:00',
        type: 'contest',
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
      },
    ],
  },
  {
    translations: {
      en: {
        dayTitle: '4.02 Sunday',
      },
      ru: {
        dayTitle: '4.02 Воскресенье',
      },
      pl: {
        dayTitle: '4.02 Niedziela',
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
            title: 'Margarita Kamjaka',
            description: 'Baladi choreography',
          },
          ru: {
            title: 'Маргарита Камяк',
            description: 'Хореография Baladi',
          },
          pl: {
            title: 'Margarita Kamjaka',
            description: 'Baladi choreografia',
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
            description: 'Mejance choreografia',
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
            description: 'Tarab choreografia',
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
            description: 'Drum solo choreografia',
          },
        },
      },
    ],
  },
];
