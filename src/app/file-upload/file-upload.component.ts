import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  file: File | null = null;
  onChange: Function;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList){
    const file = event && event.item(0);
    this.file = file;
  }

  constructor(private host: ElementRef<HTMLInputElement>) { }


}
