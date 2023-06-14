import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservations!:any[]; 
  reservation:Reservation=new Reservation();
  constructor(private reservationService:ReservationService) { }

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
    
}
