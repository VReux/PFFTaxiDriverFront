import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChauffeurTaxiComponent } from './gestion-chauffeur-taxi.component';

describe('GestionChauffeurTaxiComponent', () => {
  let component: GestionChauffeurTaxiComponent;
  let fixture: ComponentFixture<GestionChauffeurTaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionChauffeurTaxiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionChauffeurTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
