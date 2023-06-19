import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { Facture } from 'src/app/PFFmodel/facture';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { FactureService } from 'src/app/PFFservices/facture-service.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-val-course',
  templateUrl: './val-course.component.html',
  styleUrls: ['./val-course.component.scss']
})
export class ValCourseComponent implements OnInit {

  editForm!:FormGroup;
  courses!:any[];
  course:Course=new Course();
  factures!:any[];
  facture:Facture = new Facture();

  constructor(private router:Router,private courseService:CourseService,private factureService:FactureService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let currentCourse = localStorage.getItem("valCourseId");
    if(!currentCourse){
      alert("Invalid Action...");
      this.router.navigate(["/course"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      idCourse:[],
	    avisCourse:['',Validators.required],
	    noteCourse:['',Validators.required],
	    noteChauffeur:['',Validators.required],
	    tempsCourse:['',Validators.required],
	    prixReel:['',Validators.required],
	    adresseDepart:['',Validators.required],
    	adresseArrivee:['',Validators.required],
    })
    this.courseService.findOne(+currentCourse).subscribe(data =>{this.editForm.patchValue(data)});
    this.findAllFactures();
  }
  updateValCourse(){
    var courseString = JSON.stringify(this.editForm.value);
    this.courseService.update(courseString).subscribe(
      () =>{
        this.router.navigate(["/chauffValCourses"]);
      }
    )
  }
  findAllFactures(){
    this.factureService.findAll().subscribe(data => {this.factures = data});
  }

  saveFacture() {
    this.facture.tva = 20;
    // this.facture.prixReelHT = this.course.prixReel;
    this.facture.prixReelTTC = this.facture.prixReelHT*(1+this.facture.tva/100);
    this.factureService.save(this.facture).subscribe(
  () => {
    this.findAllFactures();
    this.facture = new Facture();
    this.router.navigate(["/chauffValCourses"]);
  })
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

}
