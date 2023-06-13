import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/PFFmodel/agence';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  agences!:any[];
  agence:Agence = new Agence();

  constructor(private agenceService:AgenceService, private router:Router) { }

  ngOnInit(): void {
    this.findAllAgence();
  }


  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data});
  }
  saveAgence(){
    this.agenceService.save(this.agence).subscribe(
      () => {
        this.findAllAgence();
        this.agence = new Agence();
      }
    )
  }
  deleteAgence(id:number){
    this.agenceService.delete(id).subscribe(
      () => {
        this.findAllAgence();
      }
    )
  }
  editAgence(agence:Agence){
    localStorage.removeItem("editAgenceId");
    localStorage.setItem("editAgenceId",agence.idAgence.toString());
    this.router.navigate(['/editAgence',agence.idAgence]);
  }

}
