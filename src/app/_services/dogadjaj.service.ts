import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Dogadjaj } from '../_model/dogadjaj';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_model/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogadjajService {
  baseUrl = environment.apiUrl + '/dogadjaj/';
  constructor(private http: HttpClient) { }

  getAllEvents(page?, itemsPerPage?): Observable<PaginatedResult<Dogadjaj[]>> {
    const paginatedResult: PaginatedResult<Dogadjaj[]> = new PaginatedResult<Dogadjaj[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null){
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<Dogadjaj[]>(this.baseUrl, {observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('Pagination') != null) {
          paginatedResult.paginaton = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
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
