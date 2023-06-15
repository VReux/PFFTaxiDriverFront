import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/PFFmodel/client';
import { ClientService } from 'src/app/PFFservices/client-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  client:Client=new Client();
  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit() {
  }
  saveClient(){
    this.clientService.save(this.client).subscribe(
      () => {
        this.router.navigate(["/login"]);
      }
    )
  }
}
