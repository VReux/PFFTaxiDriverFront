import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.scss']
})
export class AdminStatsComponent implements OnInit {

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
