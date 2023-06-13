import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UtilisateurComponent } from '../../PFFcomposants/utilisateur/utilisateur.component';
import { EditUtilisateurComponent } from '../../PFFedit/edit-utilisateur/edit-utilisateur.component';
import { EditChauffeurComponent } from '../../PFFedit/edit-chauffeur/edit-chauffeur.component';
import { ChauffeurComponent } from '../../PFFcomposants/chauffeur/chauffeur.component';
import { TaxiComponent } from 'src/app/PFFcomposants/taxi/taxi.component';
import { AgenceComponent } from 'src/app/PFFcomposants/agence/agence.component';
import { EditTaxiComponent } from 'src/app/PFFedit/edit-taxi/edit-taxi.component';
import { EditAgenceComponent } from 'src/app/PFFedit/edit-agence/edit-agence.component';


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
    { path: 'taxi', component: TaxiComponent},
    { path: 'editTaxi/:id',   component:EditTaxiComponent},
    { path: 'agence', component: AgenceComponent},
    { path: 'editAgence/:id',   component:EditAgenceComponent}

];
