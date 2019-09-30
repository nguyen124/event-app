import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../event-services.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: IEvent;
  constructor(private router: Router, private eventSvc: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventSvc.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }
}
