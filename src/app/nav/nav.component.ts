import { Component, OnInit, ContentChild, ViewChild} from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  entryComponents:[
    RegisterModalComponent
  ]
})
export class NavComponent implements OnInit {
  // register: RegisterModalComponent;
  isCollapsed = true;
  @ViewChild(RegisterModalComponent) register;
  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }
  ngOnInit() {
  }

  openModalWithComponent(provera: boolean) {
    this.register.provera = provera;
    this.register.ShowComponent();
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.authService.decodedToken = null;
    this.alertify.message('Logged out!');
    this.router.navigate(['/home']);
  }

  isAdmin() {
    const admin = this.authService.isAdmin();
    if(admin){
      return true;
    }
    return false;
  }

}
