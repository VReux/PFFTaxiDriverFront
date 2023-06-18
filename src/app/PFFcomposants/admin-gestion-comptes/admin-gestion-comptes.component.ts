import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';
import { Client } from 'src/app/PFFmodel/client';
import { Utilisateur } from 'src/app/PFFmodel/utilisateur';
import { AppService } from 'src/app/PFFservices/app.service';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { ClientService } from 'src/app/PFFservices/client-service.service';
import { UtilisateurService } from 'src/app/PFFservices/utilisateur-service.service';

@Component({
  selector: 'app-admin-gestion-comptes',
  templateUrl: './admin-gestion-comptes.component.html',
  styleUrls: ['./admin-gestion-comptes.component.scss']
})
export class AdminGestionComptesComponent implements OnInit {

  utilisateurs!:any[]; 
  utilisateur:Utilisateur=new Utilisateur();
  element = false;
  elemChauff = false;
  elemResp = false;
  elemCli = false;
  elemRech = false;
 // Etape 6 : (recherche)
 nom!:string;

  
  clients!:any[]; 
  client:Client=new Client();

  chauffeurs!:any[]; 
  chauffeur:Chauffeur=new Chauffeur();


  constructor(private utilisateurService:UtilisateurService, private router:Router,private appService:AppService,private clientService:ClientService,private chauffeurService:ChauffeurService) { }

  ngOnInit(): void {
    this.findAllUtilisateurs();

        // Etape 8 : (recherche)
        this.nom = '';
        this.findByNom();
  }


    // Etape 7 : (recherche)
    findByNom(){
      this.utilisateurService.findByNom(this.nom).subscribe(data =>{
        this.utilisateurs = data;
      })
    }
  // Etape 9 : (recherche)
  onSubmit(){
    this.findByNom();
  }


  //affichage de la recherche
  showRech() {
    return (this.elemRech = true);
  }
  hideRech() {
    return (this.elemRech = false);
  }

  //affichage des formulaires
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }


//affichage formulaire client
showClient() {
  return (this.elemCli = true);
}
hideClient() {
  return (this.elemCli = false);
}


//affichage formulaire chauffeur
showChauff() {
  return (this.elemChauff = true);
}
hideChauff() {
  return (this.elemChauff = false);
}

//affichage formulaire responsable
showResp() {
  return (this.elemResp = true);
}
hideResp() {
  return (this.elemResp = false);
}

//test client service

saveClient(){
  this.clientService.save(this.client).subscribe(
    () => {
      this.findAllUtilisateurs();
      this.client = new Client();
    }
  )
}


//test chauffeur service
saveChauffeur(){
  this.chauffeurService.save(this.chauffeur).subscribe(
    () => {
      this.findAllUtilisateurs();
      this.chauffeur = new Chauffeur();
    }
  )
}

//affichage des formulaires


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





  testMethode(utilisateur:any){
   if(utilisateur.email!=null){
    this.router.navigate(['/editClient',utilisateur.idUtilisateur]);} 
  else if(utilisateur.numPermis!=null){
    this.router.navigate(['/editChauffeur',utilisateur.idUtilisateur])}
    if(utilisateur.email==null){
      console.log("je suis un responsable!!!")
    }
 }

  authenticated(){
    return this.appService.authenticated;
  }
  
  authorities1(){
    if(this.appService.isAdmin ==true){
      return false; 
    } else return true;
  }
}
