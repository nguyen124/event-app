import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-services.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(private eventSvc: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventSvc.getEvent(this.activatedRoute.snapshot.params['id']);
  }

}
