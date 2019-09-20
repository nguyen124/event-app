import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventRouteDeactivatorService } from './event-route-deactivator.service';
import { EventListResolverService } from './event-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteDeactivatorService] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]