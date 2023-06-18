import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-gestion-reservations',
  templateUrl: './gestion-reservations.component.html',
  styleUrls: ['./gestion-reservations.component.scss']
})
export class GestionReservationsComponent implements OnInit {

  reservations!:any[]; 
  reservation:Reservation=new Reservation();
  //heureDepart!:Date;
  constructor(private reservationService:ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.findAllReservation();
    //this.heureDepart=???;
    //this.findByHeureDepart();
  }
  findAllReservation(){
    this.reservationService.findAll().subscribe(data =>{this.reservations = data});
  }

  /*findByHeureDepart(){
    this.reservationService.findByHeureDepart(this.heureDepart).subscribe(data=>{this.reservations = data});
  }*/

  saveReservation(){
    this.reservationService.save(this.reservation).subscribe(
      () => {
          
         this.findAllReservation();
         
         this.reservation = new Reservation();
     
      }
    )}
    deleteReservation(id:number){
      this.reservationService.delete(id).subscribe(
        () => {
          this.findAllReservation();
        }
      )
    }
    editReservation(reservation:Reservation){
      localStorage.removeItem("editReservationId");
      localStorage.setItem("editReservationId",reservation.idReservation.toString());
      this.router.navigate(['/editReservation',reservation.idReservation]);
    }

    validerResa(reservation:Reservation){
      localStorage.removeItem("validerReservationId");
      localStorage.setItem("validerReservationId",reservation.idReservation.toString());
      this.router.navigate(['/validationReservation',reservation.idReservation]);
    }
    
}
