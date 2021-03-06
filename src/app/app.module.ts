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
import { DurationPipe } from './shared/duration.pipe';
import { TOASTR_TOKEN, Toastr, JQ_TOKEN } from './shared/shared-include';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { TriggerModalDirective } from './common/trigger-modal.directive';
import { HttpClientModule } from '@angular/common/http';

let toastr: Toastr = window['toastr'];
let jQuery: Toastr = window['$'];

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
    DurationPipe,
    SimpleModalComponent,
    TriggerModalDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventRouteActivatorService,
    EventRouteDeactivatorService,
    CustomValidateService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }],
  bootstrap: [AppComponent]
})
export class AppModule { }
