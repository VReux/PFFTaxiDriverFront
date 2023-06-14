import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/PFFmodel/facture';
import { FactureService } from 'src/app/PFFservices/facture-service.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  providers: []
})
export class FactureComponent implements OnInit {
  factures!: any[]
  facture: Facture = new Facture();
  date!: Date;
  constructor(private factureService: FactureService) {

  }

 ngOnInit(): void {
    this.findAllFactures();
  //this.date = '';
   // this.findByDateFacture();
  }
  findByDateFacture() {
  /*this.factureService.findByDateFacture(this.date).subscribe(data => {
      this.factures = data;
    })*/
  }
  onSubmit() {
    this.findByDateFacture();
  }
  findAllFactures() {
    this.factureService.findAll().subscribe(data => { this.factures = data });
  }
  saveFacture() {
    this.factureService.save(this.facture).subscribe(
      () => {
        this.findByDateFacture();
        this.facture = new Facture();
      }
    )
  }
  deleteFacture(id: number) {
    this.factureService.delete(id).subscribe(
      () => {
      }
    )
  }

}