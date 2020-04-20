import { Component, OnInit, ContentChild, ViewChild} from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
  }

  openModalWithComponent(provera: boolean) {
    this.register.provera = provera;
    this.register.ShowComponent();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.authService.decodedToken = null;
    this.alertify.message('Logged out!');
    const url = this.route.snapshot['_routerState'].url;

    // dodati sve url-ove odakle treba da se izadje
    if ( url === '/events/new/insert'
      || url === '/events/favourites'
      || url === '/events/admin'
      || url.includes('/events/edit/') ) {
      this.router.navigate(['/home']);
    }
  }

  isAdmin() {
    const admin = this.authService.isAdmin();
    if (admin) {
      return true;
    }
    return false;
  }

}
