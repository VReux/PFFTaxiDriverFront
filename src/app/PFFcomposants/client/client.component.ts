import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../PFFmodel/client';
import { ClientService } from '../../PFFservices/client-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients!:any[]; 
  client:Client=new Client();
  element = false;
  constructor(private clientService:ClientService, private router:Router){
  }
  ngOnInit(): void {
    this.findAllClients();
  }

  //test fonction div
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }


  findAllClients(){
    this.clientService.findAll().subscribe(data => {this.clients = data});
  }
  saveClient(){
    this.clientService.save(this.client).subscribe(
      () => {
        this.findAllClients();
        this.client = new Client();
      }
    )
  }
  deleteClient(id:number){
    this.clientService.delete(id).subscribe(
      () => {
        this.findAllClients();
      }
    )
  }

  editClient(client:Client){
    localStorage.removeItem("editClientId");
    localStorage.setItem("editClientId",client.idUtilisateur.toString());
    this.router.navigate(['/editClient',client.idUtilisateur]); 
 }

}
