import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationResaComponent } from './validation-resa.component';

describe('ValidationResaComponent', () => {
  let component: ValidationResaComponent;
  let fixture: ComponentFixture<ValidationResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
