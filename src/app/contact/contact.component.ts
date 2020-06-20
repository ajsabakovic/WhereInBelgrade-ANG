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
      if(this.email.name == "" || this.email.surname == "" || this.email.title == "" || this.email.body == "" || this.email.email=="") 
        this.alertify.error('Morate uneti sve podatke!');
      else{
        this.alertify.error('Došlo je do greške prilikom slanja Vaše poruke!');
      }
    });
  }
}
