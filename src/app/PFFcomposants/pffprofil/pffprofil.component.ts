import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/PFFmodel/utilisateur';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-pffprofil',
  templateUrl: './pffprofil.component.html',
  styleUrls: ['./pffprofil.component.scss']
})
export class PFFprofilComponent implements OnInit {
  idUser;
  constructor(private appService:AppService) { 
    this.findIdUser();
  }

  ngOnInit(): void {
  }

  findIdUser(){
    if(this.appService.authenticated ==true){
    this.idUser=this.appService.responseAll.idUtilisateur;
  }else this.idUser="Inconnu"
}


}
