import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';
import { Taxi } from 'src/app/PFFmodel/taxi';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-gestion-chauffeur-taxi',
  templateUrl: './gestion-chauffeur-taxi.component.html',
  styleUrls: ['./gestion-chauffeur-taxi.component.scss']
})
export class GestionChauffeurTaxiComponent implements OnInit {

  taxis!:any[];
  taxi:Taxi = new Taxi();
  chauffeurs!:any[]; 
  chauffeur:Chauffeur=new Chauffeur();
  element = false;

  constructor(private chauffeurService:ChauffeurService, private router:Router, private taxiService:TaxiService) { }

  ngOnInit(): void {
    this.findAllChauffeurs();
    this.findAllTaxi();
  }

  findAllChauffeurs(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
  }

  findAllTaxi(){
    this.taxiService.findAll().subscribe(data => {this.taxis = data});
  }

  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }
}
