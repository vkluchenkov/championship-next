export type Version = 'live' | 'online';
export type SupportedLangs = 'ru' | 'en' | 'pl';

export interface PricePeriod {
  price: {
    fullPassPrice: number;
    group1Price: number;
    group2Price: number;
  };
  description?: string;
  startDate?: Date;
  endDate?: Date;
  isPromo?: boolean;
}

export type SoloPriceCats = 'kids' | 'risingStar' | 'professionals';

export interface ContestSoloPrice {
  price: {
    priceNormal: number;
  };
}

export type AgeGroup = 'baby' | 'kids' | 'juniors' | 'adults' | 'seniors';
