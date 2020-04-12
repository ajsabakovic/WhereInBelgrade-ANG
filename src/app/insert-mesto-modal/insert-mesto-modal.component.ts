import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MestoService } from '../_services/mesto.service';
import { Mesto } from '../_model/mesto';
import { AlertifyService } from '../_services/alertify.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-insert-mesto-modal',
  templateUrl: './insert-mesto-modal.component.html',
  styleUrls: ['./insert-mesto-modal.component.css']
})
export class InsertMestoModalComponent implements OnInit {
  @Output() reloadMesta = new EventEmitter();
  insertForm: FormGroup;
  mesto: Mesto;
  modalRef: BsModalRef;
  @ViewChild('template') elementView: TemplateRef<any>;

  constructor(private fb: FormBuilder, private mestoService: MestoService,
    private alertify: AlertifyService, private modalService: BsModalService) { }

  ngOnInit() {
    this.createForm();
  }


  showComponent() {
    this.modalRef = this.modalService.show(this.elementView);
  }

  createForm(){
    this.insertForm = this.fb.group({
      naziv: ['', Validators.required],
      ulica: ['', Validators.required],
      brojUlice: ['', Validators.required],
      sprat: [''],
      brojStana: ['']
    });
  }

  insertMesto(){
    if(this.insertForm.valid){
      this.mesto = Object.assign({}, this.insertForm.value);
      this.mestoService.insertMesto(this.mesto).subscribe(()=>{
        this.alertify.success('Uspesno dodato mesto!');
        this.modalRef.hide();
        this.reloadMesta.emit(true);
      }, error => {
        this.alertify.error(error);
      });
    }
  }
  
}
