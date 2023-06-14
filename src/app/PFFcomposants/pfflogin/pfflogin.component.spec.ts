import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFFloginComponent } from './pfflogin.component';

describe('PFFloginComponent', () => {
  let component: PFFloginComponent;
  let fixture: ComponentFixture<PFFloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFFloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFFloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
