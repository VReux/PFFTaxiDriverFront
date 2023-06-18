import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { AppService } from 'src/app/PFFservices/app.service';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';

@Component({
  selector: 'app-chauff-courses',
  templateUrl: './chauff-courses.component.html',
  styleUrls: ['./chauff-courses.component.scss']
})
export class ChauffCoursesComponent implements OnInit {

  reservations!:any[]; 
  reservation:Reservation=new Reservation();
  heureDepart!:Date;
  elemRech = false;

  constructor(private reservationService:ReservationService,private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllReservation();
    //this.heureDepart=any;
    this.findByHeureDepart();
  }
  findAllReservation(){
    this.reservationService.findAll().subscribe(data =>{this.reservations = data});
  }

  findByHeureDepart(){
    this.reservationService.findByHeureDepart(this.heureDepart).subscribe(data=>{this.reservations = data});
  }

  onSubmit(){
    this.findByHeureDepart();
  }
 
  showRech() {
    return (this.elemRech = true);
  }
  hideRech() {
    return (this.elemRech = false);
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
    authenticated(){
      return this.appService.authenticated;
    }
  
    authorities3(){
      if(this.appService.isChauffeur ==true){
        return false; 
      } else return true;
    }
}
