import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-gestion-reclamations',
  templateUrl: './gestion-reclamations.component.html',
  styleUrls: ['./gestion-reclamations.component.scss']
})
export class GestionReclamationsComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  authenticated(){
    return this.appService.authenticated;
  }
  
  authorities2(){
    if(this.appService.isRespAgence ==true){
      return false; 
    } else return true;
  }

}
