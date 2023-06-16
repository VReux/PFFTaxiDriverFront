import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-pfflogin',
  templateUrl: './pfflogin.component.html',
  styleUrls: ['./pfflogin.component.scss']
})
export class PFFloginComponent {

  credentials = {username : '',password : ''};
  constructor(private appService:AppService,private httpClient:HttpClient,private router:Router){
 
  }
  login(){
   this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/agence")});
  }

}
