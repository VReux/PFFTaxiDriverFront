import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/PFFmodel/client';
import { ClientService } from 'src/app/PFFservices/client-service.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  editForm!:FormGroup;
  client:Client=new Client();
  
  constructor(private router:Router, 
    private clientService:ClientService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let currentClient = localStorage.getItem("editClientId"); 
  
    if(!currentClient){ 
      alert("Invalid Action...");
      this.router.navigate(["/client"]);
      return;
    }

    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
    })
    this.clientService.findOne(+currentClient).subscribe(data =>{this.editForm.patchValue(data); console.log("data"+data);});
  }
  updateClient(){
    var clientString = JSON.stringify(this.editForm.value);
    this.clientService.update(clientString).subscribe(
      () =>{
        this.router.navigate(["/client"]);
      }
    )
  }

}
