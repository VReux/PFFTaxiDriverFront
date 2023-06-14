import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
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
import { RoleComponent } from '../../PFFcomposants/role/role.component';
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
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
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
    RoleComponent,
    UtilisateurComponent,
    ChauffeurComponent,
    ClientComponent,
    OffreComponent,
    AgenceComponent,
    ReservationComponent,
    ReclamationComponent,
    TaxiComponent,
    CourseComponent
  ]
})

export class AdminLayoutModule {}
