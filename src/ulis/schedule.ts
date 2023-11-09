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
        start: '9:00',
        end: '11:00',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Leandro Ferreyra',
            description: 'Classical oriental choreography',
          },
          ru: {
            title: 'Leandro Ferreyra',
            description: 'Хореография Classical oriental',
          },
          pl: {
            title: 'Leandro Ferreyra',
            description: 'Хореография Classical oriental',
          },
        },
      },
      {
        id: 4,
        start: '11:15',
        end: '13:45',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Diana Gnatchenko',
            description: 'Pop song choreography',
          },
          ru: {
            title: 'Диана Гнатченко',
            description: 'Хореография Pop song',
          },
          pl: {
            title: 'Диана Гнатченко',
            description: 'Хореография Pop song',
          },
        },
      },
      {
        id: 5,
        start: '14:00',
        end: '16:00',
        type: 'workshop',
        teachersPriceGroup: 'group2',
        translations: {
          en: {
            title: 'Levana',
            description: 'Shaaby choreography',
          },
          ru: {
            title: 'Levana',
            description: 'Хореография Shaaby',
          },
          pl: {
            title: 'Levana',
            description: 'Хореография Shaaby',
          },
        },
      },
      {
        id: 6,
        start: '16:15',
        end: '18:15',
        type: 'workshop',
        teachersPriceGroup: 'group1',
        translations: {
          en: {
            title: 'Pablo Acosta',
            description: 'Fusion tango oriental choreography',
          },
          ru: {
            title: 'Pablo Acosta',
            description: 'Хореография Fusion tango oriental',
          },
          pl: {
            title: 'Pablo Acosta',
            description: 'Хореография Fusion tango oriental',
          },
        },
      },
    ],
  },
];
