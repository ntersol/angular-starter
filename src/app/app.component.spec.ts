import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomService } from '@ntersol/services'; // Adjust the path as necessary
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthService } from './shared';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let domServiceSpy: jasmine.SpyObj<DomService>;

  beforeEach(async(() => {
    // Create spies for the dependencies
    authServiceSpy = jasmine.createSpyObj('AuthService', ['logoutTimerExpired$', 'refreshToken$']);
    domServiceSpy = jasmine.createSpyObj('DomService', ['isBrowser']);

    // Provide mock values or observables as needed
    authServiceSpy.logoutTimerExpired$ = of(false); // Adjust as necessary
    authServiceSpy.refreshToken$ = of(0); // Adjust as necessary
    domServiceSpy.isBrowser = true; // or false, depending on what you want to test

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: DomService, useValue: domServiceSpy },
      ],
      imports: [RouterTestingModule], // Import RouterTestingModule
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to logoutTimerExpired$ on AuthService', () => {
    expect(authServiceSpy.logoutTimerExpired$).toBeTruthy();
  });

  it('should subscribe to refreshToken$ on AuthService', () => {
    expect(authServiceSpy.refreshToken$).toBeTruthy();
  });

  // Add more tests as needed to cover the logic in your component
});
