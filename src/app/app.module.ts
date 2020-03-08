import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BluePostComponent } from './blue-post/blue-post.component';
import { BluePostsComponent } from './blue-posts/blue-posts.component';
import { PinkPostsComponent } from './pink-posts/pink-posts.component';
import { PinkPostComponent } from './pink-post/pink-post.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      JumbotronComponent,
      BluePostComponent,
      BluePostsComponent,
      PinkPostsComponent,
      PinkPostComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
