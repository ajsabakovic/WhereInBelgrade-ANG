import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mesto } from '../_model/mesto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MestoService {
baseUrl = environment.apiUrl + '/mesto/';

constructor(private http: HttpClient) { }

getAllMesta(): Observable<Mesto[]> {
  return this.http.get<Mesto[]>(this.baseUrl);
}

findMesto(criteria: string) {
  return this.http.get<Mesto[]>(this.baseUrl + 'find/' + criteria);
}

getMesto(id: number) {
  return this.http.get<Mesto>(this.baseUrl + id);
}

insertMesto(mesto: Mesto) {
  return this.http.post(this.baseUrl, mesto);
}

}
