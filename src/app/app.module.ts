import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
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
import { PinkPostFestivaliComponent } from './dogadjaji/festivali/pink-post-festivali/pink-post-festivali.component';
import { PinkPostsFestivaliComponent } from './dogadjaji/festivali/pink-posts-festivali/pink-posts-festivali.component';
import { YellowPostKulturaComponent } from './dogadjaji/kultura/yellow-post-kultura/yellow-post-kultura.component';
import { YellowPostsKulturaComponent } from './dogadjaji/kultura/yellow-posts-kultura/yellow-posts-kultura.component';
import { BluePostSportComponent } from './dogadjaji/sport/blue-post-sport/blue-post-sport.component';
import { BluePostsSportComponent } from './dogadjaji/sport/blue-posts-sport/blue-posts-sport.component';
import { PinkPostPorodicaComponent } from './dogadjaji/porodica/pink-post-porodica/pink-post-porodica.component';
import { PinkPostsPorodicaComponent } from './dogadjaji/porodica/pink-posts-porodica/pink-posts-porodica.component';

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
      PinkPostFestivaliComponent,
      PinkPostsFestivaliComponent,
      YellowPostKulturaComponent,
      YellowPostsKulturaComponent,
      BluePostSportComponent,
      BluePostsSportComponent,
      PinkPostPorodicaComponent,
      PinkPostsPorodicaComponent
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
      RouterModule.forRoot(appRouter)
   ],
   providers: [
      ErrorInteceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
