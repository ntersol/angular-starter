import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, tap } from 'rxjs';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
})
export class LogoutModalComponent implements OnInit, OnDestroy {
  counter: number = 60; // Log out after this many seconds
  // Create a timer obserable that counts down
  logoutTimer$ = interval(1000).pipe(
    tap(() => {
      this.onTimerInterval();
    }),
  );
  timerSub!: Subscription;

  constructor(public ref: DynamicDialogRef) {}

  ngOnInit(): void {
    this.timerSub = this.logoutTimer$.subscribe();
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }

  /** Log the user out manually */
  logout(): void {
    this.ref.close(true);
  }

  onTimerInterval(): void {
    // If timer is greater than 0, count down.
    if (this.counter > 1) {
      this.counter--;
    } else {
      // If timer hits zero or below, CLOSE this modal which toggles the logout action in AuthService
      this.logout();
    }
  }
}
