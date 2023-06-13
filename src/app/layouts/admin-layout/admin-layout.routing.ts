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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                        component: DashboardComponent },
    { path: 'user-profile',                     component: UserProfileComponent },
    { path: 'tables',                           component: TablesComponent },
    { path: 'icons',                            component: IconsComponent },
    { path: 'maps',                             component: MapsComponent },
    { path: 'utilisateur',                      component: UtilisateurComponent},
    { path: 'course',                           component: CourseComponent},
    { path: 'editCourse/:idCourse',             component: EditCourseComponent},
    { path: 'reclamation',                      component: ReclamationComponent},
    { path: 'editReclamation/:idReclamation',   component: EditReclamationComponent}

];
