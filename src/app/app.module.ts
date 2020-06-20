// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Services
import { CookieService } from 'ngx-cookie-service';

// Components
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';

import { HeaderComponent } from './components/header/header.component';

import { ProfessionnelComponent } from './components/professionnel/professionnel.component';
import { CvComponent } from './components/cv/cv.component';
import { FormationComponent } from './components/formation/formation.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SavoirComponent } from './components/savoir/savoir.component';
import { ProjetsComponent } from './components/projets/projets.component';

import { PersonnelComponent } from './components/personnel/personnel.component';

// Routes
const appRoutes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'professionnel', component: ProfessionnelComponent},
  {path: 'cv', component: CvComponent},
  {path: 'formation', component: FormationComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'savoir-faire', component: SavoirComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'personnel', component: PersonnelComponent}
];

// NgModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    ProfessionnelComponent,
    PersonnelComponent,
    CvComponent,
    FormationComponent,
    ExperiencesComponent,
    SavoirComponent,
    ProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
