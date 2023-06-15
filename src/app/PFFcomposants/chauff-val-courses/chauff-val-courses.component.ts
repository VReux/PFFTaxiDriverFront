import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { CourseService } from 'src/app/PFFservices/course-service.service';

@Component({
  selector: 'app-chauff-val-courses',
  templateUrl: './chauff-val-courses.component.html',
  styleUrls: ['./chauff-val-courses.component.scss']
})
export class ChauffValCoursesComponent implements OnInit {

  //valCourses:Course[];
  courses!:any[];
  course:Course = new Course();
  element = false;

 constructor(private courseService:CourseService, private router:Router){ }

 ngOnInit(): void {
 this.findAllCourses();
 //this.valCourses = this.courseService.findAll();
 }

showData() {
  return (this.element = true);
}
hideData() {
  return (this.element = false);
}

 findAllCourses(){
   this.courseService.findAll().subscribe(data => {this.courses = data});
 }
 saveCourse(){
   this.courseService.save(this.course).subscribe(
     () => {
       this.findAllCourses();
       this.course = new Course();
     }
   )
 }
 deleteCourse(idCourse:number){
   this.courseService.delete(idCourse).subscribe(
     () => {
       this.findAllCourses();
     }
   )
  }
  editCourse(course:Course){
   localStorage.removeItem("editCourseId");
   localStorage.setItem("editCourseId",course.idCourse.toString());
   this.router.navigate(['/editCourse',course.idCourse]);
 }
}
