import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.scss']
})
export class RedirectionComponent implements OnInit {
  statut!:string;
  constructor(private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.redirectionAuthorities();
  }

  redirectionAuthorities(){
    if(this.appService.isAdmin ==true){
      this.statut="Admin";
      this.router.navigateByUrl("/adminGestionComptes")
    } else if(this.appService.isRespAgence ==true){
      this.statut="RespAgence";
      this.router.navigateByUrl("/gestionChauffeurTaxi")
    }else if (this.appService.isChauffeur ==true){
      this.statut="Chauffeur";
      this.router.navigateByUrl("/chauffCourses")
    }else if (this.appService.isClient == true){
      this.statut="Client";
      this.router.navigateByUrl("/clientReservation")
    } else this.router.navigateByUrl("/login");  
  }
}

