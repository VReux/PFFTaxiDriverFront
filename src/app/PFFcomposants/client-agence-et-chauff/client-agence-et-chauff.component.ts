import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/PFFmodel/agence';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';
import { AppService } from 'src/app/PFFservices/app.service';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { Chauffeur } from 'src/app/PFFmodel/chauffeur';

declare const google: any;

@Component({
  selector: 'app-client-agence-et-chauff',
  templateUrl: './client-agence-et-chauff.component.html',
  styleUrls: ['./client-agence-et-chauff.component.scss']
})
export class ClientAgenceEtChauffComponent implements OnInit {

  agences!:any[]; 
  agence:Agence=new Agence();
  chauffeurs!:any[]; 
  chauffeur:Chauffeur=new Chauffeur();

  constructor(private appService:AppService, private router:Router, private agenceService:AgenceService, private chauffeurService:ChauffeurService) { }

  ngOnInit(): void {
    this.findAllAgences();
    this.findAllChauffeurs();

    this.agenceService.findAll().subscribe(data => {
      this.agences = data;
      this.displayMarkers();
    });
  }

  displayMarkers() {
    var mapElement = document.getElementById('map-canvas');
    var lat = parseFloat(mapElement.getAttribute('data-lat'));
    var lng = parseFloat(mapElement.getAttribute('data-lng'));
  
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 10,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        // Styles de la carte
      ]
    };
  
    var map = new google.maps.Map(mapElement, mapOptions);
  
    // Boucle sur les adresses
    this.agences.forEach((agence: Agence) => {
      var address = agence.adresseAgence;
      var nom = agence.nomAgence;
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var location = results[0].geometry.location;
          var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: nom
          });
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }

  findAllAgences(){  
    this.agenceService.findAll().subscribe(data => {this.agences = data});
  }

  findAllChauffeurs(){  
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
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


