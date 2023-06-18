import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/PFFmodel/offre';
import { AppService } from 'src/app/PFFservices/app.service';
import { OffreService } from 'src/app/PFFservices/offre-service.service';

@Component({
  selector: 'app-gestion-offres',
  templateUrl: './gestion-offres.component.html',
  styleUrls: ['./gestion-offres.component.scss']
})
export class GestionOffresComponent implements OnInit {

  offres!: any[];
  offre: Offre = new Offre();
  public copy: string;

  constructor(private offreService: OffreService, private router: Router, private appService:AppService) { }
  ngOnInit(): void {
    this.findAllOffres();
  }

  findAllOffres() {
    this.offreService.findAll().subscribe(data => { this.offres = data });
  }

  saveOffre() {
    this.offreService.save(this.offre).subscribe(
      () => {

        this.findAllOffres();

        this.offre = new Offre();

      }
    )
  }
  deleteOffre(id: number) {
    this.offreService.delete(id).subscribe(
      () => {
        this.findAllOffres();
      }
    )
  }
  editOffre(offre: Offre) {
    localStorage.removeItem("editOffreId");
    localStorage.setItem("editOffreId", offre.idOffre.toString());
    this.router.navigate(['/editOffre', offre.idOffre]);
  }

  authenticated(){
    return this.appService.authenticated;
  }
  
  authorities2(){
    if(this.appService.isRespAgence ==true){
      return false; 
    } else return true;
  }
}
