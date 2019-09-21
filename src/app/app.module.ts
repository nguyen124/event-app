import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventRouteDeactivatorService } from './event-route-deactivator.service';
import { Error404Component } from './errors/404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component'; // need to include this even not use
import { CustomValidateService } from './shared/restricted-words.validator';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventRouteActivatorService, EventRouteDeactivatorService, CustomValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
