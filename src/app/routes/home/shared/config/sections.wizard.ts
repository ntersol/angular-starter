import { Wizard } from 'src/app/components/general/wizard/wizard';

export const sections: Wizard.Section[] = [
  {
    title: 'Borrower Information',
    urlSlug: 'borrower',
    routeStart: 'start',
  },
  {
    title: 'Property Information',
    urlSlug: 'property',
    routeStart: 'start',
  },
  {
    title: 'Income',
    urlSlug: 'income',
    routeStart: 'start',
  },
  {
    title: 'Expenses',
    urlSlug: 'expenses',
    routeStart: 'start',
  },
  {
    title: 'Assets',
    urlSlug: 'assets',
    routeStart: 'start',
  },
  {
    title: 'Review Details',
    urlSlug: 'review',
    routeStart: 'complete',
    wizardComplete: true,
  },
];
