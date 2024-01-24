import { PricePeriod, SoloPriceCats, ContestSoloPrice } from '@/src/types';

export const ispromoPeriod = false;

export const isFullPassSoldOut = false;

//Translation keys for Price page
export const teachersWsGroups = {
  group1: ['polina', 'margarita', 'suraiya'],
  group2: ['pablo'],
};

export const kidsDiscount = 1; //Coefficient
export const kidsMaxAge = 11;

export const workshopsPrice: PricePeriod[] = [
  {
    price: {
      fullPassPrice: 600,
      group1Price: 190,
      group2Price: 235,
    },
    startDate: new Date('2023-11-05T00:00:00+01:00'), //Must start immediately after previous
    endDate: new Date('2024-01-31T23:59:59+01:00'),
  },
];

export const contestSoloPrice: Record<SoloPriceCats, ContestSoloPrice> = {
  kids: {
    price: {
      priceNormal: 100,
    },
  },
  risingStar: {
    price: {
      priceNormal: 140,
    },
  },
  professionals: {
    price: {
      priceNormal: 170,
    },
  },
};

export const contestGroupPrice = 90;

export const worldShowPrice = {
  soloPriceNormal: 140,
  groups: 90,
};
