import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffValCoursesComponent } from './chauff-val-courses.component';

describe('ChauffValCoursesComponent', () => {
  let component: ChauffValCoursesComponent;
  let fixture: ComponentFixture<ChauffValCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffValCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChauffValCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
