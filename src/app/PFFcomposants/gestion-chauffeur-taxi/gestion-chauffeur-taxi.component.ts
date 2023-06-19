import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';
import { AppService } from 'src/app/PFFservices/app.service';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-gestion-chauffeur-taxi',
  templateUrl: './gestion-chauffeur-taxi.component.html',
  styleUrls: ['./gestion-chauffeur-taxi.component.scss']
})
export class GestionChauffeurTaxiComponent implements OnInit {

  taxis!:any[]; 
  chauffeurs!:any[]; 
  chauffeur:Chauffeur=new Chauffeur();
  element = false;
  constructor(private chauffeurService:ChauffeurService, private router:Router, private taxiService:TaxiService, private appService:AppService){
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
    this.chauffeurService.save(this.chauffeur).subscribe(
      () => {
        this.findAllChauffeurs();
        this.chauffeur = new Chauffeur();
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

 authenticated(){
  return this.appService.authenticated;
}

authorities2(){
  if(this.appService.isRespAgence ==true||this.appService.isAdmin==true){
    return false; 
  } else return true;
}

}
