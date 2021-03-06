import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:5000/api/auth/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  admin: boolean;

constructor(private http: HttpClient) { }

login(model: any){
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('admin', JSON.stringify(user.admin));
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        this.admin = JSON.parse(user.admin);
        console.log(this.decodedToken);
      }
    })
  )
}

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token); // vraca true ako token nije expired
}

isAdmin(){
  const admin: boolean = JSON.parse(localStorage.getItem('admin'));
  return admin;
}

}
