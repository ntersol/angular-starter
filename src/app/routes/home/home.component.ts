import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WizardStore } from 'src/app/components/general/wizard/shared/store/wizard.store';
import { Wizard } from 'src/app/components/general/wizard/wizard';
import { pages } from './shared/config/pages.wizard';
import { routes } from './shared/config/routes.wizard';
import { sections } from './shared/config/sections.wizard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnDestroy {
  /** Keep reference to this wizards store instance */
  public store?: WizardStore;
  public sections: Wizard.Section[] = sections;
  public pages: Wizard.Page[] = pages;
  public routes: Wizard.Route[] = routes;

  public complete = false;

  /***/
  public formGroup = this.fb.group({
    $$computed: this.fb.group({
      hasBankruptcy: null,
      isMilitary: null,
      isMilitary2: null,
      hasCoborrower: null,
    }),
    borrowers: this.fb.group({
      hasBankruptcy1: null,
      hasBankruptcy2: null,
      phoneNumber: [],
      alternatePhoneNumberType: [],
      emailAddress: null,
      served1: null,
      served2: null,
      b1Name: 'John Borrower',
      b2Name: 'Jane Borrower',
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    localStorage.clear();
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
