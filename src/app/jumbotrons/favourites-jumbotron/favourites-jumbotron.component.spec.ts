/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavouritesJumbotronComponent } from './favourites-jumbotron.component';

describe('FavouritesJumbotronComponent', () => {
  let component: FavouritesJumbotronComponent;
  let fixture: ComponentFixture<FavouritesJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
