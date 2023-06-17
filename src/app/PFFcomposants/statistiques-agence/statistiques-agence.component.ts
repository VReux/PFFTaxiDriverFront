import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/PFFmodel/agence';
import { AgenceService } from 'src/app/PFFservices/agence-service.service';
import { ChauffeurService } from 'src/app/PFFservices/chauffeur-service.service';
import { ClientService } from 'src/app/PFFservices/client-service.service';
import { CourseService } from 'src/app/PFFservices/course-service.service';
import { ReclamationService } from 'src/app/PFFservices/reclamation-service.service';
import { ReservationService } from 'src/app/PFFservices/reservation-service.service';
import { TaxiService } from 'src/app/PFFservices/taxi-service.service';

@Component({
  selector: 'app-statistiques-agence',
  templateUrl: './statistiques-agence.component.html',
  styleUrls: ['./statistiques-agence.component.scss']
})
export class StatistiquesAgenceComponent implements OnInit {

  taxis!:any[];
  nbTaxis=0;

  agences!: any[];
  nbAgences=0;

  chauffeurs!:any[];
  nbChauffeurs=0;

  reclamations!:any[]
  nbReclamations=0;

  reservations!:any[]
  nbReservations=0;

  clients!:any[]
  nbClients=0;

  courses!:any[]
  nbCourses=0;


  constructor(private taxiService:TaxiService, 
    private agenceService:AgenceService, 
    private chauffeurService:ChauffeurService, 
    private reclamationService:ReclamationService, 
    private reservationService:ReservationService, 
    private clientService:ClientService, 
    private courseService:CourseService) { }



  ngOnInit(): void {
    this.findAllTaxi();
    this.findAllAgence();
    this.findAllChauffeur();
    this.findAllReclamation();
    this.findAllReservation();
    this.findAllClient();
    this.findAllCourse();


  }

  findAllTaxi(){
    this.taxiService.findAll().subscribe(data => {this.taxis = data, 
      this.nbTaxis = data.length;});
  }

  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data,
      this.nbAgences = data.length;});
  }
  findAllChauffeur(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data
      this.nbChauffeurs = data.length;});
  }
  findAllReclamation(){
    this.reclamationService.findAll().subscribe(data => {this.reclamations = data
      this.nbReclamations = data.length;});
  }
  findAllReservation(){
    this.reservationService.findAll().subscribe(data => {this.reservations = data
      this.nbReservations = data.length;});
  }

  findAllClient(){
    this.clientService.findAll().subscribe(data => {this.clients = data
      this.nbClients = data.length;});
  }
  findAllCourse(){
    this.courseService.findAll().subscribe(data => {this.courses = data
      this.nbCourses = data.length;});
  }


}
