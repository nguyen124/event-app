import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../shared/user.model';
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
  constructor(public authSvc: AuthService, private evenSvc: EventService) { }

  ngOnInit() {

  }

  searchSessions(term) {
    this.evenSvc.searchSessions(term).subscribe(sessions => {
      this.foundSessions = sessions;
    })
  }
}
