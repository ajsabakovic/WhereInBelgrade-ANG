import { Component, OnInit } from '@angular/core';
import { ContactEmailService } from '../_services/contactEmail.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: any = {};

  constructor(private emailService: ContactEmailService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  sendEmail(){
    this.email.title = '';
    this.emailService.sendMail(this.email).subscribe(() => {
      this.alertify.success('Uspešno ste poslali poruku!');
    }, error => {
      this.alertify.error(error);
    });
  }
}
