import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

   // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
   // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
   // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
   // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
   // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
   // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/course', title: 'Course',  icon:'ni ni-spaceship text-blue', class: '' },
  { path: '/reclamation', title: 'Reclamation',  icon:'ni ni-bell-55 text-orange', class: '' },
  { path: '/utilisateur', title: 'Les utilisateurs',  icon:'ni-single-02', class: '' },
  { path: '/chauffeur', title: 'Les chauffeurs',  icon:'ni-circle-08', class: '' },
  { path: '/client', title: 'Les clients',  icon:'ni-circle-08', class: '' },
  { path: '/taxi', title: 'Taxi',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/agence', title: 'Agence',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/offre', title: 'Offre',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/reservation', title: 'Reservation',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/facture', title: 'Facture',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/chauffCourses', title: 'Mes courses',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/chauffValCourses', title: 'Validation des courses',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
