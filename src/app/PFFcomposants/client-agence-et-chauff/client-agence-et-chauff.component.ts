import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-client-agence-et-chauff',
  templateUrl: './client-agence-et-chauff.component.html',
  styleUrls: ['./client-agence-et-chauff.component.scss']
})
export class ClientAgenceEtChauffComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  authenticated(){
    return this.appService.authenticated;
  }

  authorities4(){
    if(this.appService.isClient ==true||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }
}
