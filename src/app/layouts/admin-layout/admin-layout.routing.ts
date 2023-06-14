import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UtilisateurComponent } from '../../PFFcomposants/utilisateur/utilisateur.component';
import { ReclamationComponent } from '../../PFFcomposants/reclamation/reclamation.component';
import { CourseComponent } from '../../PFFcomposants/course/course.component';
import { EditCourseComponent } from '../../PFFedit/edit-course/edit-course.component';
import { EditReclamationComponent } from '../../PFFedit/edit-reclamation/edit-reclamation.component';
import { EditUtilisateurComponent } from '../../PFFedit/edit-utilisateur/edit-utilisateur.component';
import { EditChauffeurComponent } from '../../PFFedit/edit-chauffeur/edit-chauffeur.component';
import { ChauffeurComponent } from '../../PFFcomposants/chauffeur/chauffeur.component';
import { TaxiComponent } from '../../PFFcomposants/taxi/taxi.component';
import { AgenceComponent } from '../../PFFcomposants/agence/agence.component';
import { EditTaxiComponent } from '../../PFFedit/edit-taxi/edit-taxi.component';
import { EditAgenceComponent } from '../../PFFedit/edit-agence/edit-agence.component';
import { ClientComponent } from '../../PFFcomposants/client/client.component';
import { EditClientComponent } from '../../PFFedit/edit-client/edit-client.component';
import { OffreComponent } from 'src/app/PFFcomposants/offre/offre.component';
import { ReservationComponent } from 'src/app/PFFcomposants/reservation/reservation.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'utilisateur', component: UtilisateurComponent},
    { path: 'editUtilisateur/:id',   component:EditUtilisateurComponent},
    { path: 'chauffeur', component: ChauffeurComponent},
    { path: 'editChauffeur/:id',   component:EditChauffeurComponent},
    { path: 'client', component: ClientComponent},
    { path: 'editClient/:id',   component:EditClientComponent},
    { path: 'taxi', component: TaxiComponent},
    { path: 'editTaxi/:id',   component:EditTaxiComponent},
    { path: 'agence', component: AgenceComponent},
    { path: 'editAgence/:id',   component:EditAgenceComponent},
    { path: 'course',                           component: CourseComponent},
    { path: 'editCourse/:idCourse',             component: EditCourseComponent},
    { path: 'reclamation',                      component: ReclamationComponent},
    { path: 'editReclamation/:idReclamation',   component: EditReclamationComponent},
    { path: 'offre',                           component: OffreComponent},
    { path: 'reservation',                           component: ReservationComponent}

];
