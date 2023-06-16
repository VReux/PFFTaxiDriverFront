import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValCourseComponent } from './edit-val-course.component';

describe('EditValCourseComponent', () => {
  let component: EditValCourseComponent;
  let fixture: ComponentFixture<EditValCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditValCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditValCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
