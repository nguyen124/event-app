import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-services.service';
import { ToastrService } from '../shared/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events
  constructor(private eventSvc: EventService, private toastr: ToastrService) { }

  handleClick(eventName) {
    this.toastr.success(eventName);
  }
  ngOnInit() {
    this.events = this.eventSvc.getEvents();
  }

}
