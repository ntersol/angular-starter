import { Wizard } from 'src/app/components/general/wizard/wizard';
// import { WizardOperator } from 'src/app/components/general/wizard/wizard.enums';

const sectionID = 'borrower';

export const routes: Wizard.Route[] = [
  {
    sectionId: sectionID,
    urlSlug: 'start',
    pageId: 'start',
    routeNext: 'bankruptcy',
  },
  {
    sectionId: sectionID,
    urlSlug: 'bankruptcy',
    pageId: 'bankruptcy',
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
