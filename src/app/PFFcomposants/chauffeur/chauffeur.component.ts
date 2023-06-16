import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chauffeur } from '../../PFFmodel/chauffeur';
import { ChauffeurService } from '../../PFFservices/chauffeur-service.service';
import { TaxiService } from '../../PFFservices/taxi-service.service';


@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.scss']
})
export class ChauffeurComponent implements OnInit {

  taxis!:any[]; 
  chauffeurs!:any[]; 
  chauff:Chauffeur=new Chauffeur();
  element = false;
  constructor(private chauffeurService:ChauffeurService, private router:Router, private taxiService:TaxiService){
  }
  ngOnInit(): void {
    this.findAllChauffeurs();
    this.findAllTaxis();
  }


  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }


  findAllTaxis(){
    this.taxiService.findAll().subscribe(data => {this.taxis = data});
  }

  findAllChauffeurs(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
  }
  saveChauffeur(){
    this.chauffeurService.save(this.chauff).subscribe(
      () => {
        this.findAllChauffeurs();
        this.chauff = new Chauffeur();
      }
    )
  }
  deleteChauffeur(id:number){
    this.chauffeurService.delete(id).subscribe(
      () => {
        this.findAllChauffeurs();
      }
    )
  }

  editChauffeur(chauffeur:Chauffeur){
    localStorage.removeItem("editChauffeurId");
    localStorage.setItem("editChauffeurId",chauffeur.idUtilisateur.toString());
    this.router.navigate(['/editChauffeur',chauffeur.idUtilisateur]); 
 }


}
