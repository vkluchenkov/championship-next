import { SoloPriceCats, ContestSoloPrice } from '@/src/types';

// export const ispromoPeriod = false;

export const isFullPassSoldOut = false;

export const kidsDiscount = 0.7; //Coefficient
export const kidsMaxAge = 11;

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
