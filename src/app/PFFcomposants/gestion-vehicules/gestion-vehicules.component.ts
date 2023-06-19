import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taxi } from 'src/app/PFFmodel/taxi';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';
import { AppService } from 'src/app/PFFservices/app.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.scss']
})
export class GestionVehiculesComponent implements OnInit {

  taxis!:any[];
  tax:Taxi = new Taxi();
  agences!:any[];

  element = false;
  constructor(private taxiService:TaxiService, private agenceService:AgenceService, private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllTaxi();
    this.findAllAgence();
  }


  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }
  
  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data});
  }
  findAllTaxi(){
    this.taxiService.findAll().subscribe(data => {this.taxis = data});
  }
  saveTaxi(){
    this.taxiService.save(this.tax).subscribe(
      () => {
        this.findAllTaxi();
        this.tax = new Taxi();
      }
    )
  }
  deleteTaxi(id:number){
    this.taxiService.delete(id).subscribe(
      () => {
        this.findAllTaxi();
      }
    )
  }
  editTaxi(taxi:Taxi){
    localStorage.removeItem("editTaxiId");
    localStorage.setItem("editTaxiId",taxi.idTaxi.toString());
    this.router.navigate(['/editTaxi',taxi.idTaxi]);
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
