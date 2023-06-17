import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Taxi } from 'src/app/PFFmodel/taxi';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-edit-taxi',
  templateUrl: './edit-taxi.component.html',
  styleUrls: ['./edit-taxi.component.scss']
})
export class EditTaxiComponent implements OnInit {
  editForm!: FormGroup;
  taxi: Taxi = new Taxi();
  agences: any[]
  taxis!: any[];

  constructor(private router: Router, 
    private taxiService: TaxiService, 
    private agenceService:AgenceService,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.findAllAgence();
    this.findAllTaxi();
    let currentTaxi = localStorage.getItem("editTaxiId");
    if (!currentTaxi) {
      alert("Invalid Action...");
      this.router.navigate(["/gestionVehicules"]);
      return;
    }

    this.editForm = this.formBuilder.group({
      idTaxi: [],
      immatriculation: ['', Validators.required],
      marque: ['', Validators.required],
      modele: ['', Validators.required],
      agence: ['', Validators.required],
    })

    this.taxiService.findOne(+currentTaxi).subscribe(data => { this.editForm.patchValue(data); console.log("data" + data); });
  }


  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data});
  }

  findAllTaxi() {
    this.taxiService.findAll().subscribe(data => { this.taxis = data });
  }

  updateTaxi() {
    var taxiString = JSON.stringify(this.editForm.value);
    this.taxiService.update(taxiString).subscribe(
      () => {
        this.router.navigate(["/gestionVehicules"]);
      }
    )
  }


  returnListeTaxi() {
    this.router.navigate(["/gestionVehicules"]);
  }




}
