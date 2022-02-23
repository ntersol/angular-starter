import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { AuthService, AuthState } from '../../../shared/services';
import { SettingsService } from '../../../shared/stores/settings';
import { UiStateService } from '../../../shared/stores/ui';
import { NavComponent } from './nav.component';

let routerMock: any;
let authMock: any;
let confirmationMock: any;
let settingsMock: any;
let uiMock: any;

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(
    waitForAsync(() => {
      routerMock = {
        events: new BehaviorSubject<NavigationEnd>(new NavigationEnd(0, '', '')),
      };
      authMock = {
        logOut: jest.fn(),
      };
      confirmationMock = {};
      settingsMock = {
        userName$: '123',
      };
      uiMock = {
        updateAvailable$: '456',
        updateAppModal: jest.fn(),
      };
      TestBed.configureTestingModule({
        declarations: [NavComponent],
        imports: [HttpClientTestingModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: Router, useValue: routerMock },
          { provide: AuthService, useValue: authMock },
          { provide: ConfirmationService, useValue: confirmationMock },
          { provide: SettingsService, useValue: settingsMock },
          { provide: UiStateService, useValue: uiMock },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userName$ to settings.userName$', () => {
    expect(component.userName$).toEqual('123');
  });

  it('should set hasUpdate$ to ui.updateAvailable$', () => {
    expect(component.hasUpdate$).toEqual('456');
  });

  it('should have 2 items in navMenu', () => {
    expect(component.navMenu.length).toEqual(2);
  });

  it('should have 1 item in utilityMenu', () => {
    expect(component.utilityMenu.length).toEqual(1);
  });

  it('should set sidebarVisible to false', () => {
    expect(component.sidebarVisible).toEqual(false);
  });

  it('should call logout when the command for signout is invoked', () => {
    const signOutMenuItem = component.utilityMenu.find(t => t.label === 'Sign Out');
    if (signOutMenuItem && signOutMenuItem.command) {
      signOutMenuItem.command();
    }
    expect(authMock.logOut).toHaveBeenNthCalledWith(1, AuthState.loggedOut);
  });

  describe('ngOnInit', () => {
    it('should set sidebarVisible to false on route change', () => {
      component.sidebarVisible = true;
      component.ngOnInit();
      routerMock.events.next(new NavigationEnd(0, '', ''));
      expect(component.sidebarVisible).toBe(false);
    });
  });

  describe('updateApp', () => {
    it('should call updateAppModal on ui', () => {
      component.updateApp();
      expect(uiMock.updateAppModal).toHaveBeenCalled();
      expect(uiMock.updateAppModal).toHaveBeenCalledTimes(1);
    });
  });

  describe('logOut', () => {
    it('should call logOut on auth with AuthState.loggedOut', () => {
      component.logOut();
      expect(authMock.logOut).toHaveBeenNthCalledWith(1, AuthState.loggedOut);
    });
  });
});
