import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dogadjaj } from '../_model/dogadjaj';

@Injectable({
  providedIn: 'root'
})
export class LikeEventService {
  baseUrl = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) { }

  getAllLikedEvents(userId): Observable<Dogadjaj[]>{
    return this.http.get<Dogadjaj[]>(this.baseUrl + userId + '/likes');
  }

  likeEvent(userId, eventId){
    return this.http.post(this.baseUrl + userId + '/likes/' + eventId, {});
  }

  dislikeEvent(userId, eventId){
    console.log(this.baseUrl + userId + '/likes/' + eventId);
    return this.http.delete(this.baseUrl + userId + '/likes/' + eventId);
  }

}
