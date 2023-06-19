import { Component, OnInit, ViewChild } from '@angular/core';
import { Reservation } from 'src/app/PFFmodel/reservation';
import { AppService } from 'src/app/PFFservices/app.service';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as pdfMake from '../../../../node_modules/pdfmake/build/pdfmake';
import * as pdfFonts from '../../../../node_modules/pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare const google: any;
@Component({
  selector: 'app-client-reservation',
  templateUrl: './client-reservation.component.html',
  styleUrls: ['./client-reservation.component.scss']
})
export class ClientReservationComponent implements OnInit {

  [x: string]: any;
  reservations!:any[];
  reservation:Reservation = new Reservation();
  element = false;
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  constructor(private appService:AppService, private reservationService:ReservationService, private router:Router, private httpClient: HttpClient) { }
 
  ngOnInit(): void {
    this.findAllReservation();
    this.tempsCourse == this.distancekm * 100;
  }
 
 showData() {
   return (this.element = true);
 }
 hideData() {
   return (this.element = false);
 }

  authenticated(){
    return this.appService.authenticated;
  }

  authorities4(){
    if(this.appService.isClient ==true ||this.appService.isAdmin==true){
      return false; 
    } else return true;
  }

  findAllReservation(){
    this.reservationService.findAll().subscribe(data => {this.reservations = data});
  }
  saveReservation(){
    this.reservationService.save(this.reservation).subscribe(
      () => {
        this.findAllReservation();
        this.reservation = new Reservation();
      }
    )
  }
  deleteReservation(idReservation:number){
    this.reservationService.delete(idReservation).subscribe(
      () => {
        this.findAllReservation();
      }
    )
   }
   editReservation(reservation:Reservation){
    localStorage.removeItem("editReservationId");
    localStorage.setItem("editReservationId",reservation.idReservation.toString());
    this.router.navigate(['/editReservation',reservation.idReservation]);
  }
  /*Calcul distance*/
  calculDistance() {
   var distanceMatrix = new google.maps.DistanceMatrixService();
   distanceMatrix.getDistanceMatrix(
     {
       origins: [this.reservation.depart],
       destinations: [this.reservation.arrivee],
       travelMode: 'DRIVING',
     },
     (response, status) => {
       this.reservation.distancekm = Math.round(response.rows[0].elements[0].distance.value * 0.001 * 100) / 100;
       this.reservation.tempsCourse = Math.round(this.reservation.distancekm / 0.83); // choix de la vitesse moyenne : 50km/h
       this.reservation.prixEstime = Math.round(this.reservation.tempsCourse * 1.66);  // choix du taux horaire : 100€/h
       this.generatePDF(this.reservation); // génère le pdf
     })
 }
 formattedAddress: string;
   googlePlacesOptions = {
     types: [],
     componentRestrictions: { country: ['fr'] }
   }
 
   handleAddressChange(address: any) {
     if (address.name == address.formatted_address.split(',')[0]) {
       this.reservation.depart = address.formatted_address;
     } else {
       this.reservation.depart = address.name + ', ' + address.formatted_address;
     }
 
   }
   handleAddressChange2(address: any) {
     if (address.name == address.formatted_address.split(',')[0]) {
       this.reservation.arrivee = address.formatted_address;
     } else {
       this.reservation.arrivee = address.name + ', ' + address.formatted_address;
     }
   }

   /*PDF*/
   generatePDF(reservation: Reservation) {
    const documentDefinition = {
      header: {
        text: 'DEVIS DE RESERVATION DE COURSE',
        alignment: 'center',
        fontSize: 20,
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
            }
          ],
        },
        {
          text: `Date et heure : ${reservation.heureDepart}`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Adresse de départ : ${reservation.depart}`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Adresse d'arrivée : ${reservation.arrivee}`,
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Nombre de kilomètres: ${reservation.distancekm} km`,
          noWrap: true,
          fontSize: 11,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        {
          text: `Durée du trajet : ${reservation.tempsCourse} min`,
          noWrap: true,
          fontSize: 11,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        {
          text: `Prix de la course HT : ${reservation.prixEstime} €`,
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

}
