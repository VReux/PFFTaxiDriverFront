import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';
import { ReclamationService } from 'src/app/PFFservices/reclamation-service.service';

@Component({
  selector: 'app-gestion-reclamations',
  templateUrl: './gestion-reclamations.component.html',
  styleUrls: ['./gestion-reclamations.component.scss']
})
export class GestionReclamationsComponent implements OnInit {

  constructor(private reclamationService:ReclamationService, private appService:AppService) { }

  reclamations!:any[];

  ngOnInit(): void {
    this.findAllReclamations();
   }
  

   findAllReclamations(){
     this.reclamationService.findAll().subscribe(data => {this.reclamations = data});
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
