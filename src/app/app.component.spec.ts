import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppComponent } from './app.component';
import { NtsVersionManagementService } from './shared/services';
import { environment } from '$env';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Title } from '@angular/platform-browser';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let versionMock: any;
let routerMock: any;
let activatedRouteMock: any;
let titleMock: any;

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      versionMock = {
        start: jest.fn(),
      };
      titleMock = {
        setTitle: jest.fn(),
      };
      routerMock = {
        events: new BehaviorSubject<NavigationEnd>(new NavigationEnd(0, '', '')),
      };
      activatedRouteMock = {
        firstChild: {
          outlet: 'primary',
          data: of({
            title: '123',
          }),
        },
      };
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [RouterTestingModule, HttpClientTestingModule, ConfirmDialogModule, ReactiveFormsModule],
        providers: [
          ConfirmationService,
          { provide: NtsVersionManagementService, useValue: versionMock },
          { provide: Router, useValue: routerMock },
          { provide: ActivatedRoute, useValue: activatedRouteMock },
          { provide: Title, useValue: titleMock },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call routeChange', () => {
      const routeChangeSpy = jest.spyOn(component, 'routeChange');
      component.ngOnInit();
      expect(routeChangeSpy).toBeCalled();
      expect(routeChangeSpy).toBeCalledTimes(1);
    });

    it('should call start on this.version with environment.endpoints.versionPath', () => {
      environment.endpoints.versionPath = '123';
      component.ngOnInit();
      expect(versionMock.start).toHaveBeenNthCalledWith(1, '123');
    });

    it('should NOT call start on this.version', () => {
      environment.endpoints.versionPath = null;
      component.ngOnInit();
      expect(versionMock.start).not.toBeCalled();
    });
  });

  describe('routeChange', () => {
    it('should call setTitle on this.title with the title | appName', () => {
      environment.properties.appName = '456';
      component.routeChange();
      expect(titleMock.setTitle).toHaveBeenNthCalledWith(1, '123 | 456');
    });
    it('should NOT call setTitle on this.title', () => {
      routerMock.events.next(null);
      component.routeChange();
      expect(titleMock.setTitle).not.toBeCalled();
    });
  });
});
