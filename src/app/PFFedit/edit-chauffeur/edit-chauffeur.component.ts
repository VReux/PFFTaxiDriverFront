import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-edit-chauffeur',
  templateUrl: './edit-chauffeur.component.html',
  styleUrls: ['./edit-chauffeur.component.scss']
})
export class EditChauffeurComponent implements OnInit {
  taxis!: any[];
  editForm!: FormGroup;
  chauffeur: Chauffeur = new Chauffeur();
  chauffeurs!: any[];

  constructor(private router: Router,
    private chauffeurService: ChauffeurService,
    private taxiService: TaxiService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.findAllTaxi();
    this.findAllChauffeurs();
    let currentChauffeur = localStorage.getItem("editChauffeurId");

    if (!currentChauffeur) {
      alert("Invalid Action...");
      this.router.navigate(["/gestionChauffeurTaxi"]);
      return;
    }

    this.editForm = this.formBuilder.group({
      idUtilisateur: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      numPermis: ['', Validators.required],
      taxi: ['', Validators.required],
    })
    this.chauffeurService.findOne(+currentChauffeur).subscribe(data => { this.editForm.patchValue(data); console.log("data" + data); });
  }
  updateChauffeur() {
    var chauffeurString = JSON.stringify(this.editForm.value);
    this.chauffeurService.update(chauffeurString).subscribe(
      () => {
        this.router.navigate(["/gestionChauffeurTaxi"]);
      }
    )
  }

  findAllTaxi() {
    this.taxiService.findAll().subscribe(data => { this.taxis = data });
  }

  findAllChauffeurs() {
    this.chauffeurService.findAll().subscribe(data => { this.chauffeurs = data });
  }
}
