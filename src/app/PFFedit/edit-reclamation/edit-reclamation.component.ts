import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/PFFmodel/reclamation';
import { ReclamationService } from 'src/app/PFFservices/reclamation-service.service';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.scss']
})
export class EditReclamationComponent implements OnInit {

  editForm!:FormGroup;
  reclamation:Reclamation=new Reclamation();
  constructor(private router:Router,private reclamationService:ReclamationService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    let currentReclamation = localStorage.getItem("editReclamationId");
    if(!currentReclamation){
      alert("Invalid Action...");
      this.router.navigate(["/reclamation"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      idReclamation:[],
      texte:['',Validators.required]
    })
    this.reclamationService.findOne(+currentReclamation).subscribe(data =>{this.editForm.patchValue(data)});
  }
  updateReclamation(){
    var reclamationString = JSON.stringify(this.editForm.value);
    this.reclamationService.update(reclamationString).subscribe(
      () =>{
        this.router.navigate(["/reclamation"]);
      }
    )
  }
 

}
