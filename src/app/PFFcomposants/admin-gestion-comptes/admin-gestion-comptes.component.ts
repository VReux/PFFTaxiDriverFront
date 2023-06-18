import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-admin-gestion-comptes',
  templateUrl: './admin-gestion-comptes.component.html',
  styleUrls: ['./admin-gestion-comptes.component.scss']
})
export class AdminGestionComptesComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  authenticated(){
    return this.appService.authenticated;
  }
  
  authorities1(){
    if(this.appService.isAdmin ==true){
      return false; 
    } else return true;
  }
}
