import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-jumbotron',
  templateUrl: './category-jumbotron.component.html',
  styleUrls: ['./category-jumbotron.component.css']
})
export class CategoryJumbotronComponent implements OnInit {
  @Input() kategorija: any;

  constructor() { }

  ngOnInit() {
  }

}
