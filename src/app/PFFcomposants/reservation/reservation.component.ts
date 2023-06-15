import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../PFFmodel/reservation';
import { ReservationService } from '../../PFFservices/reservation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservations!:any[]; 
  reservation:Reservation=new Reservation();
  constructor(private reservationService:ReservationService,private router:Router) { }

  ngOnInit(): void {
  }
  findAllReservation(){
    this.reservationService.findAll().subscribe(data =>{this.reservations = data});
  }

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
    
}
