import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvent, ISession } from './shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>("/api/events")
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>("/api/events/" + id)
      .pipe(catchError(this.handleError<IEvent>('getEvents')));
  }

  saveEvent(event) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<IEvent>("/api/events/", event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvents')));
  }

  searchSessions(term: any): Observable<ISession[]> {
    return this.http.get<ISession[]>("/api/sessions/search?search=" + term)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

}