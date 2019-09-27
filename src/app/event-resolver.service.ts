import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event-services.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any>{

  constructor(private eventSvc: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventSvc.getEvent(route.params['id']);
  }
}
