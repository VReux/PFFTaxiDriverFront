import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-pfflogout',
  templateUrl: './pfflogout.component.html',
  styleUrls: ['./pfflogout.component.scss']
})
export class PFFlogoutComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  loggingOut(){
    window.location.reload();
  }

  authenticated(){
    return this.appService.authenticated;
  }
}
