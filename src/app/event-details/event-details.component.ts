import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-services.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  
  constructor(private eventSvc: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventSvc.getEvent(this.activatedRoute.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventSvc.updateEvent(this.event);
    this.addMode = false;
  }
}
