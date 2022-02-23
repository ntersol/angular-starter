import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
})
export class LogoutModalComponent implements OnDestroy {
  public counter: number = 60; // Log out after this many seconds
  // Create a timer obserable that counts down
  public logoutTimer$: Subscription = interval(1000).subscribe(() => {
    // If timer is greater than 0, count down.
    if (this.counter > 1) {
      this.counter--;
    } else {
      // If timer hits zero or below, CLOSE this modal which toggles the logout action in AuthService
      this.logout();
    }
  });

  constructor(public dialogService: DialogService, public ref: DynamicDialogRef) {}

  public ngOnDestroy() {
    this.logoutTimer$?.unsubscribe();
  }

  /** Log the user out manually */
  public logout() {
    this.ref.close(true);
  }
}
