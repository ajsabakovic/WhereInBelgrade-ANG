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
export class LikeEventService {
  baseUrl = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) { }

  getAllLikedEvents(userId, page?, itemsPerPage?): Observable<PaginatedResult<Dogadjaj[]>>{
    const paginatedResult: PaginatedResult<Dogadjaj[]> = new PaginatedResult<Dogadjaj[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null){
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<Dogadjaj[]>(this.baseUrl + userId + '/likes', {observe: 'response', params})
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

  likeEvent(userId, eventId){
    return this.http.post(this.baseUrl + userId + '/likes/' + eventId, {});
  }

  dislikeEvent(userId, eventId){
    console.log(this.baseUrl + userId + '/likes/' + eventId);
    return this.http.delete(this.baseUrl + userId + '/likes/' + eventId);
  }

}
