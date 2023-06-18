import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReclaComponent } from './admin-recla.component';

describe('AdminReclaComponent', () => {
  let component: AdminReclaComponent;
  let fixture: ComponentFixture<AdminReclaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReclaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
