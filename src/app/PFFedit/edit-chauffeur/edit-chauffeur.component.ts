import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';

@Component({
  selector: 'app-edit-chauffeur',
  templateUrl: './edit-chauffeur.component.html',
  styleUrls: ['./edit-chauffeur.component.scss']
})
export class EditChauffeurComponent implements OnInit {

  editForm!:FormGroup;
  chauffeur:Chauffeur=new Chauffeur();
  
  constructor(private router:Router, 
    private chauffeurService:ChauffeurService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let currentChauffeur = localStorage.getItem("editChauffeurId"); 
  
    if(!currentChauffeur){ 
      alert("Invalid Action...");
      this.router.navigate(["/chauffeur"]);
      return;
    }

    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      numPermis:['',Validators.required],
    })
    this.chauffeurService.findOne(+currentChauffeur).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});
  }
  updateChauffeur(){
    var chauffeurString = JSON.stringify(this.editForm.value);
    this.chauffeurService.update(chauffeurString).subscribe(
      () =>{
        this.router.navigate(["/chauffeur"]);
      }
    )
  }
}
