import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { merge, interval, BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime, tap, switchMap, filter, map, distinctUntilChanged, startWith, take } from 'rxjs/operators';
import { DialogService } from 'primeng/dynamicdialog';
import { environment } from '$env';
import { Models } from '../models/global.models';
import { LogoutModalComponent } from '../../components/modals';
import { AppStorageService } from './app-storage.service';
import { DomService } from '@ntersol/services';

export enum AuthState {
  initial,
  loggedIn,
  loggedOut,
  sessionExpired,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** Auth status based on authstate */
  public authState$ = new BehaviorSubject<AuthState>(AuthState.initial);

  /** Holds reference to logout modal */
  public logOutModal: any | null | undefined;

  /** How often to refresh the token after user interaction */
  private tokenRefreshInterval = 60 * 1000; // 60 seconds default, 60 * 1000
  /** How long should the user be idle before loading the modal */
  private idleDuration = 60 * 5; // In seconds
  /** How long will the log out modal will display before logging a user out automatically */
  private logoutModalDuration = 60; // In seconds
  /** Is the current timer expired */
  private logoutModalVisible = false;

  /** User interaction events. Watches mouse movement, clicks and key presses. SSR safe */
  private userActions$ = this.dom.document ? merge(fromEvent(document, 'keypress'), fromEvent(document, 'mousemove'), fromEvent(document, 'click')) : merge();
  /** Throttle userActions  */
  public refreshEvent$ = this.userActions$.pipe(
    startWith(0),
    throttleTime(1000), // Throttle to every one second
  );

  /** Logout timer that resets after every user interaction event */
  public logoutTimerExpired$ = this.refreshEvent$.pipe(
    switchMap(() => interval(1000)), // Reset interval everytime refresh fires
    filter(() => !!this.appStorage.token), // Only capture refresh events if token present
    tap(x => console.log('Counter', x)),
    map(val => (val > this.idleDuration ? true : false)), // If val is greater than duration, convert to true or false
    startWith(false),
    distinctUntilChanged(),
    filter(expired => expired && !this.logoutModalVisible),
    tap(() => this.launchLogoutModal()),
  );

  /** Refresh the token automatically */
  public refreshToken$ = this.refreshEvent$.pipe(
    filter(refreshEvent => !!refreshEvent), // Token refresh can only occur after refreshEvent$ is initialized
    filter(() => !!this.appStorage.token), // Only capture refresh events if token present
    throttleTime(this.tokenRefreshInterval), // Throttle time using refresh interval
    filter(() => !this.logoutModalVisible), // Only refresh token if timer not expired
    tap(() => this.refreshToken()),
  );

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private appStorage: AppStorageService,
    public dialogService: DialogService,
    private dom: DomService,
  ) {
    // If a token was passed in via query param
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      if (params['token']) {
        this.appStorage.token = params['token'];
      }
    });
    console.log('Init');
  }

  /**
   * Log the user in
   * @param data
   */
  public logIn(data: any) {
    // Determine if valid auth endpoint available. If not use stubbed out one
    const authApi =
      environment.endpoints.apiUrl && environment.endpoints.authLogin
        ? this.http.post<Models.Auth>(environment.endpoints.apiUrl + environment.endpoints.authLogin, data)
        : this.http.get<Models.Auth>('assets/mock-data/login.json');
    return authApi.pipe(
      tap(response => {
        this.appStorage.token = response.data.token;
        this.authState$.next(AuthState.loggedIn);
        // Override default idle duration if specified in the api response
        if (response.data.expirationSeconds) {
          this.idleDuration = response.data.expirationSeconds;
        }
      }),
    );
  } // end LogIn

  /**
   * Refresh the token
   */
  public refreshToken() {
    // Null check against env files
    if (!environment.endpoints.apiUrl || !environment.endpoints.authTokenRefresh) {
      return false;
    }

    const authApi =
      environment.endpoints.apiUrl && environment.endpoints.authTokenRefresh
        ? this.http.post<Models.Auth>(environment.endpoints.apiUrl + environment.endpoints.authTokenRefresh, {})
        : this.http.post<any>('https://jsonplaceholder.typicode.com/posts/', {
            userId: 1,
            id: 1,
            title: '',
            body: '',
          });

    const refreshApi = this.http.post<Models.Auth>(environment.endpoints.apiUrl + environment.endpoints.authTokenRefresh, {});

    refreshApi.subscribe(
      response => {
        if (this.appStorage.token) {
          // Make sure a token is present before it is replaced
          this.authState$.next(AuthState.loggedIn);
          this.appStorage.token = response.data.token;
        }
      },
      () => this.logOut(AuthState.sessionExpired),
    );
    // Return observable if needed by a component
    return refreshApi;
  } // end RefreshToken

  /**
   * Launch a modal window which gives the user a chance to continue working
   */
  public launchLogoutModal(): void {
    this.logoutModalVisible = true;
    // Open log out modal window
    const ref = this.dialogService.open(LogoutModalComponent, {
      data: this.logoutModalDuration,
      header: 'Warning',
      width: '70%',
      dismissableMask: true,
    });
    // When modal closes
    ref.onClose.subscribe(reason => {
      this.logoutModalVisible = false;
      if (reason) {
        this.logOut(AuthState.loggedOut);
      } else {
        this.refreshToken(); // Immediately refresh token
      }
    });
  }

  /**
   * Log the user out. Clear stored data and redirect to login page
   */
  public logOut(authState: AuthState): void {
    this.appStorage.token = null;
    this.logoutModalVisible = false;
    this.authState$.next(authState);
    // Don't throw a redirect url if this is the dashboard since that is default on login
    const returnUrl = this.router.url !== '/' && this.router.url !== '/login' ? this.router.url.split('?')[0] : null;
    this.router.navigate(['/login'], { queryParams: { returnUrl: returnUrl } });
  } // end LogOut
}
