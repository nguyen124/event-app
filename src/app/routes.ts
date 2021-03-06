import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteDeactivatorService } from './event-route-deactivator.service';
import { EventListResolverService } from './event-list-resolver.service';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EventResolverService } from './event-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteDeactivatorService] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './profile/user.module#UserModule' }
]