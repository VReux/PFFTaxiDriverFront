import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';
import { Course } from 'src/app/PFFmodel/course';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { AppService } from 'src/app/PFFservices/app.service';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-chauff-courses',
  templateUrl: './chauff-courses.component.html',
  styleUrls: ['./chauff-courses.component.scss']
})
export class ChauffCoursesComponent implements OnInit {

  courses!:any[]; 
  course:Course=new Course();
  heureDepart!:Date;
  elemRech = false;
  //chauffeur:Chauffeur=new Chauffeur();
  chauffeurs!:any[];
  
  constructor(private courseService:CourseService, private router:Router, private appService:AppService, private chauffeurService:ChauffeurService) { }

  ngOnInit(): void {
    this.findAllCourses();
    this.findAllChauffeurs();
  }
  findAllCourses(){
    this.courseService.findAll().subscribe(data =>{this.courses = data});
  }

  findAllChauffeurs(){
    this.chauffeurService.findAll().subscribe(data =>{this.chauffeurs = data});
  }

  onSubmit(){

  }
 
  showRech() {
    return (this.elemRech = true);
  }
  hideRech() {
    return (this.elemRech = false);
  }

  saveCourse(){
    this.courseService.save(this.course).subscribe(
      () => {
          
         this.findAllCourses();
         
         this.course = new Course();
     
      }
    )}
    deleteCourse(id:number){
      this.courseService.delete(id).subscribe(
        () => {
          this.findAllCourses();
        }
      )
    }
    /*editCourse(course:Course){
      localStorage.removeItem("editReservationId");
      localStorage.setItem("editReservationId",reservation.idReservation.toString());
      this.router.navigate(['/editReservation',reservation.idReservation]);
    }*/
    authenticated(){
      return this.appService.authenticated;
    }
  
    authorities3(){
      if(this.appService.isChauffeur ==true||this.appService.isAdmin==true){
        return false; 
      } else return true;
    }
}
