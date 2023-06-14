import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chauffeur } from '../../PFFmodel/chauffeur';
import { ChauffeurService } from '../../PFFservices/chauffeur-service.service';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.scss']
})
export class ChauffeurComponent implements OnInit {

 
  chauffeurs!:any[]; 
  chauffeur:Chauffeur=new Chauffeur();
  element = false;
  constructor(private chauffeurService:ChauffeurService, private router:Router){
  }
  ngOnInit(): void {
    this.findAllChauffeurs();
  }


  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
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


}
