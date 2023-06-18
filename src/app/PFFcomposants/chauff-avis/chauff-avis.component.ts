import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { AppService } from 'src/app/PFFservices/app.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';

@Component({
  selector: 'app-chauff-avis',
  templateUrl: './chauff-avis.component.html',
  styleUrls: ['./chauff-avis.component.scss']
})
export class ChauffAvisComponent implements OnInit {

  courses!:any[];
  course:Course = new Course();
  element = false;

 constructor(private courseService:CourseService, private router:Router, private appService:AppService){ }

 ngOnInit(): void {
 this.findAllCourses();
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
 authenticated(){
  return this.appService.authenticated;
}

authorities3(){
  if(this.appService.isChauffeur ==true){
    return false; 
  } else return true;
}
}
