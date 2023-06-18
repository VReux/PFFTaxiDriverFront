import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UtilisateurComponent } from '../../PFFcomposants/utilisateur/utilisateur.component';
import { FactureComponent } from '../../PFFcomposants/facture/facture.component';
import { RoleComponent } from '../../PFFcomposants/role/role.component';
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
import { PFFloginComponent } from '../../PFFcomposants/pfflogin/pfflogin.component';
import { OffreComponent } from '../../PFFcomposants/offre/offre.component';
import { ReservationComponent } from '../../PFFcomposants/reservation/reservation.component';
import { EditReservationComponent } from '../../PFFedit/edit-reservation/edit-reservation.component';
import { EditOffreComponent } from '../../PFFedit/edit-offre/edit-offre.component';
import { GestionChauffeurTaxiComponent } from 'src/app/PFFcomposants/gestion-chauffeur-taxi/gestion-chauffeur-taxi.component';
import { ChauffCoursesComponent } from '../../PFFcomposants/chauff-courses/chauff-courses.component';
import { ChauffValCoursesComponent } from '../../PFFcomposants/chauff-val-courses/chauff-val-courses.component';
import { ChauffAvisComponent } from '../../PFFcomposants/chauff-avis/chauff-avis.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { EditValCourseComponent } from '../../PFFedit/edit-val-course/edit-val-course.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { GestionReclamationsComponent } from 'src/app/PFFcomposants/gestion-reclamations/gestion-reclamations.component';
import { GestionReservationsComponent } from 'src/app/PFFcomposants/gestion-reservations/gestion-reservations.component';
import { GestionFacturesComponent } from 'src/app/PFFcomposants/gestion-factures/gestion-factures.component';
import { GestionOffresComponent } from 'src/app/PFFcomposants/gestion-offres/gestion-offres.component';
import { GestionVehiculesComponent } from 'src/app/PFFcomposants/gestion-vehicules/gestion-vehicules.component';
import { ValCourseComponent } from '../../PFFedit/val-course/val-course.component';
import { ValidationResaComponent } from 'src/app/PFFcomposants/validation-resa/validation-resa.component';
import { StatistiquesAgenceComponent } from 'src/app/PFFcomposants/statistiques-agence/statistiques-agence.component';
import { ClientReservationComponent } from 'src/app/PFFcomposants/client-reservation/client-reservation.component';
import { ClientAgenceEtChauffComponent } from 'src/app/PFFcomposants/client-agence-et-chauff/client-agence-et-chauff.component';
import { ClientOffresComponent } from 'src/app/PFFcomposants/client-offres/client-offres.component';
import { ClientCoursesComponent } from 'src/app/PFFcomposants/client-courses/client-courses.component';
import { AdminGestionComptesComponent } from 'src/app/PFFcomposants/admin-gestion-comptes/admin-gestion-comptes.component';
import { AdminStatsComponent } from 'src/app/PFFcomposants/admin-stats/admin-stats.component';
import { AdminReclaComponent } from 'src/app/PFFcomposants/admin-recla/admin-recla.component';
import { RedirectionComponent } from 'src/app/PFFcomposants/redirection/redirection.component';
import { PFFprofilComponent } from 'src/app/PFFcomposants/pffprofil/pffprofil.component';
import { PFFlogoutComponent } from 'src/app/PFFcomposants/pfflogout/pfflogout.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'facture',        component: FactureComponent},
    { path: 'role',           component: RoleComponent},
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
    { path: 'login',   component: PFFloginComponent},
    //{ path: 'login',          component: LoginComponent },
    { path: 'register',          component: RegisterComponent },
    { path: 'offre',                           component: OffreComponent},
    { path: 'editOffre/:idOffre',   component: EditOffreComponent},
    { path: 'reservation',                           component: ReservationComponent},
    { path: 'editReservation/:idReservation',   component: EditReservationComponent},
    { path: 'facture',                           component: FactureComponent},
    { path: 'editValCourse/:idCourse',             component: EditValCourseComponent},
    { path: 'gestionOffres', component:GestionOffresComponent},
    { path: 'gestionReservations', component:GestionReservationsComponent},
    { path: 'gestionFactures', component:GestionFacturesComponent},
    { path: 'gestionReclamations', component:GestionReclamationsComponent},
    { path: 'gestionVehicules', component:GestionVehiculesComponent},
    { path: 'valCourse/:idCourse',     component: ValCourseComponent},
    { path: 'statistiquesAgence',   component: StatistiquesAgenceComponent},
    { path: 'redirection',   component: RedirectionComponent},
    { path: 'profil',   component: PFFprofilComponent},
    { path: 'logout',   component: PFFlogoutComponent},

    //path vue Admin
    { path: 'adminGestionComptes',   component:AdminGestionComptesComponent},
    { path: 'adminStats',   component:AdminStatsComponent},
    { path: 'adminRecla',   component:AdminReclaComponent},
    //path vue RespAgence
    { path: 'gestionChauffeurTaxi',     component: GestionChauffeurTaxiComponent},
    { path: 'gestionOffres', component:GestionOffresComponent},
    { path: 'validationReservation/:idReservation',   component: ValidationResaComponent},
    { path: 'gestionFactures', component:GestionFacturesComponent},
    { path: 'gestionReclamations', component:GestionReclamationsComponent},
    //path vue Chauffeur
    { path: 'chauffCourses', component:ChauffCoursesComponent},
    { path: 'chauffValCourses', component:ChauffValCoursesComponent},
    { path: 'chauffAvis', component:ChauffAvisComponent},
    //path vue Client
    { path: 'clientReservation',   component:ClientReservationComponent},
    { path: 'clientAgenceEtChauff',   component:ClientAgenceEtChauffComponent},
    { path: 'clientOffres',   component:ClientOffresComponent},
    { path: 'clientCourses',   component:ClientCoursesComponent},
];
