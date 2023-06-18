import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAgenceEtChauffComponent } from './client-agence-et-chauff.component';

describe('ClientAgenceEtChauffComponent', () => {
  let component: ClientAgenceEtChauffComponent;
  let fixture: ComponentFixture<ClientAgenceEtChauffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAgenceEtChauffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAgenceEtChauffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
