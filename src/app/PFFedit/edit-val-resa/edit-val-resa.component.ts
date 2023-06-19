import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { AppService } from 'src/app/PFFservices/app.service';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-edit-val-resa',
  templateUrl: './edit-val-resa.component.html',
  styleUrls: ['./edit-val-resa.component.scss']
})
export class EditValResaComponent implements OnInit {

  reservations!:any[]; 


  constructor(private reservationService:ReservationService,private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllReservation();

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


  validerReservation(reservation:Reservation){
    localStorage.removeItem("valResaId");
    localStorage.setItem("valResaId",reservation.idReservation.toString());
    this.router.navigate(['/valResa',reservation.idReservation]);
  }


  authenticated(){
    return this.appService.authenticated;
  }
  
  authorities2(){
    if(this.appService.isRespAgence ==true||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }
}
