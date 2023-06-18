import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionComptesComponent } from './admin-gestion-comptes.component';

describe('AdminGestionComptesComponent', () => {
  let component: AdminGestionComptesComponent;
  let fixture: ComponentFixture<AdminGestionComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionComptesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGestionComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
