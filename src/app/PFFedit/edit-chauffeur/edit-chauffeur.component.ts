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
    let currentUser = localStorage.getItem("editUserId"); 
  
    if(!currentUser){ 
      alert("Invalid Action...");
      this.router.navigate(["/chauffeur"]);
      return;
    }

    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      username:['',Validators.required],
      numPermis:['',Validators.required],
    })
    this.chauffeurService.findOne(+currentUser).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});
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
