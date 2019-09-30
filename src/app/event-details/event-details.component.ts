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
  sortBy: string = 'name'

  constructor(private eventSvc: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  saveNewSession(session: ISession) {
    this.event.eventSessions.push(session);
    this.eventSvc.addSession(this.event.id, session).subscribe(() => { });
    this.addMode = false;
  }
}
