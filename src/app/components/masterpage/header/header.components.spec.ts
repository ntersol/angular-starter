import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';
import { environment } from '$env';

let routerMock: any;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      routerMock = {
        events: of(null),
      };
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        imports: [],
        providers: [{ provide: Router, useValue: routerMock }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isOpen to false', () => {
    expect(component.isOpen).toEqual(false);
  });

  it('should set appName to environment.properties.appName', () => {
    expect(component.appName).toEqual(environment.properties.appName);
  });

  describe('ngOnInit', () => {
    it('should set isOpen to false on route change', () => {
      component.isOpen = true;
      component.ngOnInit();
      expect(component.isOpen).toEqual(false);
    });
  });
});
