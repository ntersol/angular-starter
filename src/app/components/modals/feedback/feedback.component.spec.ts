import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FeedbackModalComponent } from './feedback.component';

let refMock: any;

describe('FeedbackModalComponent', () => {
  let component: FeedbackModalComponent;
  let fixture: ComponentFixture<FeedbackModalComponent>;

  beforeEach(
    waitForAsync(() => {
      refMock = {
        close: jest.fn(),
      };
      TestBed.configureTestingModule({
        declarations: [FeedbackModalComponent],
        providers: [{ provide: DynamicDialogRef, useValue: refMock }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit', () => {
    it('should call close on ref', () => {
      component.submit();
      expect(refMock.close).toBeCalledTimes(1);
    });
  });
});
