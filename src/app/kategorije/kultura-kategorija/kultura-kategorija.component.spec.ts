/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KulturaKategorijaComponent } from './kultura-kategorija.component';

describe('KulturaKategorijaComponent', () => {
  let component: KulturaKategorijaComponent;
  let fixture: ComponentFixture<KulturaKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KulturaKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KulturaKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
