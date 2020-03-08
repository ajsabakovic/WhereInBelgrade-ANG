import { Component, OnInit, ContentChild, ViewChild} from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

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
  constructor() { }
  ngOnInit() {
  }

  openModalWithComponent() {
    this.register.ShowComponent();
  }
}
