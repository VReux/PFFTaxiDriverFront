import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-gestion-factures',
  templateUrl: './gestion-factures.component.html',
  styleUrls: ['./gestion-factures.component.scss']
})
export class GestionFacturesComponent implements OnInit {

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
