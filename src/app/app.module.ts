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
      YellowPostsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      ModalModule.forRoot(),
      CollapseModule.forRoot(),
      BsDropdownModule.forRoot()
   ],
   providers: [
      ErrorInteceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
