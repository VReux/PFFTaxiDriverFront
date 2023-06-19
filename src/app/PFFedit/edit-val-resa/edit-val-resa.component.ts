import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { AppService } from 'src/app/PFFservices/app.service';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-edit-val-resa',
  templateUrl: './edit-val-resa.component.html',
  styleUrls: ['./edit-val-resa.component.scss']
})
export class EditValResaComponent implements OnInit {
  editForm!:FormGroup;
  courses!:any[];
  reservations!:any[]; 
  chauffeurs!:any[];
  course:Course = new Course();

  constructor(private reservationService:ReservationService,
    private chauffeurService:ChauffeurService,
    private courseService:CourseService,
    private formBuilder:FormBuilder,
    private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllChauffeurs();
    let currentReservation = localStorage.getItem("valResaId");
    if(!currentReservation){
      alert("Invalid Action...");
      this.router.navigate(["/validationReservation"]);
      return;
    }


    this.editForm = this.formBuilder.group({
      idReservation:[],
	    depart:['',Validators.required],
	    arrivee:['',Validators.required],
	    tempsCourse:['',Validators.required],
      distancekm:['',Validators.required],
      chauffeur:['',Validators.required],
    })

    this.reservationService.findOne(+currentReservation).subscribe(data =>{this.editForm.patchValue(data)});


    this.findAllCourses();
  }

  findAllChauffeurs(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
  }
  findAllReservation(){
    this.reservationService.findAll().subscribe(data =>{this.reservations = data});
  }

  deleteReservation(id:number){
    this.reservationService.delete(id).subscribe(
      () => {
        this.findAllReservation();
      }
    )
  }

  findAllCourses(){
    this.courseService.findAll().subscribe(data => {this.courses = data});
  }

  saveCourse(){
    this.courseService.save(this.course).subscribe(
      () => {
        this.findAllCourses();
        this.course = new Course();
        this.router.navigate(["/validationReservation"]);
      }
    )
  }

  /*EditValidationReservation(){
    
  }*/
  /*authenticated(){
    return this.appService.authenticated;
  }
  
  authorities2(){
    if(this.appService.isRespAgence ==true||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }*/
}
