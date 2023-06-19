import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/PFFmodel/facture';
import { FactureService } from 'src/app/PFFservices/facture-service.service';
import * as pdfMake from '../../../../node_modules/pdfmake/build/pdfmake';
import * as pdfFonts from '../../../../node_modules/pdfmake/build/vfs_fonts';
import { AppService } from 'src/app/PFFservices/app.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  router: any;
  constructor(private factureService: FactureService, private appService:AppService) {

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
        this.findAllFactures();
        this.facture = new Facture();
      }
    )
  }
  deleteFacture(id: number) {
    this.factureService.delete(id).subscribe(
      () => {
        this.findAllFactures();
      }
    )
  }
  editReclamation(facture:Facture){
    localStorage.removeItem("editFactureId");
    localStorage.setItem("editFactureId",facture.idFacture.toString());
    this.router.navigate(['/editFacture',facture.idFacture]);
  }
  generatePDF(facture: Facture) {
    const documentDefinition = {
      header: {
        text: 'FACTURE',
        alignment: 'center',
        fontSize: 30,
      },
      content: [
        {
          columns: [
            {
              text: 'Nom de la société',
              width: '50%',
              fontSize: 16,
              bold: true,
              margin: [0, 20, 0, 20],
            },
            {
              text: `Facture n° FR-${facture.idFacture}`,
              width: '50%',
              alignment: 'right',
              fontSize: 16,
              bold: true,
              margin: [0, 20, 0, 20],
            },
          ],
        },/*
        {
          text: 'Adresse de la société',
          fontSize: 14,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Date : ${facture.dateFacture}`,
          fontSize: 14,
          margin: [0, 0, 0, 20],
        },

        {
          text: 'Intitulé : ',
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: 'Dégnisation', bold: true }, { text: 'Prix total', bold: true }],
              ['Prix HT :', facture.prixHT],
            ],
          },
        },
        {
          absolutePosition: { x: 40, y: 650 },
          text: 'Moyen de paiement',
          noWrap: true,
          fontSize: 11,
          bold: true,
          margin: [0, 20, 0, 10]
        },
        {
          absolutePosition: { x: 40, y: 665 },
          text: 'Condition de paiement :',
          noWrap: true,
          fontSize: 11,
          bold: true,
          margin: [0, 20, 0, 10]
        },
        {
          absolutePosition: { x: 40, y: 680 },
          text: `Point de fidélité gagné: ${facture.pointFideliteGagne}`,
          fontSize: 11,
          bold: true,
          margin: [0, 20, 0, 10]
        },*/

      ],
      footer: {
        columns: [
          {
            text: 'N° Siret',
            alignment: 'center',
            fontSize: 7,

          },
          {
            text: 'N°TVA',
            alignment: 'center',
            fontSize: 7,

          }
        ],
        margin: [0, 20],
      },
    };
    pdfMake.createPdf(documentDefinition).open();
  }
  authenticated(){
    return this.appService.authenticated;
  }

  authorities4(){
    if(this.appService.isClient ==true||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }
}