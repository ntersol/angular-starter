import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { LogoutModalComponent } from './logout-modal.component';

let refMock: any;

describe('LogoutModalComponent', () => {
  let component: LogoutModalComponent;
  let fixture: ComponentFixture<LogoutModalComponent>;

  beforeEach(
    waitForAsync(() => {
      refMock = {
        close: jest.fn(),
      };
      TestBed.configureTestingModule({
        imports: [DynamicDialogModule],
        declarations: [LogoutModalComponent],
        providers: [{ provide: DynamicDialogRef, useValue: refMock }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set counter to 60 seconds', () => {
    expect(component.counter).toEqual(60);
  });

  describe('ngOnInit', () => {
    it('should call onTimerInterval every second', fakeAsync(() => {
      component.onTimerInterval = jest.fn();
      fixture.detectChanges();
      component.ngOnInit();
      tick(1500);
      expect(component.onTimerInterval).toBeCalledTimes(1);
      discardPeriodicTasks();
    }));
  });

  describe('ngOnDestroy', () => {
    it('should call unsubscribe on timerSub', () => {
      component.timerSub = {
        unsubscribe: jest.fn(),
      } as unknown as Subscription;
      component.ngOnDestroy();
      expect(component.timerSub.unsubscribe).toBeCalledTimes(1);
    });
    it('should NOT call unsubscribe if timerSub is undefined', () => {
      component.timerSub = undefined as unknown as Subscription;
      component.ngOnDestroy();
      expect(component.timerSub).toEqual(undefined);
    });
  });

  describe('logout', () => {
    it('should call close on ref with true', () => {
      component.logout();
      expect(refMock.close).toHaveBeenNthCalledWith(1, true);
    });
  });

  describe('onTimerInterval', () => {
    it('should decrement counter if counter is greater than 1', () => {
      component.counter = 5;
      component.onTimerInterval();
      expect(component.counter).toEqual(4);
    });
    it('should call logout if counter is less than or equal to 1', () => {
      component.counter = 1;
      component.logout = jest.fn();
      component.onTimerInterval();
      expect(component.logout).toBeCalledTimes(1);
    });
  });
});
