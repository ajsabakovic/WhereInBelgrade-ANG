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

getEventsByCategoryMainPage(kategorija: string): Observable<Dogadjaj[]>{
  return this.http.get<Dogadjaj[]>(this.baseUrl + 'pocetna/' + kategorija);
}

getEventsByCategory(kategorija): Observable<Dogadjaj[]>{
  return this.http.get<Dogadjaj[]>(this.baseUrl + 'kategorija/' + kategorija);
}

  getEventsById(id): Observable<Dogadjaj> {
    return this.http.get<Dogadjaj>(this.baseUrl + id);
  }

  getEventsByIdLogged(id, userId){
    return this.http.get<Dogadjaj>(this.baseUrl + id + '/user/' + userId);
  }


  deleteEvent(id: any): Observable<Dogadjaj[]> {
    console.log(this.baseUrl + id);
    return this.http.delete<Dogadjaj[]>(this.baseUrl + id);
  }

  insertEvent(userId: number, data: FormData) {
    return this.http.post(this.baseUrl + 'user/' + userId, data);
  }

  editEvent(userId: number, data: FormData) {
    return this.http.put(this.baseUrl + 'user/' + userId, data);
  }

}
