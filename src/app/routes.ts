import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './dogadjaji/event-details/event-details.component';

export const appRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'events', component: EventsComponent},
    {path : 'events/:id', component: EventDetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]