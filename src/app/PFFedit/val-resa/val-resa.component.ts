import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-val-resa',
  templateUrl: './val-resa.component.html',
  styleUrls: ['./val-resa.component.scss']
})
export class ValResaComponent implements OnInit {
  editForm!:FormGroup;
  courses!:any[];
  reservation:Reservation=new Reservation();
  course:Course = new Course();
  chauffeurs!:any[]; 
  constructor(private router:Router,private chauffeurService:ChauffeurService,private courseService:CourseService,private reservationService:ReservationService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.findAllChauffeurs();
    let currentReservation = localStorage.getItem("valResaId");
    if(!currentReservation){
      alert("Invalid Action...");
      this.router.navigate(["/validationResa"]);
      return;
    }


    this.editForm = this.formBuilder.group({
      idReservation:[],
	    depart:['',Validators.required],
	    arrivee:['',Validators.required],
	    heureDepart:['',Validators.required],
	    tempsCourse:['',Validators.required],
	    prixEstime:['',Validators.required],
    })

    this.reservationService.findOne(+currentReservation).subscribe(data =>{this.editForm.patchValue(data)});


    this.findAllCourses();
  }
  
  findAllCourses(){
    this.courseService.findAll().subscribe(data => {this.courses = data});
  }
  findAllChauffeurs(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
  }

 saveCourse(){
   this.courseService.save(this.course).subscribe(
     () => {
       this.findAllCourses();
       this.course = new Course();
     }
   )
 }
}
