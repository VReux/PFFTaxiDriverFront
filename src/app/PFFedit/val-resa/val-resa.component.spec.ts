import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValResaComponent } from './val-resa.component';

describe('ValResaComponent', () => {
  let component: ValResaComponent;
  let fixture: ComponentFixture<ValResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
