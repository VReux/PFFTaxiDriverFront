import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValCoursesChauffComponent } from './chauff-val-courses.component';

describe('ValCoursesChauffComponent', () => {
  let component: ValCoursesChauffComponent;
  let fixture: ComponentFixture<ValCoursesChauffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValCoursesChauffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValCoursesChauffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
