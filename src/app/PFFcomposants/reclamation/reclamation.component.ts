import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../../PFFmodel/reclamation';
import { ReclamationService } from '../../PFFservices/reclamation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  reclamations!:any[];
  reclamation:Reclamation = new Reclamation();
  element = false;

 constructor(private reclamationService:ReclamationService, private router:Router){ }

  ngOnInit(): void {
  this.findAllReclamations();
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

