import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../event-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(public authSvc: AuthService, private eventSvc: EventService) { }

  ngOnInit() {

  }

  searchSessions(term) {
    this.eventSvc.searchSessions(term).subscribe(sessions => {
      this.foundSessions = sessions;
    })
  }
}
