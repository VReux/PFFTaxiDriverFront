import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgenceComponent } from '../../PFFcomposants/agence/agence.component';
import { ChauffeurComponent } from '../../PFFcomposants/chauffeur/chauffeur.component';
import { ClientComponent } from '../../PFFcomposants/client/client.component';
import { CourseComponent } from '../../PFFcomposants/course/course.component';
import { OffreComponent } from '../../PFFcomposants/offre/offre.component';
import { ReclamationComponent } from '../../PFFcomposants/reclamation/reclamation.component';
import { ReservationComponent } from '../../PFFcomposants/reservation/reservation.component';
import { TaxiComponent } from '../../PFFcomposants/taxi/taxi.component';
import { UtilisateurComponent } from '../../PFFcomposants/utilisateur/utilisateur.component';
import { EditAgenceComponent } from '../../PFFedit/edit-agence/edit-agence.component';
import { EditChauffeurComponent } from '../../PFFedit/edit-chauffeur/edit-chauffeur.component';
import { EditClientComponent } from '../../PFFedit/edit-client/edit-client.component';
import { EditCourseComponent } from '../../PFFedit/edit-course/edit-course.component';
import { EditOffreComponent } from '../../PFFedit/edit-offre/edit-offre.component';
import { EditReclamationComponent } from '../../PFFedit/edit-reclamation/edit-reclamation.component';
import { EditReservationComponent } from '../../PFFedit/edit-reservation/edit-reservation.component';
import { EditRoleComponent } from '../../PFFedit/edit-role/edit-role.component';
import { EditTaxiComponent } from '../../PFFedit/edit-taxi/edit-taxi.component';
import { EditUtilisateurComponent } from '../../PFFedit/edit-utilisateur/edit-utilisateur.component';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../../PFFservices/utilisateur-service.service';
import { RoleService } from '../../PFFservices/role-service.service';
import { AppService } from '../../PFFservices/app.service';
import { ToastrModule } from 'ngx-toastr';
import { PFFloginComponent } from '../../PFFcomposants/pfflogin/pfflogin.component';
import { FactureComponent } from '../../PFFcomposants/facture/facture.component';
import { RoleComponent } from '../../PFFcomposants/role/role.component';
import { GestionChauffeurTaxiComponent } from '../../PFFcomposants/gestion-chauffeur-taxi/gestion-chauffeur-taxi.component';
import { ChauffCoursesComponent } from '../../PFFcomposants/chauff-courses/chauff-courses.component';
import { ChauffValCoursesComponent } from 'src/app/PFFcomposants/chauff-val-courses/chauff-val-courses.component';
import { ChauffAvisComponent } from 'src/app/PFFcomposants/chauff-avis/chauff-avis.component';
import { EditValCourseComponent } from '../../PFFedit/edit-val-course/edit-val-course.component';
import { ValCourseComponent } from '../../PFFedit/val-course/val-course.component';
import { GestionOffresComponent } from '../../PFFcomposants/gestion-offres/gestion-offres.component';
import { GestionReservationsComponent } from '../../PFFcomposants/gestion-reservations/gestion-reservations.component';
import { GestionFacturesComponent } from '../../PFFcomposants/gestion-factures/gestion-factures.component';
import { GestionReclamationsComponent } from '../../PFFcomposants/gestion-reclamations/gestion-reclamations.component';
import { GestionVehiculesComponent } from 'src/app/PFFcomposants/gestion-vehicules/gestion-vehicules.component';


@Injectable()
export class XhrInterceptor implements HttpInterceptor{
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const xhr = req.clone({
     headers: req.headers.set('X-Requested-With','XMLHttpRequest')
   });
   return next.handle(xhr);
 }
 }

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    EditRoleComponent,
    EditUtilisateurComponent,
    EditTaxiComponent,
    EditAgenceComponent,
    EditChauffeurComponent,
    EditClientComponent,
    EditCourseComponent,
    EditOffreComponent,
    EditReservationComponent,
    EditReclamationComponent,
    UtilisateurComponent,
    ChauffeurComponent,
    ClientComponent,
    OffreComponent,
    AgenceComponent,
    ReservationComponent,
    ReclamationComponent,
    TaxiComponent,
    CourseComponent,
    RoleComponent,
    FactureComponent,
    PFFloginComponent,
    GestionChauffeurTaxiComponent,
    ChauffCoursesComponent,
    ChauffValCoursesComponent,
    ChauffAvisComponent,
    EditValCourseComponent,
    GestionOffresComponent,
    GestionReservationsComponent,
    GestionFacturesComponent,
    GestionReclamationsComponent,
    GestionVehiculesComponent,
    ValCourseComponent
  ],
  providers: [UtilisateurService,/*step2*/RoleService,AppService,{provide: HTTP_INTERCEPTORS,useClass: XhrInterceptor, multi: true}], // Les services
  
})

export class AdminLayoutModule {}
