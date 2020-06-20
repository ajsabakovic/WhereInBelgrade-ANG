import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './dogadjaji/event-details/event-details.component';
import { CategoryEventsComponent } from './dogadjaji/category-events/category-events.component';
import { LikedEventsComponent } from './dogadjaji/liked-events/liked-events.component';
import { AdminEventsComponent } from './adminEvents/adminEvents.component';
import { InsertEventComponent } from './insert-event/insert-event.component';
import { InsertEventResolver } from './_resolvers/insert-event.resolver';
import { MestoInsertResolver } from './_resolvers/mesto-insert-event.resolver';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditEventResolver } from './_resolvers/edit-event.resolver';
import { LikedEventsResolver } from './_resolvers/liked-events.resolver';
import { DogadjajKategorijeResolver } from './_resolvers/dogadjaj-kategorije.resolver';
import { EventsResolver } from './_resolvers/events.resolver';
import { AuthGuard } from './_guards/auth.guard';


export const appRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'events', component: EventsComponent, resolve: {events: EventsResolver}},
    {path: 'events/category/:kategorija', component: CategoryEventsComponent, resolve: {events: DogadjajKategorijeResolver}},
    {path: 'events/favourites', component: LikedEventsComponent, runGuardsAndResolvers: 'always',
            resolve: {events: LikedEventsResolver}, canActivate: [AuthGuard]},
    {path: 'events/admin', component: AdminEventsComponent, runGuardsAndResolvers: 'always',  canActivate: [AuthGuard]},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: 'events/new/insert', component: InsertEventComponent,
        resolve: {kategorije: InsertEventResolver, mesta: MestoInsertResolver}, runGuardsAndResolvers: 'always', canActivate:[AuthGuard]},
    {path: 'events/edit/:id', component: EditEventComponent, resolve: {dogadjaj: EditEventResolver,
        kategorije: InsertEventResolver, mesta: MestoInsertResolver}, runGuardsAndResolvers: 'always', canActivate: [AuthGuard]},
    {path: 'events/new/insert', component: InsertEventComponent, runGuardsAndResolvers: 'always',
            resolve: {kategorije: InsertEventResolver, mesta: MestoInsertResolver}, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]