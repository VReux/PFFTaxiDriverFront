import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss']
})
export class EditReservationComponent implements OnInit {
  editForm!:FormGroup;
  reservation:Reservation=new Reservation();
  constructor(private router:Router, 
    private reservationService:ReservationService,
    private formBuilder:FormBuilder){ }

  ngOnInit(): void {
    let currentReservation = localStorage.getItem("editReservationId"); 
    if(!currentReservation){ 
      alert("Invalid Action...");
      this.router.navigate(["/reservation"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      idReservation:[],
      heureDepart:['',Validators.required],
      tauxHoraire:['',Validators.required],
      validation:['',Validators.required],
      adresseDepart:['',Validators.required],
      adresseArrivee:['',Validators.required],
      
    })
    this.reservationService.findOne(+currentReservation).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});
  }
  updateReservation(){
    var reservationString = JSON.stringify(this.editForm.value);
    this.reservationService.update(reservationString).subscribe(
      () =>{
        this.router.navigate(["/reservation"]);
      }
    )
  }}