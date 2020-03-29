import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ModalModule, CollapseModule, BsDropdownModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotrons/jumbotron/jumbotron.component';
import { BluePostZabavaComponent } from './dogadjaji/zabava/blue-post-zabava/blue-post-zabava.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInteceptorProvider } from './_services/error.interceptor';
import {  BluePostsZabavaComponent } from './dogadjaji/zabava/blue-posts-zabava/blue-posts-zabava.component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { appRouter } from './routes';
import { FooterComponent } from './footer/footer.component';
import { ContactJumbotronComponent } from './jumbotrons/contact-jumbotron/contact-jumbotron.component';
import { PinkPostFestivaliComponent } from './dogadjaji/festivali/pink-post-festivali/pink-post-festivali.component';
import { PinkPostsFestivaliComponent } from './dogadjaji/festivali/pink-posts-festivali/pink-posts-festivali.component';
import { YellowPostKulturaComponent } from './dogadjaji/kultura/yellow-post-kultura/yellow-post-kultura.component';
import { YellowPostsKulturaComponent } from './dogadjaji/kultura/yellow-posts-kultura/yellow-posts-kultura.component';
import { BluePostSportComponent } from './dogadjaji/sport/blue-post-sport/blue-post-sport.component';
import { BluePostsSportComponent } from './dogadjaji/sport/blue-posts-sport/blue-posts-sport.component';
import { PinkPostPorodicaComponent } from './dogadjaji/porodica/pink-post-porodica/pink-post-porodica.component';
import { PinkPostsPorodicaComponent } from './dogadjaji/porodica/pink-posts-porodica/pink-posts-porodica.component';
import { AboutJumbotronComponent } from './jumbotrons/about-jumbotron/about-jumbotron.component';
import { FestivalKategorijaComponent } from './kategorije/festival-kategorija/festival-kategorija.component';
import { CustomDateComponent } from './custom-date/custom-date.component';
import { PostoviComponent } from './postovi/postovi.component';
import { EventDetailsComponent } from './dogadjaji/event-details/event-details.component';
import { KategorijeComponent } from './dogadjaji/kategorije/kategorije.component';
import { SportKategorijaComponent } from './kategorije/sport-kategorija/sport-kategorija.component';
import { PorodicaKategorijaComponent } from './kategorije/porodica-kategorija/porodica-kategorija.component';
import { KulturaKategorijaComponent } from './kategorije/kultura-kategorija/kultura-kategorija.component';
import { ZabavaKategorijaComponent } from './kategorije/zabava-kategorija/zabava-kategorija.component';
import { EventsJumbotronComponent } from './jumbotrons/events-jumbotron/events-jumbotron.component';
import { WholeEventComponent } from './dogadjaji/whole-event/whole-event.component';
import { DatePipe } from '@angular/common';
import { DogadjajKategorijeComponent } from './dogadjaji/dogadjajKategorije/dogadjajKategorije.component';
import { AlertifyService } from './_services/alertify.service';
import { JwtModule } from '@auth0/angular-jwt';
import { CategoryJumbotronComponent } from './jumbotrons/category-jumbotron/category-jumbotron.component';
import { CategoryEventsComponent } from './dogadjaji/category-events/category-events.component';
import { KategorijeObojenoComponent } from './dogadjaji/kategorije-obojeno/kategorije-obojeno.component';

export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      JumbotronComponent,
      BluePostZabavaComponent,
      RegisterModalComponent,
      BluePostsZabavaComponent,
      HomeComponent,
      EventsComponent,
      AboutComponent,
      ContactComponent,
      EventsComponent,
      FooterComponent,
      ContactJumbotronComponent,
      PinkPostFestivaliComponent,
      PinkPostsFestivaliComponent,
      YellowPostKulturaComponent,
      YellowPostsKulturaComponent,
      BluePostSportComponent,
      BluePostsSportComponent,
      PinkPostPorodicaComponent,
      PinkPostsPorodicaComponent,
      AboutJumbotronComponent,
      FestivalKategorijaComponent,
      CustomDateComponent,
      CustomDateComponent,
      PostoviComponent,
      EventDetailsComponent,
      KategorijeComponent,
      SportKategorijaComponent,
      PorodicaKategorijaComponent,
      KulturaKategorijaComponent,
      ZabavaKategorijaComponent,
      EventsJumbotronComponent,
      WholeEventComponent,
      DogadjajKategorijeComponent,
      CategoryJumbotronComponent,
      CategoryEventsComponent,
      KategorijeObojenoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      ModalModule.forRoot(),
      CollapseModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRouter, {onSameUrlNavigation: 'reload'}),
      BsDatepickerModule.forRoot(),
      JwtModule.forRoot({
         config:{
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes:['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      ErrorInteceptorProvider,
      AlertifyService,
      [DatePipe]
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
