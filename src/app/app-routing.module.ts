import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScreeningsComponent} from './components/screenings/screenings.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from './components/map/map.component';
import {MoviesComponent} from './components/movies/movies.component';
import {SeatsComponent} from './components/seats/seats.component';
import {ConfirmTicketComponent} from './components/confirm-ticket/confirm-ticket.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PaymentComponent} from './components/payment/payment.component';


const routes: Routes = [
  {
    path: 'screenings',
    component: ScreeningsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'seats',
    component: SeatsComponent,
  },
  {
    path: 'confirm',
    component: ConfirmTicketComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
