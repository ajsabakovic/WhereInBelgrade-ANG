/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorodicaKategorijaComponent } from './porodica-kategorija.component';

describe('PorodicaKategorijaComponent', () => {
  let component: PorodicaKategorijaComponent;
  let fixture: ComponentFixture<PorodicaKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorodicaKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorodicaKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
