import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-admin-recla',
  templateUrl: './admin-recla.component.html',
  styleUrls: ['./admin-recla.component.scss']
})
export class AdminReclaComponent implements OnInit {

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
