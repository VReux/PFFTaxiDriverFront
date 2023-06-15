import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-chauff-courses',
  templateUrl: './chauff-courses.component.html',
  styleUrls: ['./chauff-courses.component.scss']
})
export class ChauffCoursesComponent implements OnInit {

  reservations!:any[]; 
  reservation:Reservation=new Reservation();
  constructor(private reservationService:ReservationService,private router:Router) { }

  ngOnInit(): void {
  }
  findAllReservations(){
    this.reservationService.findAll().subscribe(data =>{this.reservations = data});
  }

  saveReservation(){
    this.reservationService.save(this.reservation).subscribe(
      () => {
          
         this.findAllReservations();
         
         this.reservation = new Reservation();
     
      }
    )}
    deleteReservation(id:number){
      this.reservationService.delete(id).subscribe(
        () => {
          this.findAllReservations();
        }
      )
    }
}
