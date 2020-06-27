import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dogadjaj } from '../_model/dogadjaj';
import { PaginatedResult } from '../_model/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseUrl = environment.apiUrl + '/kategorija/';
  constructor(private http: HttpClient) { }

  getEventsByCategory(kategorija: any, page?, itemsPerPage?, criteria?): Observable<PaginatedResult<Dogadjaj[]>>{
    const paginatedResult: PaginatedResult<Dogadjaj[]> = new PaginatedResult<Dogadjaj[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null){
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
      params = params.append('criteria', criteria);
    }

    return this.http.get<Dogadjaj[]>(this.baseUrl + kategorija + '/dogadjaji', {observe: 'response', params})
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

  // promeni metodu u API controlleru
  getAll(page?, itemsPerPage?, criteria?): Observable<PaginatedResult<Dogadjaj[]>>{
    const paginatedResult: PaginatedResult<Dogadjaj[]> = new PaginatedResult<Dogadjaj[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null){
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
      params = params.append('criteria', criteria);
    }

    return this.http.get<Dogadjaj[]>(this.baseUrl + 'dogadjaji', {observe: 'response', params})
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

  getAllFull(): Observable<Dogadjaj[]>{
    return this.http.get<Dogadjaj[]>(this.baseUrl + 'dogadjaji/full');
  }

  getEventById(id: any): Observable<Dogadjaj>{
    return this.http.get<Dogadjaj>(this.baseUrl + '/dogadjaji/'  + id);
  }

}
