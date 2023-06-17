import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { FactureComponent } from './PFFcomposants/facture/facture.component';
import { GestionChauffeurTaxiComponent } from './PFFcomposants/gestion-chauffeur-taxi/gestion-chauffeur-taxi.component';
import { GestionOffresComponent } from './PFFcomposants/gestion-offres/gestion-offres.component';
import { GestionReservationsComponent } from './PFFcomposants/gestion-reservations/gestion-reservations.component';
import { GestionFacturesComponent } from './PFFcomposants/gestion-factures/gestion-factures.component';
import { GestionReclamationsComponent } from './PFFcomposants/gestion-reclamations/gestion-reclamations.component';
import { GestionVehiculesComponent } from './PFFcomposants/gestion-vehicules/gestion-vehicules.component';
import { ValidationResaComponent } from './PFFcomposants/validation-resa/validation-resa.component';
import { StatistiquesAgenceComponent } from './PFFcomposants/statistiques-agence/statistiques-agence.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
