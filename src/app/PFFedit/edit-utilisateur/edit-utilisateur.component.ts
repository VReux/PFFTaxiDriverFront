import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../../PFFmodel/utilisateur';
import { UtilisateurService } from '../../PFFservices/utilisateur-service.service';

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.scss']
})
export class EditUtilisateurComponent implements OnInit {
  editForm!:FormGroup;
  utilisateur:Utilisateur=new Utilisateur();
  
  constructor(private router:Router, 
    private utilisateurService:UtilisateurService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let currentUser = localStorage.getItem("editUserId"); 
  
    if(!currentUser){ 
      alert("Invalid Action...");
      this.router.navigate(["/utilisateur"]);
      return;
    }

    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      nomUtilisateur:['',Validators.required],
      prenomUtilisateur:['',Validators.required],
      loginUtilisateur:['',Validators.required],
      passwordUtilisateur:['',Validators.required],
    })
    this.utilisateurService.findOne(+currentUser).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});
  }
  updateUtilisateur(){
    var userString = JSON.stringify(this.editForm.value);
    this.utilisateurService.update(userString).subscribe(
      () =>{
        this.router.navigate(["/utilisateur"]);
      }
    )
  }

}
