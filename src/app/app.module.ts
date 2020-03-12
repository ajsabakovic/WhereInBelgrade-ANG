import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BluePostComponent } from './blue-post/blue-post.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInteceptorProvider } from './_services/error.interceptor';
import { BluePostsComponent } from './blue-posts/blue-posts.component';
import { PinkPostsComponent } from './pink-posts/pink-posts.component';
import { PinkPostComponent } from './pink-post/pink-post.component';
import { YellowPostComponent } from './yellow-post/yellow-post.component';
import { YellowPostsComponent } from './yellow-posts/yellow-posts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { appRouter } from './routes';
import { FooterComponent } from './footer/footer.component';
import { ContactJumbotronComponent } from './contact-jumbotron/contact-jumbotron.component';
import { AboutJumbotronComponent } from './about-jumbotron/about-jumbotron.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      JumbotronComponent,
      BluePostComponent,
      RegisterModalComponent,
      BluePostsComponent,
      PinkPostsComponent,
      PinkPostComponent,
      YellowPostComponent,
      YellowPostsComponent,
      HomeComponent,
      EventsComponent,
      AboutComponent,
      ContactComponent,
      EventsComponent,
      FooterComponent,
      ContactJumbotronComponent,
      AboutJumbotronComponent
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
