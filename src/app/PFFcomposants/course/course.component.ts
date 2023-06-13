import { Component, OnInit } from '@angular/core';
import { Course } from '../../PFFmodel/course';
import { CourseService } from '../../PFFservices/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses!:any[];
  course:Course = new Course();

 constructor(private courseService:CourseService, private router:Router){ }

 ngOnInit(): void {
 this.findAllCourses();
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
 /*editCourse(course:Course){
   localStorage.removeItem("editCourseId");
   localStorage.setItem("editCourseId",course.idCourse.toString());
   this.router.navigate(['/editCourse',course.idCourse]);
 }*/
 }

}
