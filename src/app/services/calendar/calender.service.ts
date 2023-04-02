import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private eventsUrl = 'http://localhost:8000/api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get<any>(this.eventsUrl);
  }
}
