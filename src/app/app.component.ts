import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '$env';
import { AuthService } from './shared';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Handle logout modal
    this.auth.logoutTimerExpired$.pipe(untilDestroyed(this)).subscribe();
    // Handle refresh token
    this.auth.refreshToken$.pipe(untilDestroyed(this)).subscribe();
  }

  ngOnDestroy(): void {}
}
