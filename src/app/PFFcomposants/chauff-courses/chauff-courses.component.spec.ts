import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffCoursesComponent } from './chauff-courses.component';
describe('ChauffCoursesComponent', () => {
  let component: ChauffCoursesComponent;
  let fixture: ComponentFixture<ChauffCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChauffCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
