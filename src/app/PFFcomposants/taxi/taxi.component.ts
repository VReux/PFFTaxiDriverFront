import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taxi } from 'src/app/PFFmodel/taxi';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.scss']
})
export class TaxiComponent implements OnInit {

  taxis!:any[];
  tax:Taxi = new Taxi();
  agences!:any[];
  constructor(private taxiService:TaxiService, private agenceService:AgenceService, private router:Router) { }

  ngOnInit(): void {
    this.findAllTaxi();
    this.findAllAgence();
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
}
