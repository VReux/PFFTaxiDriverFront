import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taxi } from 'src/app/PFFmodel/taxi';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.scss']
})
export class TaxiComponent implements OnInit {

  taxis!:any[];
  taxi:Taxi = new Taxi();

  constructor(private taxiService:TaxiService, private router:Router) { }

  ngOnInit(): void {
    this.findAllTaxi();
  }

  findAllTaxi(){
    this.taxiService.findAll().subscribe(data => {this.taxis = data});
  }
  saveTaxi(){
    this.taxiService.save(this.taxi).subscribe(
      () => {
        this.findAllTaxi();
        this.taxi = new Taxi();
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
