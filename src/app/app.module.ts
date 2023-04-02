import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/pages/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/pages/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { ReservationFormComponent } from './components/pages/reservation-form/reservation-form.component';
import { RessourcesComponent } from './components/pages/ressources/ressources.component';
import { SearchComponent } from './components/partials/search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';

import { LoaderComponent } from './components/partials/loader/loader.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { ListComponent } from './components/pages/list/list.component';
import { AddResComponent } from './components/pages/admin/add-res/add-res.component';
import { EditResComponent } from './components/pages/admin/edit-res/edit-res.component';
import { DeletResComponent } from './components/pages/admin/delet-res/delet-res.component';
import { ResComponent } from './components/pages/admin/res/res.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    FooterComponent,
    ReservationFormComponent,
    RessourcesComponent,
    SearchComponent,
    UserProfileComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    LoaderComponent,
    CalendarComponent,
    ListComponent,
    AddResComponent,
    EditResComponent,
    DeletResComponent,
    ResComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    // * MATERIAL IMPORTS
    MatPaginatorModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}