import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOffresComponent } from './client-offres.component';

describe('ClientOffresComponent', () => {
  let component: ClientOffresComponent;
  let fixture: ComponentFixture<ClientOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
