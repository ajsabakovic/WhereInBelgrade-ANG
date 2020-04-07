import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactEmail } from '../_model/ContactEmail';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {
  baseUrl = 'http://localhost:5000/api/contactemail';

  constructor(private http: HttpClient) { }

  sendMail(email: ContactEmail) {
      if(email === undefined) {
        console.log('Undefined email');
      }
      return this.http.post(this.baseUrl, email);
   }
}
