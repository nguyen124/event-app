import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event-services.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any>{

  constructor(private eventSvc: EventService) {

  }

  resolve() {
    return this.eventSvc.getEvents();
  }
}
