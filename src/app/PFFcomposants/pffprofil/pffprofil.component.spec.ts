import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFFprofilComponent } from './pffprofil.component';

describe('PFFprofilComponent', () => {
  let component: PFFprofilComponent;
  let fixture: ComponentFixture<PFFprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFFprofilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFFprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
