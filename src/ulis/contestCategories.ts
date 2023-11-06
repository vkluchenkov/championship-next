import { SupportedLangs, AgeGroup } from '@/src/types';

export type Level = 'debut' | 'beginners' | 'semi-pro' | 'professionals' | 'openLevel';

export interface Style {
  translations: {
    [lang in SupportedLangs]: {
      categoryTitle: string;
    };
  };
  isSolo?: boolean;
  isImprovisation?: boolean;
}

export interface ContestCategory {
  ageGroup: AgeGroup;
  ageGroups?: AgeGroup[];
  description?: string;
  age: string;
  isGroupCategory?: boolean;
  isDuoCategory?: boolean;
  levels: Level[];
  translations: {
    [lang in SupportedLangs]: {
      title: string;
    };
  };
  categories: Style[];
}

const mainSoloSet: Style[] = [
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Classic',
      },
      ru: {
        categoryTitle: 'Классика',
      },
      pl: {
        categoryTitle: 'Классика',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Folklore',
      },
      ru: {
        categoryTitle: 'Фольклор',
      },
      pl: {
        categoryTitle: 'Фольклор',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Tabla solo CD',
      },
      ru: {
        categoryTitle: 'Табла соло CD',
      },
      pl: {
        categoryTitle: 'Табла соло CD',
      },
    },
  },
  {
    isSolo: true,
    isImprovisation: true,
    translations: {
      en: {
        categoryTitle: 'Improvisation mejance + tabla solo',
      },
      ru: {
        categoryTitle: 'Импровизация mejance + табла соло',
      },
      pl: {
        categoryTitle: 'Импровизация mejance + табла соло',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Show/fusion',
      },
      ru: {
        categoryTitle: 'Шоу/фьюжн',
      },
      pl: {
        categoryTitle: 'Шоу/фьюжн',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Pop song',
      },
      ru: {
        categoryTitle: 'Эстрадная песня',
      },
      pl: {
        categoryTitle: 'Эстрадная песня',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Bollywood',
      },
      ru: {
        categoryTitle: 'Болливуд',
      },
      pl: {
        categoryTitle: 'Болливуд',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Tribal',
      },
      ru: {
        categoryTitle: 'Трайбл',
      },
      pl: {
        categoryTitle: 'Трайбл',
      },
    },
  },
];

const babySoloSet: Style[] = [
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Classic',
      },
      ru: {
        categoryTitle: 'Классика',
      },
      pl: {
        categoryTitle: 'Классика',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Folklore',
      },
      ru: {
        categoryTitle: 'Фольклор',
      },
      pl: {
        categoryTitle: 'Фольклор',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Tabla solo CD',
      },
      ru: {
        categoryTitle: 'Табла соло CD',
      },
      pl: {
        categoryTitle: 'Табла соло CD',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Show/fusion',
      },
      ru: {
        categoryTitle: 'Шоу/фьюжн',
      },
      pl: {
        categoryTitle: 'Шоу/фьюжн',
      },
    },
  },
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'Bollywood',
      },
      ru: {
        categoryTitle: 'Болливуд',
      },
      pl: {
        categoryTitle: 'Болливуд',
      },
    },
  },
];

const mainGroupSet: Style[] = [
  {
    translations: {
      en: {
        categoryTitle: 'Oriental',
      },
      ru: {
        categoryTitle: 'Ориентал',
      },
      pl: {
        categoryTitle: 'Ориентал',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Folklore',
      },
      ru: {
        categoryTitle: 'Фольклор',
      },
      pl: {
        categoryTitle: 'Фольклор',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Tabla solo CD',
      },
      ru: {
        categoryTitle: 'Табла соло CD',
      },
      pl: {
        categoryTitle: 'Табла соло CD',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Show/fusion',
      },
      ru: {
        categoryTitle: 'Шоу/фьюжн',
      },
      pl: {
        categoryTitle: 'Шоу/фьюжн',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Bollywood',
      },
      ru: {
        categoryTitle: 'Болливуд',
      },
      pl: {
        categoryTitle: 'Болливуд',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Tribal',
      },
      ru: {
        categoryTitle: 'Трайбл',
      },
      pl: {
        categoryTitle: 'Трайбл',
      },
    },
  },
];
const babyGroupSet: Style[] = [
  {
    translations: {
      en: {
        categoryTitle: 'Oriental',
      },
      ru: {
        categoryTitle: 'Ориентал',
      },
      pl: {
        categoryTitle: 'Ориентал',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Folklore',
      },
      ru: {
        categoryTitle: 'Фольклор',
      },
      pl: {
        categoryTitle: 'Фольклор',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Tabla solo CD',
      },
      ru: {
        categoryTitle: 'Табла соло CD',
      },
      pl: {
        categoryTitle: 'Табла соло CD',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Show/fusion',
      },
      ru: {
        categoryTitle: 'Шоу/фьюжн',
      },
      pl: {
        categoryTitle: 'Шоу/фьюжн',
      },
    },
  },
  {
    translations: {
      en: {
        categoryTitle: 'Bollywood',
      },
      ru: {
        categoryTitle: 'Болливуд',
      },
      pl: {
        categoryTitle: 'Болливуд',
      },
    },
  },
];
const allStyles: Style[] = [
  {
    isSolo: true,
    translations: {
      en: {
        categoryTitle: 'All styles',
      },
      ru: {
        categoryTitle: 'Все стили',
      },
      pl: {
        categoryTitle: 'Все стили',
      },
    },
  },
];

export const contestCategories: ContestCategory[] = [
  {
    age: '4-6',
    ageGroup: 'baby',
    levels: ['openLevel'],
    translations: {
      en: {
        title: 'Baby solo',
      },
      ru: {
        title: 'Беби соло',
      },
      pl: {
        title: 'Беби соло',
      },
    },
    categories: allStyles,
  },
  {
    age: '4-6',
    ageGroup: 'baby',
    isGroupCategory: true,
    levels: ['openLevel'],
    translations: {
      en: {
        title: 'Baby groups',
      },
      ru: {
        title: 'Беби группы',
      },
      pl: {
        title: 'Беби группы',
      },
    },
    categories: babyGroupSet,
  },
  {
    age: '4-6',
    ageGroup: 'baby',
    isDuoCategory: true,
    levels: ['openLevel'],
    translations: {
      en: {
        title: 'Baby duos',
      },
      ru: {
        title: 'Беби дуэты',
      },
      pl: {
        title: 'Беби дуэты',
      },
    },
    categories: babyGroupSet,
  },

  {
    age: '7-11',
    ageGroup: 'kids',
    levels: ['beginners', 'semi-pro'],
    translations: {
      en: {
        title: 'Kids solo',
      },
      ru: {
        title: 'Дети соло',
      },
      pl: {
        title: 'Дети соло',
      },
    },
    categories: mainSoloSet,
  },
  {
    age: '7-11',
    ageGroup: 'kids',
    levels: ['debut'],
    translations: {
      en: {
        title: 'Kids solo',
      },
      ru: {
        title: 'Дети соло',
      },
      pl: {
        title: 'Дети соло',
      },
    },
    categories: allStyles,
  },

  {
    age: '7-11',
    ageGroup: 'kids',
    isDuoCategory: true,
    levels: ['semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Kids duos',
      },
      ru: {
        title: 'Дети дуэты',
      },
      pl: {
        title: 'Дети дуэты',
      },
    },
    categories: mainGroupSet,
  },

  {
    age: '7-11',
    ageGroup: 'kids',
    isGroupCategory: true,
    levels: ['semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Kids groups',
      },
      ru: {
        title: 'Дети группы',
      },
      pl: {
        title: 'Дети группы',
      },
    },
    categories: mainGroupSet,
  },

  {
    age: '12-15',
    ageGroup: 'juniors',
    levels: ['debut'],
    translations: {
      en: {
        title: 'Juniors',
      },
      ru: {
        title: 'Юниоры',
      },
      pl: {
        title: 'Юниоры',
      },
    },
    categories: allStyles,
  },
  {
    age: '12-15',
    ageGroup: 'juniors',
    description: 'descriptionJuniors',
    levels: ['beginners', 'semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Juniors',
      },
      ru: {
        title: 'Юниоры',
      },
      pl: {
        title: 'Юниоры',
      },
    },
    categories: mainSoloSet,
  },
  {
    age: '12-15',
    ageGroup: 'juniors',
    isDuoCategory: true,
    levels: ['semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Juniors duos',
      },
      ru: {
        title: 'Юниоры дуэты',
      },
      pl: {
        title: 'Юниоры дуэты',
      },
    },
    categories: mainGroupSet,
  },
  {
    age: '12-15',
    ageGroup: 'juniors',
    isGroupCategory: true,
    levels: ['semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Juniors groups',
      },
      ru: {
        title: 'Юниоры группы',
      },
      pl: {
        title: 'Юниоры группы',
      },
    },
    categories: mainGroupSet,
  },
  {
    age: '16+',
    ageGroup: 'adults',
    levels: ['debut'],
    translations: {
      en: {
        title: 'Adults',
      },
      ru: {
        title: 'Взрослые',
      },
      pl: {
        title: 'Взрослые',
      },
    },
    categories: allStyles,
  },
  {
    age: '16+',
    ageGroup: 'adults',
    levels: ['beginners', 'semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Adults',
      },
      ru: {
        title: 'Взрослые',
      },
      pl: {
        title: 'Взрослые',
      },
    },
    categories: mainSoloSet,
  },
  {
    age: '16+',
    ageGroup: 'adults',
    isDuoCategory: true,
    levels: ['semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Adults duos',
      },
      ru: {
        title: 'Взрослые дуэты',
      },
      pl: {
        title: 'Взрослые дуэты',
      },
    },
    categories: mainGroupSet,
  },
  {
    age: '16+',
    ageGroup: 'adults',
    isGroupCategory: true,
    levels: ['semi-pro', 'professionals'],
    translations: {
      en: {
        title: 'Adults groups',
      },
      ru: {
        title: 'Взрослые группы',
      },
      pl: {
        title: 'Взрослые группы',
      },
    },
    categories: mainGroupSet,
  },

  {
    age: '40+',
    ageGroup: 'seniors',
    description: 'descriptionSeniors',
    levels: ['openLevel'],
    translations: {
      en: {
        title: 'Seniors',
      },
      ru: {
        title: 'Сеньоры',
      },
      pl: {
        title: 'Сеньоры',
      },
    },
    categories: mainSoloSet,
  },
  {
    age: '40+',
    ageGroup: 'seniors',
    isDuoCategory: true,
    levels: ['openLevel'],
    translations: {
      en: {
        title: 'Seniors duos',
      },
      ru: {
        title: 'Сеньоры дуэты',
      },
      pl: {
        title: 'Сеньоры дуэты',
      },
    },
    categories: mainGroupSet,
  },
  {
    age: '40+',
    ageGroup: 'seniors',
    isGroupCategory: true,
    levels: ['openLevel'],
    translations: {
      en: {
        title: 'Seniors groups',
      },
      ru: {
        title: 'Сеньоры группы',
      },
      pl: {
        title: 'Сеньоры группы',
      },
    },
    categories: mainGroupSet,
  },
];
