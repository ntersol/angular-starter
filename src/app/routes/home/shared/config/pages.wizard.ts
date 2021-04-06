import { Wizard } from 'src/app/components/general/wizard/wizard';
import { WizardOperator } from 'src/app/components/general/wizard/wizard.enums';

const sectionID = 'borrower';

export const pages: Wizard.Page[] = [
  {
    sectionId: sectionID,
    id: 'start',
    content: [
      {
        type: 'row',
        columns: [
          /**
          {
            columnSize: 4,
            content: [
              {
                type: 'html',
                html: '<div class="intro-image borrower" aria-hidden="true"></div>',
              },
            ],
          },
           */
          {
            columnSize: 8,
            content: [
              {
                type: 'html',
                html: `<div class="intro-screen">
                <h1 class="mb-0">Borrower Information</h1>
                <p class="mb-0"><strong><i class="fa fa-clock-o" aria-hidden="true"></i> This section is expected to take about 2 minutes to complete.</strong></p>
                <p class="mb-0 mt-3">Let's get started with the process! It will take about 15 minutes and then your information will be reviewed by one of our customer service representatives.</p>
                </div>`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    sectionId: sectionID,
    id: 'coborrower',
    title: 'Will there be a coborrower on this loan?',
    content: [
      {
        type: 'formField',
        field: '$$computed.hasCoborrower',
        formFieldType: 'buttons',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
    ],
  },
  {
    sectionId: sectionID,
    id: 'bankruptcy',
    title: 'Has any borrower on the loan ever filed for bankruptcy?',
    content: [
      {
        type: 'formField',
        field: '$$computed.hasBankruptcy',
        formFieldType: 'buttons',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
    ],
  },

  {
    sectionId: sectionID,
    id: 'bankruptcy2',
    title: 'Which borrower(s) have file for bankrupcy?',
    content: [
      {
        type: 'formField',
        field: 'borrowers.hasBankruptcy1',
        formFieldType: 'buttonToggle',
        placeholder: '{{borrowers.b1Name}}',
      },
      {
        type: 'formField',
        field: 'borrowers.hasBankruptcy2',
        formFieldType: 'buttonToggle',
        placeholder: '{{borrowers.b2Name}}',
        visible: [
          {
            condition: 'AND',
            rules: [
              {
                field: '$$computed.hasCoborrower',
                operator: WizardOperator.EQ,
                value: true,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    sectionId: sectionID,
    id: 'military',
    title: `Is anyone on the loan on active duty with the military (including the National Guard and Reserves), the dependent of a borrower on active duty, or the surviving spouse of a member of the military who is  on active duty at the time of this request?`,
    content: [
      {
        type: 'formField',
        field: '$$computed.isMilitary',
        formFieldType: 'buttons',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
        visible: [
          {
            condition: 'AND',
            rules: [
              {
                field: '$$computed.hasCoborrower',
                operator: WizardOperator.EQ,
                value: true,
              },
            ],
          },
        ],
      },
      {
        type: 'formField',
        field: 'borrowers.isMilitary',
        formFieldType: 'buttons',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
        visible: [
          {
            condition: 'AND',
            rules: [
              {
                field: '$$computed.hasCoborrower',
                operator: WizardOperator.EQ,
                value: false,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    sectionId: sectionID,
    id: 'email',
    title: 'What is your email address?',
    content: [
      {
        type: 'formField',
        field: 'borrowers.emailAddress',
        formFieldType: 'email',
        placeholder: 'E-mail Address',
        validators: {
          email: true,
        },
      },
    ],
  },

  {
    sectionId: sectionID,
    id: 'phone',
    title: 'And finally, how can we contact you by phone?',
    content: [
      {
        type: 'row',
        columns: [
          {
            columnSize: 8,
            content: [
              {
                type: 'formField',
                field: 'borrowers.phoneNumber',
                formFieldType: 'phoneNumber',
                placeholder: 'Primary Phone Number',
                prefix: '<i class="fa fa-phone"></a>',
              },
            ],
          },
          {
            columnSize: 4,
            content: [
              {
                type: 'formField',
                field: 'borrowers.phoneNumberType',
                formFieldType: 'dropdown',
                placeholder: 'Type',
                options: [
                  {
                    label: 'Cell',
                    value: 'Cell',
                  },
                  {
                    label: 'Home',
                    value: 'Home',
                  },
                  {
                    label: 'Work',
                    value: 'Work',
                  },
                  {
                    label: 'Other',
                    value: 'Other',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'row',
        columns: [
          {
            columnSize: 8,
            content: [
              {
                type: 'formField',
                field: 'borrowers.alternatePhoneNumber',
                formFieldType: 'phoneNumber',
                placeholder: 'Alternate Phone Number',
                prefix: '<i class="fa fa-phone"></a>',
                validators: {
                  required: false,
                },
              },
            ],
          },
          {
            columnSize: 4,
            content: [
              {
                type: 'formField',
                field: 'borrowers.alternatePhoneNumberType',
                formFieldType: 'dropdown',
                placeholder: 'Type',
                options: [
                  {
                    label: 'Cell',
                    value: 'Cell',
                  },
                  {
                    label: 'Home',
                    value: 'Home',
                  },
                  {
                    label: 'Work',
                    value: 'Work',
                  },
                  {
                    label: 'Other',
                    value: 'Other',
                  },
                ],
                validators: {
                  required: false,
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // Property
  {
    sectionId: 'property',
    id: 'start',
    content: [
      {
        type: 'row',
        columns: [
          {
            columnSize: 4,
            content: [
              {
                type: 'html',
                html: '<div class="intro-image borrower" aria-hidden="true"></div>',
              },
            ],
          },
          {
            columnSize: 8,
            content: [
              {
                type: 'html',
                html: `<div class="intro-screen">
                <h1 class="mb-0">Property Information</h1>
                <p class="mb-0"><strong><i class="fa fa-clock-o" aria-hidden="true"></i> This section is expected to take about 5 minutes to complete.</strong></p>
                <p class="mb-0 mt-3">Lets find out about the property you are purchasing or refinancing</p>
                </div>`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    sectionId: 'income',
    id: 'start',
    content: [
      {
        type: 'row',
        columns: [
          {
            columnSize: 4,
            content: [
              {
                type: 'html',
                html: '<div class="intro-image borrower" aria-hidden="true"></div>',
              },
            ],
          },
          {
            columnSize: 8,
            content: [
              {
                type: 'html',
                html: `<div class="intro-screen">
                <h1 class="mb-0">Income Information</h1>
                <p class="mb-0"><strong><i class="fa fa-clock-o" aria-hidden="true"></i> This section is expected to take about 12 minutes to complete.</strong></p>
                <p class="mb-0 mt-3">Tell us about your income</p>
                </div>`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    sectionId: 'assets',
    id: 'start',
    content: [
      {
        type: 'row',
        columns: [
          {
            columnSize: 4,
            content: [
              {
                type: 'html',
                html: '<div class="intro-image borrower" aria-hidden="true"></div>',
              },
            ],
          },
          {
            columnSize: 8,
            content: [
              {
                type: 'html',
                html: `<div class="intro-screen">
                <h1 class="mb-0">Asset Information</h1>
                <p class="mb-0"><strong><i class="fa fa-clock-o" aria-hidden="true"></i> This section is expected to take about 10 minutes to complete.</strong></p>
                <p class="mb-0 mt-3">Lets get a list of your assets</p>
                </div>`,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    sectionId: 'expenses',
    id: 'start',
    content: [
      {
        type: 'row',
        columns: [
          {
            columnSize: 4,
            content: [
              {
                type: 'html',
                html: '<div class="intro-image borrower" aria-hidden="true"></div>',
              },
            ],
          },
          {
            columnSize: 8,
            content: [
              {
                type: 'html',
                html: `<div class="intro-screen">
                <h1 class="mb-0">Expenses Information</h1>
                <p class="mb-0"><strong><i class="fa fa-clock-o" aria-hidden="true"></i> This section is expected to take about 5 minutes to complete.</strong></p>
                <p class="mb-0 mt-3">Lets review your expenses</p>
                </div>`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    sectionId: 'review',
    id: 'complete',
    content: [
      {
        type: 'row',
        columns: [
          {
            columnSize: 4,
            content: [
              {
                type: 'html',
                html: '<div class="intro-image borrower" aria-hidden="true"></div>',
              },
            ],
          },
          {
            columnSize: 8,
            content: [
              {
                type: 'html',
                html: `<div class="intro-screen">
                <h1 class="mb-0">Review</h1>
                <p class="mb-0"><strong><i class="fa fa-clock-o" aria-hidden="true"></i> This section is expected to take about 1 minutes to complete.</strong></p>
                <p class="mb-0 mt-3">Lets review the information you entered</p>
                </div>`,
              },
            ],
          },
        ],
      },
    ],
  },
];
