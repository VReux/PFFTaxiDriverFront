import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/PFFmodel/client';
import { Role } from 'src/app/PFFmodel/role';
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
    let role =new Role();
    role.idRole=4;
    let roles =[role];
    this.client.roles=roles;
    this.clientService.save(this.client).subscribe(
      () => {
        this.router.navigate(["/login"]);
      }
    )
  }
}
