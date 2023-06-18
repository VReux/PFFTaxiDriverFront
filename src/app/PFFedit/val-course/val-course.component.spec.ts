import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValCourseComponent } from './val-course.component';

describe('ValCourseComponent', () => {
  let component: ValCourseComponent;
  let fixture: ComponentFixture<ValCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
