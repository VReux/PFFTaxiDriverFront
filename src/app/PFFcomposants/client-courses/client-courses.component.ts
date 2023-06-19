import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-client-courses',
  templateUrl: './client-courses.component.html',
  styleUrls: ['./client-courses.component.scss']
})
export class ClientCoursesComponent implements OnInit {

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
