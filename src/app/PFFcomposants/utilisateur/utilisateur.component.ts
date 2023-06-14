import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../PFFmodel/utilisateur';
import { UtilisateurService } from '../../PFFservices/utilisateur-service.service';
import { Router } from '@angular/router';
import { AppService } from '../../PFFservices/app.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

 
  utilisateurs!:any[]; 
  utilisateur:Utilisateur=new Utilisateur();
 
  constructor(private utilisateurService:UtilisateurService, private router:Router,private appService:AppService){
  }
  ngOnInit(): void {
    this.findAllUtilisateurs();
  }
  findAllUtilisateurs(){
    
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs = data});
  }
  saveUtilisateur(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateurs();
        this.utilisateur = new Utilisateur();
      }
    )
  }
  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(
      () => {
        this.findAllUtilisateurs();
      }
    )
  }

  editUtilisateur(utilisateur:Utilisateur){
    localStorage.removeItem("editUtilisateurId");
    
    localStorage.setItem("editUtilisateurId",utilisateur.idUtilisateur.toString());
    this.router.navigate(['/editUtilisateur',utilisateur.idUtilisateur]); 
 }

 authenticated(){
  return this.appService.authenticated; // authenticated = false
}
// Etape 7 : (security)
authorities(){
  if(this.appService.isAdmin == true){
    return false; // [hidden] = false isAdmin = true
  }else{
    return true; // [hidden] = true isAdmin = false
  }
}

}

