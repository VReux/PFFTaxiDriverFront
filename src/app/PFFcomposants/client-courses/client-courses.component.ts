import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { AppService } from 'src/app/PFFservices/app.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';

@Component({
  selector: 'app-client-courses',
  templateUrl: './client-courses.component.html',
  styleUrls: ['./client-courses.component.scss']
})
export class ClientCoursesComponent implements OnInit {

  courses!:any[];
  course:Course = new Course();

  constructor(private courseService:CourseService, private router:Router, private httpClient: HttpClient, private appService:AppService) { }

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
   }
   editCourse(course:Course){
    localStorage.removeItem("editCourseId");
    localStorage.setItem("editCourseId",course.idCourse.toString());
    this.router.navigate(['/editCourse',course.idCourse]);
  }

  authenticated(){
    return this.appService.authenticated;
  }

  authorities4(){
    if(this.appService.isClient ==true||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }
}
