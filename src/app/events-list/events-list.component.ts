import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-services.service';
import { ToastrService } from '../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventSvc: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  handleClick(eventName) {
    this.toastr.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

}
