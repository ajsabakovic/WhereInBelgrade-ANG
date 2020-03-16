/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FestivalKategorijaComponent } from './festival-kategorija.component';

describe('DogadjajKomponenteComponent', () => {
  let component: FestivalKategorijaComponent;
  let fixture: ComponentFixture<FestivalKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
