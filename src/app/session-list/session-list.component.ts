import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];
  constructor() { }

  ngOnInit() {

  }


  ngOnChanges() {
    if (this.sessions) {
      this.visibleSessions = this.sessions.slice(0);
      this.filterSessions();
      this.sortSessions();
    }
  }

  sortSessions() {
    this.visibleSessions = this.visibleSessions.sort((sess1, sess2) => {
      if (sess1[this.sortBy] > sess2[this.sortBy]) {
        return 1;
      } else if (sess1[this.sortBy] === sess2[this.sortBy]) {
        return 0;
      }
      return -1;
    });
  }

  filterSessions() {
    if (this.filterBy !== 'all') {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === this.filterBy;
      })
    }
  }
}
