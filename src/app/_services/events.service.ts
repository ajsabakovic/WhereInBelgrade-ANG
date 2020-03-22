import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dogadjaj } from '../_model/dogadjaj';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseUrl = environment.apiUrl + '/kategorija/';
  constructor(private http: HttpClient) { }

  getEventsByCategory(kategorija: any): Observable<Dogadjaj[]>{
    return this.http.get<Dogadjaj[]>(this.baseUrl + kategorija + '/dogadjaji');
  }

  // promeni metodu u API controlleru
  getAll(): Observable<Dogadjaj[]>{
    return this.http.get<Dogadjaj[]>(this.baseUrl + 'dogadjaji');
  }
}
