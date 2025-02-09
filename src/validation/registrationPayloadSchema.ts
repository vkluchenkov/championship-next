import Joi from 'joi';

export const registrationPayloadSchema = Joi.object({
  fullpassPrice: Joi.number(),
  currentLang: Joi.string().required().equal('en', 'ru'),
  soloPassPrice: Joi.number().required(),
  total: Joi.number().required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  stageName: Joi.string().allow(''),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  social: Joi.string(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  tel: Joi.string().required(),
  workshops: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      selected: Joi.boolean().required(),
      day: Joi.string().required(),
      start: Joi.string().required(),
      end: Joi.string().required(),
      type: Joi.string().required().equal('workshop'),
      teachersPriceGroup: Joi.string().required().equal('group1', 'group2'),
      translations: Joi.object({
        ru: Joi.object({
          title: Joi.string().required(),
          description: Joi.string().required(),
        }),
        en: Joi.object({
          title: Joi.string().required(),
          description: Joi.string().required(),
        }),
      }),
    })
  ),
  wsPrices: Joi.object({
    group1: Joi.object({
      names: Joi.string().required(),
      price: Joi.number().required(),
    }).required(),
    group2: Joi.object({
      names: Joi.string().required(),
      price: Joi.number().required(),
    }).required(),
  }).required(),
  isFullPass: Joi.boolean().required(),
  fullPassDiscount: Joi.string().equal('group', '30%', '50%', 'free', 'none'),
  fullPassDiscountSource: Joi.string().allow(''),
  fullPassGroupName: Joi.string(),
  ageGroup: Joi.string().required().equal('baby', 'kids', 'juniors', 'adults', 'seniors'),
  isSoloContest: Joi.boolean().required(),
  contestAgeGroup: Joi.string().required().equal('baby', 'kids', 'juniors', 'adults', 'seniors'),
  isSoloPass: Joi.boolean().required(),
  contestLevels: Joi.array().items(
    Joi.string().equal('debut', 'beginners', 'semi-pro', 'professionals', 'openLevel')
  ),
  contestLevel: Joi.string().equal('debut', 'beginners', 'semi-pro', 'professionals', 'openLevel'),
  soloContest: Joi.array().items(
    Joi.object({
      isSolo: Joi.boolean().required(),
      isForWin: Joi.boolean(),
      isImprovisation: Joi.boolean(),
      id: Joi.string().required(),
      selected: Joi.boolean().required(),
      price: Joi.number().required(),
      translations: Joi.object({
        ru: Joi.object({
          categoryTitle: Joi.string().required(),
        }),
        en: Joi.object({
          categoryTitle: Joi.string().required(),
        }),
      }),
    })
  ),
  isGroupContest: Joi.boolean().required(),
  groupContest: Joi.array().items(
    Joi.object({
      type: Joi.string().required().equal('duo', 'group'),
      ageGroup: Joi.string().required().equal('baby', 'kids', 'juniors', 'adults', 'seniors'),
      style: Joi.string().required(),
      styles: Joi.array(),
      qty: Joi.number().required(),
      name: Joi.string().required(),
      price: Joi.number().required(),
    })
  ),
  isWorldShowSolo: Joi.boolean().required(),
  isWorldShowGroup: Joi.boolean().required(),
  worldShowGroup: Joi.object({
    qty: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
  })
    .allow(null)
    .optional(),
  rulesAccepted: Joi.boolean().required(),
  isInstallments: Joi.boolean(),
  currentStep: Joi.string(),
  settings: Joi.object().required(),
}).unknown();
