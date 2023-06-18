import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-client-offres',
  templateUrl: './client-offres.component.html',
  styleUrls: ['./client-offres.component.scss']
})
export class ClientOffresComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  authenticated(){
    return this.appService.authenticated;
  }

  authorities4(){
    if(this.appService.isClient ==true){
      return false; 
    } else return true;
  }
}
