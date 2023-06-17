import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesAgenceComponent } from './statistiques-agence.component';

describe('StatistiquesAgenceComponent', () => {
  let component: StatistiquesAgenceComponent;
  let fixture: ComponentFixture<StatistiquesAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
