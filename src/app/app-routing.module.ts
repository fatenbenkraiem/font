import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ReservationFormComponent } from './components/pages/reservation-form/reservation-form.component';
import { RessourcesComponent } from './components/pages/ressources/ressources.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search/:searchTerm', component: HomeComponent },
  
  {path: 'res',component:ReservationFormComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'ressources' , component: RessourcesComponent},
  {path:'calendar', component:CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}