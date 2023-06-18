import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offre } from 'src/app/PFFmodel/offre';
import { OffreService } from 'src/app/PFFservices/offre-service.service';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.scss']
})
export class EditOffreComponent implements OnInit {
 

editForm!:FormGroup;
offre:Offre=new Offre();
offres!: any[];


constructor(private router:Router,private offreService:OffreService,private formBuilder:FormBuilder) { }

ngOnInit(): void {
  this.findAllOffres();


let currentOffre = localStorage.getItem("editOffreId"); 
if(!currentOffre){ 
  alert("Invalid Action...");
  this.router.navigate(["/gestionOffres"]);
  return;
}
this.editForm = this.formBuilder.group({
  idOffre:[],
  codePromo:['',Validators.required],
  descriptionOffre:['',Validators.required],
  remiseOffre:['',Validators.required],
})
this.offreService.findOne(+currentOffre).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});

}
updateOffre(){
var offreString = JSON.stringify(this.editForm.value);
this.offreService.update(offreString).subscribe(
  () =>{
    this.router.navigate(["/gestionOffres"]);
  }
)
}

findAllOffres() {
this.offreService.findAll().subscribe(data => { this.offres = data });
}
}