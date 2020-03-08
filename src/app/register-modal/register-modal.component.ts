import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private authService: AuthService,
    private alertify: AlertifyService) {}

  @ViewChild('template') elementView: TemplateRef<any>;
  user: any = {};

  ngOnInit() {
  }

  ShowComponent() {
    this.modalRef = this.modalService.show(this.elementView);
  }

  register(){
    this.authService.register(this.user).subscribe(() => {
      this.alertify.success('Registration successfull');
      this.modalRef.hide();
    }, error => {
      this.alertify.error(error);
    });
  }

  login(){
    this.authService.login(this.user).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      // this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message("Logged out!");
    // this.router.navigate(['/home']);
  }
}
