import { AgeGroup } from '@/src/types';
import { FormFields, Step } from './types';

export const getContestAgeGroupsList = (ageGroup: AgeGroup | null): AgeGroup[] => {
  if (ageGroup)
    return ageGroup === 'juniors' || ageGroup === 'seniors' ? [ageGroup, 'adults'] : [ageGroup];
  else return [];
};

export const liveSteps: Step[] = [
  {
    id: 'personal',
    prev: null,
    next: 'workshops',
  },
  {
    id: 'workshops',
    prev: 'personal',
    next: 'contestSolo',
  },
  {
    id: 'contestSolo',
    prev: 'workshops',
    next: 'contestGroups',
  },
  {
    id: 'contestGroups',
    prev: 'contestSolo',
    next: 'show',
  },
  {
    id: 'show',
    prev: 'contestGroups',
    next: 'summary',
  },
  {
    id: 'summary',
    prev: 'show',
    next: null,
  },
];

export const defaultValues: Partial<FormFields> = {
  isFullPass: false,
  workshops: [],
  isSoloPass: false,
  fullPassDiscount: 'none',
  isSoloContest: false,
  soloContest: [],
  isGroupContest: false,
  groupContest: [],
  currentStep: 'personal',
  rulesAccepted: false,
};
