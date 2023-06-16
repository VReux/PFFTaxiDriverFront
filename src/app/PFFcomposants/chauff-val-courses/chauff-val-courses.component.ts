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

  //isCourseValid = false;
  //valCourses:Course[];
  courses!:any[];
  course:Course = new Course();
  element = false;
  valider = false;

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

 validerCourse(){
  return (this.course.varValider = true);
 }

 /*validerCourse() {
  if (this.course.varValider==false) {
    this.course.varValider=true;
  } 
}*/

 /*testValider(course:any){
  if(course.varValider=false){
   this.router.navigate(['/editClient',utilisateur.idUtilisateur]);} 
  else if(utilisateur.numPermis!=null){
   this.router.navigate(['/editChauffeur',utilisateur.idUtilisateur])}
}*/


 /*saveCourse(){
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
  }*/
  editValCourse(course:Course){
   localStorage.removeItem("editValCourseId");
   localStorage.setItem("editValCourseId",course.idCourse.toString());
   this.router.navigate(['/editValCourse',course.idCourse]);
 }
}
