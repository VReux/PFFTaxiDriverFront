import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/PFFmodel/utilisateur';
import { AppService } from 'src/app/PFFservices/app.service';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { ClientService } from 'src/app/PFFservices/client-service.service';
import { UtilisateurService } from 'src/app/PFFservices/utilisateur-service.service';

@Component({
  selector: 'app-pffprofil',
  templateUrl: './pffprofil.component.html',
  styleUrls: ['./pffprofil.component.scss']
})
export class PFFprofilComponent implements OnInit {
  idUser;
  utilisateur!:any;
  constructor(private appService:AppService,private utilisateurService:UtilisateurService,private chauffeurService:ChauffeurService, private clientService:ClientService) { 
    
  }

  ngOnInit(): void {
    this.findIdUser();
    this.findUser();
  }

  findIdUser(){
    if(this.appService.authenticated ==true){
    this.idUser=this.appService.responseAll.idUtilisateur;
  }else this.idUser="Inconnu" 
}

  findUser(){
      this.utilisateurService.findOne(this.idUser).subscribe(data=>this.utilisateur=data);
  }

  authenticated(){
    return this.appService.authenticated;
  }
  authorities1(){
    if(this.appService.isAdmin ==true){
      return false; 
    } else return true;
  }
  authorities2(){
    if(this.appService.isRespAgence ==true){
      return false; 
    } else return true;
  }
  authorities3(){
    if(this.appService.isChauffeur ==true){
      return false; 
    } else return true;
  }

  authorities4(){
    if(this.appService.isClient ==true){
      return false; 
    } else return true;
  }
}

