import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValResaComponent } from './edit-val-resa.component';

describe('EditValResaComponent', () => {
  let component: EditValResaComponent;
  let fixture: ComponentFixture<EditValResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditValResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditValResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
