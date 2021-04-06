import { Wizard } from 'src/app/components/general/wizard/wizard';
import { WizardOperator } from 'src/app/components/general/wizard/wizard.enums';
// import { WizardOperator } from 'src/app/components/general/wizard/wizard.enums';

const sectionID = 'borrower';

export const routes: Wizard.Route[] = [
  {
    sectionId: sectionID,
    urlSlug: 'start',
    pageId: 'start',
    routeNext: 'coborrower',
  },
  {
    sectionId: sectionID,
    urlSlug: 'coborrower',
    pageId: 'coborrower',
    routeNext: 'bankruptcy',
  },
  {
    sectionId: sectionID,
    urlSlug: 'bankruptcy',
    pageId: 'bankruptcy',
    routeNext: [
      {
        routeNext: 'bankruptcy2',
        condition: 'AND',
        rules: [
          {
            field: '$$computed.hasBankruptcy',
            operator: WizardOperator.EQ,
            value: true,
          },
        ],
      },
      {
        routeNext: 'military',
        condition: 'AND',
        rules: [
          {
            field: '$$computed.hasBankruptcy',
            operator: WizardOperator.NE,
            value: true,
          },
        ],
      },
    ],
  },
  {
    sectionId: sectionID,
    urlSlug: 'bankruptcy2',
    pageId: 'bankruptcy2',
    routeNext: 'military',
  },
  {
    sectionId: sectionID,
    urlSlug: 'military',
    pageId: 'military',
    routeNext: 'email',
  },
  {
    sectionId: sectionID,
    urlSlug: 'email',
    pageId: 'email',
    routeNext: 'phone',
  },
  {
    sectionId: sectionID,
    urlSlug: 'phone',
    pageId: 'phone',
    sectionComplete: true,
  },

  // Demo routes
  {
    sectionId: 'property',
    urlSlug: 'start',
    pageId: 'start',
    sectionComplete: true,
  },
  {
    sectionId: 'income',
    urlSlug: 'start',
    pageId: 'start',
    sectionComplete: true,
  },
  {
    sectionId: 'expenses',
    urlSlug: 'start',
    pageId: 'start',
    sectionComplete: true,
  },
  {
    sectionId: 'assets',
    urlSlug: 'start',
    pageId: 'start',
    sectionComplete: true,
  },
  {
    sectionId: 'review',
    urlSlug: 'complete',
    pageId: 'complete',
    sectionComplete: true,
  },
];
