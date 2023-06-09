import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/PFFservices/app.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

   // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
   { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
   { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
   // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
   // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
   //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/course', title: 'Course',  icon:'ni ni-spaceship text-blue', class: '' },
  { path: '/reclamation', title: 'Reclamation',  icon:'ni ni-bell-55 text-orange', class: '' },
  { path: '/gestionChauffeurTaxi', title: 'Gestion chauffeurs',  icon:'fas fa-users', class: '' },
  { path: '/gestionVehicules', title: 'Gestion des véhicules',  icon:'ni-delivery-fast text-yellow', class: '' },
  { path: '/gestionOffres', title: 'gestion Offres',  icon:'ni-money-coins', class: '' },
  { path: '/gestionReclamations', title: 'Gestion reclamations',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/gestionFactures', title: 'gestion Factures',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/gestionReservations', title: 'gestion Reservations',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/statistiquesAgence', title: 'Statistiques',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/utilisateur', title: 'Les utilisateurs',  icon:'ni-single-02', class: '' },
  { path: '/chauffeur', title: 'Les chauffeurs',  icon:'ni-circle-08', class: '' },
  { path: '/client', title: 'Les clients',  icon:'ni-circle-08', class: '' },
  { path: '/taxi', title: 'Taxi',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/agence', title: 'Agence',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/offre', title: 'Offre',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/reservation', title: 'Reservation',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/facture', title: 'Facture',  icon:'ni-circle-08 text-pink', class: '' },



];

//path Admin
export const ROUTES1: RouteInfo[] = [
  { path: '/adminGestionComptes', title: 'Gestion des comptes',  icon:'ni-key-25 text-blue', class: '' },
  //{ path: '/adminStats', title: 'Les statistiques',  icon:'ni-circle-08 text-blue', class: '' },
  //{ path: '/adminRecla', title: 'Les réclamations',  icon:'ni-circle-08 text-blue', class: '' },
];

//path RespAgence
export const ROUTES2: RouteInfo[] = [
  { path: '/gestionChauffeurTaxi', title: 'Gestion chauffeur',  icon:'fas fa-users text-orange', class: '' },
  { path: '/gestionVehicules', title: 'Gestion des véhicules',  icon:'ni-delivery-fast text-orange', class: '' },
  { path: '/gestionOffres', title: 'Gestion des offres',  icon:'ni-money-coins text-orange', class: '' },
  { path: '/validationReservation', title: 'Validation des reservations',  icon:'ni-check-bold text-orange', class: '' },
  { path: '/gestionFactures', title: 'Les factures',  icon:'ni-credit-card text-orange', class: '' },
  { path: '/gestionReclamations', title: 'Les réclamations',  icon:'ni-ambulance text-orange', class: '' },
  //{ path: '/statistiquesAgence', title: 'Statistiques',  icon:'ni-circle-08 text-orange', class: '' },
];

//path Chauffeur
export const ROUTES3: RouteInfo[] = [
  { path: '/chauffCourses', title: 'Planning des courses',  icon:'ni-time-alarm text-yellow', class: '' },
  { path: '/chauffValCourses', title: 'Validation des courses',  icon:'ni-check-bold text-yellow', class: '' },
  { path: '/chauffAvis', title: 'Mes avis',  icon:'ni-like-2 text-yellow', class: '' },
];

//path Client
export const ROUTES4: RouteInfo[] = [
  //{ path: '/reclamation', title: 'Reclamation',  icon:'ni ni-bell-55 text-orange', class: '' },
  { path: '/clientReservation', title: 'Reserver un taxi',  icon:'ni-send text-black', class: '' },
  { path: '/clientAgenceEtChauff', title: 'Les agences + chauffeurs',  icon:'ni-compass-04 text-black', class: '' },
  { path: '/clientOffres', title: 'Les offres',  icon:'ni-tag text-black', class: '' },
  { path: '/clientCourses', title: 'Mon historique de courses',  icon:'ni-books text-black', class: '' },
  { path: '/facture', title: 'Mes factures',  icon:'ni-credit-card text-black', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  admin="authorities1";
  respAgence="authorities2";
  chauffeur="false";
  client="authorities4";
  public menuItems: any[];
  public menuItems1: any[];
  public menuItems2: any[];
  public menuItems3: any[];
  public menuItems4: any[];
  public isCollapsed = true;

  constructor(private router: Router, private appService:AppService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems1 = ROUTES1.filter(menuItem => menuItem);
    this.menuItems2 = ROUTES2.filter(menuItem => menuItem);
    this.menuItems3 = ROUTES3.filter(menuItem => menuItem);
    this.menuItems4 = ROUTES4.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  authenticated(){
    return this.appService.authenticated;
  }

  authorities1(){
    if(this.appService.isAdmin ==true){
      return false; 
    } else return true;
  }

  authorities2(){
    if(this.appService.isRespAgence ==true){
      return false; 
    } else return true;
  }

  authorities3(){
    if(this.appService.isChauffeur ==true){
      return false; 
    } else return true;
  }

  authorities4(){
    if(this.appService.isClient ==true){
      return false; 
    } else return true;
  }

  testAuthorities(){
    if(this.appService.isAdmin ==true){
      return "Admin"; 
    } else if(this.appService.isRespAgence ==true){
      return "RespAgence";
    }else if (this.appService.isChauffeur ==true){
      return "Chauffeur";
    }else if (this.appService.isClient == true){
      return "Client";
    } else return "Inconnu";    
}

}
