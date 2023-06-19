import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFFlogoutComponent } from './pfflogout.component';

describe('PFFlogoutComponent', () => {
  let component: PFFlogoutComponent;
  let fixture: ComponentFixture<PFFlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFFlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFFlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
