import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { Facture } from 'src/app/PFFmodel/facture';
import { AppService } from 'src/app/PFFservices/app.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { FactureService } from 'src/app/PFFservices/facture-service.service';

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
  factures!:any[];
  facture:Facture = new Facture();

 constructor(private courseService:CourseService, private factureService:FactureService, private router:Router, private appService:AppService){ }

 ngOnInit(): void {
 this.findAllCourses();
 this.findAllFactures();
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

 findAllFactures(){
  this.factureService.findAll().subscribe(data => {this.factures = data});
}

 /*validerCourse(){
  return (this.course.varValider = true);
 }

 validerCourse() {
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
  valCourse(course:Course){
    localStorage.removeItem("valCourseId");
    localStorage.setItem("valCourseId",course.idCourse.toString());
    this.router.navigate(['/valCourse',course.idCourse]);
  }

  editValCourse(course:Course){
   localStorage.removeItem("editValCourseId");
   localStorage.setItem("editValCourseId",course.idCourse.toString());
   this.router.navigate(['/editValCourse',course.idCourse]);
 }
 saveFacture() {
  this.factureService.save(this.facture).subscribe(
    () => {
      this.findAllFactures();
      this.facture = new Facture();
    }
  )
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
