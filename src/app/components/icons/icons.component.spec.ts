import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvailableIcons, IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        IconsComponent, // Import the standalone component here
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct icon based on input', () => {
    const testIcon: AvailableIcons = 'plus';
    component.icon = testIcon;
    fixture.detectChanges();

    const icon = component.iconMap[component.icon];
    expect(icon).toBeTruthy();
  });

  it('should not display an icon if input is null', () => {
    component.icon = null;
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('fa-icon');
    expect(iconElement).toBeNull();
  });
});
