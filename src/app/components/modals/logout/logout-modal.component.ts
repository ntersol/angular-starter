import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, timer } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@UntilDestroy()
@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
})
export class LogoutModalComponent implements OnInit, OnDestroy {
  public logoutTimer$ = timer(0, 1000).pipe(map(x => (this.config.data || 60) - x));

  constructor(public ref: DynamicDialogRef, private config: DynamicDialogConfig) {}

  ngOnInit() {
    // Create a timer obserable that counts down
    this.logoutTimer$.pipe(untilDestroyed(this)).subscribe(timeLeft => {
      // If timer hits zero or below, CLOSE this modal which toggles the logout action in AuthService
      if (timeLeft <= 0) {
        this.logout();
      }
    });
  }

  /** Log the user out manually */
  public logout() {
    this.ref.close(true);
  }

  public ngOnDestroy() {}
}
