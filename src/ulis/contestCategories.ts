import { SupportedLangs, AgeGroup } from '@/src/types';

export type Level = 'debut' | 'beginners' | 'semi-pro' | 'professionals' | 'openLevel';

export interface Style {
  translations: {
    [lang in SupportedLangs]: {
      categoryTitle: string;
    };
  };
  isSolo?: boolean;
  isChampionship?: boolean;
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
    isChampionship: true,
    translations: {
      en: {
        categoryTitle: 'Classic',
      },
      ru: {
        categoryTitle: 'Классика',
      },
      pl: {
        categoryTitle: 'Klasyka',
      },
    },
  },
  {
    isSolo: true,
    isChampionship: true,
    translations: {
      en: {
        categoryTitle: 'Folklore',
      },
      ru: {
        categoryTitle: 'Фольклор',
      },
      pl: {
        categoryTitle: 'Folklor',
      },
    },
  },
  {
    isSolo: true,
    isChampionship: true,
    translations: {
      en: {
        categoryTitle: 'Tabla solo CD',
      },
      ru: {
        categoryTitle: 'Табла соло CD',
      },
      pl: {
        categoryTitle: 'Tabla solo CD',
      },
    },
  },
  {
    isSolo: true,
    isImprovisation: true,
    isChampionship: true,
    translations: {
      en: {
        categoryTitle: 'Improvisation mejance + tabla solo',
      },
      ru: {
        categoryTitle: 'Импровизация mejance + табла соло',
      },
      pl: {
        categoryTitle: 'Improwizacja mejance + tabla solo',
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
        categoryTitle: 'Show/fusia',
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
        categoryTitle: 'Pop song',
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
        categoryTitle: 'Bollywood',
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
        categoryTitle: 'Tribal',
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
        categoryTitle: 'Klasyka',
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
        categoryTitle: 'Folklor',
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
        categoryTitle: 'Tabla solo CD',
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
        categoryTitle: 'Show/fusia',
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
        categoryTitle: 'Bollywood',
      },
    },
  },
];

const mainGroupSet: Style[] = [
  {
    translations: {
      en: {
        categoryTitle: 'Classic',
      },
      ru: {
        categoryTitle: 'Классика',
      },
      pl: {
        categoryTitle: 'Klasyka',
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
        categoryTitle: 'Folklor',
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
        categoryTitle: 'Tabla solo CD',
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
        categoryTitle: 'Show/fusia',
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
        categoryTitle: 'Bollywood',
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
        categoryTitle: 'Tribal',
      },
    },
  },
];
const babyGroupSet: Style[] = [
  {
    translations: {
      en: {
        categoryTitle: 'Classic',
      },
      ru: {
        categoryTitle: 'Классика',
      },
      pl: {
        categoryTitle: 'Klasyka',
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
        categoryTitle: 'Folklor',
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
        categoryTitle: 'Tabla solo CD',
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
        categoryTitle: 'Show/fusia',
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
        categoryTitle: 'Bollywood',
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
        categoryTitle: 'All styles',
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
        title: 'Baby solo',
      },
    },
    categories: babySoloSet,
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
        title: 'Baby grupy',
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
        title: 'Baby duety',
      },
    },
    categories: babyGroupSet,
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
        title: 'Kids solo',
      },
    },
    categories: allStyles,
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
        title: 'Kids solo',
      },
    },
    categories: mainSoloSet,
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
        title: 'Kids duety',
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
        title: 'Kids grupy',
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
        title: 'Juniors',
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
        title: 'Juniors',
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
        title: 'Juniors duety',
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
        title: 'Juniors grupy',
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
        title: 'Adults',
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
        title: 'Adults',
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
        title: 'Adults duety',
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
        title: 'Adults grupy',
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
        title: 'Seniors',
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
        title: 'Seniors duety',
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
        title: 'Seniors grupy',
      },
    },
    categories: mainGroupSet,
  },
];
