import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agence } from 'src/app/PFFmodel/agence';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.scss']
})
export class EditAgenceComponent implements OnInit {
  editForm!:FormGroup;
  agence:Agence=new Agence();
  constructor(private router:Router, private agenceService:AgenceService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let currentAgence = localStorage.getItem("editAgenceId");
    if(!currentAgence){ 
      alert("Invalid Action...");
      this.router.navigate(["/agence"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      idAgence:[],
      nomAgence:['',Validators.required]
    })
    this.agenceService.findOne(+currentAgence).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});
  }

  updateAgence(){
    var agenceString = JSON.stringify(this.editForm.value);
    this.agenceService.update(agenceString).subscribe(
      () =>{
        this.router.navigate(["/agence"]);
      }
    )
  }

}
