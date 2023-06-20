import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { Facture } from 'src/app/PFFmodel/facture';
import { AppService } from 'src/app/PFFservices/app.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { FactureService } from 'src/app/PFFservices/facture-service.service';
import * as pdfMake from '../../../../node_modules/pdfmake/build/pdfmake';
import * as pdfFonts from '../../../../node_modules/pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-gestion-factures',
  templateUrl: './gestion-factures.component.html',
  styleUrls: ['./gestion-factures.component.scss']
})
export class GestionFacturesComponent implements OnInit {

  factures!: any[]
  facture: Facture = new Facture();
  date!: Date;
  courses!: any[];
  course: Course = new Course();

  constructor(private factureService: FactureService, private courseService: CourseService, private router: Router, private httpClient: HttpClient, private appService: AppService) { }

  
  ngOnInit(): void {
    this.findAllFactures();
    this.findAllCourses();
  }

  onSubmit() {

  }
  findAllFactures() {
    this.factureService.findAll().subscribe(data => { this.factures = data });
  }
  findAllCourses() {
    this.courseService.findAll().subscribe(data => { this.courses = data });
  }
  saveFacture() {
    this.factureService.save(this.facture).subscribe(
      () => {
        this.findAllFactures();
        this.facture = new Facture();
        this.router.navigate(["/chauffValCourses"]);
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
  /*editReclamation(facture: Facture) {
    localStorage.removeItem("editFactureId");
    localStorage.setItem("editFactureId", facture.idFacture.toString());
    this.router.navigate(['/editFacture', facture.idFacture]);
  }*/
  
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
              text: 'TaxiDriver',
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
        }, {
          text: `N° de la course : ${this.course.idCourse}`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Adresse de départ : ${this.course.depart}`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Adresse d'arrivée : ${this.course.arrivee}`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Prix HT : ${facture.prixReelHT} €`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: `Prix TTC : ${facture.prixReelTTC} €`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: `TVA: ${facture.tva}`,
          noWrap: true,
          fontSize: 11,
          bold: true,
          margin: [0, 0, 0, 10]
        },

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
  
  authorities2(){
    if(this.appService.isRespAgence ==true||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }

}
