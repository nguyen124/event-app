import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';

@Injectable({
  providedIn: 'root'
})
export class EventRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {

  constructor() { }

  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
  }

}
