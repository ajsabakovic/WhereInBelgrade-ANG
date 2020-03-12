import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Dogadjaj } from '../_model/dogadjaj';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogadjajService {
baseUrl = environment.apiUrl + '/dogadjaj/';
constructor(private http: HttpClient) { }

getAllEvents(): Observable<Dogadjaj[]> {
  return this.http.get<Dogadjaj[]>(this.baseUrl);
}

getEventsByCategory(kategorija): Observable<Dogadjaj[]>{
  return this.http.get<Dogadjaj[]>(this.baseUrl + 'kategorija/' + kategorija);
}

getEventsById(id): Observable<Dogadjaj> {
  return this.http.get<Dogadjaj>(this.baseUrl + id);
}

}
