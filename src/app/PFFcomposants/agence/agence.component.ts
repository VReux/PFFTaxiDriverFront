import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/PFFmodel/agence';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';
import { AppService } from 'src/app/PFFservices/app.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  agences!:any[];
  agence:Agence = new Agence();

  constructor(private agenceService:AgenceService, private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllAgence();
  }


  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data});
  }
  saveAgence(){
    this.agenceService.save(this.agence).subscribe(
      () => {
        this.findAllAgence();
        this.agence = new Agence();
      }
    )
  }
  deleteAgence(id:number){
    this.agenceService.delete(id).subscribe(
      () => {
        this.findAllAgence();
      }
    )
  }
  editAgence(agence:Agence){
    localStorage.removeItem("editAgenceId");
    localStorage.setItem("editAgenceId",agence.idAgence.toString());
    this.router.navigate(['/editAgence',agence.idAgence]);
  }

  authenticated(){
    return this.appService.authenticated;
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
