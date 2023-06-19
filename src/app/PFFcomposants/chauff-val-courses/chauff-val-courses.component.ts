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
 this.course.validation=false;
 this.findByValidation();
 }

/*showToValider() {
  return (this.course.validation = false);
}
hideToValider() {
  return (this.course.validation = true);
}*/

 findAllCourses(){
   this.courseService.findAll().subscribe(data => {this.courses = data});
 }

 findByValidation(){
  this.courseService.findByValidation(this.course.validation).subscribe(data =>{
    this.courses = data;
  })
 }

 findAllFactures(){
  this.factureService.findAll().subscribe(data => {this.factures = data});
}

 /*validerCourse(){
  return (this.course.validation = true);
 }

 validerCourse() {
  if (this.course.validation==false) {
    this.course.validation=true;
  } 
}*/

 /*testValider(course:any){
  if(course.validation=false){
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
    // this.course.validation==true;
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
      this.router.navigate(["/chauffValCourses"]);
    }
  )
}

authenticated(){
  return this.appService.authenticated;
}

authorities3(){
  if(this.appService.isChauffeur ==true||this.appService.isAdmin==true){
    return false; 
  } else return true;
}
}
