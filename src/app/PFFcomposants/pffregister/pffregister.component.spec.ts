import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFFregisterComponent } from './pffregister.component';

describe('PFFregisterComponent', () => {
  let component: PFFregisterComponent;
  let fixture: ComponentFixture<PFFregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFFregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFFregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
