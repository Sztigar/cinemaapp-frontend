import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {ScreeningsComponent} from './components/screenings/screenings.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


import {MatListModule} from '@angular/material/list';
import {ScreeningItemComponent} from './components/screening-item/screening-item.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from './components/map/map.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MoviesItemComponent} from './components/movies-item/movies-item.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {SeatsComponent} from './components/seats/seats.component';
import {MatStepperModule} from '@angular/material/stepper';
import {TicketService} from './services/ticket.service';
import {MatTabsModule} from '@angular/material/tabs';
import {ConfirmTicketComponent} from './components/confirm-ticket/confirm-ticket.component';
import {MatSelectModule, MatTableModule} from '@angular/material';
import {RegisterService} from './services/register.service';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './services/auth-interceptor.service';
import {MoviesService} from './services/movies.service';
import {ProfileComponent} from './components/profile/profile.component';
import {UserService} from './services/user.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TicketItemComponent} from './components/ticket-item/ticket-item.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {PaymentComponent} from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScreeningsComponent,
    ScreeningItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapComponent,
    MoviesComponent,
    MoviesItemComponent,
    SeatsComponent,
    ConfirmTicketComponent,
    ProfileComponent,
    DashboardComponent,
    TicketItemComponent,
    PaymentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    CommonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPasswordStrengthModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBTxVO8hHyb1wRwNIFAgS_JYLolrPli_nM'}),
    MatStepperModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    NgxPayPalModule
  ],
  providers: [
    GoogleMapsAPIWrapper,
    UserService,
    TicketService,
    RegisterService,
    MoviesService,
    TicketService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
