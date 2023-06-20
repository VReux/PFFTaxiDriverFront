import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../../PFFmodel/reclamation';
import { ReclamationService } from '../../PFFservices/reclamation-service.service';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/PFFservices/client-service.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  clients!:any[];
  reclamations!:any[];
  reclamation:Reclamation = new Reclamation();
  element = false;

 constructor(private reclamationService:ReclamationService, private router:Router, private clientService:ClientService){ }

  ngOnInit(): void {
  this.findAllReclamations();
  this.findAllClients();
 }

showData() {
  return (this.element = true);
}
hideData() {
  return (this.element = false);
}

 findAllReclamations(){
   this.reclamationService.findAll().subscribe(data => {this.reclamations = data});
 }
 findAllClients(){
  this.clientService.findAll().subscribe(data => {this.clients = data});
}
 saveReclamation(){
   this.reclamationService.save(this.reclamation).subscribe(
     () => {
       this.findAllReclamations();
       this.reclamation = new Reclamation();
     }
   )
 }
 deleteReclamation(idReclamation:number){
   this.reclamationService.delete(idReclamation).subscribe(
     () => {
       this.findAllReclamations();
     }
   )
 }
 editReclamation(reclamation:Reclamation){
   localStorage.removeItem("editReclamationId");
   localStorage.setItem("editReclamationId",reclamation.idReclamation.toString());
   this.router.navigate(['/editReclamation',reclamation.idReclamation]);
 }
 }

