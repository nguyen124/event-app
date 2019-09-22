import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-services.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { Toastr } from '../shared/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventSvc: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

}
