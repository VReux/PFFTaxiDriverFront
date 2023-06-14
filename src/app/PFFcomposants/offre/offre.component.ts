import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/PFFmodel/offre';
import { OffreService } from 'src/app/PFFservices/offre-service.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  offres!:any[];
  offre:Offre=new Offre();
  router: any;

  constructor(private offreService:OffreService) { }
  ngOnInit(): void {
    this.findAllOffres();
  }

  findAllOffres(){
    this.offreService.findAll().subscribe(data =>{this.offres = data});
  }

  saveOffre(){
    this.offreService.save(this.offre).subscribe(
      () => {
          
         this.findAllOffres();
         
         this.offre = new Offre();
     
      }
    )}
    deleteOffre(id:number){
      this.offreService.delete(id).subscribe(
        () => {
          this.findAllOffres();
        }
      )
    }
    editAgence(offre:Offre){
      localStorage.removeItem("editOffreId");
      localStorage.setItem("editOffreId",offre.idOffre.toString());
      this.router.navigate(['/editOffre',offre.idOffre]);
    }

}
