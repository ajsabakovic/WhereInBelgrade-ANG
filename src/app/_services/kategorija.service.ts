import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Kategorija } from '../_model/kategorija';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KategorijaService {
baseUrl = environment.apiUrl + '/kategorija/';
constructor(private http: HttpClient) { }

getAllCategories(): Observable<Kategorija[]>{
  return this.http.get<Kategorija[]>(this.baseUrl);
}


}
